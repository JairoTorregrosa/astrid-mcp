import { PropuestaSubtema } from "./types";

/**
 * Catálogo enriquecido de propuestas de subtemas para el servidor MCP.
 *
 * Cada subtema de grados 4-5 tiene 2 propuestas concretas de proyectos
 * de aula no-code friendly, contextualizados para Colombia y pensados
 * para estudiantes de 9-11 años en instituciones con recursos limitados.
 *
 * Convención de IDs de evidencias:
 *   NT-45-E1, NT-45-E2, AU-45-E1, AU-45-E2, SP-45-E1, SP-45-E2,
 *   TS-45-E1, TS-45-E2
 */
export const SUBTEMAS_CATALOGO_45: PropuestaSubtema[] = [
  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Naturaleza y evolución de la tecnología — Grado 4-5
  // ════════════════════════════════════════════════════════════════

  // ── nt-45-t1: Procesos de producción ──

  // ── nt-45-t1-s1: De la materia prima al producto terminado ──

  {
    subtema_id: "nt-45-t1-s1",
    tema_id: "nt-45-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "El viaje del chocolate: de la finca al supermercado",
    descripcion_breve:
      "Los estudiantes investigan el proceso de producción del chocolate colombiano, desde la cosecha de cacao en fincas hasta el producto empaquetado. Representan cada etapa con dibujos, fotos recortadas y descripciones en un friso mural.",
    producto_sugerido:
      "Friso mural ilustrado (en papel kraft o cartulina) con al menos 6 etapas del proceso de producción del chocolate, cada una con imagen y texto explicativo",
    herramientas_sugeridas: ["cartulina y marcadores", "recortes de revistas", "Google Slides", "colores y pegamento"],
    evidencias_que_cubre: ["NT-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Lectura y escritura básica",
      "Concepto de materia prima",
    ],
  },
  {
    subtema_id: "nt-45-t1-s1",
    tema_id: "nt-45-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Fábrica de papel reciclado en el salón",
    descripcion_breve:
      "Los estudiantes fabrican hojas de papel reciclado usando periódico viejo, agua y un bastidor sencillo. Documentan el proceso paso a paso con fotos y descripciones, identificando las materias primas, las herramientas y el producto final.",
    producto_sugerido:
      "Hojas de papel reciclado elaboradas por cada equipo y un mini-álbum fotográfico (digital o físico) que documente el proceso de producción",
    herramientas_sugeridas: ["periódico viejo", "bastidor con malla", "recipiente con agua", "cámara del celular", "Google Docs"],
    evidencias_que_cubre: ["NT-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Lectura y escritura básica",
      "Capacidad de seguir instrucciones paso a paso",
    ],
  },

  // ── nt-45-t1-s2: Recursos naturales en la tecnología ──

  {
    subtema_id: "nt-45-t1-s2",
    tema_id: "nt-45-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Mapa de recursos: ¿de dónde vienen mis objetos?",
    descripcion_breve:
      "Los estudiantes eligen 5 objetos cotidianos (cuaderno, lápiz, cuchara, camiseta, ladrillo) e investigan qué recursos naturales se necesitan para fabricarlos. Crean un mapa ilustrado que conecte cada objeto con su recurso de origen.",
    producto_sugerido:
      "Mapa ilustrado en cartulina o Canva que relacione al menos 5 objetos cotidianos con los recursos naturales de los que provienen",
    herramientas_sugeridas: ["Canva", "cartulina y colores", "recortes de revistas", "Google Slides"],
    evidencias_que_cubre: ["NT-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de recurso natural",
      "Uso básico del computador",
    ],
  },
  {
    subtema_id: "nt-45-t1-s2",
    tema_id: "nt-45-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Exposición: tesoros naturales de Colombia en la tecnología",
    descripcion_breve:
      "Cada equipo investiga un recurso natural colombiano (carbón del Cesar, esmeraldas de Boyacá, caña del Valle, algodón del Tolima) y explica cómo se transforma en productos tecnológicos. Montan una estación de exposición con muestras y carteleras.",
    producto_sugerido:
      "Estación de exposición con cartelera informativa, muestra del recurso natural (o imagen) y ficha del producto tecnológico que se obtiene",
    herramientas_sugeridas: ["cartulina y marcadores", "muestras de materiales", "Canva para fichas", "Google Slides"],
    evidencias_que_cubre: ["NT-45-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Conocimiento básico de las regiones de Colombia",
      "Lectura y escritura básica",
    ],
  },

  // ── nt-45-t2: Fuentes de energía ──

  // ── nt-45-t2-s1: Energía en los artefactos: tipos y fuentes ──

  {
    subtema_id: "nt-45-t2-s1",
    tema_id: "nt-45-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Detectives de energía en mi casa",
    descripcion_breve:
      "Los estudiantes recorren su casa y clasifican los artefactos según el tipo de energía que usan: eléctrica, solar, de pilas, gas o fuerza humana. Presentan los resultados en un póster con dibujos y una tabla de clasificación.",
    producto_sugerido:
      "Póster ilustrado con tabla de clasificación de al menos 10 artefactos del hogar organizados por tipo de energía que utilizan",
    herramientas_sugeridas: ["cartulina y colores", "Google Slides", "cámara del celular", "Canva"],
    evidencias_que_cubre: ["NT-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto básico de energía",
      "Capacidad de observación y registro",
    ],
  },
  {
    subtema_id: "nt-45-t2-s1",
    tema_id: "nt-45-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Álbum de artefactos y sus fuentes de energía",
    descripcion_breve:
      "Los estudiantes crean un álbum colectivo donde cada página presenta un artefacto con su dibujo o fotografía, la fuente de energía que usa y una breve explicación de cómo la energía hace funcionar el artefacto.",
    producto_sugerido:
      "Álbum colectivo (digital en Google Slides o físico) con mínimo 12 artefactos, cada uno con imagen, fuente de energía y explicación",
    herramientas_sugeridas: ["Google Slides", "Canva", "colores y papel", "cámara del celular"],
    evidencias_que_cubre: ["NT-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Lectura y escritura básica",
      "Concepto de fuente de energía",
    ],
  },

  // ── nt-45-t2-s2: Máquinas simples y compuestas ──

  {
    subtema_id: "nt-45-t2-s2",
    tema_id: "nt-45-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Laboratorio de máquinas simples con materiales reciclados",
    descripcion_breve:
      "Los estudiantes construyen ejemplos funcionales de máquinas simples (palanca, polea, plano inclinado, rueda) con materiales reciclados. Prueban cada una levantando un objeto y registran cuánto esfuerzo se ahorra.",
    producto_sugerido:
      "Colección de al menos 3 máquinas simples funcionales construidas con materiales reciclados y una ficha por cada una con dibujo, nombre y para qué sirve",
    herramientas_sugeridas: ["cartón y palitos de paleta", "tapas plásticas", "hilo y carretes", "regla", "Google Docs para fichas"],
    evidencias_que_cubre: ["NT-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de máquina simple",
      "Manejo seguro de materiales de construcción básicos",
    ],
  },
  {
    subtema_id: "nt-45-t2-s2",
    tema_id: "nt-45-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    nombre: "Cazadores de máquinas simples en el colegio",
    descripcion_breve:
      "Los estudiantes recorren el colegio identificando máquinas simples ocultas en objetos cotidianos (tijeras = palanca, rampa de acceso = plano inclinado, carretilla = rueda con eje). Fotografían cada hallazgo y lo clasifican en un mural.",
    producto_sugerido:
      "Mural fotográfico con al menos 8 máquinas simples encontradas en el colegio, clasificadas por tipo con nombre y explicación de cómo funcionan",
    herramientas_sugeridas: ["cámara del celular", "cartulina y marcadores", "Google Slides", "Canva"],
    evidencias_que_cubre: ["NT-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Tipos de máquinas simples (palanca, polea, plano inclinado, rueda con eje, cuña, tornillo)",
      "Uso básico de cámara del celular",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Apropiación y uso de la tecnología — Grado 4-5
  // ════════════════════════════════════════════════════════════════

  // ── au-45-t1: Herramientas digitales para investigar ──

  // ── au-45-t1-s1: Búsqueda de información en internet ──

  {
    subtema_id: "au-45-t1-s1",
    tema_id: "au-45-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Mini-investigación: animales en peligro de Colombia",
    descripcion_breve:
      "Cada equipo elige un animal en peligro de extinción en Colombia (cóndor, delfín rosado, oso de anteojos, tortuga carey) y busca información en internet usando palabras clave. Presentan sus hallazgos en una ficha informativa ilustrada.",
    producto_sugerido:
      "Ficha informativa ilustrada (en Canva o cartulina) con datos del animal, hábitat, amenazas y una propuesta infantil para protegerlo",
    herramientas_sugeridas: ["Google Search", "Canva", "Google Docs", "cartulina y colores"],
    evidencias_que_cubre: ["AU-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Lectura y escritura básica",
      "Uso básico del navegador de internet",
    ],
  },
  {
    subtema_id: "au-45-t1-s1",
    tema_id: "au-45-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Reto de palabras clave: encontrar la información correcta",
    descripcion_breve:
      "Los estudiantes practican buscar información en internet usando diferentes palabras clave para un mismo tema. Comparan los resultados y aprenden a elegir las mejores palabras clave. Registran sus hallazgos en una tabla comparativa.",
    producto_sugerido:
      "Tabla comparativa (en Google Docs o cuaderno) con 5 búsquedas realizadas, palabras clave usadas, resultados obtenidos y evaluación de cuál fue más efectiva",
    herramientas_sugeridas: ["Google Search", "Google Docs", "cuaderno y lápiz"],
    evidencias_que_cubre: ["AU-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Lectura y escritura básica",
      "Uso básico del teclado y el navegador",
    ],
  },

  // ── au-45-t1-s2: Organizar información con mapas mentales digitales ──

  {
    subtema_id: "au-45-t1-s2",
    tema_id: "au-45-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Mapa mental digital: todo sobre mi municipio",
    descripcion_breve:
      "Los estudiantes investigan su municipio (historia, economía, tradiciones, lugares importantes) y organizan la información en un mapa mental digital. Aprenden a jerarquizar ideas, usar colores y conectar conceptos relacionados.",
    producto_sugerido:
      "Mapa mental digital (en Canva o Google Slides) o en cartulina con al menos 4 ramas principales sobre el municipio y 3 sub-ramas cada una",
    herramientas_sugeridas: ["Canva", "Google Slides", "cartulina y colores", "Google Search para investigar"],
    evidencias_que_cubre: ["AU-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de mapa mental (idea central y ramas)",
      "Uso básico del computador",
    ],
  },
  {
    subtema_id: "au-45-t1-s2",
    tema_id: "au-45-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Organizando lo que aprendí: mapa mental de un tema de ciencias",
    descripcion_breve:
      "Los estudiantes eligen un tema que estén estudiando en ciencias naturales (el sistema solar, los estados de la materia, el ciclo del agua) y crean un mapa mental digital para organizar y presentar la información de forma visual.",
    producto_sugerido:
      "Mapa mental digital en Google Slides o Canva con idea central, al menos 4 ramas con conceptos clave e imágenes de apoyo",
    herramientas_sugeridas: ["Google Slides", "Canva", "Google Search para imágenes libres", "colores y papel como borrador"],
    evidencias_que_cubre: ["AU-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de mapa mental",
      "Manejo básico de Google Slides o Canva",
    ],
  },

  // ── au-45-t2: Partes y funciones de artefactos ──

  // ── au-45-t2-s1: Componentes de un computador ──

  {
    subtema_id: "au-45-t2-s1",
    tema_id: "au-45-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Rompecabezas del computador: arma tu propia máquina",
    descripcion_breve:
      "Los estudiantes dibujan y recortan las partes principales del computador (monitor, CPU, teclado, ratón, parlantes) en cartulina. Arman un rompecabezas donde cada pieza tiene el nombre y la función escrita al respaldo. Presentan su computador armado.",
    producto_sugerido:
      "Rompecabezas en cartulina de un computador con al menos 6 partes identificadas, cada una con nombre y función escritos",
    herramientas_sugeridas: ["cartulina y colores", "tijeras y pegamento", "Google Slides para modelo de referencia"],
    evidencias_que_cubre: ["AU-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Contacto previo con un computador",
      "Habilidad básica de recortar y pegar",
    ],
  },
  {
    subtema_id: "au-45-t2-s1",
    tema_id: "au-45-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Noticiero tecnológico: reporteros del computador",
    descripcion_breve:
      "Cada equipo prepara un segmento de noticiero donde un reportero presenta una parte del computador: qué es, para qué sirve y qué pasaría si no la tuviera. Graban con celular o presentan en vivo ante el curso.",
    producto_sugerido:
      "Presentación en vivo o video corto (1-2 min por equipo) tipo noticiero donde cada grupo explica una parte del computador con apoyo visual",
    herramientas_sugeridas: ["cámara del celular", "Google Slides para gráficos", "cartulina para letreros", "Canva"],
    evidencias_que_cubre: ["AU-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Nombres básicos de las partes del computador",
      "Habilidad de expresión oral",
    ],
  },

  // ── au-45-t2-s2: Periféricos de entrada y salida ──

  {
    subtema_id: "au-45-t2-s2",
    tema_id: "au-45-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Clasificando periféricos: ¿entra o sale la información?",
    descripcion_breve:
      "Los estudiantes manipulan los periféricos del aula de informática e identifican cuáles son de entrada (teclado, ratón, micrófono) y cuáles de salida (monitor, parlantes, impresora). Crean un cartel clasificatorio con dibujos y ejemplos.",
    producto_sugerido:
      "Cartel clasificatorio dividido en dos columnas (entrada y salida) con al menos 4 periféricos por columna, cada uno con dibujo y función",
    herramientas_sugeridas: ["cartulina y marcadores", "Google Slides", "Canva", "periféricos del aula para observación"],
    evidencias_que_cubre: ["AU-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de entrada y salida de información",
      "Contacto previo con periféricos del computador",
    ],
  },
  {
    subtema_id: "au-45-t2-s2",
    tema_id: "au-45-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    nombre: "Inventando el periférico del futuro",
    descripcion_breve:
      "Los estudiantes inventan un periférico que no existe: dibujan su diseño, explican si es de entrada o salida, describen su función y lo construyen con materiales reciclados. Presentan su invento en una mini-feria del salón.",
    producto_sugerido:
      "Prototipo en materiales reciclados del periférico inventado con ficha técnica (nombre, tipo, función, dibujo del diseño original)",
    herramientas_sugeridas: ["materiales reciclados (cartón, tapas, botellas)", "colores y marcadores", "Google Docs para ficha técnica", "Canva"],
    evidencias_que_cubre: ["AU-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Diferencia entre periférico de entrada y de salida",
      "Habilidad de manualidades básicas",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Solución de problemas con tecnología — Grado 4-5
  // ════════════════════════════════════════════════════════════════

  // ── sp-45-t1: Comparar soluciones ──

  // ── sp-45-t1-s1: Ventajas y desventajas de artefactos ──

  {
    subtema_id: "sp-45-t1-s1",
    tema_id: "sp-45-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Duelo de artefactos: ¿cuál es mejor y por qué?",
    descripcion_breve:
      "Los estudiantes comparan pares de artefactos que cumplen la misma función (escoba vs. aspiradora, carta vs. correo electrónico, bicicleta vs. moto). Identifican ventajas y desventajas de cada uno y presentan su análisis en un cuadro comparativo.",
    producto_sugerido:
      "Cuadro comparativo ilustrado (en cartulina o Google Slides) con al menos 3 pares de artefactos, sus ventajas, desventajas y una recomendación argumentada",
    herramientas_sugeridas: ["Google Slides", "cartulina y marcadores", "Canva", "colores"],
    evidencias_que_cubre: ["SP-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de ventaja y desventaja",
      "Lectura y escritura básica",
    ],
  },
  {
    subtema_id: "sp-45-t1-s1",
    tema_id: "sp-45-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Catálogo de soluciones: artefactos de la cocina colombiana",
    descripcion_breve:
      "Los estudiantes investigan artefactos de cocina tradicionales y modernos usados en Colombia (molino de mano vs. licuadora, fogón de leña vs. estufa de gas). Crean un catálogo donde describen ventajas, desventajas y contextos de uso de cada uno.",
    producto_sugerido:
      "Catálogo ilustrado (digital o físico) con al menos 4 pares de artefactos de cocina comparados, con dibujos, ventajas y desventajas de cada uno",
    herramientas_sugeridas: ["Canva", "Google Docs", "colores y papel", "cámara del celular para fotos de artefactos reales"],
    evidencias_que_cubre: ["SP-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Conocimiento de artefactos del hogar",
      "Lectura y escritura básica",
    ],
  },

  // ── sp-45-t1-s2: Elegir la mejor solución según criterios ──

  {
    subtema_id: "sp-45-t1-s2",
    tema_id: "sp-45-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "El concurso de la mejor lonchera: eligiendo con criterios",
    descripcion_breve:
      "Los equipos diseñan una lonchera ideal usando criterios definidos (que mantenga la comida fresca, que sea liviana, que sea económica, que sea bonita). Evalúan los diseños de otros equipos con una tabla de puntos y eligen la mejor solución.",
    producto_sugerido:
      "Diseño de lonchera en cartulina o material reciclado con tabla de evaluación por criterios completada para al menos 3 propuestas del curso",
    herramientas_sugeridas: ["materiales reciclados (cartón, botellas)", "Google Sheets para tabla de puntos", "cartulina y colores", "Canva"],
    evidencias_que_cubre: ["SP-45-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de criterio de evaluación",
      "Habilidad de trabajo en equipo",
    ],
  },
  {
    subtema_id: "sp-45-t1-s2",
    tema_id: "sp-45-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Eligiendo la mejor mochila: tabla de decisión",
    descripcion_breve:
      "Los estudiantes analizan 3 mochilas diferentes (o las dibujan) y las evalúan según criterios: precio, resistencia, comodidad, número de bolsillos y diseño. Aprenden a usar una tabla de decisión sencilla para elegir la mejor opción con argumentos.",
    producto_sugerido:
      "Tabla de decisión (en Google Sheets o cuaderno) con 3 mochilas evaluadas en 5 criterios, puntaje total y justificación escrita de la elección",
    herramientas_sugeridas: ["Google Sheets", "cuaderno y lápiz", "Google Slides para presentar", "Canva"],
    evidencias_que_cubre: ["SP-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Suma y comparación de números",
      "Concepto de criterio de evaluación",
    ],
  },

  // ── sp-45-t2: Prototipos y modelos ──

  // ── sp-45-t2-s1: Diseño y construcción de maquetas ──

  {
    subtema_id: "sp-45-t2-s1",
    tema_id: "sp-45-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Maqueta de mi colegio soñado",
    descripcion_breve:
      "Los estudiantes diseñan en equipo la maqueta de un colegio ideal que resuelva problemas reales de su institución (falta de sombra, juegos en el recreo, huerta escolar). Primero hacen un boceto en papel y luego construyen la maqueta con materiales reciclados.",
    producto_sugerido:
      "Maqueta en materiales reciclados del colegio soñado con boceto previo, leyenda de cada zona y explicación oral de las mejoras propuestas",
    herramientas_sugeridas: ["cartón y materiales reciclados", "tijeras y pegamento", "colores y marcadores", "Google Docs para planeación"],
    evidencias_que_cubre: ["SP-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de boceto y plano sencillo",
      "Manejo seguro de tijeras y pegamento",
    ],
  },
  {
    subtema_id: "sp-45-t2-s1",
    tema_id: "sp-45-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Construyendo un puente resistente con palitos",
    descripcion_breve:
      "Los equipos diseñan y construyen un puente usando palitos de paleta y pegamento, siguiendo un proceso de diseño: boceto, construcción y prueba de resistencia colocando peso encima. Documentan su proceso y los resultados de la prueba.",
    producto_sugerido:
      "Puente construido con palitos de paleta que soporte al menos un objeto pequeño, acompañado de bitácora con boceto, fotos del proceso y resultados de la prueba",
    herramientas_sugeridas: ["palitos de paleta", "pegamento o silicona fría", "regla", "cámara del celular", "Google Docs para bitácora"],
    evidencias_que_cubre: ["SP-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de estructura y resistencia",
      "Habilidad de manualidades básicas",
    ],
  },

  // ── sp-45-t2-s2: Programación con bloques: proyectos interactivos ──

  {
    subtema_id: "sp-45-t2-s2",
    tema_id: "sp-45-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Mi primer juego en Scratch: atrapa las frutas colombianas",
    descripcion_breve:
      "Los estudiantes programan un juego sencillo en Scratch donde un personaje atrapa frutas colombianas (mango, lulo, guanábana) que caen de la pantalla. Aprenden a usar bloques de movimiento, eventos, puntuación y condicionales básicos.",
    producto_sugerido:
      "Proyecto en Scratch publicado con juego funcional de atrapar frutas que incluya puntaje, al menos 3 frutas diferentes y pantalla de inicio",
    herramientas_sugeridas: ["Scratch (scratch.mit.edu)", "Google Docs para planificar el juego"],
    evidencias_que_cubre: ["SP-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Cuenta en Scratch",
      "Conocimiento de bloques básicos de Scratch (movimiento, eventos)",
    ],
  },
  {
    subtema_id: "sp-45-t2-s2",
    tema_id: "sp-45-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    nombre: "Tarjeta animada en Scratch para una fecha especial",
    descripcion_breve:
      "Los estudiantes programan una tarjeta animada en Scratch para una fecha especial colombiana (Día de la Madre, Día del Profesor, fiestas del colegio). La tarjeta incluye personajes animados, texto, sonido y cambio de fondos.",
    producto_sugerido:
      "Proyecto en Scratch publicado con tarjeta animada que incluya al menos 2 personajes con animación, texto de mensaje, música y cambio de escenario",
    herramientas_sugeridas: ["Scratch (scratch.mit.edu)", "Google Docs para planificar el diseño"],
    evidencias_que_cubre: ["SP-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Cuenta en Scratch",
      "Conocimiento de bloques de apariencia y sonido en Scratch",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Tecnología y sociedad — Grado 4-5
  // ════════════════════════════════════════════════════════════════

  // ── ts-45-t1: Tecnología y medio ambiente ──

  // ── ts-45-t1-s1: Contaminación por artefactos tecnológicos ──

  {
    subtema_id: "ts-45-t1-s1",
    tema_id: "ts-45-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "¿A dónde va mi celular viejo? Rastreando la basura electrónica",
    descripcion_breve:
      "Los estudiantes investigan qué pasa con los aparatos electrónicos cuando dejan de funcionar: baterías, celulares, cargadores. Descubren cómo contaminan el agua y el suelo, y crean un afiche de concientización para el colegio.",
    producto_sugerido:
      "Afiche de concientización (en cartulina o Canva) sobre contaminación por basura electrónica con datos, dibujos y 3 acciones que los niños pueden hacer",
    herramientas_sugeridas: ["Canva", "cartulina y colores", "Google Search para investigar", "Google Slides"],
    evidencias_que_cubre: ["TS-45-E1", "TS-45-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Concepto de contaminación",
      "Lectura y escritura básica",
    ],
  },
  {
    subtema_id: "ts-45-t1-s1",
    tema_id: "ts-45-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Mural de impacto: cómo los artefactos afectan mi entorno",
    descripcion_breve:
      "Los estudiantes observan su barrio y colegio buscando evidencias de contaminación causada por artefactos tecnológicos (pilas tiradas, cables abandonados, humo de carros). Documentan con dibujos y fotos y crean un mural de impacto ambiental.",
    producto_sugerido:
      "Mural colectivo (en papel kraft) con fotos o dibujos de al menos 6 evidencias de contaminación tecnológica en el entorno cercano y propuestas de solución",
    herramientas_sugeridas: ["cámara del celular", "papel kraft y marcadores", "colores y pegamento", "Canva para fichas de apoyo"],
    evidencias_que_cubre: ["TS-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Capacidad de observación del entorno",
      "Concepto de impacto ambiental",
    ],
  },

  // ── ts-45-t1-s2: Reducir, reusar, reciclar en tecnología ──

  {
    subtema_id: "ts-45-t1-s2",
    tema_id: "ts-45-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Taller de las 3R tecnológicas: reducir, reusar, reciclar",
    descripcion_breve:
      "Los estudiantes aplican las 3R a objetos tecnológicos: reducen el uso innecesario de pilas, reusan un aparato viejo dándole un nuevo propósito y aprenden qué partes de un artefacto se pueden reciclar. Crean una guía ilustrada de las 3R tecnológicas.",
    producto_sugerido:
      "Guía ilustrada de las 3R tecnológicas (en Canva o cartulina) con ejemplos concretos de reducir, reusar y reciclar artefactos, más un objeto reusado como muestra",
    herramientas_sugeridas: ["Canva", "cartulina y colores", "aparatos en desuso para reusar", "Google Slides"],
    evidencias_que_cubre: ["TS-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de las 3R (reducir, reusar, reciclar)",
      "Habilidad de manualidades básicas",
    ],
  },
  {
    subtema_id: "ts-45-t1-s2",
    tema_id: "ts-45-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Campaña escolar: pilas y baterías al lugar correcto",
    descripcion_breve:
      "Los estudiantes investigan por qué las pilas no deben tirarse a la basura común y diseñan una campaña de recolección de pilas usadas para el colegio. Crean afiches, un punto de acopio y una presentación para los demás cursos.",
    producto_sugerido:
      "Kit de campaña: 2 afiches informativos, diseño del punto de acopio de pilas y presentación de 5 minutos para socializar en otros cursos",
    herramientas_sugeridas: ["Canva", "cartulina y marcadores", "Google Slides", "caja de cartón para punto de acopio"],
    evidencias_que_cubre: ["TS-45-E1", "TS-45-E2"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Concepto de residuos peligrosos",
      "Lectura y escritura básica",
    ],
  },

  // ── ts-45-t2: Tecnología en mi comunidad ──

  // ── ts-45-t2-s1: Cómo la tecnología mejora la vida en mi barrio ──

  {
    subtema_id: "ts-45-t2-s1",
    tema_id: "ts-45-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Reporteros del barrio: la tecnología que nos ayuda",
    descripcion_breve:
      "Los estudiantes actúan como reporteros y entrevistan a vecinos, tenderos y familiares sobre qué tecnologías han mejorado su vida (celular, nevera, transporte público, alumbrado). Compilan las entrevistas en un periódico mural.",
    producto_sugerido:
      "Periódico mural con al menos 5 entrevistas resumidas sobre tecnologías que mejoran la vida en el barrio, con dibujos o fotos y título llamativo",
    herramientas_sugeridas: ["cuaderno para entrevistas", "cartulina y marcadores", "Canva", "cámara del celular"],
    evidencias_que_cubre: ["TS-45-E1"],
    duracion_estimada_sesiones: 4,
    prerequisitos: [
      "Habilidad básica de entrevista (hacer preguntas)",
      "Lectura y escritura básica",
    ],
  },
  {
    subtema_id: "ts-45-t2-s1",
    tema_id: "ts-45-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Antes y después: mi barrio sin tecnología vs. con tecnología",
    descripcion_breve:
      "Los estudiantes imaginan cómo sería su barrio sin ciertos artefactos tecnológicos (sin luz eléctrica, sin teléfono, sin transporte motorizado). Dibujan el antes y el después y escriben cómo la tecnología cambió la vida de su comunidad.",
    producto_sugerido:
      "Cartelera dividida en dos mitades (antes y después) con dibujos comparativos de al menos 4 aspectos de la vida del barrio y un texto explicativo por cada uno",
    herramientas_sugeridas: ["cartulina y colores", "Google Slides", "Canva", "lápices y marcadores"],
    evidencias_que_cubre: ["TS-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Conocimiento de su barrio o vereda",
      "Lectura y escritura básica",
    ],
  },

  // ── ts-45-t2-s2: Oficios que usan tecnología ──

  {
    subtema_id: "ts-45-t2-s2",
    tema_id: "ts-45-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Galería de oficios tecnológicos de mi comunidad",
    descripcion_breve:
      "Los estudiantes investigan oficios de su comunidad que usan tecnología (panadero con horno, agricultor con sistema de riego, tendero con calculadora, conductor con GPS). Crean fichas ilustradas de cada oficio y las exhiben en una galería.",
    producto_sugerido:
      "Galería de fichas ilustradas (en cartulina o Canva) con al menos 6 oficios de la comunidad, la tecnología que usan y cómo les ayuda en su trabajo",
    herramientas_sugeridas: ["Canva", "cartulina y colores", "cámara del celular", "Google Docs para texto de fichas"],
    evidencias_que_cubre: ["TS-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Conocimiento de oficios de su comunidad",
      "Lectura y escritura básica",
    ],
  },
  {
    subtema_id: "ts-45-t2-s2",
    tema_id: "ts-45-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    nombre: "Entrevista a un trabajador: la tecnología en su oficio",
    descripcion_breve:
      "Cada estudiante entrevista a un trabajador de su familia o barrio (mecánico, costurera, vendedor, enfermero) y le pregunta qué artefactos tecnológicos usa, cómo le facilitan el trabajo y cuál es el más importante. Presentan la entrevista en clase.",
    producto_sugerido:
      "Informe de entrevista (en Google Docs o cuaderno) con preguntas, respuestas y un dibujo del trabajador usando su artefacto tecnológico principal, presentado oralmente",
    herramientas_sugeridas: ["cuaderno y lápiz", "Google Docs", "colores para dibujo", "cámara del celular (opcional)"],
    evidencias_que_cubre: ["TS-45-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Habilidad básica de hacer preguntas y escuchar",
      "Lectura y escritura básica",
    ],
  },
];
