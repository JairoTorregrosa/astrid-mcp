import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerChecklist(server: McpServer) {
  server.tool(
    "generar_checklist_rubrica",
    "Genera la lista de chequeo de autoevaluación y la rúbrica analítica 4×4 (PASO 3 del kit).",
    {
      subtema_nombre: z.string().describe("Nombre del subtema seleccionado"),
      producto: z.string().describe("Producto esperado del estudiante"),
      competencia: z.string().describe("Descripción de la competencia evaluada"),
      evidencias: z
        .array(z.string())
        .describe("Lista de evidencias de aprendizaje"),
    },
    async (params) => {
      if (!params.subtema_nombre.trim()) {
        throw new Error(
          "El campo 'subtema_nombre' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.producto.trim()) {
        throw new Error(
          "El campo 'producto' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.competencia.trim()) {
        throw new Error(
          "El campo 'competencia' es obligatorio y no puede estar vacío."
        );
      }
      if (params.evidencias.length === 0) {
        throw new Error(
          "Debe incluir al menos una evidencia de aprendizaje en 'evidencias'."
        );
      }

      // --- Checklist de Autoevaluación ---
      // Generate 2 items per evidence (min 8, max 10)
      const checklistItems: string[] = [];

      for (const evidencia of params.evidencias) {
        checklistItems.push(
          `- [ ] Demuestro comprensión de: ${evidencia}`,
          `- [ ] Mi producto refleja evidencia de: ${evidencia}`
        );
      }

      // Ensure we have at least 8 items, add generic ones if needed
      const genericItems = [
        `- [ ] Mi producto "${params.producto}" está completo y cumple con los requisitos del reto.`,
        `- [ ] Participé activamente en el trabajo colaborativo con mi equipo.`,
        `- [ ] Revisé y corregí mi trabajo antes de la entrega final.`,
        `- [ ] Puedo explicar con mis propias palabras lo que aprendí sobre "${params.subtema_nombre}".`,
      ];

      while (checklistItems.length < 8 && genericItems.length > 0) {
        checklistItems.push(genericItems.shift()!);
      }

      // Cap at 10 items
      const finalChecklist = checklistItems.slice(0, 10);

      // --- Rúbrica Analítica 4×4 ---
      // Use up to 4 evidencias as criteria; if fewer, pad with product-related criteria
      const criterios: string[] = params.evidencias.slice(0, 4).map((e) => e);

      const criteriosPadding = [
        `Calidad del producto "${params.producto}"`,
        `Aplicación de conceptos de "${params.subtema_nombre}"`,
        `Trabajo colaborativo y comunicación`,
        `Creatividad e innovación en la solución`,
      ];

      while (criterios.length < 4) {
        criterios.push(criteriosPadding[criterios.length]!);
      }

      const rubricaHeader =
        "| Criterio | Superior (4.6–5.0) | Alto (4.0–4.5) | Básico (3.0–3.9) | Bajo (1.0–2.9) |\n" +
        "|----------|-------------------|----------------|------------------|----------------|\n";

      const rubricaRows = criterios
        .map((criterio) => {
          return `| **${criterio}** | Demuestra dominio excepcional; supera lo esperado en relación con este criterio. El producto evidencia profundidad y originalidad. | Cumple satisfactoriamente con el criterio. El producto muestra comprensión sólida y buen nivel de elaboración. | Alcanza el nivel mínimo esperado. El producto presenta elementos básicos pero requiere mayor desarrollo. | No alcanza el nivel mínimo. El producto tiene carencias significativas en relación con este criterio. |`;
        })
        .join("\n");

      const markdown = `# Checklist de Autoevaluación y Rúbrica Analítica — PASO 3 del Kit

---

## Parte 1: Checklist de Autoevaluación

**Subtema:** ${params.subtema_nombre}
**Producto:** ${params.producto}
**Competencia:** ${params.competencia}

Marca con una ✓ cada ítem que hayas logrado:

${finalChecklist.join("\n")}

---

## Parte 2: Rúbrica Analítica

**Instrucciones para el docente:** Evalúe cada criterio según el nivel de desempeño observado en el producto del estudiante. Cada criterio se califica en una escala de 4 niveles según el sistema de evaluación institucional.

${rubricaHeader}${rubricaRows}

---

### Convenciones de la escala

| Nivel | Rango | Descripción general |
|-------|-------|---------------------|
| **Superior** | 4.6 – 5.0 | Supera los aprendizajes esperados |
| **Alto** | 4.0 – 4.5 | Alcanza satisfactoriamente los aprendizajes |
| **Básico** | 3.0 – 3.9 | Alcanza los aprendizajes mínimos |
| **Bajo** | 1.0 – 2.9 | No alcanza los aprendizajes mínimos |

---

> **Nota:** Este documento es el PASO 3 del kit. Usa \`generar_guia_estudiante\` (Paso 4) para crear la guía paso a paso que recibirá el estudiante.`;

      return {
        content: [{ type: "text" as const, text: markdown }],
      };
    }
  );
}
