import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MEN_PLATAFORMAS_EXTERNAS } from "../data/men-referencias";

const GRADOS = ["1-3", "4-5", "6-7", "8-9", "10-11"] as const;

const TIPOS_PLATAFORMA = [
  "programacion",
  "contenido",
  "herramienta",
  "comunidad",
] as const;

export function registerBuscarPlataformas(server: McpServer) {
  server.tool(
    "buscar_plataformas_recursos",
    "Busca plataformas y recursos externos (programación, contenido, herramientas, comunidades) filtrados por tipo y/o grupo de grados. Todas son gratuitas o con plan educativo gratuito.",
    {
      tipo: z.enum(TIPOS_PLATAFORMA).optional().describe(
        "Tipo de plataforma: programacion | contenido | herramienta | comunidad. Si se omite, muestra todas."
      ),
      grado: z.enum(GRADOS).optional().describe(
        "Grupo de grados (opcional). Si se omite, muestra plataformas para todos los grados."
      ),
    },
    async ({ tipo, grado }) => {
      let plataformas = [...MEN_PLATAFORMAS_EXTERNAS];

      if (tipo) {
        plataformas = plataformas.filter((p) => p.tipo === tipo);
      }

      if (grado) {
        plataformas = plataformas.filter((p) =>
          p.grados_recomendados.includes(grado)
        );
      }

      if (plataformas.length === 0) {
        throw new Error(
          `No se encontraron plataformas para los filtros proporcionados` +
          `${tipo ? ` (tipo: ${tipo})` : ""}` +
          `${grado ? ` (grados: ${grado})` : ""}. ` +
          `Intenta con filtros más amplios.`
        );
      }

      let md = `# Plataformas y recursos externos\n\n`;
      if (tipo) md += `**Tipo:** ${tipo}\n`;
      if (grado) md += `**Grados:** ${grado}\n`;
      md += `\nSe encontraron **${plataformas.length}** plataformas:\n\n---\n\n`;

      for (const plat of plataformas) {
        md += `## ${plat.nombre}\n\n`;
        md += `${plat.descripcion}\n\n`;
        md += `| Campo | Detalle |\n`;
        md += `|-------|---------|\n`;
        md += `| **URL** | ${plat.url} |\n`;
        md += `| **Tipo** | ${plat.tipo} |\n`;
        md += `| **Grados recomendados** | ${plat.grados_recomendados.join(", ")} |\n`;
        md += `| **Gratuita** | ${plat.gratuita ? "Sí" : "No (tiene plan educativo)"} |\n`;
        md += `\n---\n\n`;
      }

      md += `> Estas plataformas pueden complementar las herramientas sugeridas en las propuestas de subtemas.`;

      return {
        content: [{ type: "text", text: md }],
      };
    }
  );
}
