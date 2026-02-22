import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MEN_ESTRATEGIAS_DIDACTICAS } from "../data/men-referencias";

const COMPONENTE_IDS = [
  "naturaleza-tecnologia",
  "apropiacion-uso",
  "solucion-problemas",
  "tecnologia-sociedad",
] as const;

const GRADOS = ["1-3", "4-5", "6-7", "8-9", "10-11"] as const;

export function registerSugerirEstrategias(server: McpServer) {
  server.tool(
    "sugerir_estrategias_didacticas",
    "Recomienda estrategias didácticas del MEN (ABP, Design Thinking, ATE, etc.) filtradas por componente y/o grupo de grados. Incluye fases de cada estrategia.",
    {
      componente_id: z.enum(COMPONENTE_IDS).optional().describe(
        "ID del componente MEN (opcional). Si se omite, muestra estrategias para todos los componentes."
      ),
      grado: z.enum(GRADOS).optional().describe(
        "Grupo de grados (opcional). Si se omite, muestra estrategias para todos los grados."
      ),
      tema: z.string().optional().describe(
        "Tema o tópico de interés (opcional). Se usa para contextualizar las recomendaciones."
      ),
    },
    async ({ componente_id, grado, tema }) => {
      let estrategias = [...MEN_ESTRATEGIAS_DIDACTICAS];

      if (grado) {
        estrategias = estrategias.filter((e) =>
          e.grados_recomendados.includes(grado)
        );
      }

      if (componente_id) {
        estrategias = estrategias.filter((e) =>
          e.componentes_afines.includes(componente_id)
        );
      }

      if (estrategias.length === 0) {
        throw new Error(
          `No se encontraron estrategias didácticas para los filtros proporcionados` +
          `${componente_id ? ` (componente: ${componente_id})` : ""}` +
          `${grado ? ` (grados: ${grado})` : ""}. ` +
          `Intenta con filtros más amplios.`
        );
      }

      let md = `# Estrategias didácticas recomendadas\n\n`;
      if (componente_id) md += `**Componente:** \`${componente_id}\`\n`;
      if (grado) md += `**Grados:** ${grado}\n`;
      if (tema) md += `**Tema de interés:** ${tema}\n`;
      md += `\nSe encontraron **${estrategias.length}** estrategias:\n\n---\n\n`;

      for (const est of estrategias) {
        md += `## ${est.nombre}\n\n`;
        md += `${est.descripcion}\n\n`;

        md += `### Fases\n`;
        for (let i = 0; i < est.fases.length; i++) {
          md += `${i + 1}. ${est.fases[i]}\n`;
        }
        md += `\n`;

        md += `| Campo | Detalle |\n`;
        md += `|-------|---------|\n`;
        md += `| **Grados recomendados** | ${est.grados_recomendados.join(", ")} |\n`;
        md += `| **Componentes afines** | ${est.componentes_afines.join(", ")} |\n`;

        md += `\n---\n\n`;
      }

      md += `> Combina una estrategia con un subtema de \`generar_menu_subtemas\` para diseñar tu secuencia didáctica.`;

      return {
        content: [{ type: "text", text: md }],
      };
    }
  );
}
