import { PropuestaSubtema } from "./types";

/**
 * Catalogo enriquecido de propuestas de subtemas para grados 10-11.
 *
 * Cada subtema tiene exactamente 2 propuestas de proyectos de aula
 * avanzados, contextualizados para Colombia, orientados a estudiantes
 * preuniversitarios (15-17 anos) con competencias de analisis de datos,
 * pensamiento critico, investigacion y herramientas avanzadas.
 *
 * Convencion de IDs de evidencias:
 *   NT-1011-E1, NT-1011-E2, AU-1011-E1, AU-1011-E2,
 *   SP-1011-E1, SP-1011-E2, TS-1011-E1, TS-1011-E2
 */
export const SUBTEMAS_CATALOGO_1011: PropuestaSubtema[] = [
  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Naturaleza y evolucion de la tecnologia — Grado 10-11
  // ════════════════════════════════════════════════════════════════

  // ── nt-1011-t1: Co-evolucion ciencia-tecnologia-sociedad ──

  // ── nt-1011-t1-s1: Casos historicos de convergencia CTS ──

  {
    subtema_id: "nt-1011-t1-s1",
    tema_id: "nt-1011-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Documental investigativo: hitos de convergencia CTS en Colombia y el mundo",
    descripcion_breve:
      "Los estudiantes seleccionan tres casos historicos donde ciencia, tecnologia y sociedad convergieron de forma decisiva (la Revolucion Verde en la agricultura colombiana, la carrera espacial, la pandemia y las vacunas ARNm). Investigan fuentes primarias, construyen una narrativa audiovisual y analizan como cada avance cientifico transformo la sociedad y viceversa.",
    producto_sugerido:
      "Video documental de 8-10 minutos con narración, fuentes citadas, línea de tiempo interactiva en Google Slides y ensayo analítico de 800 palabras",
    herramientas_sugeridas: ["Google Docs", "Google Slides", "Canva para línea de tiempo", "cámara del celular", "CapCut"],
    evidencias_que_cubre: ["NT-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Habilidad de investigación con fuentes primarias y secundarias",
      "Conocimiento general de historia de la ciencia y la tecnología",
      "Manejo básico de edición de video",
    ],
  },
  {
    subtema_id: "nt-1011-t1-s1",
    tema_id: "nt-1011-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Museo virtual CTS: ciencia, tecnología y sociedad en interacción",
    descripcion_breve:
      "Cada equipo diseña una sala de un museo virtual dedicada a un caso emblemático de convergencia CTS (el descubrimiento de la penicilina y la industria farmacéutica, internet y la globalización, la energía nuclear y la geopolítica). Incluyen fichas de exhibición, análisis de actores sociales involucrados y reflexiones sobre lecciones aprendidas para Colombia.",
    producto_sugerido:
      "Presentación interactiva tipo museo virtual en Google Slides o Canva con mínimo 10 fichas de exhibición, mapa de actores y ensayo reflexivo",
    herramientas_sugeridas: ["Google Slides", "Canva", "Google Docs", "Notion para organización"],
    evidencias_que_cubre: ["NT-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Capacidad de análisis histórico y pensamiento sistémico",
      "Habilidad de síntesis y redacción argumentativa",
    ],
  },

  // ── nt-1011-t1-s2: Prospectiva tecnológica ──

  {
    subtema_id: "nt-1011-t1-s2",
    tema_id: "nt-1011-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Informe de prospectiva: Colombia 2040 y las tendencias tecnológicas",
    descripcion_breve:
      "Los equipos investigan tendencias tecnológicas globales (IA generativa, computación cuántica, biotecnología, energías renovables) y proyectan escenarios para Colombia en 2040. Utilizan la metodología de escenarios (optimista, pesimista, tendencial) y presentan sus hallazgos como un informe tipo think tank.",
    producto_sugerido:
      "Informe de prospectiva de 10 páginas en Google Docs con tres escenarios fundamentados, gráficos de tendencias y recomendaciones de política pública",
    herramientas_sugeridas: ["Google Docs", "Google Sheets para datos y gráficos", "Canva para infografías", "Google Slides para sustentación"],
    evidencias_que_cubre: ["NT-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Conocimiento de tendencias tecnológicas actuales",
      "Capacidad de análisis de datos y construcción de argumentos",
      "Manejo de hojas de cálculo para visualización de datos",
    ],
  },
  {
    subtema_id: "nt-1011-t1-s2",
    tema_id: "nt-1011-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Panel de expertos simulado: el futuro tecnológico de mi región",
    descripcion_breve:
      "Los estudiantes asumen roles de expertos (científico, empresario, líder comunitario, ambientalista, funcionario público) y participan en un panel simulado sobre el futuro tecnológico de su departamento. Cada panelista investiga a fondo su perspectiva y presenta proyecciones fundamentadas con datos reales.",
    producto_sugerido:
      "Dossier individual de investigación por rol, grabación del panel de 30 minutos y documento de síntesis con conclusiones consensuadas y disensos",
    herramientas_sugeridas: ["Google Docs", "Google Slides", "Google Sheets para datos regionales", "cámara del celular para grabación"],
    evidencias_que_cubre: ["NT-1011-E1", "NT-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Habilidad de investigación y argumentación",
      "Conocimiento del contexto socioeconómico de su región",
      "Experiencia en debate estructurado",
    ],
  },

  // ── nt-1011-t2: Sistemas complejos ──

  // ── nt-1011-t2-s1: Análisis de sistemas sociotécnicos ──

  {
    subtema_id: "nt-1011-t2-s1",
    tema_id: "nt-1011-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Radiografía de un sistema sociotécnico colombiano",
    descripcion_breve:
      "Los equipos seleccionan un sistema sociotécnico relevante para Colombia (el sistema de transporte masivo, la red de telecomunicaciones rurales, el sistema de salud digital) y elaboran un análisis multinivel identificando actores, tecnologías, regulaciones, flujos de información y puntos de falla. Presentan un diagrama de sistemas con recomendaciones de mejora.",
    producto_sugerido:
      "Diagrama de sistemas en Canva o Google Slides con mínimo 15 componentes interconectados, informe analítico de 6 páginas y presentación de hallazgos",
    herramientas_sugeridas: ["Google Docs", "Canva", "Google Slides", "Google Sheets para mapeo de actores"],
    evidencias_que_cubre: ["NT-1011-E1", "NT-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Concepto de sistema y pensamiento sistémico",
      "Conocimiento de la estructura institucional colombiana",
      "Manejo de herramientas de diagramación",
    ],
  },
  {
    subtema_id: "nt-1011-t2-s1",
    tema_id: "nt-1011-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Estudio de caso: colapsos y resiliencia en sistemas sociotécnicos",
    descripcion_breve:
      "Los estudiantes analizan casos reales donde sistemas sociotécnicos colapsaron o mostraron resiliencia (el apagón de Colombia en 1992, la caída global de Facebook en 2021, la respuesta tecnológica al COVID-19). Identifican las causas sistémicas, los efectos en cascada y las lecciones aprendidas para el diseño de sistemas más robustos.",
    producto_sugerido:
      "Estudio de caso de 8 páginas con análisis causa-efecto, diagrama de cascada de fallas, tabla comparativa de casos y propuesta de resiliencia aplicada a un sistema local",
    herramientas_sugeridas: ["Google Docs", "Google Sheets para tabla comparativa", "Canva para diagramas", "Google Slides para sustentación"],
    evidencias_que_cubre: ["NT-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de resiliencia y vulnerabilidad sistémica",
      "Habilidad de análisis causa-efecto",
      "Manejo de fuentes de información confiables",
    ],
  },

  // ── nt-1011-t2-s2: Interacción humano-computador ──

  {
    subtema_id: "nt-1011-t2-s2",
    tema_id: "nt-1011-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Auditoría UX de una plataforma educativa colombiana",
    descripcion_breve:
      "Los estudiantes realizan una auditoría de usabilidad (UX) de una plataforma educativa o servicio digital colombiano (Colombia Aprende, ICFES Interactivo, la página de la alcaldía local). Aplican heurísticas de Nielsen, realizan pruebas de usabilidad con compañeros y proponen mejoras de diseño con wireframes.",
    producto_sugerido:
      "Informe de auditoría UX con evaluación heurística, resultados de pruebas de usabilidad con 5 usuarios, wireframes de mejoras propuestas en Figma o Canva",
    herramientas_sugeridas: ["Figma (versión gratuita)", "Canva", "Google Docs", "Google Sheets para registro de pruebas", "Google Forms para encuesta de usabilidad"],
    evidencias_que_cubre: ["NT-1011-E1", "NT-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Concepto básico de usabilidad e interfaz de usuario",
      "Conocimiento de las heurísticas de Nielsen",
      "Experiencia como usuario de plataformas digitales",
    ],
  },
  {
    subtema_id: "nt-1011-t2-s2",
    tema_id: "nt-1011-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    nombre: "Prototipo de interfaz accesible: diseño para todos",
    descripcion_breve:
      "Los equipos investigan principios de diseño universal y accesibilidad digital (WCAG) y diseñan el prototipo de una interfaz accesible para una aplicación educativa que considere usuarios con discapacidad visual, auditiva o motriz. Realizan pruebas con simuladores de accesibilidad.",
    producto_sugerido:
      "Prototipo de interfaz en Figma o Canva con al menos 6 pantallas, documento de principios de accesibilidad aplicados y video de demostración de 3 minutos",
    herramientas_sugeridas: ["Figma (versión gratuita)", "Canva", "Google Docs", "simuladores de accesibilidad en línea"],
    evidencias_que_cubre: ["NT-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de accesibilidad y diseño universal",
      "Manejo básico de herramientas de prototipado (Figma o Canva)",
      "Sensibilidad hacia la inclusión y diversidad funcional",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Apropiación y uso de la tecnología — Grado 10-11
  // ════════════════════════════════════════════════════════════════

  // ── au-1011-t1: Herramientas avanzadas de productividad ──

  // ── au-1011-t1-s1: Automatización de flujos de trabajo ──

  {
    subtema_id: "au-1011-t1-s1",
    tema_id: "au-1011-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Automatización del seguimiento académico con Google Sheets y Forms",
    descripcion_breve:
      "Los estudiantes diseñan un sistema automatizado de seguimiento académico para un curso usando Google Forms para capturar datos y Google Sheets con fórmulas avanzadas (BUSCARV, SI.CONJUNTO, formato condicional, tablas dinámicas) para generar reportes automáticos de rendimiento, alertas de riesgo y gráficos de tendencia.",
    producto_sugerido:
      "Sistema funcional con formulario de entrada, hoja de cálculo con mínimo 5 automatizaciones (fórmulas avanzadas, formato condicional, gráficos dinámicos) y manual de usuario de una página",
    herramientas_sugeridas: ["Google Forms", "Google Sheets con fórmulas avanzadas", "Google Docs para manual", "Google Slides para demostración"],
    evidencias_que_cubre: ["AU-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Manejo intermedio de Google Sheets (fórmulas básicas, gráficos)",
      "Concepto de automatización de procesos",
      "Experiencia con Google Forms",
    ],
  },
  {
    subtema_id: "au-1011-t1-s1",
    tema_id: "au-1011-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Tablero de gestión de proyectos con Trello y flujos automatizados",
    descripcion_breve:
      "Los equipos configuran un espacio de gestión de proyectos en Trello (o Notion) para un proyecto escolar real, definiendo tableros, listas, etiquetas, fechas límite y automatizaciones con Butler (reglas automáticas). Documentan el flujo de trabajo y demuestran cómo la herramienta mejora la productividad del equipo.",
    producto_sugerido:
      "Tablero de Trello funcional con al menos 3 automatizaciones Butler, flujo de trabajo documentado en Google Docs e informe comparativo de productividad antes/después",
    herramientas_sugeridas: ["Trello con Butler", "Notion como alternativa", "Google Docs para documentación", "Google Slides para presentación"],
    evidencias_que_cubre: ["AU-1011-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de gestión de proyectos y flujo de trabajo",
      "Experiencia básica con herramientas colaborativas en la nube",
      "Cuenta gratuita en Trello o Notion",
    ],
  },

  // ── au-1011-t1-s2: Análisis de datos con hojas de cálculo avanzadas ──

  {
    subtema_id: "au-1011-t1-s2",
    tema_id: "au-1011-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Dashboard de datos abiertos de Colombia",
    descripcion_breve:
      "Los estudiantes descargan un conjunto de datos abiertos del portal datos.gov.co (educación, salud, empleo, medio ambiente de su departamento) y construyen un dashboard analítico en Google Sheets con tablas dinámicas, gráficos avanzados y segmentadores. Interpretan los datos para proponer recomendaciones fundamentadas.",
    producto_sugerido:
      "Dashboard en Google Sheets con al menos 3 tablas dinámicas, 5 gráficos interactivos y un informe de hallazgos y recomendaciones de 4 páginas",
    herramientas_sugeridas: ["Google Sheets con tablas dinámicas", "datos.gov.co", "Google Docs para informe", "Google Slides para presentación"],
    evidencias_que_cubre: ["AU-1011-E1"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Manejo intermedio de hojas de cálculo (filtros, ordenar, gráficos básicos)",
      "Concepto de dato abierto y fuente oficial",
      "Capacidad de interpretación de datos cuantitativos",
    ],
  },
  {
    subtema_id: "au-1011-t1-s2",
    tema_id: "au-1011-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Análisis estadístico de una problemática local con hoja de cálculo",
    descripcion_breve:
      "Los equipos diseñan y aplican una encuesta sobre una problemática local (movilidad, seguridad alimentaria, acceso a salud), recolectan al menos 50 respuestas y realizan un análisis estadístico con Google Sheets: medidas de tendencia central, dispersión, correlaciones y gráficos de distribución. Presentan conclusiones con rigor estadístico.",
    producto_sugerido:
      "Hoja de cálculo con análisis estadístico completo (promedios, medianas, desviación estándar, correlación), 4 gráficos de distribución y presentación de conclusiones con intervalo de confianza explicado",
    herramientas_sugeridas: ["Google Forms para encuesta", "Google Sheets con funciones estadísticas", "Google Docs para informe", "Canva para infografía de resultados"],
    evidencias_que_cubre: ["AU-1011-E1"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Conocimiento básico de estadística descriptiva",
      "Manejo de Google Forms y Google Sheets",
      "Concepto de muestra y población",
    ],
  },

  // ── au-1011-t2: Ciberseguridad y gestión de identidad digital ──

  // ── au-1011-t2-s1: Protección de datos personales y encriptación ──

  {
    subtema_id: "au-1011-t2-s1",
    tema_id: "au-1011-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Taller de criptografía aplicada: del cifrado César al HTTPS",
    descripcion_breve:
      "Los estudiantes recorren la historia de la criptografía desde el cifrado César hasta los protocolos modernos (HTTPS, cifrado de extremo a extremo en WhatsApp). Realizan ejercicios prácticos de cifrado y descifrado, analizan cómo funciona la encriptación de sus datos cotidianos y elaboran una guía de protección de datos personales basada en la Ley 1581 de 2012 (Habeas Data).",
    producto_sugerido:
      "Guía ilustrada de protección de datos personales con explicación de cifrado, ejercicios resueltos, análisis de la Ley 1581 y recomendaciones prácticas para adolescentes",
    herramientas_sugeridas: ["Google Docs", "Google Slides", "Canva para guía visual", "herramientas de cifrado en línea para demostraciones"],
    evidencias_que_cubre: ["AU-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto básico de privacidad y datos personales",
      "Conocimiento elemental de qué es internet y cómo se transmite información",
      "Manejo de herramientas de investigación en línea",
    ],
  },
  {
    subtema_id: "au-1011-t2-s1",
    tema_id: "au-1011-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Auditoría de privacidad: ¿qué saben las apps sobre nosotros?",
    descripcion_breve:
      "Los equipos realizan una auditoría de privacidad de las 5 aplicaciones más usadas por estudiantes de su colegio. Revisan políticas de privacidad, permisos solicitados, datos recopilados y prácticas de compartición con terceros. Comparan sus hallazgos con los derechos establecidos en la Ley de Protección de Datos colombiana y proponen alternativas más respetuosas de la privacidad.",
    producto_sugerido:
      "Informe de auditoría de privacidad con tabla comparativa de 5 apps, análisis de cumplimiento legal, calificación de riesgo por app y recomendaciones publicadas como infografía para la comunidad educativa",
    herramientas_sugeridas: ["Google Docs", "Google Sheets para tabla comparativa", "Canva para infografía", "Google Slides para presentación"],
    evidencias_que_cubre: ["AU-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de política de privacidad y términos de servicio",
      "Conocimiento básico de la Ley 1581 de 2012",
      "Capacidad de lectura analítica de documentos legales",
    ],
  },

  // ── au-1011-t2-s2: Riesgos cibernéticos y prevención ──

  {
    subtema_id: "au-1011-t2-s2",
    tema_id: "au-1011-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Simulacro de ciberataque: identificación y respuesta ante amenazas",
    descripcion_breve:
      "Los estudiantes participan en un simulacro guiado donde deben identificar y responder a distintos tipos de ciberataques simulados (phishing, ingeniería social, ransomware, suplantación de identidad). Analizan casos reales de ciberataques en Colombia (como los ataques al sector salud y financiero) y elaboran un protocolo de respuesta ante incidentes para su institución educativa.",
    producto_sugerido:
      "Protocolo de respuesta ante incidentes cibernéticos para el colegio con clasificación de amenazas, procedimientos paso a paso, directorio de contactos y simulacro documentado",
    herramientas_sugeridas: ["Google Docs", "Google Slides", "Canva para infografías de amenazas", "Google Forms para evaluación del simulacro"],
    evidencias_que_cubre: ["AU-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento de tipos básicos de ciberamenazas",
      "Concepto de ingeniería social",
      "Manejo responsable de información sensible",
    ],
  },
  {
    subtema_id: "au-1011-t2-s2",
    tema_id: "au-1011-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    nombre: "Campaña de ciberseguridad para la comunidad educativa",
    descripcion_breve:
      "Los equipos investigan las amenazas cibernéticas más comunes que afectan a la comunidad educativa colombiana (estafas por WhatsApp, robo de cuentas en redes sociales, sextorsión). Diseñan y ejecutan una campaña de prevención con materiales diferenciados para estudiantes, docentes y padres de familia.",
    producto_sugerido:
      "Kit de campaña de ciberseguridad con 3 infografías por audiencia (estudiantes, docentes, padres), presentación de sensibilización de 15 minutos y checklist de seguridad digital para cada grupo",
    herramientas_sugeridas: ["Canva para infografías", "Google Slides para presentación", "Google Docs para checklists", "Google Forms para encuesta de impacto"],
    evidencias_que_cubre: ["AU-1011-E1", "AU-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento de amenazas cibernéticas actuales",
      "Habilidad de comunicación diferenciada por audiencia",
      "Experiencia con diseño de material informativo",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Solución de problemas con tecnología — Grado 10-11
  // ════════════════════════════════════════════════════════════════

  // ── sp-1011-t1: Proyectos tecnológicos integrales ──

  // ── sp-1011-t1-s1: Metodologías ágiles para proyectos escolares ──

  {
    subtema_id: "sp-1011-t1-s1",
    tema_id: "sp-1011-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Sprint escolar: gestión ágil de un proyecto tecnológico real",
    descripcion_breve:
      "Los equipos ejecutan un proyecto tecnológico real para el colegio (sistema de inventario de la biblioteca, directorio digital de servicios del barrio, banco de recursos de estudio) aplicando la metodología Scrum adaptada: definen product backlog, ejecutan sprints de una semana, realizan dailys de 5 minutos y retrospectivas. Documentan todo el proceso ágil.",
    producto_sugerido:
      "Producto tecnológico funcional (hoja de cálculo avanzada, sitio web básico o presentación interactiva) acompañado de portafolio Scrum con product backlog, evidencia de 3 sprints, actas de retrospectiva y burndown chart",
    herramientas_sugeridas: ["Trello para tablero Scrum", "Google Sheets para burndown chart", "Google Docs para actas", "Google Slides para demo del producto"],
    evidencias_que_cubre: ["SP-1011-E1", "SP-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Concepto básico de metodologías ágiles y Scrum",
      "Experiencia en trabajo en equipo con roles definidos",
      "Manejo de herramientas de gestión de tareas",
    ],
  },
  {
    subtema_id: "sp-1011-t1-s1",
    tema_id: "sp-1011-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Kanban en acción: optimización de un proceso escolar",
    descripcion_breve:
      "Los estudiantes identifican un proceso escolar ineficiente (entrega de trabajos, préstamo de materiales, organización de eventos) y lo rediseñan aplicando el método Kanban. Configuran un tablero visual, definen límites de trabajo en progreso (WIP), miden tiempos de ciclo y presentan un análisis de mejora con datos reales antes y después de la intervención.",
    producto_sugerido:
      "Tablero Kanban implementado (Trello o físico), informe de análisis con métricas de tiempo de ciclo antes/después, gráfico de flujo acumulado y propuesta de mejora continua",
    herramientas_sugeridas: ["Trello o tablero físico con post-its", "Google Sheets para métricas y gráficos", "Google Docs para informe", "Google Slides para sustentación"],
    evidencias_que_cubre: ["SP-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de flujo de trabajo y cuello de botella",
      "Manejo básico de herramientas de gestión visual",
      "Capacidad de recolección y análisis de datos cuantitativos",
    ],
  },

  // ── sp-1011-t1-s2: Desarrollo de aplicaciones con propósito social ──

  {
    subtema_id: "sp-1011-t1-s2",
    tema_id: "sp-1011-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "App social: del problema comunitario al prototipo funcional",
    descripcion_breve:
      "Los equipos identifican un problema real de su comunidad (acceso a información de salud, seguridad vial en zonas escolares, desperdicio de alimentos) y diseñan una aplicación con propósito social. Realizan investigación de usuarios, crean personas, diseñan la arquitectura de información, desarrollan wireframes y un prototipo de alta fidelidad con flujo de navegación completo.",
    producto_sugerido:
      "Prototipo de alta fidelidad en Figma con al menos 8 pantallas, documento de investigación de usuarios con 3 personas, mapa de arquitectura de información y video de demostración de 5 minutos",
    herramientas_sugeridas: ["Figma (versión gratuita)", "Google Docs para investigación", "Google Forms para encuestas de usuario", "Google Slides para pitch"],
    evidencias_que_cubre: ["SP-1011-E1"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Concepto de diseño centrado en el usuario",
      "Manejo básico de Figma o herramienta de prototipado",
      "Experiencia en investigación de campo",
    ],
  },
  {
    subtema_id: "sp-1011-t1-s2",
    tema_id: "sp-1011-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Sitio web comunitario con HTML, CSS y contenido local",
    descripcion_breve:
      "Los estudiantes desarrollan un sitio web informativo para una organización local (junta de acción comunal, biblioteca comunitaria, grupo ambiental, emprendimiento social del barrio). Aplican HTML y CSS básico, diseño responsive, accesibilidad web y contenido relevante para la comunidad. Publican el sitio en un servicio gratuito.",
    producto_sugerido:
      "Sitio web de al menos 4 páginas publicado en GitHub Pages o Neocities, con diseño responsive, contenido comunitario real, formulario de contacto y documentación técnica del proyecto",
    herramientas_sugeridas: ["editor de código (VS Code)", "GitHub Pages o Neocities", "Google Docs para contenido", "Canva para imágenes de apoyo"],
    evidencias_que_cubre: ["SP-1011-E1", "SP-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Conocimiento básico de HTML y CSS",
      "Concepto de estructura de un sitio web",
      "Conexión con una organización local dispuesta a colaborar",
    ],
  },

  // ── sp-1011-t2: Emprendimiento tecnológico ──

  // ── sp-1011-t2-s1: Modelo de negocio canvas para soluciones tecnológicas ──

  {
    subtema_id: "sp-1011-t2-s1",
    tema_id: "sp-1011-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Mi emprendimiento tech: Business Model Canvas para una solución digital",
    descripcion_breve:
      "Los equipos identifican una oportunidad de emprendimiento tecnológico en su contexto local (app de turismo rural, plataforma de trueque comunitario, servicio de tutorías en línea) y desarrollan un modelo de negocio completo usando el Business Model Canvas. Investigan el mercado, definen la propuesta de valor, identifican segmentos de cliente y proyectan ingresos y costos.",
    producto_sugerido:
      "Business Model Canvas completo en formato póster (Canva o cartulina), estudio de mercado de 3 páginas con datos locales, proyección financiera básica en Google Sheets y pitch de 5 minutos",
    herramientas_sugeridas: ["Canva para Business Model Canvas", "Google Sheets para proyección financiera", "Google Docs para estudio de mercado", "Google Slides para pitch"],
    evidencias_que_cubre: ["SP-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de emprendimiento y modelo de negocio",
      "Conocimiento del contexto económico local",
      "Habilidad de investigación de mercado básica",
    ],
  },
  {
    subtema_id: "sp-1011-t2-s1",
    tema_id: "sp-1011-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Análisis competitivo y propuesta de valor diferenciada",
    descripcion_breve:
      "Los estudiantes seleccionan un sector de la economía digital colombiana (e-commerce, edtech, fintech, agritech) y analizan al menos 3 empresas existentes usando el modelo Canvas. Identifican brechas en el mercado, diseñan una propuesta de valor diferenciada y la validan mediante entrevistas con potenciales usuarios de su comunidad.",
    producto_sugerido:
      "Análisis comparativo de 3 modelos de negocio en Google Sheets, mapa de brechas del mercado, propuesta de valor diferenciada en Canvas y reporte de validación con al menos 10 entrevistas",
    herramientas_sugeridas: ["Google Sheets para análisis comparativo", "Canva para Canvas", "Google Docs para reporte", "Google Forms para entrevistas estructuradas"],
    evidencias_que_cubre: ["SP-1011-E1", "SP-1011-E2"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de propuesta de valor y ventaja competitiva",
      "Manejo del Business Model Canvas",
      "Habilidad de entrevista y recolección de datos cualitativos",
    ],
  },

  // ── sp-1011-t2-s2: Prototipado y validación de MVP ──

  {
    subtema_id: "sp-1011-t2-s2",
    tema_id: "sp-1011-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Del Canvas al MVP: construcción y validación de un producto mínimo viable",
    descripcion_breve:
      "Los equipos toman su modelo de negocio y construyen un MVP (Producto Mínimo Viable) usando herramientas no-code o low-code: puede ser un prototipo funcional en Google Sheets, un sitio web en Google Sites, un formulario inteligente o una presentación interactiva. Validan el MVP con al menos 15 usuarios reales, recopilan métricas y pivotean según los resultados.",
    producto_sugerido:
      "MVP funcional (Google Sites, Sheets avanzado o prototipo Figma), reporte de validación con métricas de al menos 15 usuarios, análisis de resultados y plan de pivoteo o escalamiento",
    herramientas_sugeridas: ["Google Sites", "Google Sheets avanzado", "Figma", "Google Forms para métricas", "Google Docs para reporte"],
    evidencias_que_cubre: ["SP-1011-E1", "SP-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Modelo de negocio Canvas definido previamente",
      "Concepto de MVP y validación de hipótesis",
      "Manejo de al menos una herramienta no-code",
    ],
  },
  {
    subtema_id: "sp-1011-t2-s2",
    tema_id: "sp-1011-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    nombre: "Feria de emprendimiento: pitch day ante jurado",
    descripcion_breve:
      "Los equipos preparan una presentación profesional tipo pitch de inversión para su emprendimiento tecnológico. Incluyen problema, solución, mercado objetivo, modelo de negocio, MVP, métricas de validación, equipo y solicitud de recursos. Presentan ante un jurado compuesto por docentes, directivos o emprendedores locales invitados.",
    producto_sugerido:
      "Presentación pitch de 7 minutos en Google Slides con diseño profesional, one-pager del emprendimiento en Canva, demo del MVP y rúbrica de autoevaluación completada",
    herramientas_sugeridas: ["Google Slides para pitch", "Canva para one-pager", "Google Docs para guion", "Google Sheets para métricas de validación"],
    evidencias_que_cubre: ["SP-1011-E1", "SP-1011-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "MVP construido y validado previamente",
      "Habilidad de comunicación oral y presentación ejecutiva",
      "Conocimiento de estructura de un pitch de inversión",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Tecnología y sociedad — Grado 10-11
  // ════════════════════════════════════════════════════════════════

  // ── ts-1011-t1: Debates éticos contemporáneos ──

  // ── ts-1011-t1-s1: Ética de la IA generativa y deepfakes ──

  {
    subtema_id: "ts-1011-t1-s1",
    tema_id: "ts-1011-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Tribunal ético: juicio a la IA generativa",
    descripcion_breve:
      "Los estudiantes organizan un tribunal ético simulado donde la IA generativa (ChatGPT, DALL-E, deepfakes) es sometida a juicio. Asumen roles de fiscalía, defensa, testigos expertos, testigos afectados y jurado. Cada parte investiga a fondo casos reales de uso y abuso de IA generativa, con énfasis en el impacto sobre el contexto educativo y laboral colombiano.",
    producto_sugerido:
      "Expediente judicial completo con alegatos de cada parte (4 páginas mínimo), acta del tribunal, veredicto del jurado fundamentado y ensayo individual de reflexión ética de 500 palabras",
    herramientas_sugeridas: ["Google Docs para expedientes y alegatos", "Google Slides para presentación de evidencias", "Canva para fichas de casos", "cámara del celular para grabación del tribunal"],
    evidencias_que_cubre: ["TS-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Conocimiento de qué es la IA generativa y sus aplicaciones",
      "Concepto de ética y dilema moral",
      "Habilidad de argumentación y debate estructurado",
    ],
  },
  {
    subtema_id: "ts-1011-t1-s1",
    tema_id: "ts-1011-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Laboratorio de detección de deepfakes y desinformación generativa",
    descripcion_breve:
      "Los equipos investigan cómo funcionan los deepfakes y el contenido generado por IA, practican técnicas de detección (análisis de metadatos, inconsistencias visuales, verificación de fuentes) y crean un kit educativo para que otros estudiantes aprendan a identificar contenido manipulado. Analizan el impacto potencial en elecciones, reputación personal y confianza pública en Colombia.",
    producto_sugerido:
      "Kit de detección de deepfakes con guía de técnicas de verificación, 5 ejercicios prácticos con ejemplos, infografía de impacto en Colombia y presentación educativa de 15 minutos",
    herramientas_sugeridas: ["Google Docs", "Canva para infografías y guía", "Google Slides para presentación educativa", "herramientas de verificación en línea"],
    evidencias_que_cubre: ["TS-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de deepfake y contenido sintético",
      "Habilidad de verificación de información digital",
      "Pensamiento crítico ante medios digitales",
    ],
  },

  // ── ts-1011-t1-s2: Soberanía digital y geopolítica tecnológica ──

  {
    subtema_id: "ts-1011-t1-s2",
    tema_id: "ts-1011-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Ensayo investigativo: soberanía digital en América Latina",
    descripcion_breve:
      "Los estudiantes investigan el concepto de soberanía digital y analizan la dependencia tecnológica de Colombia y América Latina respecto a las grandes plataformas globales (Google, Meta, Amazon, Microsoft). Examinan iniciativas regionales de soberanía de datos, regulación tecnológica y desarrollo de infraestructura propia. Producen un ensayo argumentativo con rigor académico.",
    producto_sugerido:
      "Ensayo argumentativo de 1500 palabras con al menos 8 fuentes citadas (formato APA), mapa conceptual de dependencias tecnológicas de Colombia y propuesta de tres acciones para fortalecer la soberanía digital nacional",
    herramientas_sugeridas: ["Google Docs", "Google Scholar para búsqueda académica", "Canva para mapa conceptual", "Google Slides para sustentación oral"],
    evidencias_que_cubre: ["TS-1011-E1"],
    duracion_estimada_sesiones: 5,
    prerequisitos: [
      "Concepto de soberanía y geopolítica",
      "Habilidad de escritura argumentativa con citación",
      "Conocimiento del ecosistema tecnológico global",
    ],
  },
  {
    subtema_id: "ts-1011-t1-s2",
    tema_id: "ts-1011-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Simulación de cumbre: regulación tecnológica internacional",
    descripcion_breve:
      "Los estudiantes simulan una cumbre internacional sobre regulación tecnológica donde representan a diferentes países y organizaciones (Colombia, EE.UU., China, Unión Europea, ONU, sociedad civil). Debaten temas como gobernanza de la IA, protección de datos transfronteriza, impuestos digitales y acceso equitativo a la tecnología. Negocian y redactan una declaración conjunta.",
    producto_sugerido:
      "Dossier de posición por país/organización, grabación de la cumbre simulada, declaración conjunta negociada de al menos 10 artículos y reflexión individual sobre el proceso de negociación",
    herramientas_sugeridas: ["Google Docs para dossiers y declaración", "Google Slides para presentación de posiciones", "Canva para banderas e identidad visual", "cámara del celular para grabación"],
    evidencias_que_cubre: ["TS-1011-E1", "TS-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Conocimiento básico de relaciones internacionales y organismos multilaterales",
      "Habilidad de negociación y debate diplomático",
      "Comprensión de las regulaciones tecnológicas actuales (GDPR, AI Act)",
    ],
  },

  // ── ts-1011-t2: Proyectos de impacto social ──

  // ── ts-1011-t2-s1: Tecnología para la inclusión y accesibilidad ──

  {
    subtema_id: "ts-1011-t2-s1",
    tema_id: "ts-1011-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Diagnóstico de accesibilidad tecnológica en mi institución",
    descripcion_breve:
      "Los equipos realizan un diagnóstico integral de accesibilidad tecnológica de su institución educativa: evalúan la infraestructura digital (sitio web, plataformas), los espacios físicos con tecnología y las prácticas pedagógicas desde la perspectiva de estudiantes con discapacidad. Aplican estándares WCAG y normativa colombiana de inclusión para formular un plan de mejora.",
    producto_sugerido:
      "Informe de diagnóstico de accesibilidad con checklist de evaluación WCAG aplicado, hallazgos fotográficos, entrevistas con estudiantes y docentes, y plan de mejora priorizado con cronograma",
    herramientas_sugeridas: ["Google Docs para informe", "Google Sheets para checklist de evaluación", "cámara del celular para evidencias", "Google Slides para presentación ante directivos"],
    evidencias_que_cubre: ["TS-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Concepto de accesibilidad y diseño universal",
      "Conocimiento de la normativa colombiana sobre inclusión educativa",
      "Sensibilidad y respeto hacia la diversidad funcional",
    ],
  },
  {
    subtema_id: "ts-1011-t2-s1",
    tema_id: "ts-1011-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Prototipo de solución tecnológica inclusiva para mi comunidad",
    descripcion_breve:
      "Los equipos investigan una barrera de inclusión que afecta a personas con discapacidad o adultos mayores en su comunidad (acceso a información, movilidad, comunicación, trámites digitales) y diseñan un prototipo de solución tecnológica accesible. Validan su propuesta con usuarios reales de la población beneficiaria.",
    producto_sugerido:
      "Prototipo de solución inclusiva (wireframes en Figma, maqueta física o sistema en Google Sheets), reporte de validación con al menos 5 usuarios beneficiarios y video de presentación de 5 minutos",
    herramientas_sugeridas: ["Figma para prototipo digital", "Google Docs para investigación y reporte", "Google Forms para validación con usuarios", "Google Slides para presentación"],
    evidencias_que_cubre: ["TS-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Principios de diseño centrado en el usuario",
      "Conocimiento de barreras de accesibilidad comunes",
      "Conexión con una comunidad o población beneficiaria",
    ],
  },

  // ── ts-1011-t2-s2: Soluciones tecnológicas para los ODS ──

  {
    subtema_id: "ts-1011-t2-s2",
    tema_id: "ts-1011-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Proyecto ODS integral: tecnología al servicio de mi comunidad",
    descripcion_breve:
      "Los equipos seleccionan un ODS prioritario para su contexto local (agua limpia, educación de calidad, ciudades sostenibles, producción responsable) y diseñan un proyecto integral de impacto social que integre tecnología. Realizan diagnóstico comunitario, diseñan la solución, construyen un prototipo, validan con la comunidad y presentan ante un panel evaluador con indicadores de impacto medibles.",
    producto_sugerido:
      "Documento de proyecto integral con diagnóstico comunitario, marco del ODS, diseño de solución tecnológica, prototipo funcional, plan de implementación con indicadores de impacto y presentación ante panel evaluador",
    herramientas_sugeridas: ["Google Docs para documento de proyecto", "Google Sheets para indicadores y presupuesto", "Canva para material visual", "Google Slides para presentación ante panel", "Google Forms para diagnóstico comunitario"],
    evidencias_que_cubre: ["TS-1011-E1", "TS-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Conocimiento de los Objetivos de Desarrollo Sostenible y sus metas",
      "Habilidad de investigación comunitaria y diagnóstico participativo",
      "Experiencia previa en diseño de proyectos",
    ],
  },
  {
    subtema_id: "ts-1011-t2-s2",
    tema_id: "ts-1011-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    nombre: "Dashboard ODS local: datos para la acción comunitaria",
    descripcion_breve:
      "Los estudiantes recopilan y analizan datos locales relacionados con indicadores ODS de su municipio (cobertura de acueducto, tasa de deserción escolar, índice de reciclaje, acceso a internet). Construyen un dashboard interactivo en Google Sheets que permita a líderes comunitarios y funcionarios locales visualizar el estado actual y monitorear el progreso hacia las metas ODS.",
    producto_sugerido:
      "Dashboard interactivo en Google Sheets con al menos 8 indicadores ODS locales, gráficos dinámicos, semáforo de cumplimiento, fuentes de datos documentadas y propuesta de 5 acciones prioritarias",
    herramientas_sugeridas: ["Google Sheets con tablas dinámicas y gráficos", "datos.gov.co y fuentes municipales", "Google Docs para documentación", "Canva para infografía de resumen", "Google Slides para socialización con la comunidad"],
    evidencias_que_cubre: ["TS-1011-E1", "TS-1011-E2"],
    duracion_estimada_sesiones: 6,
    prerequisitos: [
      "Manejo avanzado de Google Sheets (tablas dinámicas, formato condicional)",
      "Conocimiento de los ODS y sus indicadores",
      "Capacidad de recolección e interpretación de datos cuantitativos",
    ],
  },
];
