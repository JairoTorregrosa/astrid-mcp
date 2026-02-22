import { PropuestaSubtema } from "./types";

/**
 * Catálogo enriquecido de propuestas de subtemas para el servidor MCP.
 *
 * Cada tema de grados 6-7 y 8-9 tiene 2-3 propuestas concretas de proyectos
 * de aula sin código (no-code friendly), contextualizados para Colombia y
 * pensados para instituciones con recursos limitados.
 *
 * Convención de IDs de evidencias:
 *   NT-67-E1, AU-89-E2, SP-67-E3, TS-89-E1, etc.
 */
export const SUBTEMAS_CATALOGO_67_89: PropuestaSubtema[] = [
  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Naturaleza y evolución de la tecnología — Grado 6-7
  // ════════════════════════════════════════════════════════════════

  // ── nt-67-t1: Artefactos, procesos y sistemas tecnológicos ──

  {
    subtema_id: "nt-67-t1-s1",
    tema_id: "nt-67-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Álbum ilustrado de artefactos de mi municipio",
    descripcion_breve:
      "Los estudiantes fotografían o dibujan artefactos de su entorno local (cocina, agricultura, transporte) y los clasifican según su función: transformar, transportar, comunicar o almacenar. El resultado es un álbum colaborativo digital o físico.",
    producto_sugerido:
      "Álbum ilustrado (digital en Canva o físico en cartulina) con mínimo 12 artefactos clasificados por función",
    herramientas_sugeridas: ["Canva", "Google Slides", "cámara del celular", "cartulina y marcadores"],
    evidencias_que_cubre: ["NT-67-E1", "NT-67-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto básico de artefacto tecnológico",
      "Manejo elemental de cámara o dibujo",
    ],
  },
  {
    subtema_id: "nt-67-t1-s2",
    tema_id: "nt-67-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Mapa de procesos tecnológicos en la vida cotidiana",
    descripcion_breve:
      "Cada equipo elige un producto cotidiano (pan, ladrillo, panela) e investiga el proceso tecnológico detrás de su elaboración. Documentan entradas, transformaciones y salidas en un diagrama visual.",
    producto_sugerido:
      "Póster o infografía digital con el diagrama de proceso (entrada → transformación → salida) de un producto local",
    herramientas_sugeridas: ["Canva", "Google Slides", "papel kraft y marcadores"],
    evidencias_que_cubre: ["NT-67-E1", "NT-67-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Conocimiento básico de qué es un proceso",
      "Capacidad de investigar con fuentes locales (entrevistas, observación)",
    ],
  },
  {
    subtema_id: "nt-67-t1-s3",
    tema_id: "nt-67-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Diagrama de un sistema tecnológico escolar",
    descripcion_breve:
      "Los estudiantes analizan un sistema tecnológico presente en su colegio (sistema de timbre, acueducto escolar, red eléctrica del salón) e identifican sus componentes de entrada, proceso y salida.",
    producto_sugerido:
      "Diagrama en cartulina o Canva que muestre los componentes del sistema con flechas de flujo y una explicación escrita de cada parte",
    herramientas_sugeridas: ["Canva", "Google Drawings", "cartulina y colores"],
    evidencias_que_cubre: ["NT-67-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de sistema (entrada, proceso, salida)",
      "Observación guiada de su entorno escolar",
    ],
  },

  // ── nt-67-t2: Historia y evolución de la tecnología ──

  {
    subtema_id: "nt-67-t2-s1",
    tema_id: "nt-67-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Noticiero histórico de hitos tecnológicos",
    descripcion_breve:
      "Cada grupo prepara una 'emisión de noticias' donde reportan un hito tecnológico (la rueda, la imprenta, el internet) como si fueran periodistas de la época. Presentan en video corto o en vivo.",
    producto_sugerido:
      "Video corto (2-3 min) o presentación en vivo tipo noticiero con al menos 3 hitos tecnológicos",
    herramientas_sugeridas: ["Google Slides", "cámara del celular", "Canva para gráficos de apoyo"],
    evidencias_que_cubre: ["NT-67-E1", "NT-67-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Noción general de épocas históricas",
      "Habilidad básica de expresión oral",
    ],
  },
  {
    subtema_id: "nt-67-t2-s2",
    tema_id: "nt-67-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Línea de tiempo interactiva de la tecnología",
    descripcion_breve:
      "Los estudiantes construyen una línea de tiempo (física en el pasillo o digital) donde ubican al menos 10 inventos clave, con imagen y breve descripción del impacto social de cada uno.",
    producto_sugerido:
      "Línea de tiempo mural (papel kraft en el pasillo) o digital en Canva con mínimo 10 hitos ilustrados",
    herramientas_sugeridas: ["Canva", "Google Slides", "papel kraft", "recortes de revistas"],
    evidencias_que_cubre: ["NT-67-E1", "NT-67-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Comprensión de orden cronológico",
      "Habilidad de búsqueda de información básica",
    ],
  },
  {
    subtema_id: "nt-67-t2-s3",
    tema_id: "nt-67-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Exposición: tecnología en las culturas colombianas",
    descripcion_breve:
      "Cada equipo investiga una tecnología ancestral colombiana (acueductos Tayronas, cestería Zenú, terrazas de cultivo, balsas muiscas) y prepara una estación de exposición con maqueta o póster.",
    producto_sugerido:
      "Estación de exposición con póster informativo y maqueta sencilla en materiales reciclados",
    herramientas_sugeridas: ["cartulina", "materiales reciclados", "Canva para fichas de apoyo"],
    evidencias_que_cubre: ["NT-67-E1", "NT-67-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento básico de pueblos originarios de Colombia",
      "Manejo de materiales de manualidades",
    ],
  },

  // ── nt-67-t3: Innovación e invención ──

  {
    subtema_id: "nt-67-t3-s1",
    tema_id: "nt-67-t3",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Galería: ¿innovación o invención?",
    descripcion_breve:
      "Los estudiantes recopilan 10 ejemplos de productos tecnológicos y los clasifican como innovación o invención, justificando su decisión con argumentos escritos. Montan una galería con tarjetas explicativas.",
    producto_sugerido:
      "Galería de tarjetas (físicas o en Canva) con 10 productos clasificados y sus justificaciones",
    herramientas_sugeridas: ["Canva", "fichas de cartulina", "Google Slides"],
    evidencias_que_cubre: ["NT-67-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Definición de innovación vs. invención",
      "Capacidad de argumentación básica",
    ],
  },
  {
    subtema_id: "nt-67-t3-s2",
    tema_id: "nt-67-t3",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    nombre: "Biografías ilustradas de inventores colombianos y mundiales",
    descripcion_breve:
      "Cada estudiante investiga un inventor (incluyendo al menos uno colombiano, como Raúl Cuero o Marta Lucía Tamayo) y crea una biografía ilustrada de una página con su contexto histórico y su invento principal.",
    producto_sugerido:
      "Libro colectivo de biografías ilustradas (digital o encuadernado) con al menos 15 inventores",
    herramientas_sugeridas: ["Canva", "Google Docs", "lápices de color y papel"],
    evidencias_que_cubre: ["NT-67-E1", "NT-67-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Habilidad de investigación básica",
      "Conocimiento de la estructura de una biografía",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Naturaleza y evolución de la tecnología — Grado 8-9
  // ════════════════════════════════════════════════════════════════

  // ── nt-89-t1: Funcionamiento de sistemas tecnológicos ──

  {
    subtema_id: "nt-89-t1-s1",
    tema_id: "nt-89-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Catálogo visual de componentes electrónicos",
    descripcion_breve:
      "Los estudiantes desarman (con supervisión) aparatos electrónicos en desuso, identifican componentes (resistencias, capacitores, LEDs, circuitos integrados) y crean un catálogo visual con fotos y descripciones de la función de cada uno.",
    producto_sugerido:
      "Catálogo digital o físico con fotos y fichas técnicas de al menos 10 componentes electrónicos identificados",
    herramientas_sugeridas: ["cámara del celular", "Canva", "Google Slides", "aparatos en desuso"],
    evidencias_que_cubre: ["NT-89-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Normas de seguridad en el aula de tecnología",
      "Concepto básico de circuito eléctrico",
    ],
  },
  {
    subtema_id: "nt-89-t1-s2",
    tema_id: "nt-89-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Infografía de sistemas de control en el hogar",
    descripcion_breve:
      "Los estudiantes identifican sistemas de control en su hogar o colegio (termostato, sensor de movimiento, control remoto) y crean infografías que expliquen cómo los sensores captan información y los actuadores generan respuestas.",
    producto_sugerido:
      "Infografía impresa o digital que explique el funcionamiento de al menos 3 sistemas de control cotidianos",
    herramientas_sugeridas: ["Canva", "Google Slides", "marcadores y cartulina"],
    evidencias_que_cubre: ["NT-89-E1", "NT-89-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de sistema tecnológico (entrada, proceso, salida)",
      "Noción de sensor y actuador",
    ],
  },
  {
    subtema_id: "nt-89-t1-s3",
    tema_id: "nt-89-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Análisis del ciclo de vida de un celular",
    descripcion_breve:
      "Los equipos investigan y documentan el ciclo de vida completo de un teléfono celular: extracción de materias primas, manufactura, distribución, uso y disposición final. Presentan hallazgos con enfoque ambiental.",
    producto_sugerido:
      "Presentación o póster que muestre las 5 etapas del ciclo de vida con datos reales y propuestas de mejora",
    herramientas_sugeridas: ["Google Slides", "Canva", "Google Docs para investigación"],
    evidencias_que_cubre: ["NT-89-E1", "NT-89-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de ciclo de vida de un producto",
      "Habilidad de búsqueda y síntesis de información",
    ],
  },

  // ── nt-89-t2: Tecnología en contextos culturales ──

  {
    subtema_id: "nt-89-t2-s1",
    tema_id: "nt-89-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Documental corto: saberes tecnológicos ancestrales",
    descripcion_breve:
      "Los estudiantes entrevistan a abuelos, artesanos o líderes comunitarios sobre tecnologías tradicionales (trapiche, telar, secado de café al sol) y producen un mini-documental con celular que rescate esos saberes.",
    producto_sugerido:
      "Video documental de 3-5 minutos con entrevistas y narración sobre una tecnología ancestral local",
    herramientas_sugeridas: ["cámara del celular", "CapCut o editor de video gratuito", "Google Docs para guion"],
    evidencias_que_cubre: ["NT-89-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Técnicas básicas de entrevista",
      "Conocimiento general de la comunidad local",
    ],
  },
  {
    subtema_id: "nt-89-t2-s2",
    tema_id: "nt-89-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Mapa comparativo: tecnologías de aquí y de allá",
    descripcion_breve:
      "Cada equipo compara una tecnología usada en su región con su equivalente en otra cultura o país (ej: pilón vs. molino industrial, canoa vs. lancha con motor). Presentan similitudes, diferencias y razones del contexto.",
    producto_sugerido:
      "Mapa conceptual comparativo en Canva o cartulina con al menos 4 pares de tecnologías comparadas",
    herramientas_sugeridas: ["Canva", "Google Slides", "cartulina y marcadores"],
    evidencias_que_cubre: ["NT-89-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de transferencia tecnológica",
      "Habilidad de investigación comparativa",
    ],
  },

  // ── nt-89-t3: Tecnologías emergentes ──

  {
    subtema_id: "nt-89-t3-s1",
    tema_id: "nt-89-t3",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Feria de inteligencia artificial explicada",
    descripcion_breve:
      "Los equipos investigan aplicaciones reales de IA (asistentes virtuales, recomendaciones de Netflix, filtros de redes sociales) y montan estaciones interactivas donde explican cómo funcionan de forma sencilla usando analogías.",
    producto_sugerido:
      "Estación de feria con póster explicativo, demostración en vivo de una herramienta de IA gratuita y analogía visual",
    herramientas_sugeridas: ["Google Slides", "Canva", "herramientas de IA gratuitas (Teachable Machine, Quick Draw)"],
    evidencias_que_cubre: ["NT-89-E1", "NT-89-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto general de qué es la inteligencia artificial",
      "Acceso básico a internet",
    ],
  },
  {
    subtema_id: "nt-89-t3-s2",
    tema_id: "nt-89-t3",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Maqueta conceptual del Internet de las Cosas",
    descripcion_breve:
      "Los estudiantes diseñan y construyen una maqueta de un hogar o finca inteligente usando materiales reciclados, mostrando dónde irían los sensores y cómo se conectarían. Explican cada dispositivo IoT con fichas.",
    producto_sugerido:
      "Maqueta física de un espacio inteligente con fichas descriptivas de cada sensor/actuador IoT simulado",
    herramientas_sugeridas: ["cartón", "materiales reciclados", "Canva para fichas", "Google Slides para sustentación"],
    evidencias_que_cubre: ["NT-89-E1", "NT-89-E3"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de sensor y actuador",
      "Noción básica de conectividad y redes",
    ],
  },
  {
    subtema_id: "nt-89-t3-s3",
    tema_id: "nt-89-t3",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    nombre: "Mesa redonda: oficios que cambian con la tecnología",
    descripcion_breve:
      "Los estudiantes investigan cómo la automatización y la IA están transformando oficios en Colombia (agricultura, transporte, salud, educación). Organizan una mesa redonda con roles asignados (trabajador, empresario, regulador).",
    producto_sugerido:
      "Relatoría escrita de la mesa redonda y ficha individual con 3 oficios analizados y su proyección futura",
    herramientas_sugeridas: ["Google Docs", "Google Slides para apoyo visual", "Canva para fichas"],
    evidencias_que_cubre: ["NT-89-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Comprensión básica de automatización",
      "Habilidad de debate y argumentación",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Apropiación y uso de la tecnología — Grado 6-7
  // ════════════════════════════════════════════════════════════════

  // ── au-67-t1: Herramientas digitales para la productividad ──

  {
    subtema_id: "au-67-t1-s1",
    tema_id: "au-67-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Revista escolar digital",
    descripcion_breve:
      "Los estudiantes crean una revista escolar usando procesadores de texto y herramientas de presentación. Cada equipo aporta una sección: noticias, entrevistas, deportes, cultura. Aplican formato, imágenes y diseño.",
    producto_sugerido:
      "Revista digital de mínimo 8 páginas en Google Docs o Canva con secciones variadas y diseño cuidado",
    herramientas_sugeridas: ["Google Docs", "Canva", "Google Slides"],
    evidencias_que_cubre: ["AU-67-E1", "AU-67-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Manejo básico de teclado y ratón",
      "Noción de formato de texto (negrita, tamaño, color)",
    ],
  },
  {
    subtema_id: "au-67-t1-s2",
    tema_id: "au-67-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Encuesta escolar con hoja de cálculo",
    descripcion_breve:
      "Los estudiantes diseñan una encuesta sobre un tema de interés (comida favorita, uso de tecnología en casa, deporte preferido), recopilan datos y los organizan en una hoja de cálculo con gráficos básicos.",
    producto_sugerido:
      "Hoja de cálculo con datos tabulados, al menos 2 gráficos (barras y circular) y un párrafo de conclusiones",
    herramientas_sugeridas: ["Google Sheets", "Google Forms", "Google Slides para presentar resultados"],
    evidencias_que_cubre: ["AU-67-E1", "AU-67-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de encuesta y recolección de datos",
      "Manejo elemental de tablas",
    ],
  },
  {
    subtema_id: "au-67-t1-s3",
    tema_id: "au-67-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Afiche de campaña escolar en Canva",
    descripcion_breve:
      "Los estudiantes diseñan afiches para una campaña escolar (reciclaje, convivencia, lectura) usando herramientas de diseño gráfico en línea. Aplican principios básicos de diseño: contraste, alineación, jerarquía visual.",
    producto_sugerido:
      "Afiche digital listo para imprimir en tamaño carta, con texto legible, imágenes pertinentes y llamado a la acción",
    herramientas_sugeridas: ["Canva", "Google Slides como alternativa"],
    evidencias_que_cubre: ["AU-67-E1", "AU-67-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Acceso a un computador con internet",
      "Cuenta básica de Canva (gratuita)",
    ],
  },

  // ── au-67-t2: Ciudadanía digital ──

  {
    subtema_id: "au-67-t2-s1",
    tema_id: "au-67-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Mi perfil digital: lo que internet sabe de mí",
    descripcion_breve:
      "Los estudiantes reflexionan sobre su huella digital buscando (con supervisión) qué información suya existe en internet. Crean un mapa de su identidad digital y escriben compromisos de cuidado de su imagen en línea.",
    producto_sugerido:
      "Mapa de identidad digital personal (en Canva o cartulina) y carta de compromisos de privacidad firmada",
    herramientas_sugeridas: ["Canva", "Google Docs", "cartulina y marcadores"],
    evidencias_que_cubre: ["AU-67-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de internet y redes sociales",
      "Supervisión docente durante la actividad de búsqueda",
    ],
  },
  {
    subtema_id: "au-67-t2-s2",
    tema_id: "au-67-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Taller de contraseñas seguras y ciberseguridad básica",
    descripcion_breve:
      "Los estudiantes aprenden a crear contraseñas fuertes, identificar correos sospechosos (phishing) y configurar la privacidad de sus cuentas. Producen una guía visual de seguridad digital para compartir con sus familias.",
    producto_sugerido:
      "Guía visual de seguridad digital (tipo folleto tríptico) diseñada para compartir con familias",
    herramientas_sugeridas: ["Canva", "Google Docs", "papel para folleto"],
    evidencias_que_cubre: ["AU-67-E1", "AU-67-E3"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Tener al menos una cuenta de correo electrónico",
      "Concepto básico de contraseña",
    ],
  },
  {
    subtema_id: "au-67-t2-s3",
    tema_id: "au-67-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Dramatización de situaciones de convivencia digital",
    descripcion_breve:
      "Los equipos crean y representan sketches cortos sobre situaciones de ciberacoso, respeto en redes sociales y buen uso de grupos de chat. Después de cada dramatización, el grupo reflexiona y propone soluciones.",
    producto_sugerido:
      "Guion escrito del sketch, representación en clase y cartelera con reglas de convivencia digital del curso",
    herramientas_sugeridas: ["Google Docs para guion", "cartulina para cartelera", "cámara del celular para grabar opcional"],
    evidencias_que_cubre: ["AU-67-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Experiencia básica con redes sociales o grupos de chat",
      "Disposición para trabajo en equipo y dramatización",
    ],
  },

  // ── au-67-t3: Uso seguro de artefactos ──

  {
    subtema_id: "au-67-t3-s1",
    tema_id: "au-67-t3",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Manual de seguridad del aula de tecnología",
    descripcion_breve:
      "Los estudiantes identifican los riesgos del aula de tecnología (herramientas cortantes, electricidad, sustancias) y crean un manual ilustrado de normas de seguridad con pictogramas y señales de advertencia.",
    producto_sugerido:
      "Manual de seguridad ilustrado (impreso o digital) con pictogramas, normas y procedimientos de emergencia",
    herramientas_sugeridas: ["Canva", "Google Docs", "cartulina y marcadores para señales"],
    evidencias_que_cubre: ["AU-67-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Reconocimiento del aula de tecnología y sus herramientas",
      "Concepto de norma de seguridad",
    ],
  },
  {
    subtema_id: "au-67-t3-s2",
    tema_id: "au-67-t3",
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    nombre: "Calendario de mantenimiento preventivo de equipos",
    descripcion_breve:
      "Los estudiantes investigan las prácticas básicas de mantenimiento preventivo de computadores y equipos del aula (limpieza, organización de cables, revisión de software). Diseñan un calendario mensual de mantenimiento.",
    producto_sugerido:
      "Calendario mensual de mantenimiento preventivo en formato póster para el aula con responsables y actividades",
    herramientas_sugeridas: ["Google Sheets", "Canva", "cartulina para calendario mural"],
    evidencias_que_cubre: ["AU-67-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocimiento de las partes básicas de un computador",
      "Concepto de mantenimiento preventivo vs. correctivo",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Apropiación y uso de la tecnología — Grado 8-9
  // ════════════════════════════════════════════════════════════════

  // ── au-89-t1: Creación de contenido digital multimedia ──

  {
    subtema_id: "au-89-t1-s1",
    tema_id: "au-89-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Campaña visual para el colegio en redes sociales",
    descripcion_breve:
      "Los estudiantes diseñan una campaña visual (mínimo 5 piezas gráficas) para una causa del colegio: medio ambiente, lectura, deporte. Aplican principios de diseño gráfico y adaptan formatos para distintas plataformas.",
    producto_sugerido:
      "Kit de 5 piezas gráficas adaptadas a diferentes formatos (historia, publicación cuadrada, banner) con identidad visual coherente",
    herramientas_sugeridas: ["Canva", "Google Slides", "cámara del celular"],
    evidencias_que_cubre: ["AU-89-E1", "AU-89-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Manejo básico de Canva o herramienta de diseño",
      "Concepto de público objetivo y mensaje",
    ],
  },
  {
    subtema_id: "au-89-t1-s2",
    tema_id: "au-89-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Podcast escolar: voces de mi comunidad",
    descripcion_breve:
      "Cada equipo produce un episodio de podcast (5-8 minutos) donde entrevistan a un miembro de la comunidad educativa sobre un tema relevante. Aprenden guion, grabación con celular, edición básica y publicación.",
    producto_sugerido:
      "Episodio de podcast editado (5-8 min) con introducción, entrevista, cierre y música libre de derechos",
    herramientas_sugeridas: ["grabadora del celular", "Audacity o GarageBand", "Anchor/Spotify for Podcasters", "Google Docs para guion"],
    evidencias_que_cubre: ["AU-89-E1", "AU-89-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Técnicas básicas de entrevista",
      "Acceso a celular con grabadora de voz",
    ],
  },
  {
    subtema_id: "au-89-t1-s3",
    tema_id: "au-89-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Video tutorial: algo que sé hacer bien",
    descripcion_breve:
      "Cada estudiante produce un video tutorial corto enseñando algo que domina (receta, truco de estudio, manualidad, deporte). Aprenden planeación, grabación con celular, edición básica y narrativa audiovisual.",
    producto_sugerido:
      "Video tutorial de 2-4 minutos con título, pasos claros, texto en pantalla y cierre, editado con herramienta gratuita",
    herramientas_sugeridas: ["cámara del celular", "CapCut", "Canva para miniaturas", "Google Docs para guion"],
    evidencias_que_cubre: ["AU-89-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Manejo básico de cámara del celular",
      "Concepto de secuencia narrativa",
    ],
  },

  // ── au-89-t2: Alfabetización informacional ──

  {
    subtema_id: "au-89-t2-s1",
    tema_id: "au-89-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Reto detective digital: evaluar fuentes de información",
    descripcion_breve:
      "Los estudiantes reciben un conjunto de noticias (reales y falsas) y deben aplicar técnicas de verificación (búsqueda inversa de imagen, triangulación de fuentes, verificación de autoría) para determinar cuáles son confiables.",
    producto_sugerido:
      "Informe de verificación con al menos 6 noticias analizadas, criterios usados y veredicto justificado",
    herramientas_sugeridas: ["Google Search", "Google Reverse Image Search", "Google Docs", "Canva para presentación"],
    evidencias_que_cubre: ["AU-89-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Manejo básico de buscadores",
      "Concepto de fuente primaria y secundaria",
    ],
  },
  {
    subtema_id: "au-89-t2-s2",
    tema_id: "au-89-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Campaña contra la desinformación en mi colegio",
    descripcion_breve:
      "Los estudiantes investigan casos de desinformación que han afectado a Colombia (cadenas de WhatsApp, noticias falsas en elecciones) y crean material educativo para sus compañeros: infografías, carteles y una presentación.",
    producto_sugerido:
      "Kit anti-desinformación: 3 infografías con tips para verificar noticias y una presentación de 10 minutos para otro curso",
    herramientas_sugeridas: ["Canva", "Google Slides", "Google Docs"],
    evidencias_que_cubre: ["AU-89-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de desinformación y noticias falsas",
      "Conocimiento de redes sociales y mensajería",
    ],
  },
  {
    subtema_id: "au-89-t2-s3",
    tema_id: "au-89-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Taller de derechos de autor y Creative Commons",
    descripcion_breve:
      "Los estudiantes aprenden sobre derechos de autor, licencias Creative Commons y plagio. Practican buscando recursos libres (imágenes, música, fuentes) y crean un banco de recursos con licencia abierta para el colegio.",
    producto_sugerido:
      "Banco de recursos libres de derechos organizado por categorías en una carpeta compartida de Google Drive, con ficha de licencia para cada recurso",
    herramientas_sugeridas: ["Google Drive", "Google Sheets para inventario", "Pixabay", "Unsplash", "Free Music Archive"],
    evidencias_que_cubre: ["AU-89-E1", "AU-89-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto básico de propiedad intelectual",
      "Manejo de carpetas y archivos digitales",
    ],
  },

  // ── au-89-t3: Herramientas colaborativas en la nube ──

  {
    subtema_id: "au-89-t3-s1",
    tema_id: "au-89-t3",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Wiki colaborativa de saberes del curso",
    descripcion_breve:
      "El curso completo construye un documento colaborativo en tiempo real tipo wiki donde recopilan saberes de todas las áreas: resúmenes, fórmulas, fechas clave, vocabulario. Practican edición simultánea, comentarios y control de versiones.",
    producto_sugerido:
      "Documento colaborativo en Google Docs con al menos 20 entradas organizadas por área, editado por todos los estudiantes",
    herramientas_sugeridas: ["Google Docs", "Google Drive", "Google Sheets para índice"],
    evidencias_que_cubre: ["AU-89-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Cuenta de Google activa",
      "Manejo básico de Google Docs (editar, comentar, compartir)",
    ],
  },
  {
    subtema_id: "au-89-t3-s2",
    tema_id: "au-89-t3",
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    nombre: "Planificación de evento escolar con Trello o Google Sheets",
    descripcion_breve:
      "Los equipos planifican un evento escolar real (día de la ciencia, bazar, torneo deportivo) usando herramientas de gestión de proyectos. Asignan tareas, definen plazos, hacen seguimiento y presentan un reporte final.",
    producto_sugerido:
      "Tablero de gestión de proyecto completo (en Trello o Google Sheets) con tareas, responsables, plazos y estado, más un informe de cierre",
    herramientas_sugeridas: ["Trello (gratuito)", "Google Sheets", "Google Docs para informe", "Google Calendar"],
    evidencias_que_cubre: ["AU-89-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de proyecto y planificación",
      "Trabajo en equipo y asignación de roles",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Solución de problemas con tecnología — Grado 6-7
  // ════════════════════════════════════════════════════════════════

  // ── sp-67-t1: Proceso de diseño tecnológico ──

  {
    subtema_id: "sp-67-t1-s1",
    tema_id: "sp-67-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Detectives de necesidades: mapeo del colegio",
    descripcion_breve:
      "Los estudiantes recorren el colegio identificando problemas y necesidades reales (falta de sombra en el patio, desorden en casilleros, dificultad para reciclar). Documentan cada problema con foto, descripción y propuesta inicial.",
    producto_sugerido:
      "Mapa del colegio con al menos 8 problemas identificados, cada uno con foto, descripción del problema y boceto de solución inicial",
    herramientas_sugeridas: ["cámara del celular", "Google Docs", "Canva para mapa visual", "cartulina"],
    evidencias_que_cubre: ["SP-67-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de necesidad y problema tecnológico",
      "Capacidad de observación y registro",
    ],
  },
  {
    subtema_id: "sp-67-t1-s2",
    tema_id: "sp-67-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Del boceto al prototipo: organizador escolar",
    descripcion_breve:
      "A partir de una necesidad real identificada (organizar útiles, separar residuos, sostener celulares), los estudiantes siguen el proceso de diseño: boceto, selección de materiales, construcción del prototipo y presentación.",
    producto_sugerido:
      "Prototipo funcional en materiales reciclados acompañado de bitácora de diseño con bocetos, decisiones y mejoras",
    herramientas_sugeridas: ["materiales reciclados (cartón, botellas, tapas)", "regla y tijeras", "Google Docs para bitácora"],
    evidencias_que_cubre: ["SP-67-E1", "SP-67-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Técnicas básicas de bocetado",
      "Manejo seguro de herramientas de corte",
    ],
  },
  {
    subtema_id: "sp-67-t1-s3",
    tema_id: "sp-67-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Prueba y mejora: evaluación de prototipos entre pares",
    descripcion_breve:
      "Los equipos intercambian prototipos y los evalúan según criterios definidos (funcionalidad, resistencia, estética, costo). Cada equipo recibe retroalimentación y aplica al menos dos mejoras a su prototipo.",
    producto_sugerido:
      "Prototipo mejorado con tabla de evaluación completada y registro fotográfico del antes y después",
    herramientas_sugeridas: ["Google Sheets para tabla de evaluación", "cámara del celular", "materiales para mejoras"],
    evidencias_que_cubre: ["SP-67-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Tener un prototipo previo construido",
      "Concepto de criterios de evaluación",
    ],
  },

  // ── sp-67-t2: Pensamiento computacional ──

  {
    subtema_id: "sp-67-t2-s1",
    tema_id: "sp-67-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Reto de descomposición: planificar un evento paso a paso",
    descripcion_breve:
      "Los estudiantes eligen un evento (preparar un desayuno comunitario, organizar un campeonato, montar una obra de teatro) y lo descomponen en subproblemas. Para cada subproblema identifican tareas, recursos y responsables.",
    producto_sugerido:
      "Diagrama de descomposición del evento en al menos 4 niveles (evento → fases → tareas → pasos) presentado en cartulina o Canva",
    herramientas_sugeridas: ["Canva", "cartulina y post-its", "Google Docs"],
    evidencias_que_cubre: ["SP-67-E1", "SP-67-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de descomposición de problemas",
      "Experiencia en trabajo en equipo",
    ],
  },
  {
    subtema_id: "sp-67-t2-s2",
    tema_id: "sp-67-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Recetario algorítmico con diagramas de flujo",
    descripcion_breve:
      "Los estudiantes convierten recetas de cocina colombianas en algoritmos escritos y diagramas de flujo, incluyendo decisiones (¿está dorado? sí/no) y repeticiones (revolver 5 veces). Compilan un recetario algorítmico.",
    producto_sugerido:
      "Recetario con al menos 5 recetas colombianas convertidas en diagramas de flujo con símbolos estándar",
    herramientas_sugeridas: ["Google Drawings", "Canva", "lápiz y papel cuadriculado"],
    evidencias_que_cubre: ["SP-67-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Conocimiento de los símbolos básicos de un diagrama de flujo",
      "Concepto de secuencia, decisión y repetición",
    ],
  },
  {
    subtema_id: "sp-67-t2-s3",
    tema_id: "sp-67-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Historia interactiva en Scratch",
    descripcion_breve:
      "Los estudiantes programan una historia interactiva en Scratch donde el usuario toma decisiones que cambian el desarrollo de la trama. La historia se ambienta en un contexto colombiano (selva, ciudad, río, finca).",
    producto_sugerido:
      "Proyecto en Scratch publicado con historia interactiva de al menos 3 escenas y 2 puntos de decisión",
    herramientas_sugeridas: ["Scratch (scratch.mit.edu)", "Google Docs para guion previo"],
    evidencias_que_cubre: ["SP-67-E3"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Cuenta en Scratch",
      "Conocimiento de bloques básicos de Scratch (movimiento, apariencia, eventos)",
    ],
  },

  // ── sp-67-t3: Modelado y simulación ──

  {
    subtema_id: "sp-67-t3-s1",
    tema_id: "sp-67-t3",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Maqueta a escala de mi barrio ideal",
    descripcion_breve:
      "Los estudiantes diseñan y construyen una maqueta a escala de un barrio ideal que resuelva problemas de su comunidad (zonas verdes, movilidad, acceso a servicios). Trabajan con escala básica y materiales reciclados.",
    producto_sugerido:
      "Maqueta a escala en materiales reciclados con leyenda explicativa y justificación de cada decisión de diseño",
    herramientas_sugeridas: ["cartón", "materiales reciclados", "regla", "Google Docs para justificación escrita"],
    evidencias_que_cubre: ["SP-67-E1", "SP-67-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto básico de escala y proporción",
      "Manejo seguro de herramientas de corte",
    ],
  },
  {
    subtema_id: "sp-67-t3-s2",
    tema_id: "sp-67-t3",
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    nombre: "Simulación de ecosistema en Scratch",
    descripcion_breve:
      "Los estudiantes crean una simulación básica en Scratch de un ecosistema colombiano (páramo, manglar, selva) donde los animales se mueven, interactúan y responden a cambios del ambiente programados por el usuario.",
    producto_sugerido:
      "Proyecto en Scratch con simulación de un ecosistema colombiano con al menos 3 especies que interactúan",
    herramientas_sugeridas: ["Scratch (scratch.mit.edu)", "Google Docs para documentación del proyecto"],
    evidencias_que_cubre: ["SP-67-E2", "SP-67-E3"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento básico de Scratch (bloques de movimiento, apariencia, sensores)",
      "Concepto de ecosistema y cadena alimentaria",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Solución de problemas con tecnología — Grado 8-9
  // ════════════════════════════════════════════════════════════════

  // ── sp-89-t1: Diseño con restricciones ──

  {
    subtema_id: "sp-89-t1-s1",
    tema_id: "sp-89-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Reto de ingeniería con presupuesto limitado",
    descripcion_breve:
      "Los equipos reciben un desafío de diseño (construir un puente de palitos, un contenedor térmico, un filtro de agua) con restricciones de presupuesto simulado, materiales disponibles y tiempo. Documentan cada decisión técnica y económica.",
    producto_sugerido:
      "Prototipo funcional con tabla de costos, justificación de decisiones y prueba de rendimiento documentada",
    herramientas_sugeridas: ["materiales reciclados y de bajo costo", "Google Sheets para presupuesto", "cámara del celular para documentación"],
    evidencias_que_cubre: ["SP-89-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de restricción técnica y económica",
      "Habilidad de trabajo en equipo",
    ],
  },
  {
    subtema_id: "sp-89-t1-s2",
    tema_id: "sp-89-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Design thinking para un problema de mi colegio",
    descripcion_breve:
      "Los estudiantes aplican las 5 fases de design thinking (empatizar, definir, idear, prototipar, testear) para resolver un problema real del colegio. Realizan entrevistas, generan ideas con lluvia de ideas y construyen un prototipo.",
    producto_sugerido:
      "Portafolio de design thinking con evidencia de cada fase: mapa de empatía, definición del problema, mural de ideas, prototipo y resultados del testeo",
    herramientas_sugeridas: ["post-its", "cartulina", "Google Docs", "Canva para portafolio", "materiales de prototipado"],
    evidencias_que_cubre: ["SP-89-E1", "SP-89-E3"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Introducción al método design thinking",
      "Técnicas básicas de entrevista y observación",
    ],
  },
  {
    subtema_id: "sp-89-t1-s3",
    tema_id: "sp-89-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Matriz de decisión para elegir la mejor solución",
    descripcion_breve:
      "Los equipos generan 3 soluciones posibles a un problema tecnológico y las evalúan usando una matriz de decisión con criterios ponderados (costo, viabilidad, impacto ambiental, tiempo). Seleccionan y justifican la mejor opción.",
    producto_sugerido:
      "Matriz de decisión completada en Google Sheets con puntajes, ponderaciones y justificación escrita de la solución seleccionada",
    herramientas_sugeridas: ["Google Sheets", "Google Docs", "Canva para presentación de resultados"],
    evidencias_que_cubre: ["SP-89-E1", "SP-89-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de criterio de evaluación",
      "Manejo básico de hojas de cálculo",
    ],
  },

  // ── sp-89-t2: Programación y automatización ──

  {
    subtema_id: "sp-89-t2-s1",
    tema_id: "sp-89-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Mi primera página web con HTML y CSS",
    descripcion_breve:
      "Los estudiantes crean una página web sencilla sobre un tema de interés personal o comunitario usando HTML y CSS básicos. Aprenden estructura, etiquetas, estilos y publican en un servicio gratuito.",
    producto_sugerido:
      "Página web de una sola página con encabezado, secciones, imágenes, estilos CSS y publicada en línea (GitHub Pages o Neocities)",
    herramientas_sugeridas: ["editor de texto (VS Code o Notepad++)", "navegador web", "GitHub Pages o Neocities"],
    evidencias_que_cubre: ["SP-89-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Concepto de qué es una página web",
      "Manejo básico de archivos y carpetas",
    ],
  },
  {
    subtema_id: "sp-89-t2-s2",
    tema_id: "sp-89-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Automatización escolar con Google Forms y Sheets",
    descripcion_breve:
      "Los estudiantes identifican un proceso escolar repetitivo (control de asistencia, préstamo de libros, encuestas de satisfacción) y lo automatizan usando Google Forms vinculado a Google Sheets con fórmulas y formato condicional.",
    producto_sugerido:
      "Formulario funcional conectado a hoja de cálculo con al menos 3 automatizaciones (fórmulas, formato condicional, gráficos automáticos)",
    herramientas_sugeridas: ["Google Forms", "Google Sheets", "Google Docs para documentación"],
    evidencias_que_cubre: ["SP-89-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Manejo básico de Google Sheets",
      "Concepto de formulario digital",
    ],
  },
  {
    subtema_id: "sp-89-t2-s3",
    tema_id: "sp-89-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "App inventada: prototipo en papel y presentación digital",
    descripcion_breve:
      "Los estudiantes diseñan el concepto de una aplicación que resuelva un problema de su comunidad. Crean wireframes en papel, diseñan pantallas en Canva y presentan su propuesta como si fuera un pitch de emprendimiento.",
    producto_sugerido:
      "Prototipo de app con al menos 5 pantallas diseñadas, flujo de navegación y presentación tipo pitch de 5 minutos",
    herramientas_sugeridas: ["Canva para diseño de pantallas", "Google Slides para pitch", "papel y lápiz para wireframes"],
    evidencias_que_cubre: ["SP-89-E1", "SP-89-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Experiencia como usuario de aplicaciones móviles",
      "Concepto básico de interfaz de usuario",
    ],
  },

  // ── sp-89-t3: Robótica y electrónica básica ──

  {
    subtema_id: "sp-89-t3-s1",
    tema_id: "sp-89-t3",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Laboratorio de circuitos con materiales caseros",
    descripcion_breve:
      "Los estudiantes construyen circuitos básicos usando pilas, cables, LEDs y materiales conductores caseros (papel aluminio, grafito de lápiz). Experimentan con circuitos en serie y en paralelo, documentando resultados.",
    producto_sugerido:
      "Bitácora de laboratorio con al menos 4 circuitos construidos, diagramas esquemáticos y análisis comparativo serie vs. paralelo",
    herramientas_sugeridas: ["pilas AA", "LEDs", "cables con caimán", "papel aluminio", "Google Docs para bitácora"],
    evidencias_que_cubre: ["SP-89-E1", "SP-89-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto básico de electricidad (voltaje, corriente)",
      "Normas de seguridad eléctrica",
    ],
  },
  {
    subtema_id: "sp-89-t3-s2",
    tema_id: "sp-89-t3",
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    nombre: "Simulador de circuitos y programación con Tinkercad",
    descripcion_breve:
      "Los estudiantes usan Tinkercad Circuits (gratuito en línea) para diseñar y simular circuitos con Arduino virtual. Programan un semáforo, un sensor de luz o una alarma sin necesidad de hardware físico.",
    producto_sugerido:
      "Proyecto en Tinkercad con circuito simulado funcional, código explicado y presentación del funcionamiento",
    herramientas_sugeridas: ["Tinkercad Circuits (tinkercad.com)", "Google Docs para documentación", "Google Slides para presentación"],
    evidencias_que_cubre: ["SP-89-E2", "SP-89-E3"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Cuenta gratuita en Tinkercad",
      "Concepto básico de circuito eléctrico",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Tecnología y sociedad — Grado 6-7
  // ════════════════════════════════════════════════════════════════

  // ── ts-67-t1: Impacto ambiental de la tecnología ──

  {
    subtema_id: "ts-67-t1-s1",
    tema_id: "ts-67-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Campaña de reciclaje de residuos electrónicos",
    descripcion_breve:
      "Los estudiantes investigan qué son los RAEE (Residuos de Aparatos Eléctricos y Electrónicos), mapean puntos de recolección en su ciudad y diseñan una campaña de concientización para el colegio con afiches y charla informativa.",
    producto_sugerido:
      "Kit de campaña: 3 afiches informativos, mapa de puntos de recolección de RAEE en la ciudad y guion de charla de 10 minutos",
    herramientas_sugeridas: ["Canva", "Google Maps", "Google Slides", "cartulina para afiches"],
    evidencias_que_cubre: ["TS-67-E1", "TS-67-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de residuo electrónico",
      "Conocimiento básico de reciclaje",
    ],
  },
  {
    subtema_id: "ts-67-t1-s2",
    tema_id: "ts-67-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Calculadora de huella de carbono digital del curso",
    descripcion_breve:
      "Los estudiantes investigan cómo el uso de tecnología genera emisiones de carbono (streaming, correos, búsquedas). Recopilan datos del curso sobre uso digital y estiman la huella de carbono grupal con cálculos sencillos.",
    producto_sugerido:
      "Infografía con la huella de carbono digital estimada del curso, comparaciones visuales y 5 acciones concretas para reducirla",
    herramientas_sugeridas: ["Google Sheets para cálculos", "Canva para infografía", "calculadoras de huella en línea"],
    evidencias_que_cubre: ["TS-67-E1", "TS-67-E3"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de huella de carbono",
      "Manejo básico de hojas de cálculo",
    ],
  },
  {
    subtema_id: "ts-67-t1-s3",
    tema_id: "ts-67-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Feria de tecnologías verdes y sostenibles",
    descripcion_breve:
      "Cada equipo investiga una tecnología verde (paneles solares, biodigestores, filtros de agua caseros, estufas eficientes) relevante para Colombia y monta una estación de feria con modelo, explicación y beneficios ambientales.",
    producto_sugerido:
      "Estación de feria con maqueta o modelo funcional de la tecnología verde, ficha técnica y comparación con la alternativa convencional",
    herramientas_sugeridas: ["materiales reciclados", "Canva para fichas", "Google Slides para apoyo"],
    evidencias_que_cubre: ["TS-67-E1", "TS-67-E3"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de sostenibilidad ambiental",
      "Habilidad de investigación básica",
    ],
  },

  // ── ts-67-t2: Ética tecnológica ──

  {
    subtema_id: "ts-67-t2-s1",
    tema_id: "ts-67-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Juicio simulado: dilemas éticos de la tecnología",
    descripcion_breve:
      "Los estudiantes participan en juicios simulados sobre dilemas éticos tecnológicos (¿está bien que una cámara vigile el salón?, ¿debo compartir la foto de un compañero sin permiso?). Cada equipo asume roles: fiscal, defensor, juez, jurado.",
    producto_sugerido:
      "Expediente del caso con argumentos a favor y en contra, veredicto del jurado y reflexión escrita individual",
    herramientas_sugeridas: ["Google Docs para expediente", "cartulina para roles", "Google Slides para presentación de argumentos"],
    evidencias_que_cubre: ["TS-67-E1", "TS-67-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de dilema ético",
      "Habilidad de argumentación y escucha activa",
    ],
  },
  {
    subtema_id: "ts-67-t2-s2",
    tema_id: "ts-67-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Guía de privacidad y datos personales para adolescentes",
    descripcion_breve:
      "Los estudiantes investigan qué datos personales recopilan las apps más usadas por adolescentes colombianos (TikTok, Instagram, WhatsApp). Crean una guía práctica para proteger datos personales en lenguaje juvenil.",
    producto_sugerido:
      "Guía ilustrada de privacidad digital (formato revista o folleto) con tips concretos, capturas de pantalla de configuraciones de privacidad y glosario",
    herramientas_sugeridas: ["Canva", "Google Docs", "capturas de pantalla de apps"],
    evidencias_que_cubre: ["TS-67-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Uso personal de al menos una red social",
      "Concepto de dato personal y privacidad",
    ],
  },

  // ── ts-67-t3: Tecnología y comunidad ──

  {
    subtema_id: "ts-67-t3-s1",
    tema_id: "ts-67-t3",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Proyecto comunitario: solución tecnológica para el barrio",
    descripcion_breve:
      "Los equipos identifican un problema de su barrio o vereda (falta de señalización, necesidad de un tablero comunitario, huerta sin riego) y diseñan una propuesta de solución tecnológica sencilla con plano, materiales y presupuesto estimado.",
    producto_sugerido:
      "Propuesta de proyecto comunitario con diagnóstico del problema, solución propuesta, plano, lista de materiales y presupuesto estimado",
    herramientas_sugeridas: ["Google Docs", "Google Sheets para presupuesto", "Canva para plano", "cámara del celular para diagnóstico"],
    evidencias_que_cubre: ["TS-67-E1", "TS-67-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento de su barrio o comunidad",
      "Concepto de proyecto y presupuesto",
    ],
  },
  {
    subtema_id: "ts-67-t3-s2",
    tema_id: "ts-67-t3",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    nombre: "Mapa de la brecha digital en mi comunidad",
    descripcion_breve:
      "Los estudiantes diseñan y aplican una encuesta sencilla a familias y vecinos sobre acceso a tecnología (internet, computador, celular). Analizan los resultados y crean un mapa visual de la brecha digital en su entorno.",
    producto_sugerido:
      "Informe con resultados de la encuesta, mapa visual de acceso tecnológico en la comunidad y 3 propuestas para reducir la brecha",
    herramientas_sugeridas: ["Google Forms", "Google Sheets", "Canva para mapa e infografía", "Google Docs para informe"],
    evidencias_que_cubre: ["TS-67-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de brecha digital",
      "Habilidad de recolección de datos con encuesta",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Tecnología y sociedad — Grado 8-9
  // ════════════════════════════════════════════════════════════════

  // ── ts-89-t1: Transformaciones sociales por la tecnología ──

  {
    subtema_id: "ts-89-t1-s1",
    tema_id: "ts-89-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Periódico histórico: de la revolución industrial a la digital",
    descripcion_breve:
      "Cada equipo crea una edición de periódico ambientada en una época de transformación tecnológica (revolución industrial, era espacial, revolución digital). Incluyen noticias, editoriales, publicidades y caricaturas de la época.",
    producto_sugerido:
      "Periódico de 4 páginas (digital o impreso) ambientado en una época con noticias, editorial, publicidad y caricatura sobre el impacto social de la tecnología",
    herramientas_sugeridas: ["Canva", "Google Docs", "Google Slides"],
    evidencias_que_cubre: ["TS-89-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento de la revolución industrial y la era digital",
      "Habilidad de redacción periodística básica",
    ],
  },
  {
    subtema_id: "ts-89-t1-s2",
    tema_id: "ts-89-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Investigación: nuevas formas de trabajo digital en Colombia",
    descripcion_breve:
      "Los estudiantes investigan y entrevistan (si es posible) personas que trabajan en la economía digital (freelancers, rapitenderos, creadores de contenido, teleoperadores). Analizan ventajas, desventajas y derechos laborales.",
    producto_sugerido:
      "Informe de investigación con al menos 3 perfiles laborales digitales analizados, comparación con trabajo tradicional y conclusiones sobre derechos laborales",
    herramientas_sugeridas: ["Google Docs", "Google Forms para entrevistas", "Canva para infografía de resultados"],
    evidencias_que_cubre: ["TS-89-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de economía digital",
      "Técnicas básicas de investigación y entrevista",
    ],
  },
  {
    subtema_id: "ts-89-t1-s3",
    tema_id: "ts-89-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Simulación de elecciones digitales: redes sociales y participación",
    descripcion_breve:
      "Los estudiantes simulan un proceso electoral donde las campañas se hacen exclusivamente por redes sociales (simuladas en cartulina o Canva). Analizan el poder de las redes en la participación ciudadana y los riesgos de manipulación.",
    producto_sugerido:
      "Campaña electoral simulada (afiches, propuestas, slogans), acta de elección y ensayo reflexivo sobre redes sociales y democracia",
    herramientas_sugeridas: ["Canva", "Google Docs", "Google Forms para votación", "cartulina"],
    evidencias_que_cubre: ["TS-89-E1", "TS-89-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de democracia y participación ciudadana",
      "Experiencia con redes sociales",
    ],
  },

  // ── ts-89-t2: Ética de la inteligencia artificial ──

  {
    subtema_id: "ts-89-t2-s1",
    tema_id: "ts-89-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Cazadores de sesgos: analizando algoritmos",
    descripcion_breve:
      "Los estudiantes experimentan con herramientas de IA gratuitas (traductores, generadores de imágenes, buscadores) buscando evidencia de sesgos de género, raza o cultura. Documentan hallazgos y proponen correcciones.",
    producto_sugerido:
      "Informe de investigación con al menos 5 ejemplos documentados de sesgo algorítmico encontrados, capturas de pantalla como evidencia y propuestas de mitigación",
    herramientas_sugeridas: ["Google Translate", "herramientas de IA gratuitas", "Google Docs", "Canva para presentación"],
    evidencias_que_cubre: ["TS-89-E1", "TS-89-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de sesgo y discriminación",
      "Concepto básico de qué es un algoritmo",
    ],
  },
  {
    subtema_id: "ts-89-t2-s2",
    tema_id: "ts-89-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Debate: ¿debemos aceptar la vigilancia masiva por seguridad?",
    descripcion_breve:
      "Los estudiantes investigan casos de vigilancia tecnológica (cámaras con reconocimiento facial, rastreo de celulares, escáneres en aeropuertos) y participan en un debate estructurado sobre privacidad vs. seguridad.",
    producto_sugerido:
      "Dossier de investigación con 4 casos, argumentos estructurados a favor y en contra, y acta del debate con conclusiones del grupo",
    herramientas_sugeridas: ["Google Docs", "Google Slides para apoyo visual", "Canva para fichas de casos"],
    evidencias_que_cubre: ["TS-89-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de privacidad y vigilancia",
      "Habilidad de debate formal (turnos, argumentos, contra-argumentos)",
    ],
  },
  {
    subtema_id: "ts-89-t2-s3",
    tema_id: "ts-89-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Propuesta de regulación tecnológica para el colegio",
    descripcion_breve:
      "Los estudiantes actúan como un comité regulador y redactan una propuesta de normas para el uso responsable de IA y tecnología en el colegio (uso de ChatGPT en tareas, celulares en clase, cámaras de seguridad). Incluyen justificación ética.",
    producto_sugerido:
      "Documento de propuesta normativa con al menos 8 artículos, justificación ética de cada uno y mecanismo de seguimiento",
    herramientas_sugeridas: ["Google Docs", "Google Slides para sustentación", "Canva para resumen visual"],
    evidencias_que_cubre: ["TS-89-E2", "TS-89-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de regulación y norma",
      "Conocimiento del manual de convivencia del colegio",
    ],
  },

  // ── ts-89-t3: Desarrollo sostenible y tecnología ──

  {
    subtema_id: "ts-89-t3-s1",
    tema_id: "ts-89-t3",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Hackathon ODS: soluciones tecnológicas para mi comunidad",
    descripcion_breve:
      "Los equipos eligen un Objetivo de Desarrollo Sostenible (agua limpia, educación de calidad, acción por el clima) y diseñan una solución tecnológica viable para su comunidad. Presentan un pitch ante un panel evaluador.",
    producto_sugerido:
      "Propuesta de solución tecnológica para un ODS con análisis del problema, solución propuesta, plan de implementación y presentación pitch de 5 minutos",
    herramientas_sugeridas: ["Google Slides", "Canva", "Google Docs", "Google Sheets para plan"],
    evidencias_que_cubre: ["TS-89-E1", "TS-89-E3"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento básico de los ODS (Objetivos de Desarrollo Sostenible)",
      "Habilidad de presentación oral",
    ],
  },
  {
    subtema_id: "ts-89-t3-s2",
    tema_id: "ts-89-t3",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    nombre: "Taller de economía circular: segunda vida para la tecnología",
    descripcion_breve:
      "Los estudiantes recolectan aparatos electrónicos en desuso, investigan qué componentes se pueden reutilizar y diseñan un plan de economía circular para el colegio. Crean un punto de acopio y guía de reutilización.",
    producto_sugerido:
      "Plan de economía circular con inventario de aparatos recolectados, guía de reutilización de componentes y diseño del punto de acopio escolar",
    herramientas_sugeridas: ["Google Sheets para inventario", "Canva para guía visual", "Google Docs para plan", "cámara del celular"],
    evidencias_que_cubre: ["TS-89-E1", "TS-89-E3"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de economía circular y economía lineal",
      "Normas de seguridad para manipular aparatos electrónicos en desuso",
    ],
  },
];
