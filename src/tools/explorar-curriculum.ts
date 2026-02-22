import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MEN_CURRICULUM } from "../data/men-curriculum";
import { MEN_COMPONENTES } from "../data/men-componentes";

const GRADOS = ["1-3", "4-5", "6-7", "8-9", "10-11"] as const;

export function registerExplorarCurriculum(server: McpServer) {
  server.tool(
    "explorar_curriculum_completo",
    "Vista panorámica de los 4 componentes MEN para un grupo de grados: competencias, evidencias y temas disponibles. Ideal para exploración divergente al inicio de una sesión de brainstorming.",
    {
      grado: z.enum(GRADOS).describe(
        "Grupo de grados (1-3 | 4-5 | 6-7 | 8-9 | 10-11)"
      ),
    },
    async ({ grado }) => {
      const entradas = MEN_CURRICULUM.filter(
        (e) => e.grupo_grados === grado
      );

      if (entradas.length === 0) {
        throw new Error(
          `No se encontraron datos curriculares para grados "${grado}". ` +
          `Grados válidos: ${GRADOS.join(", ")}.`
        );
      }

      let md = `# Panorama curricular — Grados ${grado}\n\n`;
      md += `Se encontraron **${entradas.length} componentes** con datos para este grupo de grados.\n\n`;
      md += `---\n\n`;

      for (const entrada of entradas) {
        const comp = MEN_COMPONENTES.find(
          (c) => c.id === entrada.componente_id
        );
        const compNombre = comp?.nombre ?? entrada.componente_id;

        md += `## ${compNombre}\n`;
        md += `**ID:** \`${entrada.componente_id}\`\n\n`;

        // Competencia
        md += `### Competencia\n`;
        md += `${entrada.competencia.descripcion}\n\n`;

        // Evidencias
        md += `### Evidencias de aprendizaje\n`;
        for (const ev of entrada.competencia.evidencias) {
          md += `- **${ev.codigo}**: ${ev.descripcion}\n`;
        }
        md += `\n`;

        // Temas
        md += `### Temas disponibles\n`;
        for (const tema of entrada.temas) {
          md += `- **${tema.nombre}** (\`${tema.id}\`) — ${tema.subtemas.length} subtemas: `;
          md += tema.subtemas.map((s) => s.nombre).join(", ");
          md += `\n`;
        }

        md += `\n---\n\n`;
      }

      md += `> Para profundizar en un componente específico, usa \`consultar_temas_por_componente\`.\n`;
      md += `> Para ver propuestas de subtemas, usa \`generar_menu_subtemas\` con el \`tema_id\` elegido.`;

      return {
        content: [{ type: "text", text: md }],
      };
    }
  );
}
