import { PropuestaSubtema } from "./types";

/**
 * Catalogo enriquecido de propuestas de subtemas para grados 1-3.
 *
 * Cada subtema tiene 2 propuestas concretas de proyectos de aula
 * apropiados para ninos de 6-8 anos: manualidades, dibujo, recorte,
 * pegado, materiales reciclados y herramientas digitales muy sencillas
 * (ScratchJr, apps de dibujo). Contextualizados para Colombia.
 *
 * Convencion de IDs de evidencias:
 *   NT-13-E1, NT-13-E2, AU-13-E1, AU-13-E2, SP-13-E1, SP-13-E2,
 *   TS-13-E1, TS-13-E2
 */
export const SUBTEMAS_CATALOGO_13: PropuestaSubtema[] = [
  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Naturaleza y evolucion de la tecnologia — Grado 1-3
  // ════════════════════════════════════════════════════════════════

  // ── nt-13-t1: Artefactos de mi entorno ──

  // — nt-13-t1-s1: Artefactos del hogar y la escuela (propuesta A) —
  {
    subtema_id: "nt-13-t1-s1",
    tema_id: "nt-13-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Album de artefactos de mi casa y mi escuela",
    descripcion_breve:
      "Los estudiantes dibujan y colorean artefactos que encuentran en su hogar (licuadora, estufa, escoba) y en la escuela (tablero, sacapuntas, computador). Los recortan y pegan en un mini-album clasificandolos segun el lugar donde se usan y para que sirven.",
    producto_sugerido:
      "Mini-album en cartulina con al menos 8 artefactos dibujados, coloreados y clasificados por lugar (hogar / escuela) con una frase que explique para que sirve cada uno",
    herramientas_sugeridas: ["colores", "tijeras", "pegamento", "cartulina", "lapiz"],
    evidencias_que_cubre: ["NT-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber recortar con tijeras de punta redonda",
    ],
  },

  // — nt-13-t1-s1: Artefactos del hogar y la escuela (propuesta B) —
  {
    subtema_id: "nt-13-t1-s1",
    tema_id: "nt-13-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Loteria de artefactos cotidianos",
    descripcion_breve:
      "Los ninos crean un juego de loteria donde cada ficha tiene el dibujo de un artefacto del hogar o la escuela y una descripcion corta de su funcion. Juegan en grupos y al cantar cada ficha deben decir para que sirve el artefacto.",
    producto_sugerido:
      "Juego de loteria con al menos 12 fichas de artefactos dibujadas a mano, cada una con nombre y funcion, mas un tablon de juego por equipo",
    herramientas_sugeridas: ["cartulina", "colores", "marcadores", "tijeras", "regla"],
    evidencias_que_cubre: ["NT-13-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Reconocer artefactos comunes del entorno",
    ],
  },

  // — nt-13-t1-s2: Materiales con los que estan hechos (propuesta A) —
  {
    subtema_id: "nt-13-t1-s2",
    tema_id: "nt-13-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Collage de materiales: madera, metal, plastico y tela",
    descripcion_breve:
      "Los estudiantes recolectan muestras de materiales (retazos de tela, trozos de carton, tapas plasticas, papel aluminio) y crean un collage clasificandolos por tipo de material. Escriben al lado de cada grupo por que ese material se usa para ciertos artefactos.",
    producto_sugerido:
      "Collage en carton paja con muestras reales de al menos 4 tipos de materiales, cada grupo con rotulo y una oracion explicativa",
    herramientas_sugeridas: ["retazos de tela", "tapas plasticas", "papel aluminio", "carton", "pegamento", "marcadores"],
    evidencias_que_cubre: ["NT-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer los nombres de materiales basicos (madera, plastico, metal, tela)",
    ],
  },

  // — nt-13-t1-s2: Materiales con los que estan hechos (propuesta B) —
  {
    subtema_id: "nt-13-t1-s2",
    tema_id: "nt-13-t1",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Experimento tactil: adivina el material",
    descripcion_breve:
      "Los ninos participan en un juego sensorial donde tocan objetos sin verlos y deben adivinar de que material estan hechos. Luego dibujan cada objeto, escriben el material y explican por que creen que se fabrica con ese material.",
    producto_sugerido:
      "Ficha individual con al menos 6 objetos dibujados, material identificado y una razon de por que estan hechos de ese material",
    herramientas_sugeridas: ["objetos variados del salon", "bolsa o caja opaca", "colores", "lapiz", "hojas de papel"],
    evidencias_que_cubre: ["NT-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Distinguir texturas basicas (liso, rugoso, duro, blando)",
    ],
  },

  // ── nt-13-t2: Artefactos de antes y ahora ──

  // — nt-13-t2-s1: Evolucion de objetos cotidianos (propuesta A) —
  {
    subtema_id: "nt-13-t2-s1",
    tema_id: "nt-13-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Antes y ahora: mini-libro de objetos que cambiaron",
    descripcion_breve:
      "Cada estudiante elige 3 artefactos cotidianos (telefono, plancha, estufa) y dibuja como eran antes y como son ahora. Arman un mini-libro con paginas divididas en dos columnas: 'antes' y 'ahora', con una oracion sobre que cambio.",
    producto_sugerido:
      "Mini-libro de 6 paginas (portada + 3 artefactos + contraportada) con dibujos comparativos antes/ahora y frases descriptivas",
    herramientas_sugeridas: ["hojas de papel", "colores", "grapadora o hilo para encuadernar", "lapiz"],
    evidencias_que_cubre: ["NT-13-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Nocion de pasado y presente",
    ],
  },

  // — nt-13-t2-s1: Evolucion de objetos cotidianos (propuesta B) —
  {
    subtema_id: "nt-13-t2-s1",
    tema_id: "nt-13-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Cartelera linea del tiempo de un artefacto",
    descripcion_breve:
      "En grupos, los ninos eligen un artefacto (la bicicleta, la lampara, el reloj) y construyen una cartelera con una linea del tiempo sencilla pegando imagenes recortadas de revistas o dibujos propios que muestren como ha cambiado con el tiempo.",
    producto_sugerido:
      "Cartelera con linea del tiempo de un artefacto mostrando al menos 3 etapas de su evolucion con imagenes y frases cortas",
    herramientas_sugeridas: ["cartulina", "revistas para recortar", "tijeras", "pegamento", "marcadores"],
    evidencias_que_cubre: ["NT-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Comprender que los objetos cambian con el tiempo",
    ],
  },

  // — nt-13-t2-s2: Artefactos de los abuelos (propuesta A) —
  {
    subtema_id: "nt-13-t2-s2",
    tema_id: "nt-13-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Entrevista a mis abuelos: artefactos de su epoca",
    descripcion_breve:
      "Los estudiantes entrevistan a un abuelo, abuela o persona mayor de su comunidad preguntandole que artefactos usaban cuando eran ninos. Dibujan esos artefactos y los comparan con los que usan hoy. Presentan sus hallazgos al curso.",
    producto_sugerido:
      "Lamina con al menos 4 artefactos antiguos dibujados, su equivalente moderno y una frase del abuelo o abuela sobre como los usaban",
    herramientas_sugeridas: ["hojas de papel", "colores", "lapiz", "cartulina para la lamina final"],
    evidencias_que_cubre: ["NT-13-E1", "NT-13-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Capacidad de hacer preguntas sencillas a un adulto",
    ],
  },

  // — nt-13-t2-s2: Artefactos de los abuelos (propuesta B) —
  {
    subtema_id: "nt-13-t2-s2",
    tema_id: "nt-13-t2",
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    nombre: "Museo del salon: objetos antiguos y modernos",
    descripcion_breve:
      "El curso organiza un pequeno museo en el salon donde cada estudiante trae un objeto antiguo prestado por su familia (molinillo, plancha de carbon, radio viejo) o un dibujo del objeto. Crean fichas de museo con nombre, epoca y para que servia.",
    producto_sugerido:
      "Exposicion tipo museo con al menos 10 objetos o dibujos, cada uno con su ficha de museo (nombre, epoca, uso) escrita por los ninos",
    herramientas_sugeridas: ["objetos antiguos de la familia", "cartulina para fichas", "marcadores", "colores", "mesa de exposicion"],
    evidencias_que_cubre: ["NT-13-E1", "NT-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Pedir permiso en casa para traer o dibujar un objeto antiguo",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Apropiacion y uso de la tecnologia — Grado 1-3
  // ════════════════════════════════════════════════════════════════

  // ── au-13-t1: Uso seguro de herramientas ──

  // — au-13-t1-s1: Normas de seguridad con tijeras, pegamento y materiales (propuesta A) —
  {
    subtema_id: "au-13-t1-s1",
    tema_id: "au-13-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Cartelera de normas de seguridad del salon",
    descripcion_breve:
      "Los estudiantes ilustran las normas de seguridad para usar tijeras, pegamento, reglas y otros materiales del salon. Cada nino dibuja una norma y entre todos arman una cartelera grande con pictogramas de seguridad para colgar en el aula.",
    producto_sugerido:
      "Cartelera colectiva con al menos 8 normas de seguridad ilustradas con pictogramas hechos por los ninos, usando colores de alerta (rojo, amarillo, verde)",
    herramientas_sugeridas: ["cartulina grande", "colores", "marcadores", "tijeras de punta redonda", "pegamento"],
    evidencias_que_cubre: ["AU-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer las herramientas basicas del salon (tijeras, pegamento, regla)",
    ],
  },

  // — au-13-t1-s1: Normas de seguridad con tijeras, pegamento y materiales (propuesta B) —
  {
    subtema_id: "au-13-t1-s1",
    tema_id: "au-13-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Titeres de seguridad: el uso correcto de mis herramientas",
    descripcion_breve:
      "Los ninos crean titeres con bolsas de papel o medias y representan escenas cortas donde un personaje usa bien las herramientas y otro las usa mal. El publico (sus companeros) identifica el uso correcto y explica por que.",
    producto_sugerido:
      "Par de titeres por equipo y representacion de una escena de uso correcto e incorrecto de herramientas del salon (2-3 minutos por equipo)",
    herramientas_sugeridas: ["bolsas de papel", "marcadores", "lana", "pegamento", "retazos de tela"],
    evidencias_que_cubre: ["AU-13-E1"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Experiencia basica con manualidades (recortar, pegar)",
    ],
  },

  // — au-13-t1-s2: Cuidado del computador y tabletas (propuesta A) —
  {
    subtema_id: "au-13-t1-s2",
    tema_id: "au-13-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Guia ilustrada: asi cuido el computador",
    descripcion_breve:
      "Los estudiantes aprenden reglas basicas de cuidado del computador y las tabletas (no comer cerca, manos limpias, no jalar cables, cerrar programas antes de apagar). Cada nino dibuja una regla y juntos arman una guia ilustrada para el aula de informatica.",
    producto_sugerido:
      "Guia ilustrada tamano carta con al menos 6 reglas de cuidado del computador dibujadas y coloreadas por los ninos, para pegar junto a los equipos",
    herramientas_sugeridas: ["hojas de papel", "colores", "marcadores", "grapadora para armar la guia"],
    evidencias_que_cubre: ["AU-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Haber visto un computador o tableta al menos una vez",
    ],
  },

  // — au-13-t1-s2: Cuidado del computador y tabletas (propuesta B) —
  {
    subtema_id: "au-13-t1-s2",
    tema_id: "au-13-t1",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Juego de rol: somos tecnicos de computadores",
    descripcion_breve:
      "Los ninos simulan ser tecnicos que revisan si un computador esta bien cuidado. Usando una lista de chequeo con dibujos, inspeccionan los equipos del salon (cables organizados, pantalla limpia, teclado sin basura) y llenan su ficha con caritas felices o tristes.",
    producto_sugerido:
      "Ficha de inspeccion individual con al menos 5 puntos de revision ilustrados y completados con caritas de evaluacion, mas una recomendacion de mejora",
    herramientas_sugeridas: ["ficha impresa o dibujada", "lapiz", "colores", "computadores del aula para inspeccionar"],
    evidencias_que_cubre: ["AU-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer las partes basicas del computador (pantalla, teclado, raton)",
    ],
  },

  // ── au-13-t2: Mis primeros pasos digitales ──

  // — au-13-t2-s1: Uso del teclado y el raton (propuesta A) —
  {
    subtema_id: "au-13-t2-s1",
    tema_id: "au-13-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Caceria de letras en el teclado",
    descripcion_breve:
      "Los estudiantes practican ubicar letras y numeros en el teclado a traves de un juego: el docente dice una letra y los ninos deben encontrarla y presionarla lo mas rapido posible. Luego escriben su nombre, el de su mascota o su comida favorita en un documento sencillo.",
    producto_sugerido:
      "Documento digital con el nombre del estudiante, el nombre de su mascota y su comida favorita escritos por ellos mismos usando el teclado, impreso y decorado a mano",
    herramientas_sugeridas: ["computador con procesador de texto basico", "WordPad o Google Docs", "colores para decorar la impresion"],
    evidencias_que_cubre: ["AU-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer las letras del abecedario",
    ],
  },

  // — au-13-t2-s1: Uso del teclado y el raton (propuesta B) —
  {
    subtema_id: "au-13-t2-s1",
    tema_id: "au-13-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Circuito del raton: clic, doble clic y arrastrar",
    descripcion_breve:
      "Los ninos practican habilidades del raton a traves de un circuito de actividades en el computador: hacer clic en iconos, doble clic para abrir carpetas, arrastrar objetos en una app de dibujo. Completan una ficha de logros con estrellitas por cada habilidad dominada.",
    producto_sugerido:
      "Ficha de logros con 5 habilidades del raton (senalar, clic, doble clic, clic derecho, arrastrar) marcadas con estrella al completarlas, mas un dibujo libre hecho con el raton",
    herramientas_sugeridas: ["computador con raton", "Paint o Tux Paint", "ficha de logros impresa", "colores"],
    evidencias_que_cubre: ["AU-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber encender el computador con ayuda del docente",
    ],
  },

  // — au-13-t2-s2: Dibujo y escritura en el computador (propuesta A) —
  {
    subtema_id: "au-13-t2-s2",
    tema_id: "au-13-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Mi familia en Paint: dibujo digital",
    descripcion_breve:
      "Los estudiantes usan Paint o Tux Paint para dibujar a su familia. Practican usar herramientas basicas: lapiz, pincel, borrador, balde de pintura y seleccion de colores. Escriben los nombres de cada familiar con la herramienta de texto.",
    producto_sugerido:
      "Dibujo digital de la familia hecho en Paint o Tux Paint con los nombres de cada miembro escritos con la herramienta de texto, impreso para llevar a casa",
    herramientas_sugeridas: ["Paint", "Tux Paint", "computador", "impresora (opcional)"],
    evidencias_que_cubre: ["AU-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber usar el raton (clic y arrastrar)",
    ],
  },

  // — au-13-t2-s2: Dibujo y escritura en el computador (propuesta B) —
  {
    subtema_id: "au-13-t2-s2",
    tema_id: "au-13-t2",
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    nombre: "Tarjeta de cumpleanos digital",
    descripcion_breve:
      "Cada nino crea una tarjeta de cumpleanos para un companero usando Paint o una aplicacion de dibujo. Incluyen un dibujo decorativo, el nombre del companero y un mensaje corto escrito con el teclado. Imprimen o proyectan las tarjetas para compartirlas.",
    producto_sugerido:
      "Tarjeta de cumpleanos digital con dibujo, nombre del destinatario y mensaje de felicitacion escrito con teclado, impresa o proyectada",
    herramientas_sugeridas: ["Paint", "Tux Paint", "Google Slides (opcional)", "computador", "impresora (opcional)"],
    evidencias_que_cubre: ["AU-13-E1", "AU-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Manejo basico del raton y el teclado",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Solucion de problemas con tecnologia — Grado 1-3
  // ════════════════════════════════════════════════════════════════

  // ── sp-13-t1: Construir soluciones sencillas ──

  // — sp-13-t1-s1: Artefactos con materiales reciclados (propuesta A) —
  {
    subtema_id: "sp-13-t1-s1",
    tema_id: "sp-13-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Porta-lapices con botellas recicladas",
    descripcion_breve:
      "Los estudiantes construyen un porta-lapices usando la parte inferior de una botella plastica. La decoran con pintura, papel de colores y marcadores. Reflexionan sobre como un material de desecho puede convertirse en un artefacto util para la escuela.",
    producto_sugerido:
      "Porta-lapices funcional hecho con botella reciclada, decorado y con una etiqueta que explique que problema resuelve y de que material esta hecho",
    herramientas_sugeridas: ["botellas plasticas", "tijeras de punta redonda (corte previo del docente)", "pintura", "papel de colores", "pegamento"],
    evidencias_que_cubre: ["SP-13-E1", "SP-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Traer una botella plastica limpia de casa",
    ],
  },

  // — sp-13-t1-s1: Artefactos con materiales reciclados (propuesta B) —
  {
    subtema_id: "sp-13-t1-s1",
    tema_id: "sp-13-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Carrito rodante con tapas y cajas de carton",
    descripcion_breve:
      "En parejas, los ninos construyen un carrito que ruede usando una caja pequena de carton y tapas de botella como ruedas. Siguen instrucciones paso a paso del docente y al final prueban si su carrito rueda sobre una rampa improvisada.",
    producto_sugerido:
      "Carrito funcional hecho con caja de carton y tapas de botella que logre rodar por una superficie inclinada, con decoracion libre",
    herramientas_sugeridas: ["cajas de carton pequenas", "tapas de botella", "palitos de paleta", "pegamento fuerte", "colores"],
    evidencias_que_cubre: ["SP-13-E1", "SP-13-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Traer materiales reciclados de casa (cajas, tapas)",
    ],
  },

  // — sp-13-t1-s2: Seguir instrucciones paso a paso (propuesta A) —
  {
    subtema_id: "sp-13-t1-s2",
    tema_id: "sp-13-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Origami paso a paso: el barco de papel",
    descripcion_breve:
      "Los estudiantes siguen instrucciones ilustradas paso a paso para construir un barco de papel usando la tecnica de origami. Practican la importancia de seguir un orden y no saltarse pasos. Al final decoran sus barcos y los exhiben.",
    producto_sugerido:
      "Barco de origami terminado siguiendo los pasos en orden correcto, decorado con colores, y una lista numerada de los pasos que siguieron escrita por cada nino",
    herramientas_sugeridas: ["hojas de papel de colores", "colores", "marcadores", "instrucciones impresas con dibujos"],
    evidencias_que_cubre: ["SP-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber doblar papel por la mitad",
    ],
  },

  // — sp-13-t1-s2: Seguir instrucciones paso a paso (propuesta B) —
  {
    subtema_id: "sp-13-t1-s2",
    tema_id: "sp-13-t1",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Receta ilustrada: preparamos limonada en clase",
    descripcion_breve:
      "Los ninos siguen una receta sencilla paso a paso para preparar limonada (con supervision). Luego, cada estudiante dibuja los pasos en orden en una tira de papel creando una receta ilustrada, practicando la idea de que las instrucciones tienen un orden que debe respetarse.",
    producto_sugerido:
      "Tira ilustrada con al menos 5 pasos de la receta dibujados en secuencia y numerados, mas degustacion de la limonada preparada en grupo",
    herramientas_sugeridas: ["limones", "agua", "azucar", "vasos", "hojas de papel largas", "colores", "marcadores"],
    evidencias_que_cubre: ["SP-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Entender que es una receta",
    ],
  },

  // ── sp-13-t2: Pensamiento ordenado ──

  // — sp-13-t2-s1: Secuencias y patrones (propuesta A) —
  {
    subtema_id: "sp-13-t2-s1",
    tema_id: "sp-13-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Collares y pulseras con patrones de colores",
    descripcion_breve:
      "Los estudiantes crean collares o pulseras ensartando cuentas de colores siguiendo un patron definido (rojo-azul-rojo-azul, o amarillo-verde-verde-amarillo). Identifican y crean sus propios patrones, los dibujan en una ficha y explican la regla del patron.",
    producto_sugerido:
      "Pulsera o collar con un patron de al menos 3 repeticiones completas, mas una ficha donde dibujen el patron y escriban la regla (por ejemplo: 'rojo, azul, rojo, azul...')",
    herramientas_sugeridas: ["cuentas de colores", "hilo o lana", "fichas de papel", "colores", "lapiz"],
    evidencias_que_cubre: ["SP-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Reconocer colores basicos",
    ],
  },

  // — sp-13-t2-s1: Secuencias y patrones (propuesta B) —
  {
    subtema_id: "sp-13-t2-s1",
    tema_id: "sp-13-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Historieta en secuencia: mi dia de principio a fin",
    descripcion_breve:
      "Cada nino dibuja las actividades de su dia en orden (despertar, desayunar, ir al colegio, almorzar, jugar, dormir) en viñetas de historieta. Practican la idea de que las cosas tienen un orden y que cambiar la secuencia no tiene sentido.",
    producto_sugerido:
      "Historieta de al menos 6 viñetas en secuencia mostrando las actividades del dia, numeradas y con una oracion corta debajo de cada dibujo",
    herramientas_sugeridas: ["hojas de papel divididas en viñetas", "colores", "lapiz", "marcadores"],
    evidencias_que_cubre: ["SP-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer las partes del dia (manana, tarde, noche)",
    ],
  },

  // — sp-13-t2-s2: Instrucciones para robots (actividades desconectadas) (propuesta A) —
  {
    subtema_id: "sp-13-t2-s2",
    tema_id: "sp-13-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Robot humano: programo a mi companero",
    descripcion_breve:
      "Un estudiante actua como 'robot' y otro como 'programador'. El programador da instrucciones simples (avanza 3 pasos, gira a la derecha, recoge el objeto) para que el robot llegue a un destino en una cuadricula dibujada en el piso. Luego dibujan la ruta seguida.",
    producto_sugerido:
      "Dibujo de la cuadricula con la ruta seguida por el robot marcada con flechas, mas la lista de instrucciones escritas en orden",
    herramientas_sugeridas: ["cinta de enmascarar para la cuadricula en el piso", "flechas de carton", "hojas de papel", "colores"],
    evidencias_que_cubre: ["SP-13-E1", "SP-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer izquierda, derecha, adelante y atras",
    ],
  },

  // — sp-13-t2-s2: Instrucciones para robots (actividades desconectadas) (propuesta B) —
  {
    subtema_id: "sp-13-t2-s2",
    tema_id: "sp-13-t2",
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    nombre: "Laberinto en ScratchJr: guia al gatito a casa",
    descripcion_breve:
      "Los ninos usan ScratchJr en tabletas para programar al gatito a traves de un laberinto sencillo usando bloques de movimiento (avanzar, girar). Experimentan con la secuencia de bloques y observan que ocurre cuando cambian el orden.",
    producto_sugerido:
      "Proyecto en ScratchJr donde el gatito recorre un laberinto de al menos 4 movimientos, mas un dibujo en papel del laberinto con las flechas de la ruta programada",
    herramientas_sugeridas: ["tableta con ScratchJr instalado", "hojas de papel", "colores", "lapiz"],
    evidencias_que_cubre: ["SP-13-E1", "SP-13-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Saber usar una tableta (tocar, arrastrar)",
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  COMPONENTE: Tecnologia y sociedad — Grado 1-3
  // ════════════════════════════════════════════════════════════════

  // ── ts-13-t1: Natural vs. artificial ──

  // — ts-13-t1-s1: Objetos de la naturaleza y objetos hechos por personas (propuesta A) —
  {
    subtema_id: "ts-13-t1-s1",
    tema_id: "ts-13-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Paseo de observacion: natural o hecho por personas",
    descripcion_breve:
      "Los estudiantes realizan un recorrido por el patio del colegio o un parque cercano recolectando o dibujando objetos. De regreso en el salon, clasifican sus hallazgos en dos grupos: 'de la naturaleza' (hojas, piedras, flores) y 'hechos por personas' (bolsas, botellas, bancas).",
    producto_sugerido:
      "Mural colectivo dividido en dos mitades (natural / artificial) con dibujos u objetos reales pegados por los ninos, con rotulos escritos por ellos",
    herramientas_sugeridas: ["bolsas para recolectar", "cartulina grande", "pegamento", "colores", "marcadores"],
    evidencias_que_cubre: ["TS-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber diferenciar un ser vivo de un objeto",
    ],
  },

  // — ts-13-t1-s1: Objetos de la naturaleza y objetos hechos por personas (propuesta B) —
  {
    subtema_id: "ts-13-t1-s1",
    tema_id: "ts-13-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Juego de clasificacion con tarjetas ilustradas",
    descripcion_breve:
      "El docente prepara tarjetas con imagenes de objetos naturales y artificiales. Los ninos juegan en equipos clasificando las tarjetas en dos columnas. Luego cada equipo crea sus propias tarjetas dibujando objetos de su entorno para ampliar el juego.",
    producto_sugerido:
      "Set de al menos 12 tarjetas de clasificacion dibujadas por los ninos (6 naturales, 6 artificiales) con el nombre del objeto y la categoria escrita al reverso",
    herramientas_sugeridas: ["cartulina cortada en tarjetas", "colores", "marcadores", "tijeras", "caja para guardar el juego"],
    evidencias_que_cubre: ["TS-13-E1"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer que significa 'natural' y 'artificial' en terminos sencillos",
    ],
  },

  // — ts-13-t1-s2: Para que se fabrican los artefactos (propuesta A) —
  {
    subtema_id: "ts-13-t1-s2",
    tema_id: "ts-13-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Mapa mental: artefactos y sus oficios",
    descripcion_breve:
      "Los estudiantes dibujan un mapa mental sencillo donde en el centro ponen la pregunta '¿Para que fabricamos cosas?' y alrededor dibujan artefactos agrupados por su funcion: para cocinar, para limpiar, para estudiar, para jugar. Usan colores distintos por grupo.",
    producto_sugerido:
      "Mapa mental en cartulina con al menos 4 categorias de funcion y 3 artefactos dibujados en cada una, con colores por categoria",
    herramientas_sugeridas: ["cartulina", "colores", "marcadores", "lapiz"],
    evidencias_que_cubre: ["TS-13-E1", "TS-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Conocer artefactos comunes del hogar y la escuela",
    ],
  },

  // — ts-13-t1-s2: Para que se fabrican los artefactos (propuesta B) —
  {
    subtema_id: "ts-13-t1-s2",
    tema_id: "ts-13-t1",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Inventa un artefacto: ¿que necesita mi salon?",
    descripcion_breve:
      "Los ninos identifican un problema o necesidad en el salon de clase (no hay donde colgar mochilas, las tizas se caen, no hay reloj visible) e inventan un artefacto para resolverlo. Lo dibujan, le ponen nombre y explican de que material lo harian y para que sirve.",
    producto_sugerido:
      "Lamina con el dibujo del artefacto inventado, su nombre creativo, los materiales necesarios y una oracion que explique el problema que resuelve",
    herramientas_sugeridas: ["hojas de papel", "colores", "marcadores", "lapiz"],
    evidencias_que_cubre: ["TS-13-E1", "TS-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber identificar un problema cotidiano sencillo",
    ],
  },

  // ── ts-13-t2: La tecnologia nos ayuda ──

  // — ts-13-t2-s1: Artefactos que ayudan en la escuela (propuesta A) —
  {
    subtema_id: "ts-13-t2-s1",
    tema_id: "ts-13-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Mural de agradecimiento a los artefactos de la escuela",
    descripcion_breve:
      "Los ninos reflexionan sobre como los artefactos de la escuela les ayudan a aprender (tablero, libros, computador, sacapuntas, lampara). Cada estudiante dibuja un artefacto y escribe una frase de agradecimiento ('Gracias, tijeras, por ayudarme a recortar'). Arman un mural colectivo.",
    producto_sugerido:
      "Mural colectivo con al menos 15 artefactos escolares dibujados, cada uno con una frase de agradecimiento que explique como ayuda",
    herramientas_sugeridas: ["cartulina grande", "colores", "marcadores", "pegamento", "hojas para los dibujos individuales"],
    evidencias_que_cubre: ["TS-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber escribir frases sencillas",
    ],
  },

  // — ts-13-t2-s1: Artefactos que ayudan en la escuela (propuesta B) —
  {
    subtema_id: "ts-13-t2-s1",
    tema_id: "ts-13-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Un dia sin artefactos: dramatizacion en clase",
    descripcion_breve:
      "Los estudiantes imaginan un dia en la escuela sin ningun artefacto tecnologico (sin tablero, sin lapices, sin luz electrica). En equipos, dramatizan escenas de como seria estudiar sin esos objetos. Luego reflexionan y dibujan lo que aprendieron sobre la importancia de los artefactos.",
    producto_sugerido:
      "Dramatizacion por equipos (2-3 minutos) y lamina individual con dos dibujos comparativos: 'mi escuela sin artefactos' vs. 'mi escuela con artefactos' y una conclusion escrita",
    herramientas_sugeridas: ["espacio del salon para dramatizar", "hojas de papel", "colores", "lapiz"],
    evidencias_que_cubre: ["TS-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Disposicion para participar en dramatizaciones grupales",
    ],
  },

  // — ts-13-t2-s2: Artefactos que ayudan en el hogar (propuesta A) —
  {
    subtema_id: "ts-13-t2-s2",
    tema_id: "ts-13-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Mi casa y sus artefactos: maqueta con caja de zapatos",
    descripcion_breve:
      "Los ninos construyen una maqueta de una habitacion de su casa dentro de una caja de zapatos. Dentro colocan mini-artefactos hechos con plastilina, papel o carton (estufa, nevera, televisor, cama). Presentan su maqueta explicando como cada artefacto ayuda a su familia.",
    producto_sugerido:
      "Maqueta de una habitacion del hogar en caja de zapatos con al menos 4 mini-artefactos y una presentacion oral de 1-2 minutos explicando como ayudan",
    herramientas_sugeridas: ["caja de zapatos", "plastilina", "papel de colores", "tijeras", "pegamento", "marcadores"],
    evidencias_que_cubre: ["TS-13-E1", "TS-13-E2"],
    duracion_estimada_sesiones: 3,
    prerequisitos: [
      "Traer una caja de zapatos de casa",
    ],
  },

  // — ts-13-t2-s2: Artefactos que ayudan en el hogar (propuesta B) —
  {
    subtema_id: "ts-13-t2-s2",
    tema_id: "ts-13-t2",
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    nombre: "Libro acordeon: los ayudantes de mama y papa",
    descripcion_breve:
      "Cada estudiante crea un libro en formato acordeon donde dibuja artefactos que ayudan a sus padres o cuidadores en las tareas del hogar (lavadora, escoba, licuadora, plancha). En cada pagina dibuja el artefacto, escribe su nombre y explica como ayuda a la persona.",
    producto_sugerido:
      "Libro acordeon con al menos 5 artefactos del hogar, cada uno con dibujo, nombre y una oracion sobre como ayuda a la familia",
    herramientas_sugeridas: ["tira larga de papel doblada en acordeon", "colores", "marcadores", "lapiz"],
    evidencias_que_cubre: ["TS-13-E2"],
    duracion_estimada_sesiones: 2,
    prerequisitos: [
      "Saber doblar papel en forma de acordeon (con ayuda del docente)",
    ],
  },
];
