import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MEN_COMPONENTES } from "../data/men-componentes";

export function registerConsultarComponentes(server: McpServer) {
  server.tool(
    "consultar_componentes_men",
    "Lista los 4 componentes del área de Tecnología e Informática según los lineamientos MEN 2022.",
    {},
    async () => {
      if (!MEN_COMPONENTES || MEN_COMPONENTES.length === 0) {
        throw new Error(
          "No se encontraron componentes MEN. Los datos de MEN_COMPONENTES están vacíos o no se cargaron correctamente."
        );
      }

      const header = `# Componentes MEN 2022 — Tecnología e Informática\n\n`;
      const tableHeader =
        "| # | ID | Nombre | Descripción |\n" +
        "|---|-----|--------|-------------|\n";

      const rows = MEN_COMPONENTES.map(
        (c, i) => `| ${i + 1} | \`${c.id}\` | **${c.nombre}** | ${c.descripcion} |`
      ).join("\n");

      const footer =
        "\n\n> Usa `consultar_temas_por_componente` con el `componente_id` y el `grado` para ver competencias, evidencias y temas de un componente específico.";

      const markdown = header + tableHeader + rows + footer;

      return {
        content: [{ type: "text", text: markdown }],
      };
    }
  );
}
