import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MEN_CURRICULUM } from "../data/men-curriculum";

const COMPONENTE_IDS = [
  "naturaleza-tecnologia",
  "apropiacion-uso",
  "solucion-problemas",
  "tecnologia-sociedad",
] as const;

const GRADOS = ["1-3", "4-5", "6-7", "8-9", "10-11"] as const;

export function registerConsultarTemas(server: McpServer) {
  server.tool(
    "consultar_temas_por_componente",
    "Muestra la competencia, evidencias de aprendizaje y temas con subtemas para un componente y grupo de grados MEN 2022.",
    {
      componente_id: z.enum(COMPONENTE_IDS).describe(
        "ID del componente MEN (naturaleza-tecnologia | apropiacion-uso | solucion-problemas | tecnologia-sociedad)"
      ),
      grado: z.enum(GRADOS).describe(
        "Grupo de grados (1-3 | 4-5 | 6-7 | 8-9 | 10-11)"
      ),
    },
    async ({ componente_id, grado }) => {
      const entrada = MEN_CURRICULUM.find(
        (e) => e.componente_id === componente_id && e.grupo_grados === grado
      );

      if (!entrada) {
        throw new Error(
          `No se encontró entrada curricular para componente "${componente_id}" en grados "${grado}". ` +
          `Verifica que la combinación sea válida. Componentes disponibles: ${COMPONENTE_IDS.join(", ")}. ` +
          `Grados disponibles: ${GRADOS.join(", ")}.`
        );
      }

      const { competencia, temas } = entrada;

      // Header
      let md = `# ${componente_id} — Grados ${grado}\n\n`;

      // Competencia
      md += `## Competencia\n\n${competencia.descripcion}\n\n`;

      // Evidencias
      md += `## Evidencias de aprendizaje\n\n`;
      for (const ev of competencia.evidencias) {
        md += `- **${ev.codigo}**: ${ev.descripcion}\n`;
      }

      // Temas y subtemas
      md += `\n## Temas\n\n`;
      for (const tema of temas) {
        md += `### ${tema.nombre}\n`;
        md += `- **ID:** \`${tema.id}\`\n`;
        md += `- **Subtemas:**\n`;
        for (const sub of tema.subtemas) {
          md += `  - \`${sub.id}\` — ${sub.nombre}\n`;
        }
        md += `\n`;
      }

      md += `> Usa \`generar_menu_subtemas\` con \`componente_id\`, \`grado\` y \`tema_id\` para ver propuestas de subtemas listos para clase.`;

      return {
        content: [{ type: "text", text: md }],
      };
    }
  );
}
