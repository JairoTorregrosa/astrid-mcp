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

export function registerGuiaEstudiante(server: McpServer) {
  server.tool(
    "generar_guia_estudiante",
    "Genera la guía del estudiante con instrucciones paso a paso, placeholders visuales [IMAGEN: ...] y actividades por sesión.",
    {
      subtema_nombre: z.string().describe("Nombre del subtema seleccionado"),
      producto: z.string().describe("Producto esperado del estudiante"),
      grado: z.enum(GRADOS).describe("Grupo de grados MEN"),
      reto_narrativa: z
        .string()
        .describe("Narrativa del reto generada en el Paso 2"),
      sesiones: z
        .array(
          z.object({
            numero: z.number().describe("Número de la sesión"),
            titulo: z.string().describe("Título de la sesión"),
            objetivo: z.string().describe("Objetivo de la sesión"),
            actividades: z
              .array(z.string())
              .describe("Lista de actividades de la sesión"),
            duracion_minutos: z
              .number()
              .describe("Duración de la sesión en minutos"),
          })
        )
        .describe("Lista de sesiones con sus detalles"),
      herramientas: z
        .array(z.string())
        .describe("Herramientas y materiales necesarios"),
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
      if (!params.reto_narrativa.trim()) {
        throw new Error(
          "El campo 'reto_narrativa' es obligatorio y no puede estar vacío. Genera primero el reto con 'generar_reto_autentico'."
        );
      }
      if (params.sesiones.length === 0) {
        throw new Error(
          "Debe incluir al menos una sesión en 'sesiones'. Define las sesiones con número, título, objetivo, actividades y duración."
        );
      }
      for (const sesion of params.sesiones) {
        if (!sesion.titulo.trim()) {
          throw new Error(
            `La sesión ${sesion.numero} tiene el campo 'titulo' vacío. Todas las sesiones deben tener un título.`
          );
        }
        if (!sesion.objetivo.trim()) {
          throw new Error(
            `La sesión ${sesion.numero} tiene el campo 'objetivo' vacío. Todas las sesiones deben tener un objetivo.`
          );
        }
        if (sesion.actividades.length === 0) {
          throw new Error(
            `La sesión ${sesion.numero} no tiene actividades. Cada sesión debe tener al menos una actividad.`
          );
        }
        if (sesion.duracion_minutos < 1) {
          throw new Error(
            `La sesión ${sesion.numero} tiene duración inválida. 'duracion_minutos' debe ser >= 1.`
          );
        }
      }
      if (params.herramientas.length === 0) {
        throw new Error(
          "Debe incluir al menos una herramienta o material en 'herramientas'."
        );
      }

      const herramientasMd = params.herramientas
        .map((h) => `- ${h}`)
        .join("\n");

      const sesionesMd = params.sesiones
        .map((sesion) => {
          const actividadesPasos = sesion.actividades
            .map((act, i) => {
              const paso = `${i + 1}. ${act}`;
              // Add image placeholders at strategic points
              if (i === 0) {
                return `${paso}\n\n   [IMAGEN: Diagrama introductorio para "${sesion.titulo}"]`;
              }
              if (i === sesion.actividades.length - 1 && i > 0) {
                return `${paso}\n\n   [IMAGEN: Ejemplo del resultado esperado de esta actividad]`;
              }
              return paso;
            })
            .join("\n\n");

          return `### Sesión ${sesion.numero}: ${sesion.titulo}

> **Objetivo:** ${sesion.objetivo}
> **Duración:** ${sesion.duracion_minutos} minutos

**Pasos a seguir:**

${actividadesPasos}

---`;
        })
        .join("\n\n");

      const markdown = `# Guía del Estudiante — ${params.subtema_nombre}

**Grado:** ${params.grado} | **Producto final:** ${params.producto}

[IMAGEN: Portada ilustrativa del tema "${params.subtema_nombre}"]

---

## Tu Reto

${params.reto_narrativa}

---

## Materiales y Herramientas

Antes de comenzar, asegúrate de tener a la mano:

${herramientasMd}

[IMAGEN: Iconos de las herramientas y materiales necesarios]

---

## Sesiones de Trabajo

${sesionesMd}

## Reflexión Final

Antes de entregar tu producto, responde estas preguntas en tu cuaderno o portafolio:

1. **¿Qué aprendí?** — Describe con tus propias palabras lo más importante que aprendiste sobre "${params.subtema_nombre}".
2. **¿Qué fue lo más difícil?** — Identifica el mayor desafío que enfrentaste y cómo lo resolviste.
3. **¿Cómo puedo mejorar?** — Piensa en qué harías diferente si volvieras a realizar este reto.
4. **¿Cómo se conecta con mi vida?** — Explica cómo lo aprendido puede ser útil en tu entorno cotidiano.

[IMAGEN: Estudiantes presentando sus proyectos en grupo]

---

> **Nota:** Esta guía forma parte del kit de Tecnología e Informática. Si tienes dudas, consulta a tu docente o revisa la rúbrica de evaluación para conocer los criterios con los que se valorará tu trabajo.`;

      return {
        content: [{ type: "text" as const, text: markdown }],
      };
    }
  );
}
