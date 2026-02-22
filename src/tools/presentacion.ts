import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerPresentacion(server: McpServer) {
  server.tool(
    "generar_presentacion_institucional",
    "Genera la plantilla de encabezado y pie de página institucional para todos los documentos del kit.",
    {
      institucion: z.string().describe("Nombre de la institución educativa"),
      ciudad: z.string().describe("Ciudad de la institución"),
      docente: z.string().describe("Nombre del docente"),
      colores: z
        .object({
          primario: z
            .string()
            .describe("Color primario en formato hexadecimal (ej: #003366)"),
          secundario: z
            .string()
            .describe("Color secundario en formato hexadecimal (ej: #FFD700)"),
        })
        .describe("Colores institucionales"),
      logo_url: z
        .string()
        .optional()
        .describe("URL del logo institucional (opcional)"),
    },
    async (params) => {
      if (!params.institucion.trim()) {
        throw new Error(
          "El campo 'institucion' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.ciudad.trim()) {
        throw new Error(
          "El campo 'ciudad' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.docente.trim()) {
        throw new Error(
          "El campo 'docente' es obligatorio y no puede estar vacío."
        );
      }
      if (!params.colores.primario.trim()) {
        throw new Error(
          "El color 'primario' es obligatorio y no puede estar vacío. Proporciona un color hexadecimal (ej: #003366)."
        );
      }
      if (!params.colores.secundario.trim()) {
        throw new Error(
          "El color 'secundario' es obligatorio y no puede estar vacío. Proporciona un color hexadecimal (ej: #FFD700)."
        );
      }

      const logoPlaceholder = params.logo_url
        ? `[LOGO: ${params.logo_url}]`
        : `[LOGO: No proporcionado — insertar logo institucional aquí]`;

      const anio = new Date().getFullYear();

      const markdown = `# Plantilla Institucional — Encabezado y Pie de Página

---

## Encabezado

<!-- Colores institucionales:
  - Primario: ${params.colores.primario} (usar para títulos, bordes superiores y líneas de separación)
  - Secundario: ${params.colores.secundario} (usar para acentos, fondos de tablas y elementos decorativos)
-->

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  ${logoPlaceholder}                                             │
│                                                                 │
│  ${params.institucion.toUpperCase()}                            │
│  ${params.ciudad}                                               │
│  Área: Tecnología e Informática                                 │
│  Docente: ${params.docente}                                     │
│  Año: ${anio}                                                   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

<!-- CSS sugerido para el encabezado:
  .header {
    background-color: ${params.colores.primario};
    color: #FFFFFF;
    border-bottom: 4px solid ${params.colores.secundario};
    padding: 16px;
    text-align: center;
  }
  .header .logo {
    max-height: 80px;
    margin-bottom: 8px;
  }
  .header .institution-name {
    font-size: 1.4em;
    font-weight: bold;
    text-transform: uppercase;
  }
  .header .subtitle {
    font-size: 0.95em;
    color: ${params.colores.secundario};
  }
-->

---

## Pie de Página

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│  ─────────────────────────────────────────────────────────────  │
│  ${params.institucion} · ${params.ciudad}                       │
│  Área de Tecnología e Informática · ${anio}                     │
│  Docente: ${params.docente}                                     │
│  Página [N] de [M]                                              │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

<!-- CSS sugerido para el pie de página:
  .footer {
    border-top: 2px solid ${params.colores.primario};
    background-color: #F5F5F5;
    color: #333333;
    padding: 8px 16px;
    font-size: 0.8em;
    text-align: center;
  }
  .footer .accent {
    color: ${params.colores.secundario};
  }
-->

---

## Paleta de Colores

| Elemento | Color | Código |
|----------|-------|--------|
| **Primario** (títulos, bordes) | ████ | \`${params.colores.primario}\` |
| **Secundario** (acentos, fondos) | ████ | \`${params.colores.secundario}\` |
| Texto principal | ████ | \`#333333\` |
| Fondo | ████ | \`#FFFFFF\` |

---

> **Nota:** Esta plantilla institucional se aplica a todos los documentos del kit. Copia el encabezado y pie de página en cada documento generado para mantener la identidad visual de la institución.`;

      return {
        content: [{ type: "text" as const, text: markdown }],
      };
    }
  );
}
