import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { GrupoGrados } from "../data/types";

const GRADOS: [GrupoGrados, ...GrupoGrados[]] = [
  "1-3",
  "4-5",
  "6-7",
  "8-9",
  "10-11",
];

export function registerReto(server: McpServer) {
  server.tool(
    "generar_reto_autentico",
    "Genera el reto auténtico (PASO 2 del kit): narrativa motivadora, desglose por sesiones, producto esperado y diferenciación.",
    {
      subtema_nombre: z.string().describe("Nombre del subtema seleccionado"),
      producto: z.string().describe("Producto esperado del estudiante"),
      contexto_local: z
        .string()
        .describe(
          "Descripción del contexto local (barrio, vereda, municipio, problemática cercana)"
        ),
      grado: z.enum(GRADOS).describe("Grupo de grados MEN"),
      duracion_sesiones: z
        .number()
        .describe("Número total de sesiones previstas"),
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
      if (!params.contexto_local.trim()) {
        throw new Error(
          "El campo 'contexto_local' es obligatorio y no puede estar vacío. Describe el contexto del entorno escolar."
        );
      }
      if (params.evidencias.length === 0) {
        throw new Error(
          "Debe incluir al menos una evidencia de aprendizaje en 'evidencias'."
        );
      }
      if (params.duracion_sesiones < 1) {
        throw new Error(
          "La duración debe ser de al menos 1 sesión ('duracion_sesiones' >= 1)."
        );
      }

      const sesionesDesglose = Array.from(
        { length: params.duracion_sesiones },
        (_, i) => {
          const num = i + 1;
          if (num === 1) {
            return `${num}. **Sesión ${num} — Exploración y comprensión del reto**\n   - **Objetivo:** Presentar el reto, explorar saberes previos y contextualizar el subtema "${params.subtema_nombre}".\n   - **Actividades clave:** Lectura del reto, lluvia de ideas, conformación de equipos.`;
          }
          if (num === params.duracion_sesiones) {
            return `${num}. **Sesión ${num} — Presentación y evaluación del producto**\n   - **Objetivo:** Socializar el producto "${params.producto}", recibir retroalimentación y autoevaluarse.\n   - **Actividades clave:** Presentación ante pares, coevaluación con rúbrica, reflexión final.`;
          }
          return `${num}. **Sesión ${num} — Desarrollo iterativo (fase ${num - 1})**\n   - **Objetivo:** Avanzar en la construcción del producto aplicando conceptos de "${params.subtema_nombre}".\n   - **Actividades clave:** Trabajo colaborativo, revisión de avances, ajustes según retroalimentación.`;
        }
      ).join("\n\n");

      const evidenciasMd = params.evidencias
        .map((e, i) => `${i + 1}. ${e}`)
        .join("\n");

      const markdown = `# Reto Auténtico — PASO 2 del Kit

---

## 1. Narrativa del Reto

Imagina que en **${params.contexto_local}** la comunidad necesita resolver un problema real relacionado con **${params.subtema_nombre}**. Los estudiantes de grado **${params.grado}** han sido convocados como jóvenes innovadores para diseñar una solución creativa. Su misión es desarrollar **${params.producto}** que demuestre lo que han aprendido y que pueda tener un impacto positivo en su entorno. A lo largo de **${params.duracion_sesiones} sesiones**, trabajarán en equipo, investigarán, prototiparán y presentarán su propuesta ante la comunidad educativa. ¡El reto está lanzado!

---

## 2. Producto Esperado

**${params.producto}**

El producto debe evidenciar la comprensión del subtema "${params.subtema_nombre}" y el desarrollo de las competencias asociadas al grupo de grados ${params.grado}.

---

## 3. Desglose por Sesiones

${sesionesDesglose}

---

## 4. Estrategias de Diferenciación

### Estudiantes con desempeño avanzado
- Proponer extensiones del producto que integren otras áreas del conocimiento.
- Asumir roles de mentoría dentro de sus equipos.
- Investigar fuentes adicionales y presentar hallazgos complementarios.

### Estudiantes con desempeño estándar
- Seguir la secuencia de actividades tal como está planteada.
- Participar activamente en el trabajo colaborativo.
- Cumplir con las entregas parciales en cada sesión.

### Estudiantes que necesitan apoyo adicional
- Recibir guías simplificadas con instrucciones paso a paso.
- Contar con acompañamiento directo del docente o un compañero tutor.
- Disponer de tiempo extendido o ajustes en la complejidad del producto.

---

## 5. Evidencias que se Evalúan

${evidenciasMd}

---

> **Nota:** Este documento es el PASO 2 del kit. Continúa con \`generar_checklist_rubrica\` (Paso 3) para crear los instrumentos de evaluación del reto.`;

      return {
        content: [{ type: "text" as const, text: markdown }],
      };
    }
  );
}
