import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SUBTEMAS_CATALOGO } from "../data/subtemas-catalogo";

export function registerCompararPropuestas(server: McpServer) {
  server.tool(
    "comparar_propuestas",
    "Genera una tabla comparativa lado a lado de 2-4 propuestas de subtemas por sus nombres. Útil para ayudar al docente a elegir entre opciones.",
    {
      nombres_propuestas: z
        .array(z.string())
        .min(2)
        .max(4)
        .describe(
          "Array con los nombres exactos de 2 a 4 propuestas del catálogo de subtemas para comparar."
        ),
    },
    async ({ nombres_propuestas }) => {
      const propuestas = nombres_propuestas.map((nombre) => {
        const found = SUBTEMAS_CATALOGO.find(
          (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
        );
        if (!found) {
          throw new Error(
            `No se encontró la propuesta "${nombre}" en el catálogo. ` +
            `Verifica que el nombre sea exacto. Usa \`generar_menu_subtemas\` para ver los nombres disponibles.`
          );
        }
        return found;
      });

      let md = `# Comparación de propuestas\n\n`;

      // Header row
      md += `| Criterio |`;
      for (const p of propuestas) {
        md += ` ${p.nombre} |`;
      }
      md += `\n`;

      // Separator
      md += `|----------|`;
      for (let i = 0; i < propuestas.length; i++) {
        md += `----------|`;
      }
      md += `\n`;

      // Rows
      const rows: { label: string; getter: (p: typeof propuestas[0]) => string }[] = [
        { label: "Componente", getter: (p) => `\`${p.componente_id}\`` },
        { label: "Grados", getter: (p) => p.grupo_grados },
        { label: "Tema", getter: (p) => `\`${p.tema_id}\`` },
        { label: "Producto sugerido", getter: (p) => p.producto_sugerido },
        { label: "Herramientas", getter: (p) => p.herramientas_sugeridas.join(", ") },
        { label: "Duración (sesiones)", getter: (p) => String(p.duracion_estimada_sesiones) },
        { label: "Evidencias", getter: (p) => p.evidencias_que_cubre.join(", ") },
        { label: "Prerequisitos", getter: (p) => p.prerequisitos.length > 0 ? p.prerequisitos.join("; ") : "Ninguno" },
      ];

      for (const row of rows) {
        md += `| **${row.label}** |`;
        for (const p of propuestas) {
          md += ` ${row.getter(p)} |`;
        }
        md += `\n`;
      }

      md += `\n---\n\n`;

      // Descriptions section
      md += `## Descripciones detalladas\n\n`;
      for (const p of propuestas) {
        md += `### ${p.nombre}\n`;
        md += `> ${p.descripcion_breve}\n\n`;
      }

      md += `> Elige la propuesta que mejor se adapte al contexto del profe y continúa con el flujo de generación de kit.`;

      return {
        content: [{ type: "text", text: md }],
      };
    }
  );
}
