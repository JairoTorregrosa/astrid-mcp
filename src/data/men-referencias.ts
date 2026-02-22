import { GrupoGrados } from "./types";

// ──────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────

export interface ReferenciaOficial {
  id: string;
  titulo: string;
  tipo: "orientacion" | "guia" | "politica" | "plataforma";
  autor: string;
  anio: number;
  url: string;
  descripcion: string;
  capitulos?: string[];
}

export interface EstrategiaDidactica {
  id: string;
  nombre: string;
  descripcion: string;
  fases: string[];
  grados_recomendados: GrupoGrados[];
  componentes_afines: string[];
}

export interface DimensionEvaluacion {
  id: string;
  nombre: string;
  descripcion: string;
  indicadores: string[];
}

export interface PlataformaExterna {
  id: string;
  nombre: string;
  url: string;
  tipo: "programacion" | "contenido" | "herramienta" | "comunidad";
  descripcion: string;
  grados_recomendados: GrupoGrados[];
  gratuita: boolean;
}

// ──────────────────────────────────────────────────
// All grade groups constant (convenience)
// ──────────────────────────────────────────────────

const TODOS_LOS_GRADOS: GrupoGrados[] = ["1-3", "4-5", "6-7", "8-9", "10-11"];

const TODOS_LOS_COMPONENTES: string[] = [
  "naturaleza-tecnologia",
  "apropiacion-uso",
  "solucion-problemas",
  "tecnologia-sociedad",
];

// ──────────────────────────────────────────────────
// MEN_REFERENCIAS
// ──────────────────────────────────────────────────

export const MEN_REFERENCIAS: ReferenciaOficial[] = [
  {
    id: "orientaciones-2022",
    titulo:
      "Orientaciones Curriculares para el Área de Tecnología e Informática 2022",
    tipo: "orientacion",
    autor: "Ministerio de Educación Nacional",
    anio: 2022,
    url: "https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Orientaciones-Curriculares/",
    descripcion:
      "Documento rector que establece los componentes, competencias, mallas de " +
      "aprendizaje, estrategias didácticas y criterios de evaluación para el " +
      "área de Tecnología e Informática en la educación básica y media colombiana.",
    capitulos: [
      "Cap 1: Marco conceptual",
      "Cap 2: Componentes del área",
      "Cap 3: Mallas de aprendizaje",
      "Cap 4: Estrategias didácticas",
      "Cap 5: Evaluación",
    ],
  },
  {
    id: "guia-30",
    titulo:
      "Guía No. 30: Orientaciones generales para la educación en tecnología",
    tipo: "guia",
    autor: "MEN",
    anio: 2008,
    url: "https://www.mineducacion.gov.co/1621/articles-160915_archivo_pdf.pdf",
    descripcion:
      "Guía fundacional que define los estándares básicos de competencias en " +
      "tecnología para la educación colombiana. Establece los cuatro componentes " +
      "del área y las competencias esperadas por grupo de grados.",
  },
  {
    id: "competencias-tic-docente",
    titulo: "Competencias TIC para el Desarrollo Profesional Docente",
    tipo: "politica",
    autor: "MEN",
    anio: 2013,
    url: "https://www.mineducacion.gov.co/1621/articles-339097_archivo_pdf.pdf",
    descripcion:
      "Marco de referencia que define las competencias tecnológicas, pedagógicas, " +
      "comunicativas, de gestión e investigativas que deben desarrollar los " +
      "docentes para integrar las TIC en su práctica educativa.",
  },
  {
    id: "colombia-programa",
    titulo: "Colombia Programa",
    tipo: "plataforma",
    autor: "MinTIC / MEN",
    anio: 2020,
    url: "https://colombiaprograma.mintic.gov.co/",
    descripcion:
      "Iniciativa conjunta de MinTIC y MEN que busca fomentar el pensamiento " +
      "computacional y la programación en estudiantes de educación básica y " +
      "media a través de rutas de aprendizaje estructuradas.",
  },
  {
    id: "ruta-stem",
    titulo: "Ruta STEM+ Colombia",
    tipo: "politica",
    autor: "MEN",
    anio: 2021,
    url: "https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/STEM/",
    descripcion:
      "Política que promueve la integración de las disciplinas STEM+ " +
      "(Ciencia, Tecnología, Ingeniería, Matemáticas y más) en los currículos " +
      "escolares colombianos, fomentando la innovación y el pensamiento crítico.",
  },
  {
    id: "portal-crea",
    titulo: "Portal CREA (Contenidos para Aprender)",
    tipo: "plataforma",
    autor: "MEN",
    anio: 2019,
    url: "https://contenidosparaaprender.colombiaaprende.edu.co/",
    descripcion:
      "Plataforma de Colombia Aprende que ofrece contenidos educativos digitales " +
      "alineados con los estándares curriculares del MEN, incluyendo recursos " +
      "interactivos para el área de Tecnología e Informática.",
  },
  {
    id: "pilas-bloques",
    titulo: "Pilas Bloques",
    tipo: "plataforma",
    autor: "Program.AR / Fundación Sadosky",
    anio: 2015,
    url: "https://pilasbloques.program.ar/",
    descripcion:
      "Plataforma de programación por bloques diseñada para la enseñanza del " +
      "pensamiento computacional en los primeros niveles educativos. Ofrece " +
      "desafíos progresivos que introducen conceptos de algoritmos y lógica.",
  },
];

// ──────────────────────────────────────────────────
// MEN_ESTRATEGIAS_DIDACTICAS (Capítulo 4 - Orientaciones 2022)
// ──────────────────────────────────────────────────

export const MEN_ESTRATEGIAS_DIDACTICAS: EstrategiaDidactica[] = [
  {
    id: "abp-proyectos",
    nombre: "ABP (Aprendizaje Basado en Proyectos)",
    descripcion:
      "Estrategia que parte de un problema o necesidad real del contexto para " +
      "que los estudiantes diseñen, planifiquen y ejecuten un proyecto " +
      "tecnológico. Favorece la integración de saberes, el trabajo colaborativo " +
      "y la producción de soluciones tangibles.",
    fases: [
      "Planteamiento del problema",
      "Investigación",
      "Diseño de la solución",
      "Construcción del prototipo",
      "Prueba y evaluación",
      "Socialización",
    ],
    grados_recomendados: TODOS_LOS_GRADOS,
    componentes_afines: ["solucion-problemas", "apropiacion-uso"],
  },
  {
    id: "design-thinking",
    nombre: "Design Thinking (Pensamiento de diseño)",
    descripcion:
      "Metodología centrada en el ser humano que guía a los estudiantes a " +
      "comprender las necesidades reales de los usuarios antes de diseñar " +
      "soluciones tecnológicas. Promueve la empatía, la creatividad y la " +
      "iteración como ejes del proceso de diseño.",
    fases: ["Empatizar", "Definir", "Idear", "Prototipar", "Testear"],
    grados_recomendados: ["6-7", "8-9", "10-11"],
    componentes_afines: ["solucion-problemas", "naturaleza-tecnologia"],
  },
  {
    id: "ate",
    nombre: "Actividades Tecnológicas Escolares (ATE)",
    descripcion:
      "Actividades prácticas y contextualizadas que permiten a los estudiantes " +
      "explorar, analizar y construir artefactos tecnológicos sencillos. Se " +
      "enfocan en la comprensión de la naturaleza de la tecnología mediante " +
      "la manipulación directa de materiales y herramientas.",
    fases: [
      "Exploración",
      "Análisis de artefactos",
      "Construcción",
      "Evaluación",
    ],
    grados_recomendados: ["1-3", "4-5", "6-7"],
    componentes_afines: ["naturaleza-tecnologia", "apropiacion-uso"],
  },
  {
    id: "abp-problemas",
    nombre: "Aprendizaje Basado en Problemas (ABProblemas)",
    descripcion:
      "Estrategia que presenta a los estudiantes un problema abierto y " +
      "desestructurado para que, a través de la investigación autónoma y " +
      "colaborativa, construyan el conocimiento necesario y propongan " +
      "soluciones fundamentadas.",
    fases: [
      "Presentación del problema",
      "Identificación de necesidades de aprendizaje",
      "Búsqueda de información",
      "Solución propuesta",
      "Evaluación del proceso",
    ],
    grados_recomendados: ["6-7", "8-9", "10-11"],
    componentes_afines: ["solucion-problemas", "tecnologia-sociedad"],
  },
  {
    id: "ambientes-aprendizaje",
    nombre: "Ambientes de Aprendizaje Tecnológico",
    descripcion:
      "Diseño de espacios y situaciones de aprendizaje que integran recursos " +
      "tecnológicos, digitales y físicos para que los estudiantes exploren, " +
      "experimenten y produzcan conocimiento de manera activa. Abarca desde " +
      "el aula de tecnología hasta entornos virtuales.",
    fases: [
      "Contextualización",
      "Exploración guiada",
      "Producción",
      "Reflexión y transferencia",
    ],
    grados_recomendados: TODOS_LOS_GRADOS,
    componentes_afines: TODOS_LOS_COMPONENTES,
  },
  {
    id: "aprendizaje-colaborativo-tic",
    nombre: "Aprendizaje Colaborativo con TIC",
    descripcion:
      "Estrategia que aprovecha las herramientas digitales para facilitar el " +
      "trabajo en equipo, la co-construcción de conocimiento y la comunicación " +
      "entre pares. Los estudiantes asumen roles diferenciados y evalúan " +
      "conjuntamente los productos generados.",
    fases: [
      "Formación de equipos",
      "Asignación de roles",
      "Producción colaborativa",
      "Co-evaluación",
    ],
    grados_recomendados: ["4-5", "6-7", "8-9", "10-11"],
    componentes_afines: ["apropiacion-uso", "tecnologia-sociedad"],
  },
];

// ──────────────────────────────────────────────────
// MEN_DIMENSIONES_EVALUACION (Capítulo 5 - Orientaciones 2022)
// ──────────────────────────────────────────────────

export const MEN_DIMENSIONES_EVALUACION: DimensionEvaluacion[] = [
  {
    id: "eval-principios-practicas",
    nombre: "Evaluación de principios y prácticas",
    descripcion:
      "Valora la comprensión conceptual que tienen los estudiantes sobre la " +
      "tecnología: sus principios, funcionamiento y relaciones con la ciencia " +
      "y la sociedad. Se centra en el saber y el saber hacer teórico del área.",
    indicadores: [
      "Comprensión de conceptos tecnológicos",
      "Aplicación de principios de diseño",
      "Uso apropiado de vocabulario técnico",
      "Relación entre ciencia, tecnología y sociedad",
    ],
  },
  {
    id: "eval-productos-tecnologicos",
    nombre: "Evaluación de productos tecnológicos",
    descripcion:
      "Evalúa los artefactos, prototipos y soluciones que los estudiantes " +
      "diseñan y construyen durante el proceso de aprendizaje. Considera " +
      "tanto la calidad técnica como la creatividad y la documentación " +
      "del proceso de producción.",
    indicadores: [
      "Funcionalidad del producto",
      "Calidad técnica y estética",
      "Innovación y creatividad",
      "Documentación del proceso",
      "Cumplimiento de restricciones",
    ],
  },
  {
    id: "eval-estrategias-didacticas",
    nombre: "Evaluación de estrategias didácticas",
    descripcion:
      "Valora la efectividad del proceso de enseñanza-aprendizaje, incluyendo " +
      "la participación del estudiante, el trabajo en equipo, la capacidad " +
      "de reflexión metacognitiva y la transferencia del aprendizaje a " +
      "situaciones nuevas.",
    indicadores: [
      "Participación activa en el proceso",
      "Trabajo colaborativo",
      "Reflexión sobre el aprendizaje",
      "Transferencia a nuevos contextos",
    ],
  },
];

// ──────────────────────────────────────────────────
// MEN_PLATAFORMAS_EXTERNAS
// ──────────────────────────────────────────────────

export const MEN_PLATAFORMAS_EXTERNAS: PlataformaExterna[] = [
  {
    id: "crea",
    nombre: "CREA (Contenidos para Aprender)",
    url: "https://contenidosparaaprender.colombiaaprende.edu.co/",
    tipo: "contenido",
    descripcion:
      "Plataforma oficial de Colombia Aprende con contenidos educativos " +
      "digitales organizados por grados y áreas. Incluye recursos interactivos, " +
      "guías docentes y actividades alineadas con los estándares del MEN " +
      "para Tecnología e Informática.",
    grados_recomendados: TODOS_LOS_GRADOS,
    gratuita: true,
  },
  {
    id: "pilas-bloques",
    nombre: "Pilas Bloques",
    url: "https://pilasbloques.program.ar/",
    tipo: "programacion",
    descripcion:
      "Herramienta de programación por bloques con desafíos progresivos " +
      "diseñados para introducir el pensamiento computacional desde los " +
      "primeros grados. Ideal para trabajar secuencias, repeticiones, " +
      "condicionales y procedimientos de forma lúdica.",
    grados_recomendados: ["1-3", "4-5", "6-7"],
    gratuita: true,
  },
  {
    id: "colombia-programa",
    nombre: "Colombia Programa",
    url: "https://colombiaprograma.mintic.gov.co/",
    tipo: "programacion",
    descripcion:
      "Plataforma de MinTIC y MEN con rutas de aprendizaje de programación " +
      "y pensamiento computacional. Ofrece cursos estructurados por niveles, " +
      "desde bloques hasta lenguajes de programación textual.",
    grados_recomendados: ["4-5", "6-7", "8-9", "10-11"],
    gratuita: true,
  },
  {
    id: "mired-tured",
    nombre: "miRED-tuRED",
    url: "https://mired.colombiaaprende.edu.co/",
    tipo: "comunidad",
    descripcion:
      "Red colombiana de colaboración docente de Colombia Aprende. Permite " +
      "a los profesores compartir experiencias pedagógicas, recursos educativos " +
      "y buenas prácticas en el uso de tecnología en el aula.",
    grados_recomendados: TODOS_LOS_GRADOS,
    gratuita: true,
  },
  {
    id: "eduteka",
    nombre: "Eduteka",
    url: "https://eduteka.icesi.edu.co/",
    tipo: "contenido",
    descripcion:
      "Portal de la Universidad ICESI especializado en recursos para la " +
      "educación en tecnología. Ofrece módulos temáticos, proyectos de clase, " +
      "artículos de investigación y herramientas de planeación curricular " +
      "para el área de Tecnología e Informática.",
    grados_recomendados: ["4-5", "6-7", "8-9", "10-11"],
    gratuita: true,
  },
  {
    id: "scratch",
    nombre: "Scratch",
    url: "https://scratch.mit.edu/",
    tipo: "programacion",
    descripcion:
      "Entorno de programación visual del MIT que permite crear historias " +
      "interactivas, juegos y animaciones mediante bloques. Fomenta el " +
      "pensamiento creativo, el razonamiento sistemático y el trabajo " +
      "colaborativo a través de su comunidad en línea.",
    grados_recomendados: ["4-5", "6-7", "8-9"],
    gratuita: true,
  },
  {
    id: "tinkercad",
    nombre: "Tinkercad",
    url: "https://www.tinkercad.com/",
    tipo: "herramienta",
    descripcion:
      "Herramienta en línea de Autodesk para diseño 3D, simulación de " +
      "circuitos electrónicos y programación con bloques. Permite a los " +
      "estudiantes prototipar soluciones tecnológicas de forma virtual " +
      "antes de su construcción física.",
    grados_recomendados: ["8-9", "10-11"],
    gratuita: true,
  },
];
