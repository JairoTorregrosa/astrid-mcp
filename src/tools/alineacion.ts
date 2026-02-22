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

export function registerAlineacion(server: McpServer) {
  server.tool(
    "generar_alineacion_curricular",
    "Genera el documento de alineación curricular (PASO 1 del kit) con encabezado institucional, competencia, evidencias, cronograma y recursos.",
    {
      institucion: z.string().describe("Nombre de la institución educativa"),
      ciudad: z.string().describe("Ciudad de la institución"),
      docente: z.string().describe("Nombre del docente"),
      grado: z.enum(GRADOS).describe("Grupo de grados MEN"),
      componente_id: z.string().describe("ID del componente MEN"),
      subtema_nombre: z.string().describe("Nombre del subtema seleccionado"),
      producto: z.string().describe("Producto esperado del estudiante"),
      evidencias: z
        .array(z.string())
        .describe("Lista de evidencias de aprendizaje"),
      duracion_sesiones: z
        .number()
        .describe("Número total de sesiones previstas"),
      recursos_disponibles: z
        .array(z.string())
        .describe("Recursos disponibles en la institución"),
      restricciones: z
        .array(z.string())
        .describe("Restricciones o limitaciones del contexto"),
    },
    async (params) => {
      if (!params.institucion.trim()) {
        throw new Error(
          "El campo 'institucion' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.docente.trim()) {
        throw new Error(
          "El campo 'docente' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.componente_id.trim()) {
        throw new Error(
          "El campo 'componente_id' es obligatorio y no puede estar vacío."
        );
      }
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

      const evidenciasListMd = params.evidencias
        .map((e, i) => `${i + 1}. ${e}`)
        .join("\n");

      const cronogramaHeader =
        "| Sesión | Actividad principal | Evidencia asociada |\n" +
        "|--------|---------------------|--------------------|\n";
      const cronogramaRows = Array.from(
        { length: params.duracion_sesiones },
        (_, i) => {
          const evidencia =
            params.evidencias[i % params.evidencias.length] ?? "—";
          return `| ${i + 1} | _Por definir en el reto (Paso 2)_ | ${evidencia} |`;
        }
      ).join("\n");

      const recursosMd =
        params.recursos_disponibles.length > 0
          ? params.recursos_disponibles.map((r) => `- ${r}`).join("\n")
          : "_No se especificaron recursos disponibles._";

      const restriccionesMd =
        params.restricciones.length > 0
          ? params.restricciones.map((r) => `- ${r}`).join("\n")
          : "_No se especificaron restricciones._";

      const markdown = `# Alineación Curricular — Kit de Tecnología e Informática

---

## 1. Datos Institucionales

| Campo | Valor |
|-------|-------|
| **Institución** | ${params.institucion} |
| **Ciudad** | ${params.ciudad} |
| **Docente** | ${params.docente} |
| **Grupo de grados** | ${params.grado} |
| **Área** | Tecnología e Informática |

---

## 2. Componente MEN

- **ID del componente:** \`${params.componente_id}\`

---

## 3. Competencia y Evidencias

**Evidencias de aprendizaje:**

${evidenciasListMd}

---

## 4. Subtema y Producto

- **Subtema:** ${params.subtema_nombre}
- **Producto esperado:** ${params.producto}

---

## 5. Cronograma

${cronogramaHeader}${cronogramaRows}

---

## 6. Recursos Disponibles

${recursosMd}

---

## 7. Restricciones

${restriccionesMd}

---

> **Nota:** Este documento es el PASO 1 del kit. Continúa con \`generar_reto_autentico\` (Paso 2) para diseñar el reto motivador que guiará las sesiones planificadas.`;

      return {
        content: [{ type: "text" as const, text: markdown }],
      };
    }
  );
}
