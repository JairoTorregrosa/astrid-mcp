import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerConsultarComponentes } from "./consultar-componentes";
import { registerConsultarTemas } from "./consultar-temas";
import { registerMenuSubtemas } from "./menu-subtemas";
import { registerAlineacion } from "./alineacion";
import { registerReto } from "./reto";
import { registerChecklist } from "./checklist";
import { registerGuiaEstudiante } from "./guia-estudiante";
import { registerPresentacion } from "./presentacion";
import { registerEmpaquetarKit } from "./empaquetar-kit";
import { registerExplorarCurriculum } from "./explorar-curriculum";
import { registerSugerirEstrategias } from "./sugerir-estrategias";
import { registerCompararPropuestas } from "./comparar-propuestas";
import { registerBuscarPlataformas } from "./buscar-plataformas";

export function registerAllTools(server: McpServer) {
  registerConsultarComponentes(server);
  registerConsultarTemas(server);
  registerMenuSubtemas(server);
  registerAlineacion(server);
  registerReto(server);
  registerChecklist(server);
  registerGuiaEstudiante(server);
  registerPresentacion(server);
  registerEmpaquetarKit(server);
  registerExplorarCurriculum(server);
  registerSugerirEstrategias(server);
  registerCompararPropuestas(server);
  registerBuscarPlataformas(server);
}
