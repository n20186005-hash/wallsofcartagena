export type Locale = 'es' | 'en';

export type Content = {
  locale: Locale;
  htmlLang: string;
  siteName: string;
  title: string;
  description: string;
  navigation: { label: string; href: string }[];
  utility: { label: string; href: string }[];
  language: { label: string; href: string; short: string };
  hero: { eyebrow: string; title: string; lead: string; primary: string; secondary: string; imageAlt: string };
  facts: { label: string; value: string }[];
  overview: { kicker: string; title: string; paragraphs: string[]; quote: string; attribution: string };
  history: { kicker: string; title: string; intro: string; milestones: { year: string; title: string; text: string }[] };
  visit: { kicker: string; title: string; intro: string; items: { icon: string; title: string; text: string }[] };
  experience: { title: string; text: string; imageAlt: string; captions: string[] };
  practical: { kicker: string; title: string; note: string; groups: { title: string; icon: string; text: string; list: string[] }[] };
  food: { kicker: string; title: string; text: string; cards: { title: string; text: string }[] };
  nearby: { kicker: string; title: string; text: string; cards: { title: string; text: string }[] };
  map: { kicker: string; title: string; text: string; label: string };
  faq: { kicker: string; title: string; items: { q: string; a: string }[] };
  sources: { kicker: string; title: string; text: string; items: { label: string; url: string }[] };
  footer: { nonprofit: string; authorities: string; copyright: string; photo: string; credit: string };
  seasonal: { kicker: string; title: string; intro: string; rows: { period: string; conditions: string; temp: string; rain: string; crowd: string; bestFor: string }[] };
  itineraries: { kicker: string; title: string; intro: string; routes: { tag: string; title: string; text: string; steps: string[] }[] };
  responsibility: { kicker: string; title: string; intro: string; groups: { title: string; icon: string; text: string }[] };
};

const facts = {
  es: [
    { label: 'Ubicación', value: 'San Diego · Cartagena de Indias' },
    { label: 'Coordenadas', value: '10.4296° N, 75.5474° O' },
    { label: 'Conjunto patrimonial', value: 'Patrimonio Mundial UNESCO' },
    { label: 'Referencia en Maps', value: '4,8/5 · 34.235 opiniones' },
  ],
  en: [
    { label: 'Location', value: 'San Diego · Cartagena de Indias' },
    { label: 'Coordinates', value: '10.4296° N, 75.5474° W' },
    { label: 'Heritage setting', value: 'UNESCO World Heritage' },
    { label: 'Maps reference', value: '4.8/5 · 34,235 reviews' },
  ],
};

export const content: Record<Locale, Content> = {
  es: {
    locale: 'es',
    htmlLang: 'es-CO',
    siteName: 'Murallas de Cartagena · Cartagena de Indias — Guía Turística',
    title: 'Murallas de Cartagena de Indias: cómo llegar, mapa y qué ver',
    description: 'Guía práctica de las Murallas de Cartagena: cómo llegar, mapa de ubicación, cuánto tiempo reservar y rutas de visita. Patrimonio UNESCO en Cartagena de Indias, Colombia.',
    navigation: [
      { label: 'La muralla', href: '#muralla' },
      { label: 'Historia', href: '#historia' },
      { label: 'Planifica', href: '#planifica' },
      { label: 'Cerca de aquí', href: '#cerca' },
      { label: 'Temporada', href: '#temporada' },
      { label: 'Rutas', href: '#rutas' },
      { label: 'Preguntas', href: '#preguntas' },
    ],
    utility: [
      { label: 'Privacidad', href: '/privacidad/' },
      { label: 'Términos', href: '/terminos/' },
      { label: 'Cookies', href: '/cookies/' },
    ],
    language: { label: 'Read in English', href: '/en/', short: 'EN' },
    hero: {
      eyebrow: 'San Diego · Cartagena de Indias, Colombia',
      title: 'Murallas de Cartagena (Cartagena de Indias)',
      lead: 'Bienvenido a las Murallas de Cartagena, reconocidas como el conjunto emblemático de Murallas de Cartagena. Ubicadas en el corazón de Cartagena de Indias, Bolívar, Colombia, este destino es el punto de referencia principal para quienes visitan la región. Camina por una de las defensas coloniales más extensas de América del Sur y lee la ciudad desde sus baluartes, pasos y horizontes marítimos.',
      primary: 'Planifica tu recorrido',
      secondary: 'Conoce su historia',
      imageAlt: 'Murallas de Cartagena - Vista principal en Cartagena de Indias, Colombia',
    },
    facts: facts.es,
    overview: {
      kicker: 'Acerca de las Murallas de Cartagena',
      title: 'Sobre las Murallas de Cartagena en Cartagena de Indias',
      paragraphs: [
        'Bienvenido a las Murallas de Cartagena, reconocidas ampliamente como el núcleo central de las Murallas de Cartagena. Ubicadas en el corazón histórico de Cartagena de Indias, Bolívar, Colombia, este destino funciona como el eje principal para quienes recorren la región. Murallas de Cartagena → Cartagena de Indias → Bolívar → Colombia.',
        'Las Murallas de Cartagena forman parte de un sistema defensivo que protegió durante siglos uno de los puertos estratégicos del Caribe. En el tramo de San Diego, la piedra, las garitas y el trazado urbano permiten apreciar cómo la defensa se integró a la vida cotidiana de la ciudad.',
        'Hoy no se visita un monumento aislado. El paseo conecta miradores, barrios históricos y la relación permanente entre la ciudad amurallada y el mar. Recorre con calma, respeta los desniveles y deja que la escala del recinto revele su historia. Al visitar las Murallas de Cartagena, quienes recorren el lugar pueden explorar con facilidad monumentos históricos y puntos de interés cercanos, entre ellos Las Bóvedas y la Plaza de San Diego.',
      ],
      quote: 'Cartagena cuenta con el sistema de fortificaciones más extenso y uno de los más completos de América del Sur.',
      attribution: 'UNESCO, síntesis de valor universal excepcional.',
    },
    history: {
      kicker: 'Historia y significado',
      title: 'Historia e importancia de las Murallas de Cartagena',
      intro: 'El recinto no nació de una sola obra. Su forma actual es el resultado de sucesivas decisiones militares, marítimas y urbanas, tomadas mientras Cartagena crecía como puerto colonial.',
      milestones: [
        { year: '1586', title: 'Un puerto bajo presión', text: 'UNESCO sitúa en este periodo el inicio de las defensas españolas que respondían a la importancia estratégica de la bahía y de sus accesos.' },
        { year: '1614', title: 'Comienza la muralla urbana', text: 'La guía oficial Colombia Travel ubica el inicio de esta etapa tras el ataque de Francis Drake; el proyecto dio forma a una defensa abaluartada frente al Caribe.' },
        { year: '1796', title: 'El cinturón se completa', text: 'Tras cerca de dos siglos de trabajos, las murallas que protegían el centro histórico quedaron terminadas, junto con un sistema mayor de fuertes y defensas de bahía.' },
        { year: '1984', title: 'Reconocimiento mundial', text: 'El Puerto, fortalezas y conjunto monumental de Cartagena fue inscrito por UNESCO como Patrimonio Mundial por su arquitectura militar y su lugar en las rutas marítimas históricas.' },
      ],
    },
    visit: {
      kicker: 'Ubicación y cómo llegar',
      title: 'Ubicación y forma de visitar las Murallas de Cartagena en Cartagena de Indias',
      intro: 'El mejor recorrido no es una carrera por la parte alta. Alterna el paseo sobre la muralla con las calles de San Diego y el Centro, y toma en cuenta el calor, la luz y el flujo peatonal.',
      items: [
        { icon: '◷', title: 'Mejor momento', text: 'Las primeras horas de la mañana y el final de la tarde suelen ofrecer luz más suave y menor exposición directa. El acceso, cierres parciales y actividades pueden variar; verifícalos antes de salir.' },
        { icon: '⌁', title: 'Tiempo sugerido', text: 'Reserva entre 60 y 120 minutos para un tramo con pausas, fotografías y conexión con las calles históricas. Amplía el tiempo si deseas enlazar el paseo con museos, plazas o Getsemaní.' },
        { icon: '◉', title: 'Lectura del paisaje', text: 'Busca garitas, baluartes, rampas, cambios de nivel y vistas hacia la bahía. Son elementos funcionales de un sistema defensivo, no solo fondos fotográficos.' },
      ],
    },
    experience: {
      title: 'Piedra coralina, sombra breve y horizonte abierto.',
      text: 'La experiencia cambia con cada tramo. A ras de calle, el muro enmarca el tejido colonial; arriba, convierte la línea costera en una lectura continua de ciudad, mar y fortificación. Usa calzado con buena sujeción y evita sentarte o subir a sectores no habilitados.',
      imageAlt: 'Las Bóvedas cerca de las Murallas de Cartagena',
      captions: ['Fotografía: Joe Ross · CC BY-SA 2.0', 'Fuente: Wikimedia Commons'],
    },
    practical: {
      kicker: 'Información práctica',
      title: 'Llegar, orientarse y cuidar el recorrido.',
      note: 'Esta guía no administra el lugar. Las condiciones de movilidad, accesibilidad, servicios y tarifas pueden cambiar. Confirma la información esencial con fuentes oficiales el día de tu visita.',
      groups: [
        { title: 'Desde el aeropuerto', icon: '✈', text: 'El Aeropuerto Internacional Rafael Núñez es la puerta aérea de la ciudad. Para llegar al centro histórico, prioriza las estaciones de taxi autorizadas dentro de las salidas del aeropuerto; el operador aeroportuario informa que hay puntos en las zonas nacional e internacional.', list: ['Verifica la tarifa y el medio de pago antes de iniciar el trayecto.', 'Si viajas con equipaje o en grupo, pregunta por la capacidad del vehículo.', 'Consulta con anticipación restricciones de tráfico, obras y horarios de llegada.'] },
        { title: 'Bus y transporte público', icon: '↗', text: 'El sistema urbano Transcaribe articula diversos sectores de Cartagena. Para acercarte al recinto, revisa el trazado y la parada más conveniente según tu origen, y completa el último tramo a pie dentro del centro histórico.', list: ['Consulta rutas, frecuencias y formas de pago en los canales operativos antes de viajar.', 'Prevé caminata en superficies irregulares y bajo calor.', 'No dependas de una única conexión si tienes una reserva o vuelo próximo.'] },
        { title: 'Taxi y movilidad bajo demanda', icon: '▣', text: 'Los taxis autorizados son una opción práctica en trayectos puerta a puerta. Identifica el vehículo, acuerda o confirma la tarifa cuando aplique y utiliza puntos de recogida seguros, especialmente por la noche.', list: ['Evita bloquear accesos estrechos o zonas de alto flujo peatonal.', 'No subas al vehículo si no puedes identificar la matrícula o el conductor.', 'Para recorridos breves dentro de la ciudad amurallada, caminar suele ser la alternativa más directa.'] },
        { title: 'Estacionamiento', icon: 'P', text: 'La muralla está dentro de un entorno histórico con calles estrechas y capacidad limitada. No hay estacionamiento público propio de este tramo; utiliza espacios regulados o privados fuera de la circulación sensible y termina el recorrido a pie.', list: ['No estaciones junto al muro, accesos de emergencia o zonas no señalizadas.', 'Verifica altura, horario, vigilancia y modalidad de pago del lugar elegido.', 'Considera dejar el vehículo fuera del recinto durante las horas de mayor afluencia.'] },
        { title: 'Servicios esenciales', icon: '+', text: 'Los servicios no se distribuyen de manera uniforme sobre la muralla. Planifica agua, protección solar y descansos antes de iniciar; los baños, comercio, farmacia, alojamiento, supermercado, combustible y recarga se encuentran en el tejido urbano circundante, no como un servicio administrado por el monumento.', list: ['Consulta la ubicación actual de baños y atención médica antes de salir.', 'Lleva agua reutilizable y retira tus residuos.', 'Para combustible o recarga, planifica fuera del núcleo peatonal y evita ingresar con el vehículo solo para buscar servicios.'] },
        { title: 'Entrada, costo y conservación', icon: '$', text: 'La muralla es un espacio patrimonial urbano y las condiciones de acceso pueden variar por tramos, obras, eventos o medidas de seguridad. No publiques ni presupongas una tarifa fija sin confirmarla en la fuente responsable.', list: ['Consulta si hay cierres temporales antes de visitar.', 'No grabes, rayes, desmontes ni alteres piedra, señalización o vegetación.', 'Mantén libres los pasos y cede el paso en escaleras, rampas y superficies estrechas.'] },
        { title: 'Baños y servicios básicos', icon: '☻', text: 'No hay aseos dentro del recorrido sobre la muralla. Los servicios públicos y de establecimientos (cafeterías, restaurantes, museos) están en el tejido urbano circundante: San Diego, el Centro y la Plaza de la Aduana. Planifica pausas antes de subir al paseo elevado.', list: ['Busca aseos en plazas, museos o establecimientos con atención al público.', 'Lleva contigo lo necesario para cambios de pañales o necesidades específicas.', 'No uses las murallas ni los baluartes como aseo.'] },
        { title: 'Dónde comer y beber', icon: '☕', text: 'El barrio de San Diego y las calles aledañas reúnen opciones de distinto tamaño y presupuesto. Esta guía no recomienda comercios concretos: prioriza el tipo de experiencia, la higiene visible y un lugar con sombra para reponer energía.', list: ['Cocina caribeña, pescados y mariscos, arroces y frutas locales.', 'Cafeterías y tiendas de agua para hidratarse en el calor.', 'Evita depender de vendedores informales para tus necesidades básicas.'] },
        { title: 'Alojamiento', icon: '⌂', text: 'Dormir dentro de la ciudad amurallada es cómodo para recorrer todo a pie, pero también hay zonas residenciales y playeras a pocos minutos. Elige según tu presupuesto y movilidad; no promocionamos ningún alojamiento en particular.', list: ['Centro histórico: todo a corta distancia, precios más altos.', 'Bocagrande/Castillogrande: más amplio, cerca del mar.', 'Getsemaní: ambiente local, a pocos minutos del recinto.'] },
        { title: 'Compras y supermercado', icon: '⌖', text: 'Para provisiones, botella de agua reutilizable o protector solar, usa supermercados y tiendas de barrio fuera del núcleo peatonal. Reducirás coste y envases respecto a comprar sobre la marcha en la muralla.', list: ['Abastécete antes de empezar el paseo.', 'Lleva efectivo y tarjeta; no todo comercio pequeño pasa tarjeta.', 'Prefiere productos locales y evita compras de recuerdo no autorizadas sobre el monumento.'] },
        { title: 'Combustible y carga', icon: '⚡', text: 'Si arrives en vehículo propio, completa combustible y carga del teléfono antes de acercarte: el entorno es de calles estrechas y tránsito sensible. No hay estación de servicio ni punto de carga dentro del recinto.', list: ['Carga el móvil en tu alojamiento antes de salir.', 'Reposta en estaciones fuera del centro histórico.', 'Lleva batería externa para fotos y mapas offline.'] },
      ],
    },
    food: {
      kicker: 'Comer con criterio',
      title: 'Los sabores del Caribe empiezan a pocas calles.',
      text: 'San Diego y los barrios históricos cercanos reúnen opciones de distinta escala. Para conservar una guía neutral, no recomendamos establecimientos concretos: prioriza el tipo de experiencia, el manejo de residuos y una pausa que no interrumpa el paseo patrimonial.',
      cards: [
        { title: 'Cocina caribeña y colombiana', text: 'Busca preparaciones regionales, pescados y mariscos de procedencia informada, arroces, sopas y frutas locales. Pregunta por alérgenos y opciones sin alcohol si las necesitas.' },
        { title: 'Café, agua y descanso breve', text: 'Elige espacios de hidratación y cafeterías con sombra para recuperar energía, sin depender de vendedores informales para tus necesidades básicas.' },
        { title: 'Compras para el recorrido', text: 'Lleva una botella recargable y un refrigerio ligero. Reduce envases de un solo uso y conserva los residuos contigo hasta encontrar un punto adecuado.' },
      ],
    },
    nearby: {
      kicker: 'Monumentos cercanos',
      title: 'Lugares y monumentos alrededor de las Murallas de Cartagena',
      text: 'Estos sitios se incluyen por su valor histórico y urbano, no como una lista comercial. Confirma horarios, condiciones y accesibilidad directamente antes de la visita.',
      cards: [
        { title: 'Las Bóvedas', text: 'Antiguas construcciones abovedadas integradas al borde defensivo. Ofrecen otra escala para observar el vínculo entre arquitectura militar y vida urbana.' },
        { title: 'Plaza de San Diego', text: 'Un punto de pausa en el barrio histórico de San Diego. Sirve para conectar el paseo de muralla con el trazado de calles, viviendas y espacios públicos.' },
        { title: 'Castillo San Felipe de Barajas', text: 'Una pieza decisiva del sistema de fortificaciones de Cartagena. Completa la visita con una perspectiva terrestre de la defensa de la ciudad.' },
      ],
    },
    map: {
      kicker: 'Punto de referencia',
      title: 'Ubicación de las Murallas de Cartagena en San Diego',
      text: 'El mapa señala la referencia compartida para este tramo. Úsalo para orientarte, pero confirma accesos peatonales y restricciones vigentes antes de desplazarte. Para actualizaciones oficiales e información turística regional, consulta el Portal Oficial de Turismo de Colombia / Bolívar.',
      label: 'Mapa de las Murallas de Cartagena',
    },
    faq: {
      kicker: 'Preguntas frecuentes',
      title: 'Respuestas para un recorrido responsable.',
      items: [
        { q: '¿Qué son las Murallas de Cartagena?', a: 'Son el recinto urbano defensivo y parte de un sistema mayor de fortificaciones que protegió a Cartagena de Indias. El conjunto histórico de puerto, fortalezas y monumentos está inscrito como Patrimonio Mundial por UNESCO.' },
        { q: '¿Dónde está este tramo?', a: 'La referencia corresponde a Cl. de la Serrezuela, barrio San Diego, Cartagena de Indias, Bolívar, Colombia, cerca de 10.4296° N y 75.5474° O.' },
        { q: '¿Cuánto tiempo debo reservar?', a: 'Para un tramo a ritmo tranquilo, calcula entre una y dos horas. Añade tiempo si quieres recorrer las calles históricas o enlazar la visita con otros componentes del sistema defensivo.' },
        { q: '¿Hay un precio de entrada?', a: 'Las condiciones pueden ser distintas según el tramo, una actividad puntual o medidas de conservación. Revisa fuentes responsables antes de visitar y no te bases en precios antiguos.' },
        { q: '¿Puedo ir en coche y estacionar junto a la muralla?', a: 'No hay estacionamiento público propio del tramo. Debido a las calles estrechas y a la sensibilidad patrimonial del entorno, es preferible utilizar estacionamiento regulado o privado fuera de la circulación sensible y continuar a pie.' },
        { q: '¿Qué debo llevar?', a: 'Agua, protección solar, calzado firme, teléfono cargado y un plan de ruta. En temporada de lluvia, lleva una capa ligera y presta atención a superficies mojadas.' },
      ],
    },
    sources: {
      kicker: 'Notas y fuentes',
      title: 'Cómo se elaboró esta guía.',
      text: 'El contenido histórico se contrastó con fuentes públicas de UNESCO y Colombia Travel. La información aeroportuaria se consultó en la web del Aeropuerto Internacional Rafael Núñez. No se incluyen recomendaciones comerciales ni se presenta esta guía como una fuente operativa.',
      items: [
        { label: 'UNESCO · Puerto, fortalezas y conjunto monumental de Cartagena', url: 'https://whc.unesco.org/en/list/285/' },
        { label: 'Colombia Travel · The Walls of Cartagena', url: 'https://colombia.travel/en/cartagena-de-indias-colombia/walls-cartagena' },
        { label: 'Aeropuerto Internacional Rafael Núñez · Transporte', url: 'https://aeropuertocartagena.com.co/en/transporte/' },
      ],
    },
    seasonal: {
      kicker: 'Estrategia por temporada',
      title: 'Cuándo visitar las Murallas de Cartagena',
      intro: 'Cartagena tiene clima tropical todo el año (mínimas cerca de 24 °C y máximas de 30–32 °C). La diferencia principal es la lluvia y la afluencia. La tabla resume promedios climáticos de largo plazo (referencia IDEAM) por trimestre; úsalos como guía, no como pronóstico exacto.',
      rows: [
        { period: 'Diciembre – febrero', conditions: 'Temporada seca: sol abundante, tardes cálidas y lluvias escasas.', temp: '24–31 °C', rain: 'Baja', crowd: 'Alta (vacaciones y Carnaval)', bestFor: 'Caminar la muralla, fotografía y vida al aire libre.' },
        { period: 'Marzo – mayo', conditions: 'Transición: marzo aún seco, abril y mayo suman chubascos de tarde.', temp: '25–31 °C', rain: 'Media', crowd: 'Media', bestFor: 'Mañanas despejadas y menos gente que en pleno pico.' },
        { period: 'Junio – agosto', conditions: 'Temporada lluviosa: tormentas de tarde, calor y humedad altos.', temp: '25–32 °C', rain: 'Alta', crowd: 'Media-baja', bestFor: 'Paseos temprano, museos al mediodía y precios más bajos.' },
        { period: 'Septiembre – noviembre', conditions: 'Tramo más lluvioso (pico en sep–oct); mar más agitada.', temp: '24–31 °C', rain: 'Alta', crowd: 'Baja', bestFor: 'Viaje económico y cultura local; lleva impermeable.' },
      ],
    },
    itineraries: {
      kicker: 'Cómo recorrerla',
      title: 'Rutas sugeridas para las Murallas de Cartagena',
      intro: 'Estas rutas son independientes y no promueven ningún operador. Ajusta los tiempos a tu ritmo, al calor y a la luz.',
      routes: [
        { tag: 'Medio día', title: 'Ruta esencial (3–4 h)', text: 'Un recorrido compacto por el tramo de San Diego y el borde defensivo.', steps: ['Plaza de San Diego → sube a la muralla hacia Las Bóvedas.', 'Baluarte de Santo Domingo: vista y sombra.', 'Baja por el Centro hasta la Torre del Reloj y la Plaza de la Aduana.', 'Pausa en una plaza con sombra antes de volver.'] },
        { tag: 'Día completo', title: 'Recinto + Castillo (7–8 h)', text: 'Combine el paseo urbano con la defensa terrestre y el barrio de Getsemaní.', steps: ['Mañana: muralla de San Diego y Centro histórico.', 'Mediodía: museo (oro, naval o historia) para escapar del sol.', 'Tarde: Castillo San Felipe de Barajas.', 'Atardecer: Getsemaní y vuelta por la muralla al anochecer.'] },
        { tag: 'Familiar', title: 'En familia con niños', text: 'Tramos cortos, sombra y pausas; evita el mediodía y los desniveles largos.', steps: ['Inicia en Plaza de San Diego, llano y con juego cercano.', 'Caminata corta por Las Bóvedas con sombra.', 'Helado o agua en la plaza; descanso a mitad.', 'Evita subir rampas largas en las horas de más sol.'] },
        { tag: 'Foto y naturaleza', title: 'Luz y patrimonio', text: 'Apunta a la hora dorada y al azul para las siluetas de baluartes y garitas.', steps: ['Madrugada o temprano: luz suave sobre el coral.', 'Mediodía: detalles de piedra y vegetación.', 'Hora dorada: baluartes contra el mar.', 'Hora azul: muralla y faroles del Centro.'] },
        { tag: 'Accesible', title: 'Baja intensidad y movilidad reducida', text: 'Prefiere calles llanas del Centro y evita escaleras y rampas de la muralla.', steps: ['Taxi o vehículo puerta a puerta a Plaza de San Diego.', 'Paseo por calles llanas del Centro histórico.', 'Bancos y sombra cada pocos metros.', 'Evita subir a tramos con desnivel pronunciado.'] },
      ],
    },
    responsibility: {
      kicker: 'Ciencia y responsabilidad',
      title: 'Cuidar las Murallas y su entorno',
      intro: 'Una guía independiente no cambia el lugar, pero sí cómo lo recorres. Estos puntos se basan en buenas prácticas de conservación y convivencia.',
      groups: [
        { title: 'Calidad del agua', icon: '≈', text: 'La bahía de Cartagena es un ecosistema vivo. Tras lluvias fuertes, evita el baño cerca de desembocaduras y respeta las señalizaciones locales; la calidad varía con las escorrentías.' },
        { title: 'Vida silvestre', icon: '❦', text: 'Garzas, pelícanos e iguanas habitan el recinto. No los alimentes ni los toques; obsérvalos a distancia y no introduzcas mascotas en zonas sensibles.' },
        { title: 'Cero residuos', icon: '♻', text: 'Lleva botella reutilizable y retira lo que traigas. No dejes comida ni envases sobre la muralla; los restos atraen fauna y dañan la piedra.' },
        { title: 'Sol y seguridad', icon: '☼', text: 'El sol caribeño es intenso. Usa gorra, protector solar y agua; la piedra es irregular, así que calzado firme y paso seguro en rampas y escaleras.' },
        { title: 'Patrimonio vivo', icon: '✶', text: 'No grabes ni retires piedra, señalización o vegetación. Tu visita ayuda a sostener un sitio que lleva siglos protegiendo la ciudad.' },
      ],
    },
    footer: {
      nonprofit: 'Este sitio es una guía independiente y sin ánimo de lucro para visitantes; no está afiliado a ninguna entidad gubernamental, organización oficial ni operador comercial.',
      authorities: 'La información patrimonial se contrasta con materiales públicos de UNESCO, Colombia Travel y el Aeropuerto Internacional Rafael Núñez; no contiene recomendaciones comerciales.',
      copyright: '© 2026 Guía de las Murallas de Cartagena. Todos los derechos reservados.',
      photo: 'Los derechos de las fotografías pertenecen a sus autores originales. Imagen de muralla: Joe Ross, bajo CC BY-SA 2.0.',
      credit: 'Diseñada como un recurso educativo independiente sobre el patrimonio de Cartagena de Indias.',
    },
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    siteName: 'Walls of Cartagena · Cartagena de Indias — Travel Guide',
    title: 'Walls of Cartagena: how to get there, map & what to see',
    description: 'Practical guide to Walls of Cartagena: how to get there, location map, suggested timing, routes, and visit tips. UNESCO heritage in Cartagena de Indias, Colombia.',
    navigation: [
      { label: 'The walls', href: '#muralla' },
      { label: 'History', href: '#historia' },
      { label: 'Plan a visit', href: '#planifica' },
      { label: 'Nearby', href: '#cerca' },
      { label: 'Seasons', href: '#temporada' },
      { label: 'Routes', href: '#rutas' },
      { label: 'FAQ', href: '#preguntas' },
    ],
    utility: [
      { label: 'Privacy', href: '/en/privacy/' },
      { label: 'Terms', href: '/en/terms/' },
      { label: 'Cookies', href: '/en/cookies/' },
    ],
    language: { label: 'Leer en español', href: '/', short: 'ES' },
    hero: {
      eyebrow: 'San Diego · Cartagena de Indias, Colombia',
      title: 'Walls of Cartagena (Cartagena de Indias)',
      lead: 'Welcome to Walls of Cartagena, widely recognized as the central Walls of Cartagena landmark. Located in the heart of Cartagena de Indias, Bolívar, Colombia, this destination serves as a primary hub for travellers visiting the region. Walk one of South America’s most extensive colonial defences, and read the city through its bastions, passageways, and maritime horizon.',
      primary: 'Plan your walk',
      secondary: 'Explore the history',
      imageAlt: 'Walls of Cartagena - Main view in Cartagena de Indias, Colombia',
    },
    facts: facts.en,
    overview: {
      kicker: 'About Walls of Cartagena',
      title: 'About Walls of Cartagena in Cartagena de Indias',
      paragraphs: [
        'Welcome to Walls of Cartagena, widely recognized as the central Walls of Cartagena. Located in the heart of Cartagena de Indias, Bolívar, Colombia, this destination serves as a primary hub for travellers visiting the region. Walls of Cartagena → Cartagena de Indias → Bolívar → Colombia.',
        'Cartagena’s walls are part of a defensive system that protected one of the Caribbean’s strategic ports for centuries. In San Diego, stonework, sentry boxes, and the urban plan show how military defence became interwoven with everyday city life.',
        'This is not an isolated monument. The walk connects viewpoints, historic neighbourhoods, and the enduring relationship between the walled city and the sea. Move slowly, respect changes in level, and let the scale of the enclosure tell its story. When visiting Walls of Cartagena, visitors can easily explore surrounding historical landmarks and points of interest, including Las Bóvedas and Plaza de San Diego.',
      ],
      quote: 'Cartagena has the most extensive and one of the most complete systems of military fortifications in South America.',
      attribution: 'UNESCO, brief synthesis of Outstanding Universal Value.',
    },
    history: {
      kicker: 'History and significance',
      title: 'History and Significance of Walls of Cartagena',
      intro: 'The enclosure was not created in one campaign. Its present form reflects successive military, maritime, and urban decisions made as Cartagena grew into a colonial port.',
      milestones: [
        { year: '1586', title: 'A port under pressure', text: 'UNESCO places the beginnings of Spanish defences in this period, responding to the strategic importance of the bay and its channels.' },
        { year: '1614', title: 'The urban wall begins', text: 'Colombia Travel dates this stage to after Francis Drake’s attack; the project shaped a bastioned defence facing the Caribbean.' },
        { year: '1796', title: 'The belt is completed', text: 'After nearly two centuries of works, the walls protecting the historic centre were completed alongside a wider system of forts and bay defences.' },
        { year: '1984', title: 'World recognition', text: 'UNESCO inscribed the Port, Fortresses and Group of Monuments, Cartagena as World Heritage for its military architecture and place in historic maritime routes.' },
      ],
    },
    visit: {
      kicker: 'Location and how to visit',
      title: 'Location & How to Visit Walls of Cartagena in Cartagena de Indias',
      intro: 'The most rewarding route is not a race along the upper walkway. Alternate the wall walk with San Diego and Centro’s streets, and account for heat, light, and pedestrian flow.',
      items: [
        { icon: '◷', title: 'Best time', text: 'Early morning and late afternoon often bring softer light and less direct exposure. Access, partial closures, and activities can change, so check before setting out.' },
        { icon: '⌁', title: 'Suggested duration', text: 'Allow 60 to 120 minutes for one section, including pauses, photographs, and connections with historic streets. Add time if you wish to include museums, plazas, or Getsemaní.' },
        { icon: '◉', title: 'Reading the landscape', text: 'Look for sentry boxes, bastions, ramps, changes in level, and views toward the bay. These are functional elements of a defensive system, not merely photographic backdrops.' },
      ],
    },
    experience: {
      title: 'Coral stone, fleeting shade, and an open horizon.',
      text: 'The experience changes along each stretch. At street level, the wall frames the colonial fabric; above, it turns the coastline into a continuous reading of city, sea, and fortification. Wear secure footwear and do not sit or climb in unauthorised areas.',
      imageAlt: 'Las Bóvedas near Walls of Cartagena',
      captions: ['Photo: Joe Ross · CC BY-SA 2.0', 'Source: Wikimedia Commons'],
    },
    practical: {
      kicker: 'Practical information',
      title: 'Arriving, getting oriented, and walking with care.',
      note: 'This guide does not operate the site. Mobility, accessibility, services, and prices may change. Verify essential information through official sources on the day you visit.',
      groups: [
        { title: 'From the airport', icon: '✈', text: 'Rafael Núñez International Airport is Cartagena’s air gateway. To reach the historic centre, prioritise authorised taxi stations inside the airport exits; the airport operator reports stations at the national and international areas.', list: ['Confirm the fare and payment method before the journey begins.', 'If travelling with luggage or as a group, ask about vehicle capacity.', 'Check traffic restrictions, works, and arrival-time conditions in advance.'] },
        { title: 'Bus and public transport', icon: '↗', text: 'Cartagena’s Transcaribe urban system links different areas of the city. Check the current route and the most convenient stop for your origin, then complete the final segment on foot within the historic centre.', list: ['Confirm routes, frequencies, and payment methods through operating channels before travel.', 'Expect a walk over uneven surfaces and in warm conditions.', 'Do not rely on a single connection if you have a booking or flight to catch.'] },
        { title: 'Taxi and ride services', icon: '▣', text: 'Authorised taxis can be practical for door-to-door journeys. Identify the vehicle, agree or confirm the fare where relevant, and use safe collection points, particularly in the evening.', list: ['Do not block narrow entrances or high-pedestrian-flow zones.', 'Do not enter a vehicle if you cannot identify its plate or driver.', 'For short journeys within the walled city, walking is often the most direct option.'] },
        { title: 'Parking', icon: 'P', text: 'The walls sit within a historic setting of narrow streets and limited capacity. There is no public parking dedicated to this section; use regulated or private facilities outside sensitive circulation and finish the journey on foot.', list: ['Do not park beside the wall, emergency access, or unsigned areas.', 'Check height limits, hours, security, and payment terms at the facility you choose.', 'Consider leaving your vehicle outside the enclosure during busier periods.'] },
        { title: 'Essential services', icon: '+', text: 'Services are not evenly distributed along the walls. Plan water, sun protection, and rest stops before you begin; toilets, food, pharmacies, accommodation, groceries, fuel, and charging are found in the surrounding urban fabric, not as a service operated by the monument.', list: ['Check the current location of toilets and medical attention before departure.', 'Carry refillable water and take your waste with you.', 'Plan fuel or charging outside the pedestrian core rather than driving in just to find services.'] },
        { title: 'Access, cost, and conservation', icon: '$', text: 'The wall is an urban heritage space, and access conditions can vary by section, works, events, or safety measures. Do not publish or assume a fixed price without confirmation from the responsible source.', list: ['Check for temporary closures before visiting.', 'Do not carve, remove, or alter stonework, signs, or vegetation.', 'Keep passageways clear and yield on stairs, ramps, and narrow surfaces.'] },
        { title: 'Toilets and basics', icon: '☻', text: 'There are no toilets along the walk on the wall itself. Public facilities and those of cafés, restaurants, and museums sit in the surrounding urban fabric: San Diego, the Centro, and Plaza de la Aduana. Plan breaks before climbing to the upper walkway.', list: ['Look for toilets in plazas, museums, or public-facing businesses.', 'Carry what you need for nappy changes or specific needs.', 'Do not use the wall or bastions as a toilet.'] },
        { title: 'Food and drink', icon: '☕', text: 'San Diego and the nearby streets gather options of different sizes and budgets. This guide recommends no specific business: prioritise the type of experience, visible hygiene, and a shaded spot to recover energy.', list: ['Caribbean cooking, fish and seafood, rice dishes, and local fruit.', 'Cafés and water shops to stay hydrated in the heat.', 'Avoid relying on informal vendors for basic needs.'] },
        { title: 'Accommodation', icon: '⌂', text: 'Staying inside the walled city is convenient for walking everywhere, but residential and beach areas are a few minutes away. Choose by budget and mobility; we promote no particular lodging.', list: ['Historic centre: everything close, higher prices.', 'Bocagrande/Castillogrande: larger, near the sea.', 'Getsemaní: local feel, minutes from the enclosure.'] },
        { title: 'Shops and supermarkets', icon: '⌖', text: 'For supplies, a refillable water bottle, or sunscreen, use supermarkets and neighbourhood shops outside the pedestrian core. You will spend less and use fewer packages than buying on the run on the wall.', list: ['Stock up before starting the walk.', 'Carry cash and card; not every small shop takes cards.', 'Prefer local products and avoid unauthorised souvenir sellers on the monument.'] },
        { title: 'Fuel and charging', icon: '⚡', text: 'If you arrive by car, fill up fuel and charge your phone before getting close: the setting has narrow streets and sensitive traffic. There is no petrol station or charging point inside the enclosure.', list: ['Charge your phone at your lodging before leaving.', 'Refuel at stations outside the historic centre.', 'Carry a power bank for photos and offline maps.'] },
      ],
    },
    food: {
      kicker: 'Eat with perspective',
      title: 'Caribbean flavours begin a few streets away.',
      text: 'San Diego and nearby historic districts offer options at different scales. To remain neutral, this guide does not recommend specific businesses: prioritise the type of experience, waste awareness, and a pause that does not interrupt the heritage walk.',
      cards: [
        { title: 'Caribbean and Colombian cooking', text: 'Look for regional preparations, traceable fish and seafood, rice dishes, soups, and local fruit. Ask about allergens and alcohol-free options if needed.' },
        { title: 'Coffee, water, and a short rest', text: 'Choose places for hydration and coffee with shade so you can recover energy, rather than relying on informal vendors for basic needs.' },
        { title: 'Supplies for the walk', text: 'Carry a refillable bottle and a light snack. Reduce single-use packaging and keep waste with you until you find an appropriate disposal point.' },
      ],
    },
    nearby: {
      kicker: 'Nearby landmarks',
      title: 'Landmarks & Attractions Around Walls of Cartagena',
      text: 'These sites are included for historical and urban value, not as commercial recommendations. Confirm opening conditions and accessibility directly before visiting.',
      cards: [
        { title: 'Las Bóvedas', text: 'Historic vaulted structures integrated into the defensive edge. They offer another scale for understanding the relationship between military architecture and urban life.' },
        { title: 'Plaza de San Diego', text: 'A pause point in the historic San Diego district, linking the wall walk with the city’s streets, homes, and public spaces.' },
        { title: 'Castillo San Felipe de Barajas', text: 'A decisive piece of Cartagena’s defensive system, offering a landward perspective on the city’s protection.' },
      ],
    },
    map: {
      kicker: 'Reference point',
      title: 'Location of Walls of Cartagena in San Diego',
      text: 'The map marks the shared reference for this section. Use it to orient yourself, then verify pedestrian approaches and current restrictions before travelling. For official updates and regional tourism information, visit Colombia / Bolívar Official Tourism Portal.',
      label: 'Map of Cartagena’s Walls',
    },
    faq: {
      kicker: 'Frequently asked questions',
      title: 'Answers for a responsible walk.',
      items: [
        { q: 'What are Cartagena’s walls?', a: 'They are the urban defensive enclosure and part of a wider fortification system that protected Cartagena de Indias. The historic port, fortresses, and monuments are inscribed as UNESCO World Heritage.' },
        { q: 'Where is this section?', a: 'The reference is Cl. de la Serrezuela, San Diego district, Cartagena de Indias, Bolívar, Colombia, near 10.4296° N and 75.5474° W.' },
        { q: 'How much time should I allow?', a: 'For an unhurried section, allow one to two hours. Add time if you want to explore historic streets or connect the visit with other parts of the defensive system.' },
        { q: 'Is there an admission fee?', a: 'Conditions can differ by section, an occasional activity, or conservation measures. Check with responsible sources before visiting and do not rely on old prices.' },
        { q: 'Can I drive and park beside the wall?', a: 'There is no public parking dedicated to this section. Because of narrow streets and the sensitive heritage setting, it is preferable to use regulated or private parking outside sensitive circulation and continue on foot.' },
        { q: 'What should I bring?', a: 'Water, sun protection, secure shoes, a charged phone, and a route plan. In rainy periods, bring a light rain layer and be mindful of wet surfaces.' },
      ],
    },
    sources: {
      kicker: 'Notes and sources',
      title: 'How this guide was prepared.',
      text: 'Historical content was checked against public UNESCO and Colombia Travel sources. Airport information was consulted through Rafael Núñez International Airport’s website. This guide does not include commercial recommendations and should not be treated as an operational source.',
      items: [
        { label: 'UNESCO · Port, Fortresses and Group of Monuments, Cartagena', url: 'https://whc.unesco.org/en/list/285/' },
        { label: 'Colombia Travel · The Walls of Cartagena', url: 'https://colombia.travel/en/cartagena-de-indias-colombia/walls-cartagena' },
        { label: 'Rafael Núñez International Airport · Transport', url: 'https://aeropuertocartagena.com.co/en/transporte/' },
      ],
    },
    seasonal: {
      kicker: 'Seasonal strategy',
      title: 'When to visit the Walls of Cartagena',
      intro: 'Cartagena is tropical year-round (lows near 24 °C, highs 30–32 °C). The main difference is rainfall and crowds. The table summarises long-term climate norms (IDEAM reference) by quarter; treat them as guidance, not an exact forecast.',
      rows: [
        { period: 'December – February', conditions: 'Dry season: plenty of sun, warm afternoons, little rain.', temp: '24–31 °C', rain: 'Low', crowd: 'High (holidays and Carnival)', bestFor: 'Walking the wall, photography, and outdoor life.' },
        { period: 'March – May', conditions: 'Transition: March still dry, April and May add afternoon showers.', temp: '25–31 °C', rain: 'Medium', crowd: 'Medium', bestFor: 'Clear mornings and fewer people than peak season.' },
        { period: 'June – August', conditions: 'Rainy season: afternoon storms, high heat and humidity.', temp: '25–32 °C', rain: 'High', crowd: 'Medium-low', bestFor: 'Early walks, midday museums, and lower prices.' },
        { period: 'September – November', conditions: 'Wettest stretch (peak Sep–Oct); sea a bit rougher.', temp: '24–31 °C', rain: 'High', crowd: 'Low', bestFor: 'Budget travel and local culture; bring rain gear.' },
      ],
    },
    itineraries: {
      kicker: 'How to walk it',
      title: 'Suggested routes for the Walls of Cartagena',
      intro: 'These routes are independent and promote no operator. Adjust the timing to your pace, the heat, and the light.',
      routes: [
        { tag: 'Half day', title: 'Essential route (3–4 h)', text: 'A compact walk through the San Diego stretch and the defensive edge.', steps: ['Plaza de San Diego → climb the wall toward Las Bóvedas.', 'Baluarte de Santo Domingo: view and shade.', 'Descend through the Centro to Torre del Reloj and Plaza de la Aduana.', 'Pause in a shaded plaza before heading back.'] },
        { tag: 'Full day', title: 'Enclosure + Castle (7–8 h)', text: 'Pair the urban walk with the land defence and the Getsemaní neighbourhood.', steps: ['Morning: San Diego wall and historic centre.', 'Midday: a museum (gold, naval, or history) to escape the sun.', 'Afternoon: Castillo San Felipe de Barajas.', 'Sunset: Getsemaní and back along the wall at dusk.'] },
        { tag: 'Family', title: 'With children', text: 'Short stretches, shade, and breaks; avoid midday and long slopes.', steps: ['Start at Plaza de San Diego, flat with nearby play.', 'Short walk along Las Bóvedas in the shade.', 'Ice cream or water in the plaza; rest halfway.', 'Avoid long ramps during the hottest hours.'] },
        { tag: 'Photo & nature', title: 'Light and heritage', text: 'Aim for golden and blue hour for the silhouettes of bastions and sentry boxes.', steps: ['Dawn or early: soft light on the coral stone.', 'Midday: stone and vegetation details.', 'Golden hour: bastions against the sea.', 'Blue hour: wall and Centro lanterns.'] },
        { tag: 'Accessible', title: 'Low effort, reduced mobility', text: 'Prefer flat Centro streets and avoid the wall stairs and ramps.', steps: ['Taxi or door-to-door to Plaza de San Diego.', 'Walk the flat streets of the historic centre.', 'Benches and shade every few metres.', 'Avoid sections with steep changes in level.'] },
      ],
    },
    responsibility: {
      kicker: 'Science and responsibility',
      title: 'Caring for the Walls and their setting',
      intro: 'An independent guide does not change the place, but it changes how you walk it. These points follow conservation and coexistence good practice.',
      groups: [
        { title: 'Water quality', icon: '≈', text: 'Cartagena bay is a living ecosystem. After heavy rain, avoid swimming near outlets and respect local signage; quality shifts with runoff.' },
        { title: 'Wildlife', icon: '❦', text: 'Herons, pelicans, and iguanas live in the enclosure. Do not feed or touch them; observe from a distance and keep pets out of sensitive areas.' },
        { title: 'Zero waste', icon: '♻', text: 'Bring a refillable bottle and take away what you bring. Leave no food or packaging on the wall; scraps attract wildlife and damage the stone.' },
        { title: 'Sun and safety', icon: '☼', text: 'The Caribbean sun is strong. Wear a hat, sunscreen, and water; the stone is uneven, so wear firm shoes and step carefully on ramps and stairs.' },
        { title: 'Living heritage', icon: '✶', text: 'Do not carve or remove stone, signs, or vegetation. Your visit helps sustain a site that has protected the city for centuries.' },
      ],
    },
    footer: {
      nonprofit: 'This is an independent, not-for-profit visitor guide. It is not affiliated with any government body, official organisation, or commercial operator.',
      authorities: 'Heritage information is checked against public material from UNESCO, Colombia Travel, and Rafael Núñez International Airport; it contains no commercial recommendations.',
      copyright: '© 2026 Cartagena Walls Guide. All rights reserved.',
      photo: 'Photographs remain the property of their original authors. Wall image: Joe Ross, under CC BY-SA 2.0.',
      credit: 'Designed as an independent educational resource about the heritage of Cartagena de Indias.',
    },
  },
};

export const legalContent = {
  es: {
    privacy: {
      title: 'Política de privacidad',
      lead: 'Cómo tratamos una cantidad mínima de datos para que esta guía funcione y mejore.',
      sections: [
        { title: 'Información que recogemos', paragraphs: ['Recogemos únicamente la información mínima necesaria para operar y mejorar este sitio. Puede incluir datos técnicos de navegación, como dirección IP, tipo de navegador y páginas visitadas; cookies y tecnologías similares; y la información que decidas enviarnos voluntariamente por correo electrónico.', 'No creamos perfiles comerciales, no vendemos datos personales y no ofrecemos una cuenta de usuario.'] },
        { title: 'Cómo usamos la información', paragraphs: ['Usamos información agregada o técnicamente necesaria para comprender el uso del sitio, mejorar el contenido y la experiencia, responder a una solicitud que nos hayas enviado y cumplir obligaciones legales aplicables.'] },
        { title: 'Servicios de terceros', paragraphs: ['El mapa integrado procede de Google Maps. Si aceptas cookies analíticas, Google Analytics 4 puede recopilar mediciones de uso de acuerdo con la configuración y políticas de Google. Las fotografías se almacenan localmente en este sitio; sus créditos se indican junto al contenido o en el pie de página.', 'Cada proveedor de terceros aplica su propia política. Consulta sus avisos antes de usar sus servicios.'] },
        { title: 'Tus derechos', paragraphs: ['Según el RGPD y la normativa aplicable, puedes solicitar acceso, corrección o eliminación de datos personales; oponerte a ciertos tratamientos; limitar el tratamiento cuando corresponda; y presentar una reclamación ante una autoridad de control competente. Para una solicitud, utiliza los canales de contacto que habilitemos públicamente.'] },
        { title: 'Conservación y cambios', paragraphs: ['Conservamos los datos únicamente durante el tiempo necesario para la finalidad descrita o para cumplir una obligación aplicable. Podremos actualizar esta política cuando cambie el funcionamiento del sitio o el marco normativo.'] },
      ],
    },
    terms: {
      title: 'Términos de uso',
      lead: 'Las condiciones que rigen el uso de esta guía independiente de visitantes.',
      sections: [
        { title: 'Aceptación', paragraphs: ['Al acceder o utilizar esta guía, aceptas estos términos. Si no estás de acuerdo con ellos, no utilices el sitio.'] },
        { title: 'Uso del contenido', paragraphs: ['El contenido se ofrece exclusivamente con fines informativos y educativos. Somos una guía turística independiente de terceros y no estamos afiliados a ningún atractivo, entidad gubernamental, organización oficial u operador comercial.'] },
        { title: 'Exactitud de la información', paragraphs: ['Procuramos presentar información contrastada y útil, pero no garantizamos que sea completa, actual o libre de errores. Las condiciones de acceso, rutas, horarios, precios, servicios y movilidad pueden cambiar sin aviso. Confirma toda información importante a través de fuentes responsables antes de viajar.'] },
        { title: 'Propiedad intelectual', paragraphs: ['El diseño y el contenido original del sitio están protegidos por los derechos aplicables. Las fotografías conservan los derechos y las condiciones de sus autores originales; las imágenes con licencia Creative Commons se atribuyen conforme a sus términos. El uso de Google Maps está sujeto a los términos del proveedor.'] },
        { title: 'Limitación de responsabilidad', paragraphs: ['Este sitio se ofrece tal como está y sin garantías. No asumimos responsabilidad por pérdidas, daños, decisiones de viaje o inconvenientes derivados del uso de esta información.'] },
      ],
    },
    cookies: {
      title: 'Configuración de cookies',
      lead: 'Controla las tecnologías que ayudan a que esta guía funcione y se entienda mejor su uso.',
      sections: [
        { title: 'Cookies estrictamente necesarias', paragraphs: ['Estas cookies o mecanismos locales son necesarios para recordar tu decisión de privacidad y mantener funciones básicas. No se utilizan para publicidad.'] },
        { title: 'Cookies analíticas', paragraphs: ['Con tu consentimiento, Google Analytics 4 puede recopilar información agregada sobre cómo se usa el sitio. Esto ayuda a entender qué contenido es útil. Puedes activar o desactivar esta categoría desde el panel de preferencias disponible en el sitio.'] },
        { title: 'Cookies de preferencias', paragraphs: ['Se utilizan para recordar ajustes como tu preferencia de idioma o tus decisiones de cookies.'] },
        { title: 'Publicidad', paragraphs: ['No activamos cookies publicitarias ni realizamos publicidad personalizada.'] },
        { title: 'Gestión del consentimiento', paragraphs: ['Puedes volver a abrir el panel de cookies desde el enlace del pie de página y cambiar tu decisión cuando quieras. Desactivar ciertas categorías puede limitar funciones no esenciales.'] },
      ],
    },
  },
  en: {
    privacy: {
      title: 'Privacy policy',
      lead: 'How we handle the minimum amount of data needed to operate and improve this guide.',
      sections: [
        { title: 'Information we collect', paragraphs: ['We collect only the minimum information needed to operate and improve this website. This may include technical browsing data, such as IP address, browser type, and pages visited; cookies and similar technologies; and information you voluntarily send by email.', 'We do not create commercial profiles, sell personal data, or offer user accounts.'] },
        { title: 'How we use information', paragraphs: ['We use aggregated or technically necessary information to understand website use, improve content and experience, respond to a request you have sent, and meet applicable legal obligations.'] },
        { title: 'Third-party services', paragraphs: ['The embedded map is provided by Google Maps. If you consent to analytics cookies, Google Analytics 4 may collect usage measurements according to Google’s settings and policies. Photographs are stored locally on this website; credits are given next to the content or in the footer.', 'Each third-party provider applies its own privacy policy. Review its notices before using its services.'] },
        { title: 'Your rights', paragraphs: ['Under the GDPR and applicable law, you may request access to, correction of, or deletion of personal data; object to certain processing; request a restriction where appropriate; and lodge a complaint with a competent supervisory authority. Use any publicly available contact channel to make a request.'] },
        { title: 'Retention and changes', paragraphs: ['We retain data only for as long as needed for the described purpose or to meet an applicable obligation. We may update this policy when the website or legal framework changes.'] },
      ],
    },
    terms: {
      title: 'Terms of use',
      lead: 'The terms that govern your use of this independent visitor guide.',
      sections: [
        { title: 'Acceptance', paragraphs: ['By accessing or using this guide, you accept these terms. If you do not agree, do not use the website.'] },
        { title: 'Use of content', paragraphs: ['Content is provided for informational and educational purposes only. We are an independent third-party visitor guide and are not affiliated with any attraction, government body, official organisation, or commercial operator.'] },
        { title: 'Accuracy of information', paragraphs: ['We aim to provide checked and useful information, but do not guarantee that it is complete, current, or error-free. Access conditions, routes, opening hours, prices, services, and mobility can change without notice. Confirm important information through responsible sources before travelling.'] },
        { title: 'Intellectual property', paragraphs: ['The website’s design and original content are protected by applicable rights. Photographs retain the rights and terms of their original authors; Creative Commons images are attributed under their licences. Google Maps use is subject to the provider’s terms.'] },
        { title: 'Limitation of liability', paragraphs: ['This website is provided as is and without warranties. We do not accept liability for losses, damages, travel decisions, or inconvenience resulting from use of this information.'] },
      ],
    },
    cookies: {
      title: 'Cookie settings',
      lead: 'Control the technologies that help this guide work and help us understand its use.',
      sections: [
        { title: 'Strictly necessary cookies', paragraphs: ['These cookies or local mechanisms are needed to remember your privacy choice and maintain basic functions. They are not used for advertising.'] },
        { title: 'Analytics cookies', paragraphs: ['With your consent, Google Analytics 4 may collect aggregated information about how the website is used. This helps us understand which content is useful. You can enable or disable this category from the preference panel available on the website.'] },
        { title: 'Preference cookies', paragraphs: ['These are used to remember settings such as your language preference or cookie choices.'] },
        { title: 'Advertising', paragraphs: ['We do not enable advertising cookies or personalised advertising.'] },
        { title: 'Managing consent', paragraphs: ['You can reopen the cookie panel from the footer and change your choice at any time. Disabling certain categories may limit non-essential functions.'] },
      ],
    },
  },
};
