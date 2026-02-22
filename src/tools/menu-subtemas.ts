import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SUBTEMAS_CATALOGO } from "../data/subtemas-catalogo";

const COMPONENTE_IDS = [
  "naturaleza-tecnologia",
  "apropiacion-uso",
  "solucion-problemas",
  "tecnologia-sociedad",
] as const;

const GRADOS = ["1-3", "4-5", "6-7", "8-9", "10-11"] as const;

export function registerMenuSubtemas(server: McpServer) {
  server.tool(
    "generar_menu_subtemas",
    "Muestra 2-3 propuestas de subtemas con producto sugerido, herramientas, duración y evidencias para un tema específico.",
    {
      componente_id: z.enum(COMPONENTE_IDS).describe(
        "ID del componente MEN (naturaleza-tecnologia | apropiacion-uso | solucion-problemas | tecnologia-sociedad)"
      ),
      grado: z.enum(GRADOS).describe(
        "Grupo de grados (1-3 | 4-5 | 6-7 | 8-9 | 10-11)"
      ),
      tema_id: z.string().describe(
        "ID del tema (ej: sp-67-t2). Obtenlo con consultar_temas_men."
      ),
    },
    async ({ componente_id, grado, tema_id }) => {
      const propuestas = SUBTEMAS_CATALOGO.filter(
        (p) =>
          p.componente_id === componente_id &&
          p.grupo_grados === grado &&
          p.tema_id === tema_id
      );

      if (propuestas.length === 0) {
        throw new Error(
          `No se encontraron propuestas de subtemas para componente "${componente_id}", ` +
          `grados "${grado}", tema "${tema_id}". ` +
          `Verifica que los parámetros sean válidos. Usa consultar_temas_por_componente para obtener los tema_id disponibles.`
        );
      }

      let md = `# Propuestas de subtemas\n`;
      md += `**Componente:** \`${componente_id}\` | **Grados:** ${grado} | **Tema:** \`${tema_id}\`\n\n`;
      md += `---\n\n`;

      for (const p of propuestas) {
        md += `## ${p.nombre}\n\n`;
        md += `> ${p.descripcion_breve}\n\n`;
        md += `| Campo | Detalle |\n`;
        md += `|-------|---------|\n`;
        md += `| **Producto sugerido** | ${p.producto_sugerido} |\n`;
        md += `| **Herramientas** | ${p.herramientas_sugeridas.join(", ")} |\n`;
        md += `| **Duración estimada** | ${p.duracion_estimada_sesiones} sesiones |\n`;
        md += `| **Evidencias que cubre** | ${p.evidencias_que_cubre.join(", ")} |\n`;
        md += `| **Prerequisitos** | ${p.prerequisitos.length > 0 ? p.prerequisitos.join(", ") : "Ninguno"} |\n`;
        md += `\n---\n\n`;
      }

      md += `> Elige un subtema y continúa con \`alineacion\` para generar la alineación curricular completa.`;

      return {
        content: [{ type: "text", text: md }],
      };
    }
  );
}
