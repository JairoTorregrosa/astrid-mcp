/** Grade groups as defined by MEN 2022 */
export type GrupoGrados = "1-3" | "4-5" | "6-7" | "8-9" | "10-11";

/** The 4 MEN Technology & Informatics components */
export interface Componente {
  id: string;
  nombre: string;
  descripcion: string;
}

/** A performance indicator (evidencia de aprendizaje) */
export interface Evidencia {
  codigo: string;
  descripcion: string;
}

/** A competency within a component for a specific grade group */
export interface Competencia {
  componente_id: string;
  grupo_grados: GrupoGrados;
  descripcion: string;
  evidencias: Evidencia[];
}

/** A subtopic within a topic */
export interface Subtema {
  id: string;
  nombre: string;
}

/** A topic within a component for a specific grade group */
export interface Tema {
  id: string;
  componente_id: string;
  grupo_grados: GrupoGrados;
  nombre: string;
  subtemas: Subtema[];
}

/** Full curriculum entry: competency + topics for a component × grade group */
export interface EntradaCurricular {
  componente_id: string;
  grupo_grados: GrupoGrados;
  competencia: Competencia;
  temas: Tema[];
}

/** Enriched subtopic proposal for the menu tool */
export interface PropuestaSubtema {
  subtema_id: string;
  tema_id: string;
  componente_id: string;
  grupo_grados: GrupoGrados;
  nombre: string;
  descripcion_breve: string;
  producto_sugerido: string;
  herramientas_sugeridas: string[];
  evidencias_que_cubre: string[];
  duracion_estimada_sesiones: number;
  prerequisitos: string[];
}

/** Input for the curricular alignment tool */
export interface AlineacionInput {
  institucion: string;
  ciudad: string;
  docente: string;
  grado: GrupoGrados;
  componente_id: string;
  subtema_nombre: string;
  producto: string;
  evidencias: string[];
  duracion_sesiones: number;
  recursos_disponibles: string[];
  restricciones: string[];
}

/** Input for the authentic challenge tool */
export interface RetoInput {
  subtema_nombre: string;
  producto: string;
  contexto_local: string;
  grado: GrupoGrados;
  duracion_sesiones: number;
  evidencias: string[];
}

/** Input for the checklist + rubric tool */
export interface ChecklistInput {
  subtema_nombre: string;
  producto: string;
  competencia: string;
  evidencias: string[];
}

/** A session in the student guide */
export interface SesionGuia {
  numero: number;
  titulo: string;
  objetivo: string;
  actividades: string[];
  duracion_minutos: number;
}

/** Input for the student guide tool */
export interface GuiaEstudianteInput {
  subtema_nombre: string;
  producto: string;
  grado: GrupoGrados;
  reto_narrativa: string;
  sesiones: SesionGuia[];
  herramientas: string[];
}

/** Input for the institutional presentation tool */
export interface PresentacionInput {
  institucion: string;
  ciudad: string;
  docente: string;
  colores: { primario: string; secundario: string };
  logo_url?: string;
}

/** Inventory flags for the kit packaging tool */
export interface EmpaquetarInput {
  tiene_alineacion: boolean;
  tiene_reto: boolean;
  tiene_checklist: boolean;
  tiene_guia: boolean;
  tiene_presentacion: boolean;
  subtema_nombre: string;
  producto: string;
  grado: GrupoGrados;
  institucion: string;
}
