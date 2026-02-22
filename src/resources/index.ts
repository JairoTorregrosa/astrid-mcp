import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { MEN_COMPONENTES } from "../data/men-componentes";
import { MEN_CURRICULUM } from "../data/men-curriculum";
import {
  MEN_REFERENCIAS,
  MEN_ESTRATEGIAS_DIDACTICAS,
  MEN_DIMENSIONES_EVALUACION,
  MEN_PLATAFORMAS_EXTERNAS,
} from "../data/men-referencias";

export function registerResources(server: McpServer) {
  // Resource 1: All 4 MEN components as a static JSON resource
  server.resource(
    "componentes-men",
    "curriculum://men/componentes",
    {
      description:
        "Los 4 componentes del area de Tecnologia e Informatica (MEN 2022)",
      mimeType: "application/json",
    },
    async () => ({
      contents: [
        {
          uri: "curriculum://men/componentes",
          text: JSON.stringify(MEN_COMPONENTES, null, 2),
          mimeType: "application/json",
        },
      ],
    })
  );

  // Resource 2: Curriculum data for a specific component + grade group (template resource)
  server.resource(
    "curriculum-por-componente",
    "curriculum://men/{componenteId}/{grupoGrados}",
    {
      description:
        "Competencias y temas para un componente y grupo de grados especifico",
      mimeType: "application/json",
    },
    async (uri) => {
      // URI arrives as e.g. "curriculum://men/naturaleza-tecnologia/6-7"
      // Remove the scheme + authority prefix to extract the path segments
      const path = uri.href.replace("curriculum://men/", "");
      const parts = path.split("/");
      const componenteId = parts[0];
      const grupoGrados = parts[1];

      if (!componenteId || !grupoGrados) {
        throw new Error(
          `URI invalida: "${uri.href}". Se esperaba el formato curriculum://men/{componenteId}/{grupoGrados}.`
        );
      }

      const entrada = MEN_CURRICULUM.find(
        (e) =>
          e.componente_id === componenteId && e.grupo_grados === grupoGrados
      );

      if (!entrada) {
        throw new Error(
          `No se encontraron datos curriculares para componente="${componenteId}", grados="${grupoGrados}". ` +
            `Componentes validos: ${[...new Set(MEN_CURRICULUM.map((e) => e.componente_id))].join(", ")}. ` +
            `Grados validos: ${[...new Set(MEN_CURRICULUM.map((e) => e.grupo_grados))].join(", ")}.`
        );
      }

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(entrada, null, 2),
            mimeType: "application/json",
          },
        ],
      };
    }
  );

  // Resource 3: Official MEN documents and references
  server.resource(
    "documentos-oficiales-men",
    "referencia://men/documentos-oficiales",
    {
      description:
        "Documentos oficiales del MEN: Orientaciones Curriculares 2022, Guía 30, Competencias TIC, y más",
      mimeType: "application/json",
    },
    async () => ({
      contents: [
        {
          uri: "referencia://men/documentos-oficiales",
          text: JSON.stringify(MEN_REFERENCIAS, null, 2),
          mimeType: "application/json",
        },
      ],
    })
  );

  // Resource 4: Didactic strategies from MEN 2022 (Chapter 4)
  server.resource(
    "estrategias-didacticas-men",
    "referencia://men/estrategias-didacticas",
    {
      description:
        "Estrategias didácticas recomendadas por el MEN: ABP, Design Thinking, ATE, ABProblemas, etc.",
      mimeType: "application/json",
    },
    async () => ({
      contents: [
        {
          uri: "referencia://men/estrategias-didacticas",
          text: JSON.stringify(MEN_ESTRATEGIAS_DIDACTICAS, null, 2),
          mimeType: "application/json",
        },
      ],
    })
  );

  // Resource 5: Evaluation dimensions from MEN 2022 (Chapter 5)
  server.resource(
    "evaluacion-men",
    "referencia://men/evaluacion",
    {
      description:
        "Dimensiones de evaluación del MEN: principios, productos tecnológicos y estrategias",
      mimeType: "application/json",
    },
    async () => ({
      contents: [
        {
          uri: "referencia://men/evaluacion",
          text: JSON.stringify(MEN_DIMENSIONES_EVALUACION, null, 2),
          mimeType: "application/json",
        },
      ],
    })
  );

  // Resource 6: External platforms filtered by type (template resource)
  server.resource(
    "plataformas-externas",
    "referencia://plataformas/{tipo}",
    {
      description:
        "Plataformas externas filtradas por tipo: programacion, contenido, herramienta, comunidad",
      mimeType: "application/json",
    },
    async (uri) => {
      const tipo = uri.href.replace("referencia://plataformas/", "");

      if (!tipo) {
        throw new Error(
          `URI invalida: "${uri.href}". Se esperaba el formato referencia://plataformas/{tipo}. ` +
          `Tipos validos: programacion, contenido, herramienta, comunidad.`
        );
      }

      const filtered = MEN_PLATAFORMAS_EXTERNAS.filter(
        (p) => p.tipo === tipo
      );

      if (filtered.length === 0) {
        const tiposDisponibles = [
          ...new Set(MEN_PLATAFORMAS_EXTERNAS.map((p) => p.tipo)),
        ];
        throw new Error(
          `No se encontraron plataformas de tipo "${tipo}". ` +
          `Tipos disponibles: ${tiposDisponibles.join(", ")}.`
        );
      }

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(filtered, null, 2),
            mimeType: "application/json",
          },
        ],
      };
    }
  );
}
