export interface EjeTemaDetalle {
  titulo: string;
  descripcion: string;
  detalles?: string[];
  ejemplos?: string[];
}

export interface EjeCapacidadDetalle {
  nombre: string;
  descripcion: string;
}

export interface EjeFormativo {
  id: string;
  titulo: string;
  imagen: string;
  definicion: string;
  descripcionLarga: string[];
  objetivos: string[];
  temasDetalle: EjeTemaDetalle[];
  capacidadesDetalle?: EjeCapacidadDetalle[];
  accent: "red" | "blue" | "green";
}

export const ejesFormativos: EjeFormativo[] = [
  {
    id: "humanidades",
    titulo: "Humanidades",
    imagen: "assets/ejes-formativos/humanidades.webp",
    definicion:
      "Rama del conocimiento que estudia los aspectos esenciales de la existencia humana: la cultura, la sociedad, el pensamiento, el arte, la historia, la literatura, la filosofía y otras formas de expresión.",
    descripcionLarga: [
      "Las Humanidades permiten comprender la experiencia humana desde una mirada crítica, ética y sensible. Su estudio ayuda a interpretar las formas en que las personas construyen cultura, memoria, identidad, pensamiento y convivencia social.",
      "Este eje formativo invita a analizar la vida humana más allá de una sola explicación. Por medio de la reflexión, la historia, la filosofía, la literatura y el arte, fortalece la capacidad de observar el mundo con sensibilidad, creatividad y responsabilidad.",
    ],
    objetivos: [
      "Analizar los aspectos esenciales de la existencia humana mediante la interpretación, la crítica y el análisis reflexivo.",
      "Fomentar el pensamiento crítico, la formación ética, la sensibilidad artística, la comunicación y la ciudadanía global.",
      "Preservar la memoria histórica y transmitir aquello que define a las personas y comunidades de una generación a otra.",
      "Cultivar la creatividad para comprender el mundo con una mirada amplia, evitando reducir la realidad a una sola perspectiva.",
    ],
    temasDetalle: [
      {
        titulo: "Pirámide de Maslow",
        descripcion:
          "La pirámide de Maslow es una teoría psicológica propuesta por Abraham Maslow que organiza las necesidades humanas en niveles jerárquicos. Plantea que las personas atienden primero sus necesidades básicas antes de avanzar hacia necesidades superiores relacionadas con el crecimiento personal.",
        detalles: [
          "Incluye necesidades básicas, seguridad, pertenencia social, estima y autorrealización.",
          "También permite reflexionar sobre necesidades cognitivas, estéticas y de autotrascendencia, vinculadas con el deseo de aprender, apreciar la belleza y dar sentido a la propia vida.",
          "En la formación humanística ayuda a comprender cómo las condiciones personales y sociales influyen en el desarrollo de cada estudiante.",
        ],
      },
      {
        titulo: "Etapas del desarrollo humano",
        descripcion:
          "Desde la perspectiva de Erik Erikson, el desarrollo humano atraviesa ocho etapas secuenciales desde el nacimiento hasta la vejez. Cada etapa plantea una tensión o crisis entre dos fuerzas opuestas.",
        detalles: [
          "La resolución de cada etapa favorece la construcción de virtudes psicosociales que influyen en la personalidad.",
          "Este tema permite reconocer que la identidad, la autonomía, la confianza y las relaciones sociales se forman a lo largo de la vida.",
          "Su estudio fortalece la comprensión de la persona como un ser en desarrollo, influido por su historia, su entorno y sus vínculos sociales.",
        ],
      },
      {
        titulo: "Ética del deber de Immanuel Kant",
        descripcion:
          "La ética del deber de Immanuel Kant sostiene que el valor moral de una acción no depende únicamente de sus consecuencias, sino del cumplimiento de principios racionales, obligaciones y normas universales.",
        detalles: [
          "Una acción posee mérito moral cuando se realiza por deber y no solo por conveniencia, interés o presión externa.",
          "Este enfoque promueve la responsabilidad, la autonomía moral y la reflexión sobre las decisiones personales.",
          "En el contexto escolar, ayuda a pensar la convivencia, la justicia y el respeto como compromisos éticos razonados.",
        ],
      },
    ],
    accent: "red",
  },
  {
    id: "pensamiento-matematico",
    titulo: "Pensamiento Matemático",
    imagen: "assets/ejes-formativos/pensamiento-matematico.webp",
    definicion:
      "Proceso mental lógico, analítico y creativo que permite comprender conceptos abstractos, modelar situaciones e interpretar problemas complejos.",
    descripcionLarga: [
      "El Pensamiento Matemático desarrolla la capacidad de razonar con orden, identificar relaciones, reconocer patrones y construir soluciones. No se limita al cálculo: también implica interpretar información, representar situaciones y tomar decisiones con base en datos.",
      "Este eje fortalece una forma de pensar aplicada a la vida cotidiana, la ciencia y la sociedad. A través del razonamiento numérico, espacial, métrico, aleatorio y variacional, los estudiantes aprenden a analizar el mundo con precisión y creatividad.",
    ],
    objetivos: [
      "Desarrollar la capacidad de razonar, interpretar información y resolver problemas mediante relaciones matemáticas.",
      "Fortalecer el análisis de patrones, datos, magnitudes, formas y procesos de cambio.",
      "Aplicar modelos matemáticos para comprender situaciones cotidianas, financieras, científicas y sociales.",
      "Impulsar una toma de decisiones más clara a partir de evidencias, cálculos y relaciones lógicas.",
    ],
    capacidadesDetalle: [
      {
        nombre: "Numérico",
        descripcion:
          "Comprensión de los números, sus operaciones y las relaciones que permiten calcular, comparar y estimar resultados.",
      },
      {
        nombre: "Espacial",
        descripcion:
          "Análisis de formas, figuras, posiciones y proporciones geométricas para interpretar el espacio.",
      },
      {
        nombre: "Métrico",
        descripcion:
          "Uso de magnitudes y medidas para describir dimensiones, distancias, tiempos, áreas, volúmenes y otras cantidades.",
      },
      {
        nombre: "Aleatorio",
        descripcion:
          "Comprensión de la probabilidad y la estadística para analizar fenómenos inciertos y organizar información.",
      },
      {
        nombre: "Variacional",
        descripcion:
          "Estudio de procesos de cambio y variación mediante relaciones algebraicas, funciones y patrones.",
      },
    ],
    temasDetalle: [
      {
        titulo: "Ecuaciones de primer grado",
        descripcion:
          "Las ecuaciones de primer grado son igualdades algebraicas con una incógnita elevada a la primera potencia. Su propósito es encontrar el valor desconocido mediante el despeje de la incógnita.",
        detalles: [
          "Los términos con la incógnita se agrupan de un lado de la igualdad y los términos independientes del otro.",
          "Permiten modelar problemas cotidianos, financieros y científicos.",
          "Son útiles para calcular costos, distancias, tiempos, repartos proporcionales y mezclas.",
        ],
      },
      {
        titulo: "Probabilidad y estadística",
        descripcion:
          "La probabilidad y la estadística son disciplinas fundamentales para analizar fenómenos aleatorios y tomar decisiones basadas en datos. La probabilidad mide la posibilidad de que ocurra un evento, mientras que la estadística recopila, organiza e interpreta información.",
        detalles: [
          "La probabilidad puede expresarse como la relación entre casos favorables y casos posibles.",
          "La estadística ayuda a reconocer tendencias, resumir información y formular conclusiones a partir de datos.",
          "Estas herramientas apoyan la gestión de riesgos, la planeación, la ciencia de datos, la investigación, la ingeniería, la economía, la biología y las ciencias sociales.",
        ],
      },
      {
        titulo: "Permutaciones y combinaciones",
        descripcion:
          "Las permutaciones y combinaciones permiten contar, organizar y seleccionar elementos de un conjunto sin enumerar todos los casos uno por uno.",
        detalles: [
          "En una permutación, el orden sí importa: cambiar el orden produce un resultado distinto.",
          "En una combinación, el orden no importa: lo relevante es el grupo seleccionado.",
          "Su utilidad está en determinar cuántas formas distintas existen de ordenar o agrupar objetos.",
        ],
        ejemplos: [
          "Permutación: ordenar 3 libros en un estante a partir de 5 disponibles. El orden A-B-C es distinto de C-B-A.",
          "Combinación: elegir un comité de 3 personas de un grupo de 10. Seleccionar a Ana, Beto y Carla equivale a seleccionar a Carla, Ana y Beto.",
        ],
      },
    ],
    accent: "blue",
  },
  {
    id: "ciencias-naturales",
    titulo: "Temas Selectos de Ciencias Naturales",
    imagen: "placeholder.svg",
    definicion:
      "Conjunto de disciplinas que estudian la vida y la naturaleza a partir de sus componentes más fundamentales; también conocidas como ciencias de la naturaleza, ciencias físico-naturales o ciencias experimentales.",
    descripcionLarga: [
      "Las ciencias naturales abordan el conocimiento sobre los organismos vivos, sus relaciones, su estructura, su evolución y su entorno. Buscan estudiar la naturaleza de la manera más objetiva posible, fortaleciendo una mirada precisa y rigurosa de la realidad.",
      "Para ello recurren al método científico: una forma de investigación sistematizada que permite formular y comprobar hipótesis. Mediante este procedimiento verificable se enuncian leyes y teorías que ayudan a comprender el funcionamiento del mundo natural.",
    ],
    objetivos: [
      "Desarrollar el pensamiento científico y crítico, así como la formación de ciudadanos comprometidos con su entorno.",
      "Capacitar a los estudiantes para resolver problemas y promover una cultura de respeto por el medio ambiente.",
      "Fomentar el deseo de saber y la curiosidad científica como motor del aprendizaje permanente.",
      "Fortalecer las habilidades comunicativas básicas y la comprensión del medio físico, esenciales para el desarrollo integral del estudiante.",
    ],
    temasDetalle: [
      {
        titulo: "Los Hidrocarburos",
        descripcion:
          "Los hidrocarburos son compuestos químicos formados por átomos de carbono e hidrógeno. Constituyen la base de los combustibles fósiles como el petróleo, el gas natural y el carbón.",
        detalles: [
          "Se clasifican en alifáticos, cíclicos, aromáticos y acíclicos, y también reciben los nombres de alcanos, alquenos y alquinos.",
          "Tienen una gran variedad de usos para el ser humano: generación energética, producción de combustibles y obtención de plásticos.",
          "Su estudio permite comprender la química de los materiales que sostienen la industria, el transporte y la vida cotidiana.",
        ],
      },
      {
        titulo: "Nomenclaturas Sistemáticas",
        descripcion:
          "La nomenclatura sistemática recomendada por la IUPAC nombra compuestos inorgánicos indicando la cantidad de átomos de cada elemento mediante prefijos griegos (mono, di, tri, tetra, penta, hexa, hepta, octa, non, deca).",
        detalles: [
          "La fórmula se lee generalmente de derecha a izquierda mencionando el número de átomos, el tipo de componente y el elemento.",
          "Resulta ideal para identificar la estequiometría de un compuesto y comunicar su composición de forma universal.",
          "Es una herramienta fundamental para la comunicación rigurosa entre químicos, docentes y estudiantes.",
        ],
        ejemplos: [
          "FeO: Monóxido de hierro. Se utiliza el prefijo \"mono\" porque solo hay un átomo de oxígeno.",
        ],
      },
      {
        titulo: "Los Carbohidratos",
        descripcion:
          "Los carbohidratos —también llamados glúcidos o hidratos de carbono— son uno de los tres macronutrientes principales junto con las proteínas y las grasas, y están presentes en alimentos y bebidas.",
        detalles: [
          "Se clasifican según el número de moléculas que los forman y su composición nutritiva.",
          "Participan en reacciones que incluyen pruebas analíticas y transformaciones químicas industriales.",
          "Cumplen funciones energéticas, de ahorro de proteínas y de regulación del metabolismo en el organismo.",
        ],
      },
    ],
    accent: "green",
  },
];
