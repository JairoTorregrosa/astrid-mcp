import { EntradaCurricular } from "./types";

/**
 * MEN 2022 curriculum data for Technology & Informatics.
 * Organized by component × grade group.
 * Priority: 6-7, 8-9 first (most requested), then 1-3, 4-5, 10-11.
 */
export const MEN_CURRICULUM: EntradaCurricular[] = [
  // ──────────────────────────────────────────────────
  // COMPONENTE: Naturaleza y evolución de la tecnología
  // ──────────────────────────────────────────────────
  {
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "6-7",
    competencia: {
      componente_id: "naturaleza-tecnologia",
      grupo_grados: "6-7",
      descripcion:
        "Reconozco principios y conceptos propios de la tecnología, así como momentos de la historia que le han permitido al ser humano transformar el entorno para resolver problemas y satisfacer necesidades.",
      evidencias: [
        {
          codigo: "NT-67-E1",
          descripcion:
            "Ilustra con ejemplos la relación entre la evolución de la tecnología y los cambios en la forma de vida de las comunidades.",
        },
        {
          codigo: "NT-67-E2",
          descripcion:
            "Identifica innovaciones e inventos que han marcado hitos en el desarrollo tecnológico.",
        },
        {
          codigo: "NT-67-E3",
          descripcion:
            "Explica la diferencia entre artefacto, proceso y sistema tecnológico con ejemplos de su entorno.",
        },
      ],
    },
    temas: [
      {
        id: "nt-67-t1",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "6-7",
        nombre: "Artefactos, procesos y sistemas tecnológicos",
        subtemas: [
          { id: "nt-67-t1-s1", nombre: "Clasificación de artefactos según su función" },
          { id: "nt-67-t1-s2", nombre: "Procesos tecnológicos en la vida cotidiana" },
          { id: "nt-67-t1-s3", nombre: "Sistemas tecnológicos: entrada, proceso y salida" },
        ],
      },
      {
        id: "nt-67-t2",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "6-7",
        nombre: "Historia y evolución de la tecnología",
        subtemas: [
          { id: "nt-67-t2-s1", nombre: "Hitos tecnológicos de la humanidad" },
          { id: "nt-67-t2-s2", nombre: "Líneas de tiempo tecnológicas" },
          { id: "nt-67-t2-s3", nombre: "Tecnología en las culturas colombianas" },
        ],
      },
      {
        id: "nt-67-t3",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "6-7",
        nombre: "Innovación e invención",
        subtemas: [
          { id: "nt-67-t3-s1", nombre: "Diferencia entre innovación e invención" },
          { id: "nt-67-t3-s2", nombre: "Inventores y sus contextos históricos" },
        ],
      },
    ],
  },
  {
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "8-9",
    competencia: {
      componente_id: "naturaleza-tecnologia",
      grupo_grados: "8-9",
      descripcion:
        "Relaciono el funcionamiento de algunos artefactos, productos, procesos y sistemas tecnológicos con su utilización segura.",
      evidencias: [
        {
          codigo: "NT-89-E1",
          descripcion:
            "Explica el funcionamiento de sistemas tecnológicos de su entorno identificando sus componentes e interacciones.",
        },
        {
          codigo: "NT-89-E2",
          descripcion:
            "Compara tecnologías empleadas en distintos contextos culturales y geográficos.",
        },
        {
          codigo: "NT-89-E3",
          descripcion:
            "Analiza el impacto que las tecnologías emergentes tienen en la transformación de oficios y profesiones.",
        },
      ],
    },
    temas: [
      {
        id: "nt-89-t1",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "8-9",
        nombre: "Funcionamiento de sistemas tecnológicos",
        subtemas: [
          { id: "nt-89-t1-s1", nombre: "Componentes electrónicos básicos y sus funciones" },
          { id: "nt-89-t1-s2", nombre: "Sistemas de control: sensores y actuadores" },
          { id: "nt-89-t1-s3", nombre: "Ciclo de vida de un producto tecnológico" },
        ],
      },
      {
        id: "nt-89-t2",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "8-9",
        nombre: "Tecnología en contextos culturales",
        subtemas: [
          { id: "nt-89-t2-s1", nombre: "Tecnologías ancestrales y saberes locales" },
          { id: "nt-89-t2-s2", nombre: "Transferencia tecnológica entre regiones" },
        ],
      },
      {
        id: "nt-89-t3",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "8-9",
        nombre: "Tecnologías emergentes",
        subtemas: [
          { id: "nt-89-t3-s1", nombre: "Inteligencia artificial y automatización" },
          { id: "nt-89-t3-s2", nombre: "Internet de las cosas (IoT)" },
          { id: "nt-89-t3-s3", nombre: "Impacto en oficios y profesiones del futuro" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // COMPONENTE: Apropiación y uso de la tecnología
  // ──────────────────────────────────────────────────
  {
    componente_id: "apropiacion-uso",
    grupo_grados: "6-7",
    competencia: {
      componente_id: "apropiacion-uso",
      grupo_grados: "6-7",
      descripcion:
        "Relaciono el funcionamiento de algunos artefactos, productos, procesos y sistemas tecnológicos con su utilización segura.",
      evidencias: [
        {
          codigo: "AU-67-E1",
          descripcion:
            "Utiliza herramientas tecnológicas siguiendo instrucciones y protocolos de seguridad.",
        },
        {
          codigo: "AU-67-E2",
          descripcion:
            "Emplea aplicaciones ofimáticas y digitales para comunicar ideas de manera efectiva.",
        },
        {
          codigo: "AU-67-E3",
          descripcion:
            "Practica hábitos de ciudadanía digital responsable en entornos en línea.",
        },
      ],
    },
    temas: [
      {
        id: "au-67-t1",
        componente_id: "apropiacion-uso",
        grupo_grados: "6-7",
        nombre: "Herramientas digitales para la productividad",
        subtemas: [
          { id: "au-67-t1-s1", nombre: "Procesadores de texto y presentaciones" },
          { id: "au-67-t1-s2", nombre: "Hojas de cálculo básicas" },
          { id: "au-67-t1-s3", nombre: "Herramientas de diseño gráfico en línea" },
        ],
      },
      {
        id: "au-67-t2",
        componente_id: "apropiacion-uso",
        grupo_grados: "6-7",
        nombre: "Ciudadanía digital",
        subtemas: [
          { id: "au-67-t2-s1", nombre: "Identidad digital y huella en internet" },
          { id: "au-67-t2-s2", nombre: "Seguridad en línea y contraseñas seguras" },
          { id: "au-67-t2-s3", nombre: "Respeto y convivencia en redes sociales" },
        ],
      },
      {
        id: "au-67-t3",
        componente_id: "apropiacion-uso",
        grupo_grados: "6-7",
        nombre: "Uso seguro de artefactos",
        subtemas: [
          { id: "au-67-t3-s1", nombre: "Normas de seguridad en el aula de tecnología" },
          { id: "au-67-t3-s2", nombre: "Mantenimiento preventivo de equipos" },
        ],
      },
    ],
  },
  {
    componente_id: "apropiacion-uso",
    grupo_grados: "8-9",
    competencia: {
      componente_id: "apropiacion-uso",
      grupo_grados: "8-9",
      descripcion:
        "Tengo en cuenta normas de mantenimiento y utilización de artefactos, productos, servicios, procesos y sistemas tecnológicos de mi entorno para su uso eficiente y seguro.",
      evidencias: [
        {
          codigo: "AU-89-E1",
          descripcion:
            "Selecciona y utiliza herramientas digitales apropiadas para resolver tareas específicas justificando su elección.",
        },
        {
          codigo: "AU-89-E2",
          descripcion:
            "Crea contenido digital multimedia integrando texto, imagen, audio y video.",
        },
        {
          codigo: "AU-89-E3",
          descripcion:
            "Evalúa críticamente la información encontrada en medios digitales verificando fuentes.",
        },
      ],
    },
    temas: [
      {
        id: "au-89-t1",
        componente_id: "apropiacion-uso",
        grupo_grados: "8-9",
        nombre: "Creación de contenido digital multimedia",
        subtemas: [
          { id: "au-89-t1-s1", nombre: "Edición de imagen y diseño gráfico" },
          { id: "au-89-t1-s2", nombre: "Producción de audio y podcast" },
          { id: "au-89-t1-s3", nombre: "Edición de video básica" },
        ],
      },
      {
        id: "au-89-t2",
        componente_id: "apropiacion-uso",
        grupo_grados: "8-9",
        nombre: "Alfabetización informacional",
        subtemas: [
          { id: "au-89-t2-s1", nombre: "Búsqueda avanzada y evaluación de fuentes" },
          { id: "au-89-t2-s2", nombre: "Desinformación y pensamiento crítico digital" },
          { id: "au-89-t2-s3", nombre: "Derechos de autor y licencias Creative Commons" },
        ],
      },
      {
        id: "au-89-t3",
        componente_id: "apropiacion-uso",
        grupo_grados: "8-9",
        nombre: "Herramientas colaborativas en la nube",
        subtemas: [
          { id: "au-89-t3-s1", nombre: "Documentos y edición colaborativa en tiempo real" },
          { id: "au-89-t3-s2", nombre: "Gestión de proyectos con herramientas digitales" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // COMPONENTE: Solución de problemas con tecnología
  // ──────────────────────────────────────────────────
  {
    componente_id: "solucion-problemas",
    grupo_grados: "6-7",
    competencia: {
      componente_id: "solucion-problemas",
      grupo_grados: "6-7",
      descripcion:
        "Resuelvo problemas utilizando conocimientos tecnológicos y teniendo en cuenta algunas restricciones y condiciones.",
      evidencias: [
        {
          codigo: "SP-67-E1",
          descripcion:
            "Identifica y formula problemas susceptibles de ser resueltos con soluciones tecnológicas.",
        },
        {
          codigo: "SP-67-E2",
          descripcion:
            "Diseña y construye prototipos o modelos siguiendo un proceso de diseño.",
        },
        {
          codigo: "SP-67-E3",
          descripcion:
            "Utiliza pensamiento algorítmico para descomponer problemas en pasos ordenados.",
        },
      ],
    },
    temas: [
      {
        id: "sp-67-t1",
        componente_id: "solucion-problemas",
        grupo_grados: "6-7",
        nombre: "Proceso de diseño tecnológico",
        subtemas: [
          { id: "sp-67-t1-s1", nombre: "Identificación de necesidades y problemas" },
          { id: "sp-67-t1-s2", nombre: "Bocetado y prototipado rápido" },
          { id: "sp-67-t1-s3", nombre: "Evaluación y mejora de prototipos" },
        ],
      },
      {
        id: "sp-67-t2",
        componente_id: "solucion-problemas",
        grupo_grados: "6-7",
        nombre: "Pensamiento computacional",
        subtemas: [
          { id: "sp-67-t2-s1", nombre: "Descomposición de problemas" },
          { id: "sp-67-t2-s2", nombre: "Algoritmos y diagramas de flujo" },
          { id: "sp-67-t2-s3", nombre: "Programación con bloques (Scratch)" },
        ],
      },
      {
        id: "sp-67-t3",
        componente_id: "solucion-problemas",
        grupo_grados: "6-7",
        nombre: "Modelado y simulación",
        subtemas: [
          { id: "sp-67-t3-s1", nombre: "Maquetas y modelos a escala" },
          { id: "sp-67-t3-s2", nombre: "Simulaciones digitales básicas" },
        ],
      },
    ],
  },
  {
    componente_id: "solucion-problemas",
    grupo_grados: "8-9",
    competencia: {
      componente_id: "solucion-problemas",
      grupo_grados: "8-9",
      descripcion:
        "Resuelvo problemas tecnológicos y evalúo las soluciones teniendo en cuenta las condiciones, restricciones y especificaciones del problema planteado.",
      evidencias: [
        {
          codigo: "SP-89-E1",
          descripcion:
            "Diseña soluciones tecnológicas integrando restricciones técnicas, económicas y ambientales.",
        },
        {
          codigo: "SP-89-E2",
          descripcion:
            "Programa aplicaciones o automatizaciones que resuelven problemas concretos de su entorno.",
        },
        {
          codigo: "SP-89-E3",
          descripcion:
            "Evalúa y optimiza soluciones tecnológicas usando criterios definidos.",
        },
      ],
    },
    temas: [
      {
        id: "sp-89-t1",
        componente_id: "solucion-problemas",
        grupo_grados: "8-9",
        nombre: "Diseño con restricciones",
        subtemas: [
          { id: "sp-89-t1-s1", nombre: "Análisis de restricciones técnicas y económicas" },
          { id: "sp-89-t1-s2", nombre: "Design thinking aplicado" },
          { id: "sp-89-t1-s3", nombre: "Evaluación de soluciones con matrices de decisión" },
        ],
      },
      {
        id: "sp-89-t2",
        componente_id: "solucion-problemas",
        grupo_grados: "8-9",
        nombre: "Programación y automatización",
        subtemas: [
          { id: "sp-89-t2-s1", nombre: "Programación textual básica (Python/JavaScript)" },
          { id: "sp-89-t2-s2", nombre: "Automatización con herramientas no-code" },
          { id: "sp-89-t2-s3", nombre: "Desarrollo de aplicaciones web básicas" },
        ],
      },
      {
        id: "sp-89-t3",
        componente_id: "solucion-problemas",
        grupo_grados: "8-9",
        nombre: "Robótica y electrónica básica",
        subtemas: [
          { id: "sp-89-t3-s1", nombre: "Circuitos básicos y protoboard" },
          { id: "sp-89-t3-s2", nombre: "Programación de microcontroladores (Arduino/micro:bit)" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // COMPONENTE: Tecnología y sociedad
  // ──────────────────────────────────────────────────
  {
    componente_id: "tecnologia-sociedad",
    grupo_grados: "6-7",
    competencia: {
      componente_id: "tecnologia-sociedad",
      grupo_grados: "6-7",
      descripcion:
        "Reconozco las causas y los efectos sociales, económicos y culturales de los desarrollos tecnológicos y actúo en consecuencia, de manera ética y responsable.",
      evidencias: [
        {
          codigo: "TS-67-E1",
          descripcion:
            "Identifica efectos positivos y negativos de la tecnología en la comunidad local.",
        },
        {
          codigo: "TS-67-E2",
          descripcion:
            "Argumenta sobre el uso ético y responsable de la tecnología en situaciones cotidianas.",
        },
        {
          codigo: "TS-67-E3",
          descripcion:
            "Propone acciones para mitigar impactos ambientales de productos tecnológicos.",
        },
      ],
    },
    temas: [
      {
        id: "ts-67-t1",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "6-7",
        nombre: "Impacto ambiental de la tecnología",
        subtemas: [
          { id: "ts-67-t1-s1", nombre: "Residuos electrónicos y reciclaje" },
          { id: "ts-67-t1-s2", nombre: "Huella de carbono digital" },
          { id: "ts-67-t1-s3", nombre: "Tecnologías verdes y sostenibles" },
        ],
      },
      {
        id: "ts-67-t2",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "6-7",
        nombre: "Ética tecnológica",
        subtemas: [
          { id: "ts-67-t2-s1", nombre: "Dilemas éticos en el uso de tecnología" },
          { id: "ts-67-t2-s2", nombre: "Privacidad y datos personales" },
        ],
      },
      {
        id: "ts-67-t3",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "6-7",
        nombre: "Tecnología y comunidad",
        subtemas: [
          { id: "ts-67-t3-s1", nombre: "Proyectos tecnológicos comunitarios" },
          { id: "ts-67-t3-s2", nombre: "Brecha digital y acceso equitativo" },
        ],
      },
    ],
  },
  {
    componente_id: "tecnologia-sociedad",
    grupo_grados: "8-9",
    competencia: {
      componente_id: "tecnologia-sociedad",
      grupo_grados: "8-9",
      descripcion:
        "Analizo y valoro críticamente los componentes y la evolución de los sistemas tecnológicos y las estrategias para su desarrollo.",
      evidencias: [
        {
          codigo: "TS-89-E1",
          descripcion:
            "Analiza casos donde la tecnología ha generado transformaciones sociales significativas.",
        },
        {
          codigo: "TS-89-E2",
          descripcion:
            "Debate sobre las implicaciones éticas de la inteligencia artificial y la automatización.",
        },
        {
          codigo: "TS-89-E3",
          descripcion:
            "Diseña propuestas de uso responsable de tecnología en su comunidad educativa.",
        },
      ],
    },
    temas: [
      {
        id: "ts-89-t1",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "8-9",
        nombre: "Transformaciones sociales por la tecnología",
        subtemas: [
          { id: "ts-89-t1-s1", nombre: "Revolución industrial y digital" },
          { id: "ts-89-t1-s2", nombre: "Economía digital y nuevas formas de trabajo" },
          { id: "ts-89-t1-s3", nombre: "Redes sociales y participación ciudadana" },
        ],
      },
      {
        id: "ts-89-t2",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "8-9",
        nombre: "Ética de la inteligencia artificial",
        subtemas: [
          { id: "ts-89-t2-s1", nombre: "Sesgos algorítmicos y justicia" },
          { id: "ts-89-t2-s2", nombre: "Privacidad y vigilancia masiva" },
          { id: "ts-89-t2-s3", nombre: "Regulación tecnológica y gobernanza" },
        ],
      },
      {
        id: "ts-89-t3",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "8-9",
        nombre: "Desarrollo sostenible y tecnología",
        subtemas: [
          { id: "ts-89-t3-s1", nombre: "ODS y soluciones tecnológicas" },
          { id: "ts-89-t3-s2", nombre: "Economía circular aplicada a la tecnología" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // GRADOS 1-3
  // ──────────────────────────────────────────────────
  {
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "1-3",
    competencia: {
      componente_id: "naturaleza-tecnologia",
      grupo_grados: "1-3",
      descripcion:
        "Reconozco y describo la importancia de algunos artefactos en el desarrollo de actividades cotidianas en mi entorno y en el de mis antepasados.",
      evidencias: [
        {
          codigo: "NT-13-E1",
          descripcion:
            "Identifica artefactos de su entorno y explica para qué sirven.",
        },
        {
          codigo: "NT-13-E2",
          descripcion:
            "Compara artefactos del pasado con los del presente e identifica diferencias.",
        },
      ],
    },
    temas: [
      {
        id: "nt-13-t1",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "1-3",
        nombre: "Artefactos de mi entorno",
        subtemas: [
          { id: "nt-13-t1-s1", nombre: "Artefactos del hogar y la escuela" },
          { id: "nt-13-t1-s2", nombre: "Materiales con los que están hechos" },
        ],
      },
      {
        id: "nt-13-t2",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "1-3",
        nombre: "Artefactos de antes y ahora",
        subtemas: [
          { id: "nt-13-t2-s1", nombre: "Evolución de objetos cotidianos" },
          { id: "nt-13-t2-s2", nombre: "Artefactos de los abuelos" },
        ],
      },
    ],
  },
  {
    componente_id: "apropiacion-uso",
    grupo_grados: "1-3",
    competencia: {
      componente_id: "apropiacion-uso",
      grupo_grados: "1-3",
      descripcion:
        "Reconozco productos tecnológicos de mi entorno cotidiano y los utilizo en forma segura y apropiada.",
      evidencias: [
        {
          codigo: "AU-13-E1",
          descripcion:
            "Sigue instrucciones para el uso seguro de artefactos y herramientas sencillas.",
        },
        {
          codigo: "AU-13-E2",
          descripcion:
            "Utiliza herramientas digitales básicas para expresar ideas.",
        },
      ],
    },
    temas: [
      {
        id: "au-13-t1",
        componente_id: "apropiacion-uso",
        grupo_grados: "1-3",
        nombre: "Uso seguro de herramientas",
        subtemas: [
          { id: "au-13-t1-s1", nombre: "Normas de seguridad con tijeras, pegamento y materiales" },
          { id: "au-13-t1-s2", nombre: "Cuidado del computador y tabletas" },
        ],
      },
      {
        id: "au-13-t2",
        componente_id: "apropiacion-uso",
        grupo_grados: "1-3",
        nombre: "Mis primeros pasos digitales",
        subtemas: [
          { id: "au-13-t2-s1", nombre: "Uso del teclado y el ratón" },
          { id: "au-13-t2-s2", nombre: "Dibujo y escritura en el computador" },
        ],
      },
    ],
  },
  {
    componente_id: "solucion-problemas",
    grupo_grados: "1-3",
    competencia: {
      componente_id: "solucion-problemas",
      grupo_grados: "1-3",
      descripcion:
        "Reconozco y menciono productos tecnológicos que contribuyen a la solución de problemas de la vida cotidiana.",
      evidencias: [
        {
          codigo: "SP-13-E1",
          descripcion:
            "Propone ideas sencillas para resolver problemas cotidianos usando materiales disponibles.",
        },
        {
          codigo: "SP-13-E2",
          descripcion:
            "Sigue pasos ordenados para construir un artefacto sencillo.",
        },
      ],
    },
    temas: [
      {
        id: "sp-13-t1",
        componente_id: "solucion-problemas",
        grupo_grados: "1-3",
        nombre: "Construir soluciones sencillas",
        subtemas: [
          { id: "sp-13-t1-s1", nombre: "Artefactos con materiales reciclados" },
          { id: "sp-13-t1-s2", nombre: "Seguir instrucciones paso a paso" },
        ],
      },
      {
        id: "sp-13-t2",
        componente_id: "solucion-problemas",
        grupo_grados: "1-3",
        nombre: "Pensamiento ordenado",
        subtemas: [
          { id: "sp-13-t2-s1", nombre: "Secuencias y patrones" },
          { id: "sp-13-t2-s2", nombre: "Instrucciones para robots (actividades desconectadas)" },
        ],
      },
    ],
  },
  {
    componente_id: "tecnologia-sociedad",
    grupo_grados: "1-3",
    competencia: {
      componente_id: "tecnologia-sociedad",
      grupo_grados: "1-3",
      descripcion:
        "Exploro mi entorno cotidiano y diferencio elementos naturales de artefactos elaborados con la intención de mejorar las condiciones de vida.",
      evidencias: [
        {
          codigo: "TS-13-E1",
          descripcion:
            "Diferencia entre objetos naturales y artefactos fabricados por el ser humano.",
        },
        {
          codigo: "TS-13-E2",
          descripcion:
            "Expresa cómo algunos artefactos ayudan a las personas en su comunidad.",
        },
      ],
    },
    temas: [
      {
        id: "ts-13-t1",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "1-3",
        nombre: "Natural vs. artificial",
        subtemas: [
          { id: "ts-13-t1-s1", nombre: "Objetos de la naturaleza y objetos hechos por personas" },
          { id: "ts-13-t1-s2", nombre: "Para qué se fabrican los artefactos" },
        ],
      },
      {
        id: "ts-13-t2",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "1-3",
        nombre: "La tecnología nos ayuda",
        subtemas: [
          { id: "ts-13-t2-s1", nombre: "Artefactos que ayudan en la escuela" },
          { id: "ts-13-t2-s2", nombre: "Artefactos que ayudan en el hogar" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // GRADOS 4-5
  // ──────────────────────────────────────────────────
  {
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "4-5",
    competencia: {
      componente_id: "naturaleza-tecnologia",
      grupo_grados: "4-5",
      descripcion:
        "Reconozco artefactos creados por el ser humano para satisfacer sus necesidades, los relaciono con los procesos de producción y con los recursos naturales involucrados.",
      evidencias: [
        {
          codigo: "NT-45-E1",
          descripcion:
            "Describe procesos de producción de artefactos comunes e identifica los recursos involucrados.",
        },
        {
          codigo: "NT-45-E2",
          descripcion:
            "Clasifica artefactos según la energía que utilizan y el tipo de proceso que realizan.",
        },
      ],
    },
    temas: [
      {
        id: "nt-45-t1",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "4-5",
        nombre: "Procesos de producción",
        subtemas: [
          { id: "nt-45-t1-s1", nombre: "De la materia prima al producto terminado" },
          { id: "nt-45-t1-s2", nombre: "Recursos naturales en la tecnología" },
        ],
      },
      {
        id: "nt-45-t2",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "4-5",
        nombre: "Fuentes de energía",
        subtemas: [
          { id: "nt-45-t2-s1", nombre: "Energía en los artefactos: tipos y fuentes" },
          { id: "nt-45-t2-s2", nombre: "Máquinas simples y compuestas" },
        ],
      },
    ],
  },
  {
    componente_id: "apropiacion-uso",
    grupo_grados: "4-5",
    competencia: {
      componente_id: "apropiacion-uso",
      grupo_grados: "4-5",
      descripcion:
        "Reconozco características del funcionamiento de algunos productos tecnológicos de mi entorno y los utilizo en forma segura.",
      evidencias: [
        {
          codigo: "AU-45-E1",
          descripcion:
            "Utiliza herramientas digitales para buscar, organizar y presentar información.",
        },
        {
          codigo: "AU-45-E2",
          descripcion:
            "Describe las partes y funciones de artefactos de uso cotidiano.",
        },
      ],
    },
    temas: [
      {
        id: "au-45-t1",
        componente_id: "apropiacion-uso",
        grupo_grados: "4-5",
        nombre: "Herramientas digitales para investigar",
        subtemas: [
          { id: "au-45-t1-s1", nombre: "Búsqueda de información en internet" },
          { id: "au-45-t1-s2", nombre: "Organizar información con mapas mentales digitales" },
        ],
      },
      {
        id: "au-45-t2",
        componente_id: "apropiacion-uso",
        grupo_grados: "4-5",
        nombre: "Partes y funciones de artefactos",
        subtemas: [
          { id: "au-45-t2-s1", nombre: "Componentes de un computador" },
          { id: "au-45-t2-s2", nombre: "Periféricos de entrada y salida" },
        ],
      },
    ],
  },
  {
    componente_id: "solucion-problemas",
    grupo_grados: "4-5",
    competencia: {
      componente_id: "solucion-problemas",
      grupo_grados: "4-5",
      descripcion:
        "Identifico y comparo ventajas y desventajas en la utilización de artefactos y procesos tecnológicos en la solución de problemas de la vida cotidiana.",
      evidencias: [
        {
          codigo: "SP-45-E1",
          descripcion:
            "Compara diferentes soluciones tecnológicas para un mismo problema.",
        },
        {
          codigo: "SP-45-E2",
          descripcion:
            "Construye modelos o prototipos para probar una solución propuesta.",
        },
      ],
    },
    temas: [
      {
        id: "sp-45-t1",
        componente_id: "solucion-problemas",
        grupo_grados: "4-5",
        nombre: "Comparar soluciones",
        subtemas: [
          { id: "sp-45-t1-s1", nombre: "Ventajas y desventajas de artefactos" },
          { id: "sp-45-t1-s2", nombre: "Elegir la mejor solución según criterios" },
        ],
      },
      {
        id: "sp-45-t2",
        componente_id: "solucion-problemas",
        grupo_grados: "4-5",
        nombre: "Prototipos y modelos",
        subtemas: [
          { id: "sp-45-t2-s1", nombre: "Diseño y construcción de maquetas" },
          { id: "sp-45-t2-s2", nombre: "Programación con bloques: proyectos interactivos" },
        ],
      },
    ],
  },
  {
    componente_id: "tecnologia-sociedad",
    grupo_grados: "4-5",
    competencia: {
      componente_id: "tecnologia-sociedad",
      grupo_grados: "4-5",
      descripcion:
        "Identifico y menciono situaciones en las que se evidencian los efectos sociales y ambientales, producto de la utilización de procesos y artefactos de la tecnología.",
      evidencias: [
        {
          codigo: "TS-45-E1",
          descripcion:
            "Describe efectos sociales y ambientales del uso de tecnología en su comunidad.",
        },
        {
          codigo: "TS-45-E2",
          descripcion:
            "Propone acciones responsables para reducir el impacto ambiental de la tecnología.",
        },
      ],
    },
    temas: [
      {
        id: "ts-45-t1",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "4-5",
        nombre: "Tecnología y medio ambiente",
        subtemas: [
          { id: "ts-45-t1-s1", nombre: "Contaminación por artefactos tecnológicos" },
          { id: "ts-45-t1-s2", nombre: "Reducir, reusar, reciclar en tecnología" },
        ],
      },
      {
        id: "ts-45-t2",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "4-5",
        nombre: "Tecnología en mi comunidad",
        subtemas: [
          { id: "ts-45-t2-s1", nombre: "Cómo la tecnología mejora la vida en mi barrio" },
          { id: "ts-45-t2-s2", nombre: "Oficios que usan tecnología" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // GRADOS 10-11
  // ──────────────────────────────────────────────────
  {
    componente_id: "naturaleza-tecnologia",
    grupo_grados: "10-11",
    competencia: {
      componente_id: "naturaleza-tecnologia",
      grupo_grados: "10-11",
      descripcion:
        "Analizo y valoro críticamente los componentes y la evolución de los sistemas tecnológicos y las estrategias para su desarrollo.",
      evidencias: [
        {
          codigo: "NT-1011-E1",
          descripcion:
            "Analiza la co-evolución de la ciencia, la tecnología y la sociedad a través de casos históricos.",
        },
        {
          codigo: "NT-1011-E2",
          descripcion:
            "Evalúa las tendencias tecnológicas actuales y proyecta escenarios futuros fundamentados.",
        },
      ],
    },
    temas: [
      {
        id: "nt-1011-t1",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "10-11",
        nombre: "Co-evolución ciencia-tecnología-sociedad",
        subtemas: [
          { id: "nt-1011-t1-s1", nombre: "Casos históricos de convergencia CTS" },
          { id: "nt-1011-t1-s2", nombre: "Prospectiva tecnológica" },
        ],
      },
      {
        id: "nt-1011-t2",
        componente_id: "naturaleza-tecnologia",
        grupo_grados: "10-11",
        nombre: "Sistemas complejos",
        subtemas: [
          { id: "nt-1011-t2-s1", nombre: "Análisis de sistemas sociotécnicos" },
          { id: "nt-1011-t2-s2", nombre: "Interacción humano-computador" },
        ],
      },
    ],
  },
  {
    componente_id: "apropiacion-uso",
    grupo_grados: "10-11",
    competencia: {
      componente_id: "apropiacion-uso",
      grupo_grados: "10-11",
      descripcion:
        "Tengo en cuenta principios de funcionamiento y criterios de selección para la utilización eficiente y segura de artefactos, productos, servicios, procesos y sistemas tecnológicos.",
      evidencias: [
        {
          codigo: "AU-1011-E1",
          descripcion:
            "Selecciona y configura herramientas tecnológicas avanzadas para proyectos complejos.",
        },
        {
          codigo: "AU-1011-E2",
          descripcion:
            "Gestiona su identidad digital y aplica prácticas avanzadas de ciberseguridad.",
        },
      ],
    },
    temas: [
      {
        id: "au-1011-t1",
        componente_id: "apropiacion-uso",
        grupo_grados: "10-11",
        nombre: "Herramientas avanzadas de productividad",
        subtemas: [
          { id: "au-1011-t1-s1", nombre: "Automatización de flujos de trabajo" },
          { id: "au-1011-t1-s2", nombre: "Análisis de datos con hojas de cálculo avanzadas" },
        ],
      },
      {
        id: "au-1011-t2",
        componente_id: "apropiacion-uso",
        grupo_grados: "10-11",
        nombre: "Ciberseguridad y gestión de identidad digital",
        subtemas: [
          { id: "au-1011-t2-s1", nombre: "Protección de datos personales y encriptación" },
          { id: "au-1011-t2-s2", nombre: "Riesgos cibernéticos y prevención" },
        ],
      },
    ],
  },
  {
    componente_id: "solucion-problemas",
    grupo_grados: "10-11",
    competencia: {
      componente_id: "solucion-problemas",
      grupo_grados: "10-11",
      descripcion:
        "Resuelvo problemas tecnológicos y evalúo las soluciones teniendo en cuenta las condiciones, restricciones y especificaciones del problema planteado.",
      evidencias: [
        {
          codigo: "SP-1011-E1",
          descripcion:
            "Desarrolla proyectos tecnológicos integrales que resuelven problemas reales de su comunidad.",
        },
        {
          codigo: "SP-1011-E2",
          descripcion:
            "Aplica metodologías ágiles en el desarrollo de soluciones tecnológicas.",
        },
      ],
    },
    temas: [
      {
        id: "sp-1011-t1",
        componente_id: "solucion-problemas",
        grupo_grados: "10-11",
        nombre: "Proyectos tecnológicos integrales",
        subtemas: [
          { id: "sp-1011-t1-s1", nombre: "Metodologías ágiles para proyectos escolares" },
          { id: "sp-1011-t1-s2", nombre: "Desarrollo de aplicaciones con propósito social" },
        ],
      },
      {
        id: "sp-1011-t2",
        componente_id: "solucion-problemas",
        grupo_grados: "10-11",
        nombre: "Emprendimiento tecnológico",
        subtemas: [
          { id: "sp-1011-t2-s1", nombre: "Modelo de negocio canvas para soluciones tecnológicas" },
          { id: "sp-1011-t2-s2", nombre: "Prototipado y validación de MVP" },
        ],
      },
    ],
  },
  {
    componente_id: "tecnologia-sociedad",
    grupo_grados: "10-11",
    competencia: {
      componente_id: "tecnologia-sociedad",
      grupo_grados: "10-11",
      descripcion:
        "Analizo las implicaciones éticas, sociales y ambientales de las manifestaciones tecnológicas del mundo en que vivo, y actúo responsablemente.",
      evidencias: [
        {
          codigo: "TS-1011-E1",
          descripcion:
            "Lidera debates fundamentados sobre las implicaciones éticas de tecnologías actuales.",
        },
        {
          codigo: "TS-1011-E2",
          descripcion:
            "Diseña e implementa proyectos de impacto social que integran tecnología de forma responsable.",
        },
      ],
    },
    temas: [
      {
        id: "ts-1011-t1",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "10-11",
        nombre: "Debates éticos contemporáneos",
        subtemas: [
          { id: "ts-1011-t1-s1", nombre: "Ética de la IA generativa y deepfakes" },
          { id: "ts-1011-t1-s2", nombre: "Soberanía digital y geopolítica tecnológica" },
        ],
      },
      {
        id: "ts-1011-t2",
        componente_id: "tecnologia-sociedad",
        grupo_grados: "10-11",
        nombre: "Proyectos de impacto social",
        subtemas: [
          { id: "ts-1011-t2-s1", nombre: "Tecnología para la inclusión y accesibilidad" },
          { id: "ts-1011-t2-s2", nombre: "Soluciones tecnológicas para los ODS" },
        ],
      },
    ],
  },
];
