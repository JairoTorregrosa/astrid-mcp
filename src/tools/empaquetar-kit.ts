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

export function registerEmpaquetarKit(server: McpServer) {
  server.tool(
    "empaquetar_kit",
    "Genera el resumen ejecutivo del kit completo: tabla de contenido, inventario de documentos generados y consejos para reutilización.",
    {
      tiene_alineacion: z
        .boolean()
        .describe("¿Se generó el documento de alineación curricular?"),
      tiene_reto: z
        .boolean()
        .describe("¿Se generó el reto auténtico?"),
      tiene_checklist: z
        .boolean()
        .describe("¿Se generó el checklist y la rúbrica?"),
      tiene_guia: z
        .boolean()
        .describe("¿Se generó la guía del estudiante?"),
      tiene_presentacion: z
        .boolean()
        .describe("¿Se generó la plantilla de presentación institucional?"),
      subtema_nombre: z.string().describe("Nombre del subtema seleccionado"),
      producto: z.string().describe("Producto esperado del estudiante"),
      grado: z.enum(GRADOS).describe("Grupo de grados MEN"),
      institucion: z.string().describe("Nombre de la institución educativa"),
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
      if (!params.institucion.trim()) {
        throw new Error(
          "El campo 'institucion' es obligatorio y no puede estar vacío."
        );
      }

      const check = (v: boolean) => (v ? "✅" : "❌");
      const status = (v: boolean) => (v ? "Generado" : "Pendiente");

      const documentos = [
        {
          paso: 1,
          nombre: "Alineación Curricular",
          herramienta: "generar_alineacion_curricular",
          generado: params.tiene_alineacion,
        },
        {
          paso: 2,
          nombre: "Reto Auténtico",
          herramienta: "generar_reto_autentico",
          generado: params.tiene_reto,
        },
        {
          paso: 3,
          nombre: "Checklist y Rúbrica",
          herramienta: "generar_checklist_rubrica",
          generado: params.tiene_checklist,
        },
        {
          paso: 4,
          nombre: "Guía del Estudiante",
          herramienta: "generar_guia_estudiante",
          generado: params.tiene_guia,
        },
        {
          paso: 5,
          nombre: "Presentación Institucional",
          herramienta: "generar_presentacion_institucional",
          generado: params.tiene_presentacion,
        },
      ];

      const totalGenerados = documentos.filter((d) => d.generado).length;
      const totalDocumentos = documentos.length;

      const tablaContenidoRows = documentos
        .map(
          (d) =>
            `| ${check(d.generado)} | Paso ${d.paso} | ${d.nombre} |`
        )
        .join("\n");

      const inventarioMd = documentos
        .map(
          (d) =>
            `- **Paso ${d.paso} — ${d.nombre}:** ${status(d.generado)} ${d.generado ? "" : `→ Usa \`${d.herramienta}\` para generarlo`}`
        )
        .join("\n");

      const faltantes = documentos.filter((d) => !d.generado);
      const faltantesMd =
        faltantes.length > 0
          ? `\n\n**Documentos pendientes (${faltantes.length}):**\n${faltantes.map((d) => `- Paso ${d.paso}: ${d.nombre} → ejecuta \`${d.herramienta}\``).join("\n")}`
          : "\n\n**¡Todos los documentos han sido generados!** El kit está completo.";

      const markdown = `# Kit de Tecnología e Informática — Resumen Ejecutivo

---

## Tabla de Contenido

| Estado | Paso | Documento |
|--------|------|-----------|
${tablaContenidoRows}

**Progreso:** ${totalGenerados}/${totalDocumentos} documentos generados

---

## Resumen del Kit

| Campo | Valor |
|-------|-------|
| **Subtema** | ${params.subtema_nombre} |
| **Producto** | ${params.producto} |
| **Grupo de grados** | ${params.grado} |
| **Institución** | ${params.institucion} |

---

## Inventario de Documentos

${inventarioMd}
${faltantesMd}

---

## Consejos para Reutilización

1. **Adaptar a otro subtema:** Mantén la misma estructura de sesiones y rúbrica, pero cambia el subtema, producto y narrativa del reto. Los pasos 1 y 2 son los que más cambian; el checklist (Paso 3) se ajusta automáticamente si actualizas las evidencias.

2. **Cambiar de grupo de grados:** Al reutilizar el kit para otro grado, revisa las evidencias de aprendizaje en el currículo MEN, ya que varían por grupo de grados. Usa \`consultar_temas_por_componente\` para obtener las evidencias correspondientes al nuevo grado.

3. **Personalizar para otra institución:** Solo necesitas regenerar la presentación institucional (Paso 5) con los datos y colores de la nueva institución. Los demás documentos son independientes de la identidad visual.

4. **Compartir con colegas:** Exporta cada documento como PDF y compártelos como plantillas. Otros docentes pueden tomar este kit como modelo y adaptarlo a sus propios subtemas dentro del área de Tecnología e Informática.

---

> **¡Gracias por usar Astrid!** Este kit fue diseñado para facilitar la planeación curricular alineada con los lineamientos MEN 2022 para el área de Tecnología e Informática. Si necesitas generar documentos faltantes, usa las herramientas indicadas en el inventario.`;

      return {
        content: [{ type: "text" as const, text: markdown }],
      };
    }
  );
}
