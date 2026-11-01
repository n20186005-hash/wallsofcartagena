// Topic pages for Walls of Cartagena visitor guide.
// 42 Spanish guides with English counterparts. Each topic is an independent
// page that answers one traveller question with verified, source-attributed
// information. No prices, hours or unverified claims are invented.

export type TopicLocale = 'es' | 'en';
export type TopicGroup = 'visita' | 'historia' | 'cerca' | 'comer' | 'rutas';

export interface TopicSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicSource {
  label: string;
  url: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faq: { q: string; a: string }[];
  sources: TopicSource[];
  photo: { file: string; alt: string; credit: string };
}

export interface Topic {
  id: string; // path after locale, e.g. "visita/ubicacion-mapa"
  group: TopicGroup;
  slug: string;
  priority: 'P1' | 'P2';
  related: string[];
  es: TopicContent;
  en: TopicContent;
}

export const GROUP_LABELS: Record<TopicGroup, { es: string; en: string }> = {
  visita: { es: 'Visitar las murallas', en: 'Visiting the walls' },
  historia: { es: 'Historia y fortificaciones', en: 'History & fortifications' },
  cerca: { es: 'Cerca de las murallas', en: 'Near the walls' },
  comer: { es: 'Comer y descansar', en: 'Eat & rest' },
  rutas: { es: 'Rutas y duración', en: 'Routes & duration' },
};

export const SHARED_SOURCES_ES: TopicSource[] = [
  { label: 'UNESCO · Conjunto patrimonial de Cartagena', url: 'https://whc.unesco.org/en/list/285/' },
  { label: 'Fortificaciones Cartagena de Indias · Murallas', url: 'https://fortificacionescartagena.com.co/es/planee-su-visita/murallas-de-cartagena/' },
  { label: 'Google Maps · Murallas de Cartagena', url: 'https://maps.app.goo.gl/FSZf8ZUWLQLJRJUZ6' },
];
export const SHARED_SOURCES_EN: TopicSource[] = [
  { label: 'UNESCO · Cartagena heritage property', url: 'https://whc.unesco.org/en/list/285/' },
  { label: 'Fortificaciones Cartagena de Indias · Walls', url: 'https://fortificacionescartagena.com.co/es/planee-su-visita/murallas-de-cartagena/' },
  { label: 'Google Maps · Walls of Cartagena', url: 'https://maps.app.goo.gl/FSZf8ZUWLQLJRJUZ6' },
];
export const SHARED_SOURCES = SHARED_SOURCES_ES;

const WALL_PHOTO = {
  file: '/photos/murallas-torre.jpg',
  alt: 'Garita y muralla de Cartagena, fotografía de Joe Ross de 2016',
  credit: 'Joe Ross · 2016 · CC BY-SA 2.0',
};
const BASTION_PHOTO = {
  file: '/photos/murallas-baluarte.jpg',
  alt: 'Balu arte y muralla de Cartagena',
  credit: 'Joe Ross · 2016 · CC BY-SA 2.0',
};

const UPDATED_ES = '30 de octubre de 2026';
const UPDATED_EN = '30 October 2026';

export const TOPICS: Topic[] = [
  // ===================== A. VISITA (12) =====================
  {
    id: 'visita/ubicacion-mapa',
    group: 'visita',
    slug: 'ubicacion-mapa',
    priority: 'P1',
    related: ['visita/puntos-de-acceso', 'visita/como-llegar', 'cerca/plaza-san-diego', 'visita/entrada-gratis'],
    es: {
      metaTitle: 'Dónde están las Murallas de Cartagena y mapa de San Diego',
      metaDescription: 'Punto de referencia de las Murallas en San Diego, coordenadas y cómo orientarte en el recinto amurallado de Cartagena de Indias.',
      kicker: 'Visitar las murallas',
      lead: 'Las Murallas de Cartagena recorren parte del centro histórico, junto a la bahía. El punto de referencia que usamos para orientarte queda en San Diego, el barrio donde varios tramos del paseo elevado arrancan con más continuidad.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'El punto de referencia',
          paragraphs: [
            'La ficha de referencia indica Cl. de la Serrezuela, San Diego, Cartagena de Indias, Bolívar, Colombia, en las coordenadas 10.4296098, −75.544865. Es útil para abrir el mapa y planear cómo llegar, pero no señala todas las rampas ni certifica un acceso sin escalones.',
            'San Diego es un barrio histórico dentro del recinto amurallado. Desde allí puedes conectar el paseo de la muralla con calles peatonales, plazas y el borde defensivo que mira a la bahía.',
          ],
        },
        {
          title: 'Cómo leer el mapa del recinto',
          bullets: [
            'Busca los baluartes (estructuras salientes) y las garitas (puestos de vigilancia) como puntos de orientación.',
            'El paseo elevado y las calles a ras de suelo se cruzan en varios puntos; el mapa ayuda a decidir dónde subir y bajar.',
            'El recinto no es un anillo continuo accesible: hay tramos, plazas y desniveles que conviene ver antes de caminar.',
          ],
        },
        {
          title: 'Antes de salir',
          paragraphs: [
            'Abre el mapa con la referencia de San Diego y marca una entrada y una salida cercanas a lo que quieras visitar. Así evitas recorrer el doble bajo el sol.',
          ],
          callout: 'Esta guía no administra el sitio. Confirma accesos, cierres y servicios con fuentes oficiales el día de tu visita.',
        },
      ],
      faq: [
        { q: '¿Dónde están exactamente las Murallas de Cartagena?', a: 'Recorren parte del centro histórico amurallado de Cartagena de Indias, en Bolívar, Colombia. Usamos la referencia de San Diego (Cl. de la Serrezuela, 10.4296098, −75.544865) como punto de orientación, no como única entrada.' },
        { q: '¿El punto del mapa es la única entrada?', a: 'No. El punto de referencia ayuda a abrir el mapa; existen varios accesos y rampas a lo largo del recinto. Consulta la guía de puntos de acceso para ver opciones.' },
        { q: '¿Las murallas rodean toda la ciudad vieja?', a: 'No de forma continua y accesible. El recinto es un sistema defensivo con tramos, plazas y fuertes; el paseo elevado tiene desniveles y no todos los sectores conectan sin escalones.' },
        { q: '¿Puedo caminar sobre la muralla todo el rato?', a: 'Solo en los tramos habilitados. Alterna el paseo elevado con las calles del Centro y de San Diego; respetar los desniveles es parte de la visita.' },
        { q: '¿Qué mapa usar para orientarme?', a: 'Abre el mapa con la referencia de San Diego y combínalo con la guía de puntos de acceso de esta misma página. Para ubicaciones en vivo, usa un mapa oficial o el de Google Maps enlazado en las fuentes.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Where are the Walls of Cartagena and the San Diego map',
      metaDescription: 'The San Diego reference point for Cartagena’s walls, coordinates, and how to orient yourself in the walled historic centre.',
      kicker: 'Visiting the walls',
      lead: 'Cartagena’s walls run along part of the historic centre beside the bay. The reference point we use to orient you sits in San Diego, the neighbourhood where several elevated-walk sections begin with the most continuity.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'The reference point',
          paragraphs: [
            'The listing reference is Cl. de la Serrezuela, San Diego, Cartagena de Indias, Bolívar, Colombia, at coordinates 10.4296098, −75.544865. It is useful for opening the map and planning how to arrive, but it does not mark every ramp nor certify a step-free access.',
            'San Diego is a historic district inside the walled enclosure. From there you can connect the wall walk with pedestrian streets, plazas, and the defensive edge overlooking the bay.',
          ],
        },
        {
          title: 'How to read the enclosure map',
          bullets: [
            'Look for bastions (projecting structures) and sentry boxes as orientation points.',
            'The elevated walk and the street-level paths cross at several points; the map helps you decide where to climb up and down.',
            'The enclosure is not a continuous accessible ring: there are sections, plazas and level changes worth reviewing before walking.',
          ],
        },
        {
          title: 'Before you leave',
          paragraphs: [
            'Open the map at the San Diego reference and mark an entrance and exit near what you want to visit. That avoids doubling back under the sun.',
          ],
          callout: 'This guide does not operate the site. Confirm access points, closures and services through official sources on the day you visit.',
        },
      ],
      faq: [
        { q: 'Where exactly are the Walls of Cartagena?', a: 'They run along part of the walled historic centre of Cartagena de Indias, Bolívar, Colombia. We use the San Diego reference (Cl. de la Serrezuela, 10.4296098, −75.544865) as an orientation point, not as the only entrance.' },
        { q: 'Is the map point the only entrance?', a: 'No. The reference helps open the map; several accesses and ramps exist along the enclosure. See the access-points guide on this site for options.' },
        { q: 'Do the walls surround the whole old town?', a: 'Not continuously or accessibly. The enclosure is a defensive system with sections, plazas and forts; the elevated walk has level changes and not every sector connects without steps.' },
        { q: 'Can I walk on the wall the whole time?', a: 'Only on the enabled sections. Alternate the elevated walk with Centro and San Diego streets; respecting the level changes is part of the visit.' },
        { q: 'Which map should I use to orient myself?', a: 'Open the map at the San Diego reference and combine it with this page’s access-points guide. For live locations, use an official or the linked Google Maps reference in the sources.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/puntos-de-acceso',
    group: 'visita',
    slug: 'puntos-de-acceso',
    priority: 'P1',
    related: ['visita/ubicacion-mapa', 'visita/accesibilidad', 'visita/entrada-gratis', 'cerca/plaza-san-diego'],
    es: {
      metaTitle: 'Puntos de acceso a las Murallas de Cartagena: rampas y entradas',
      metaDescription: 'Desde dónde subir a las murallas en San Diego y el Centro: rampas, escaleras y cómo elegir el acceso según tu movilidad.',
      kicker: 'Visitar las murallas',
      lead: 'No hay una sola puerta de acceso. El paseo elevado se une a las calles en varios puntos, sobre todo en San Diego y en el borde que mira a la bahía. Elegir bien el acceso cambia cuánto caminas y cuántas escaleras subes.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Accesos frecuentes desde San Diego',
          paragraphs: [
            'El barrio de San Diego concentra varios tramos del paseo elevado con continuidad. Desde la Plaza de San Diego puedes subir hacia Las Bóvedas y recorrer el borde defensivo con vistas a la bahía.',
            'Las Bóvedas, al final del tramo de San Diego junto al mar, son un punto de referencia claro para empezar o terminar el paseo.',
          ],
          bullets: [
            'Plaza de San Diego: conexión con calles peatonales y acceso al tramo elevado hacia Las Bóvedas.',
            'Las Bóvedas: extremo del tramo de San Diego, junto al mar.',
            'Baluarte de Santo Domingo: mirador y punto de transición entre el paseo y el Centro.',
          ],
        },
        {
          title: 'Hacia el Centro y la Torre del Reloj',
          paragraphs: [
            'Desde el borde defensivo puedes bajar por el Centro histórico hasta la Torre del Reloj y la Plaza de la Aduana. Es la conexión más natural entre la muralla y el núcleo peatonal.',
          ],
        },
        {
          title: 'Elige según tu movilidad',
          paragraphs: [
            'Si necesitas evitar escaleras, prioriza las calles llanas del Centro y comprueba el acceso antes de subir. No des por sentado que una rampa está habilitada en todo momento.',
          ],
          callout: 'Los accesos y su habilitación pueden cambiar. Verifica rampas, escaleras y cierres con fuentes oficiales antes de tu visita.',
        },
      ],
      faq: [
        { q: '¿Desde dónde puedo subir a las murallas?', a: 'Los accesos se distribuyen a lo largo del recinto, sobre todo en San Diego y en el borde que mira a la bahía. La Plaza de San Diego, Las Bóvedas y el Baluarte de Santo Domingo son puntos de referencia habituales.' },
        { q: '¿Hay una entrada principal?', a: 'No hay una sola puerta. El recinto se recorre por tramos que conectan con las calles; eligir el acceso depende de dónde empieces y de cuánto quieras caminar.' },
        { q: '¿Todas las entradas tienen rampa?', a: 'No. Algunos tramos suben por escaleras. Si evitas escalones, usa las calles llanas del Centro y comprueba el acceso antes de subir.' },
        { q: '¿Puedo entrar con silla de ruedas o coche de bebé?', a: 'El paseo elevado tiene desniveles y no todos los sectores son accesibles. Las calles del Centro son más llanas; consulta la guía de accesibilidad y verifica in situ.' },
        { q: '¿Los accesos cierran en algún horario?', a: 'La ficha de Maps figuraba abierta 24 horas el 30 de octubre de 2026 como referencia del punto, no como horario garantizado de todos los sectores. Consulta avisos del administrador.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Access points to the Walls of Cartagena: ramps and entrances',
      metaDescription: 'Where to climb onto Cartagena’s walls in San Diego and the Centro: ramps, stairs, and how to choose access by mobility.',
      kicker: 'Visiting the walls',
      lead: 'There is no single gate. The elevated walk meets the streets at several points, especially in San Diego and along the bay-facing edge. Choosing the right access changes how far you walk and how many stairs you climb.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Frequent accesses from San Diego',
          paragraphs: [
            'The San Diego district concentrates several continuous elevated-walk sections. From Plaza de San Diego you can climb toward Las Bóvedas and walk the defensive edge with bay views.',
            'Las Bóvedas, at the sea end of the San Diego stretch, is a clear reference point to start or finish the walk.',
          ],
          bullets: [
            'Plaza de San Diego: connection with pedestrian streets and access to the elevated section toward Las Bóvedas.',
            'Las Bóvedas: end of the San Diego stretch, by the sea.',
            'Baluarte de Santo Domingo: viewpoint and transition point between the walk and the Centro.',
          ],
        },
        {
          title: 'Toward the Centro and the Clock Tower',
          paragraphs: [
            'From the defensive edge you can descend through the historic Centro to the Torre del Reloj and Plaza de la Aduana. That is the most natural connection between the wall and the pedestrian core.',
          ],
        },
        {
          title: 'Choose by your mobility',
          paragraphs: [
            'If you need to avoid stairs, prioritise the flat Centro streets and check the access before going up. Do not assume a ramp is always enabled.',
          ],
          callout: 'Access points and their availability can change. Verify ramps, stairs and closures through official sources before your visit.',
        },
      ],
      faq: [
        { q: 'Where can I climb onto the walls?', a: 'Accesses are spread along the enclosure, especially in San Diego and along the bay-facing edge. Plaza de San Diego, Las Bóvedas and Baluarte de Santo Domingo are common reference points.' },
        { q: 'Is there a main entrance?', a: 'No single gate. The enclosure is walked in sections that connect with the streets; the access you choose depends on where you start and how far you want to walk.' },
        { q: 'Do all entrances have a ramp?', a: 'No. Some sections go up by stairs. If you avoid steps, use the flat Centro streets and check the access before climbing.' },
        { q: 'Can I enter with a wheelchair or stroller?', a: 'The elevated walk has level changes and not every sector is accessible. The Centro streets are flatter; see the accessibility guide and verify on site.' },
        { q: 'Do accesses close at a certain time?', a: 'The Maps point was listed as open 24 hours on 30 October 2026 as a point reference, not a guaranteed schedule for every sector. Check administrator notices.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'visita/entrada-gratis',
    group: 'visita',
    slug: 'entrada-gratis',
    priority: 'P1',
    related: ['visita/horarios-y-cierres', 'cerca/castillo-san-felipe', 'visita/como-llegar', 'visita/puntos-de-acceso'],
    es: {
      metaTitle: '¿Cuánto cuesta entrar a las Murallas de Cartagena? Entrada gratis',
      metaDescription: 'El paseo por las murallas es gratuito según el administrador; Castillo San Felipe, museos y servicios tienen otra política.',
      kicker: 'Visitar las murallas',
      lead: 'Fortificaciones Cartagena de Indias indica que el recorrido por las murallas es gratuito y abierto al público. Eso no cubre el Castillo San Felipe, los museos, los restaurantes, las visitas guiadas ni los eventos.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Lo que es gratuito',
          paragraphs: [
            'El paseo por el tramo de muralla habilitado forma parte del patrimonio público y no cobra entrada para caminar por él. Es una de las razones por las que se recomienda como paseo independiente y autoguiado.',
          ],
        },
        {
          title: 'Lo que puede tener costo aparte',
          bullets: [
            'Castillo San Felipe de Barajas: fortaleza aparte con su propia entrada.',
            'Museos (oro, naval, historia): cada uno con tarifa propia.',
            'Visitas guiadas, tours y eventos privados: contratados por separado.',
            'Restaurantes, cafés y compras: consumo en el recinto histórico.',
          ],
        },
        {
          title: 'Cómo evitar confusiones',
          paragraphs: [
            'Distingue siempre entre el paseo libre sobre la muralla y las atracciones que lo rodean. Si una entrada es de pago, corresponde a otro sitio del sistema defensivo o a un servicio, no al camino de la muralla.',
          ],
          callout: 'Las tarifas y condiciones pueden cambiar. Confirma precios oficiales en las taquillas o sitios correspondientes el día de tu visita.',
        },
      ],
      faq: [
        { q: '¿Cuánto cuesta entrar a las murallas?', a: 'Fortificaciones Cartagena de Indias indica que el recorrido por las murallas es gratuito y abierto al público. No incluye el Castillo San Felipe, museos, restaurantes, guías ni eventos.' },
        { q: '¿El Castillo San Felipe también es gratis?', a: 'No. El Castillo San Felipe de Barajas es una fortaleza aparte con entrada de pago propia. Queda fuera del tramo del paseo gratuito de la muralla.' },
        { q: '¿Los museos dentro del recinto son gratis?', a: 'No necesariamente. Los museos del sistema tienen tarifas propias; verifícalas en cada institución.' },
        { q: '¿Necesito reservar para caminar la muralla?', a: 'No para el paseo libre. Las visitas guiadas o tours privados sí suelen reservarse aparte.' },
        { q: '¿Puedo entrar en cualquier momento?', a: 'El paseo es público, pero los sectores y accesos pueden tener condiciones propias. La ficha de Maps figuraba abierta 24 horas el 30 de octubre de 2026 como referencia del punto, no como garantía de todos los tramos.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'How much does it cost to enter the Walls of Cartagena? Free entry',
      metaDescription: 'The wall walk is free per the administrator; San Felipe Castle, museums and services follow separate policies.',
      kicker: 'Visiting the walls',
      lead: 'Fortificaciones Cartagena de Indias describes the wall walk as free and open to the public. That does not cover San Felipe Castle, museums, restaurants, guided tours or events.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What is free',
          paragraphs: [
            'The walk along the enabled wall section is part of the public heritage and charges no entry to walk it. It is one reason it is recommended as an independent, self-guided stroll.',
          ],
        },
        {
          title: 'What may cost separately',
          bullets: [
            'Castillo San Felipe de Barajas: a separate fortress with its own admission.',
            'Museums (gold, naval, history): each with its own fee.',
            'Guided tours, tours and private events: contracted separately.',
            'Restaurants, cafés and shopping: spending inside the historic enclosure.',
          ],
        },
        {
          title: 'How to avoid confusion',
          paragraphs: [
            'Always distinguish the free walk on the wall from the attractions around it. If an admission is paid, it belongs to another part of the defensive system or to a service, not to the wall path.',
          ],
          callout: 'Fees and conditions can change. Confirm official prices at the relevant box offices or sites on the day you visit.',
        },
      ],
      faq: [
        { q: 'How much does it cost to enter the walls?', a: 'Fortificaciones Cartagena de Indias describes the wall walk as free and open to the public. It does not include San Felipe Castle, museums, restaurants, guides or events.' },
        { q: 'Is San Felipe Castle also free?', a: 'No. Castillo San Felipe de Barajas is a separate fortress with its own paid admission. It lies outside the free wall-walk section.' },
        { q: 'Are the museums inside the enclosure free?', a: 'Not necessarily. The system’s museums have their own fees; check each institution.' },
        { q: 'Do I need a reservation to walk the wall?', a: 'Not for the free walk. Guided tours or private tours are usually booked separately.' },
        { q: 'Can I enter at any time?', a: 'The walk is public, but sectors and accesses may have their own conditions. The Maps point was listed as open 24 hours on 30 October 2026 as a point reference, not a guarantee for every stretch.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/horarios-y-cierres',
    group: 'visita',
    slug: 'horarios-y-cierres',
    priority: 'P2',
    related: ['visita/entrada-gratis', 'visita/calor-lluvia-seguridad', 'visita/mejor-hora-atardecer', 'visita/puntos-de-acceso'],
    es: {
      metaTitle: 'Horarios y cierres de las Murallas de Cartagena',
      metaDescription: 'El paseo es público, pero los sectores pueden tener condiciones distintas; cómo verificar cierres y evitar sorpresas.',
      kicker: 'Visitar las murallas',
      lead: 'No existe un horario único de “las murallas” como un recinto cerrado. La ficha de Maps figuraba abierta 24 horas el 30 de octubre de 2026, pero eso es una referencia del punto, no una garantía de todos los tramos ni de los accesos.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Por qué no hay un horario simple',
          paragraphs: [
            'El recinto es un sistema abierto de calles, plazas y tramos elevados. Lo que una fuente marque como “abierto” suele referirse a un punto o a un tramo habilitado, no a todo el perímetro a la vez.',
          ],
        },
        {
          title: 'Cómo verificar el día de tu visita',
          bullets: [
            'Revisa avisos del administrador o de la alcaldía antes de salir.',
            'Confirma si algún acceso o baluarte está en obras o con cierre temporal.',
            'Recuerda que museos, comercios y eventos tienen horarios propios.',
          ],
        },
        {
          title: 'Buenas prácticas',
          paragraphs: [
            'Planifica el paseo en las primeras horas o al final de la tarde, cuando hay menos calor y mejor luz. Ten un plan de ruta y un punto de salida claro.',
          ],
          callout: 'Esta guía no administra el sitio; la información de apertura puede cambiar sin aviso.',
        },
      ],
      faq: [
        { q: '¿Cuál es el horario de las murallas?', a: 'No hay un horario único. La ficha de Maps figuraba abierta 24 horas el 30 de octubre de 2026 como referencia del punto, no como garantía de todos los sectores. Verifica con el administrador el día de tu visita.' },
        { q: '¿Puedo caminarlas de noche?', a: 'El paseo es público y varios tramos quedan iluminados, pero la habilitación de accesos y sectores puede variar. Camina con precaución y evita zonas sin luz.' },
        { q: '¿Cierran por lluvia o eventos?', a: 'La piedra mojada requiere precaución y algunos accesos pueden cerrarse por obras o eventos. Consulta avisos locales.' },
        { q: '¿Los museos y el Castillo siguen el mismo horario?', a: 'No. Tienen horarios propios; el Castillo San Felipe y los museos se consultan por separado.' },
        { q: '¿Dónde verifico cierres oficiales?', a: 'En canales del administrador o de turismo de Cartagena; esta guía enlaza fuentes públicas pero no opera el sitio.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Opening times and closures of the Walls of Cartagena',
      metaDescription: 'The walk is public, but sectors may have different conditions; how to check closures and avoid surprises.',
      kicker: 'Visiting the walls',
      lead: 'There is no single “walls” schedule as if it were a closed compound. The Maps point was listed as open 24 hours on 30 October 2026, but that is a point reference, not a guarantee for every stretch or access.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Why there is no simple schedule',
          paragraphs: [
            'The enclosure is an open system of streets, plazas and elevated sections. What a source marks as “open” usually refers to a point or an enabled stretch, not the whole perimeter at once.',
          ],
        },
        {
          title: 'How to verify on your visit day',
          bullets: [
            'Check administrator or city notices before leaving.',
            'Confirm whether any access or bastion is under works or temporary closure.',
            'Remember museums, shops and events keep their own hours.',
          ],
        },
        {
          title: 'Good practices',
          paragraphs: [
            'Plan the walk in the early hours or late afternoon, when it is cooler and the light is better. Keep a route plan and a clear exit point.',
          ],
          callout: 'This guide does not operate the site; opening information can change without notice.',
        },
      ],
      faq: [
        { q: 'What are the wall opening hours?', a: 'There is no single schedule. The Maps point was listed as open 24 hours on 30 October 2026 as a point reference, not a guarantee for every sector. Check with the administrator on your visit day.' },
        { q: 'Can I walk them at night?', a: 'The walk is public and several stretches are lit, but access and sector availability may vary. Walk carefully and avoid unlit areas.' },
        { q: 'Do they close for rain or events?', a: 'Wet stone requires caution and some accesses may close for works or events. Check local notices.' },
        { q: 'Do museums and the Castle keep the same hours?', a: 'No. They keep their own hours; San Felipe Castle and museums are consulted separately.' },
        { q: 'Where do I verify official closures?', a: 'Through administrator or Cartagena tourism channels; this guide links public sources but does not operate the site.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'visita/como-llegar',
    group: 'visita',
    slug: 'como-llegar',
    priority: 'P1',
    related: ['visita/desde-aeropuerto', 'visita/donde-estacionar', 'visita/ubicacion-mapa', 'cerca/plaza-san-diego'],
    es: {
      metaTitle: 'Cómo llegar a las Murallas de Cartagena desde el centro',
      metaDescription: 'Opciones para llegar al recinto amurallado: a pie desde el Centro, transporte público, taxi y consejos para el último tramo.',
      kicker: 'Visitar las murallas',
      lead: 'El recinto amurallado está en el núcleo de Cartagena de Indias. Si ya estás en el Centro histórico, gran parte del trayecto es a pie; si vienes de otros barrios, combina transporte y caminata.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Desde el Centro histórico',
          paragraphs: [
            'El recinto es peatonal en buena parte de su interior. Desde la Torre del Reloj, la Plaza de la Aduana o las calles aledañas puedes caminar a los tramos de San Diego en minutos.',
          ],
        },
        {
          title: 'Transporte público',
          paragraphs: [
            'El sistema urbano Transcaribe articula varios sectores. Consulta la ruta y la parada más conveniente según tu origen, y completa el último tramo a pie dentro del centro histórico.',
          ],
          bullets: [
            'Confirma rutas, frecuencias y formas de pago antes de viajar.',
            'Prevé caminata en superficies irregulares y bajo calor.',
          ],
        },
        {
          title: 'Taxi y movilidad bajo demanda',
          paragraphs: [
            'Son prácticos puerta a puerta. Identifica el vehículo, acuerda la tarifa cuando aplique y usa puntos de recogida seguros, especialmente de noche.',
          ],
          callout: 'Las tarifas y los tiempos dependen del tráfico y del destino exacto; no son tiempos garantizados.',
        },
      ],
      faq: [
        { q: '¿Cómo llego a las murallas desde el Centro?', a: 'A pie en buena parte: desde la Torre del Reloj o la Plaza de la Aduana caminas a los tramos de San Diego en unos minutos.' },
        { q: '¿Qué transporte público me deja cerca?', a: 'Transcaribe articula varios sectores de Cartagena. Revisa la ruta y la parada más cercana y completa a pie dentro del centro histórico.' },
        { q: '¿Vale la pena tomar taxi?', a: 'Para trayectos puerta a puerta sí; acuerda la tarifa y usa puntos de recogida seguros.' },
        { q: '¿Puedo ir en bicicleta?', a: 'El interior del recinto tiene calles estrechas y calor; caminar suele ser más directo. Si usas bicicleta, deja el recorrido peatonal para andar.' },
        { q: '¿Cuánto tardo en llegar al tramo de San Diego?', a: 'Desde el núcleo del Centro, el tramo de San Diego queda a pocos minutos a pie; desde otros barrios depende del transporte elegido.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'How to get to the Walls of Cartagena from the centre',
      metaDescription: 'Options to reach the walled enclosure: walking from the Centro, public transport, taxi and tips for the final stretch.',
      kicker: 'Visiting the walls',
      lead: 'The walled enclosure sits in the core of Cartagena de Indias. If you are already in the historic Centro, much of the trip is on foot; if you come from other neighbourhoods, combine transport and walking.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'From the historic Centro',
          paragraphs: [
            'The enclosure is pedestrian across much of its interior. From the Torre del Reloj, Plaza de la Aduana or nearby streets you can walk to the San Diego sections in minutes.',
          ],
        },
        {
          title: 'Public transport',
          paragraphs: [
            'The Transcaribe urban system links several districts. Check the most convenient route and stop for your origin, then complete the final stretch on foot inside the historic centre.',
          ],
          bullets: [
            'Confirm routes, frequencies and payment methods before travelling.',
            'Expect an uneven-surface walk and warm conditions.',
          ],
        },
        {
          title: 'Taxi and ride services',
          paragraphs: [
            'They are practical door to door. Identify the vehicle, agree the fare where relevant, and use safe pick-up points, especially at night.',
          ],
          callout: 'Fares and times depend on traffic and the exact destination; they are not guaranteed durations.',
        },
      ],
      faq: [
        { q: 'How do I get to the walls from the Centro?', a: 'Largely on foot: from the Torre del Reloj or Plaza de la Aduana you walk to the San Diego sections in a few minutes.' },
        { q: 'Which public transport drops me nearby?', a: 'Transcaribe links several Cartagena districts. Check the closest route and stop, then finish on foot inside the historic centre.' },
        { q: 'Is a taxi worth it?', a: 'For door-to-door trips, yes; agree the fare and use safe pick-up points.' },
        { q: 'Can I cycle?', a: 'The enclosure interior has narrow streets and heat; walking is usually more direct. If you cycle, leave the pedestrian walk for walking.' },
        { q: 'How long to the San Diego section?', a: 'From the Centro core, the San Diego stretch is a few minutes on foot; from other neighbourhoods it depends on the transport chosen.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/desde-aeropuerto',
    group: 'visita',
    slug: 'desde-aeropuerto',
    priority: 'P2',
    related: ['visita/como-llegar', 'visita/donde-estacionar', 'visita/calor-lluvia-seguridad', 'visita/cuanto-dura'],
    es: {
      metaTitle: 'Del aeropuerto de Cartagena a las Murallas: transporte',
      metaDescription: 'Opciones desde el Aeropuerto Internacional Rafael Núñez hasta el recinto amurallado y consejos para el traslado.',
      kicker: 'Visitar las murallas',
      lead: 'El Aeropuerto Internacional Rafael Núñez está a varios kilómetros del centro histórico. El traslado depende del tráfico y del destino exacto; organiza el medio antes de salir.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Opciones de traslado',
          bullets: [
            'Taxis autorizados desde el aeropuerto hacia el centro histórico.',
            'Aplicaciones o servicios de movilidad bajo demanda, si están disponibles.',
            'Transporte público o puente aéreo según disponibilidad y equipaje.',
          ],
        },
        {
          title: 'Antes de contratar',
          paragraphs: [
            'Verifica la tarifa y el medio de pago antes de iniciar el trayecto. Si viajas con equipaje o en grupo, pregunta por la capacidad del vehículo.',
          ],
        },
        {
          title: 'El último tramo',
          paragraphs: [
            'El recinto amurallado es peatonal en gran parte. Deja el vehículo en un punto cercano y termina a pie, especialmente si llevas maletas.',
          ],
          callout: 'Las duraciones y tarifas dependen del tráfico y del destino; no son tiempos garantizados.',
        },
      ],
      faq: [
        { q: '¿Cómo llegar del aeropuerto a las murallas?', a: 'En taxi o servicio de movilidad desde el Aeropuerto Internacional Rafael Núñez hacia el centro histórico; el último tramo suele hacerse a pie.' },
        { q: '¿Cuánto tarda el traslado?', a: 'Depende del tráfico y del destino exacto; no es un tiempo garantizado. El aeropuerto queda a varios kilómetros del recinto.' },
        { q: '¿Conviene transporte público con maletas?', a: 'Es posible pero menos directo con equipaje. Un taxi o servicio puerta a puerta suele ser más práctico.' },
        { q: '¿Dónde dejo el equipaje?', a: 'En tu alojamiento o en un punto cercano al recinto; el interior amurallado es peatonal.' },
        { q: '¿Hay algo que ver en el camino?', a: 'El trayecto entra por la ciudad moderna hacia el centro histórico; la experiencia patrimonial empieza al cruzar la muralla.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'From Cartagena airport to the Walls: transport',
      metaDescription: 'Options from Rafael Núñez International Airport to the walled enclosure and transfer tips.',
      kicker: 'Visiting the walls',
      lead: 'Rafael Núñez International Airport is several kilometres from the historic centre. The transfer depends on traffic and the exact destination; arrange the means before leaving.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Transfer options',
          bullets: [
            'Authorised taxis from the airport toward the historic centre.',
            'Ride apps or on-demand mobility services, where available.',
            'Public transport or bridge connection depending on availability and luggage.',
          ],
        },
        {
          title: 'Before you hire',
          paragraphs: [
            'Confirm the fare and payment method before starting. If travelling with luggage or a group, ask about vehicle capacity.',
          ],
        },
        {
          title: 'The final stretch',
          paragraphs: [
            'The walled enclosure is largely pedestrian. Leave the vehicle at a nearby point and finish on foot, especially with suitcases.',
          ],
          callout: 'Durations and fares depend on traffic and destination; they are not guaranteed times.',
        },
      ],
      faq: [
        { q: 'How to get from the airport to the walls?', a: 'By taxi or ride service from Rafael Núñez International Airport toward the historic centre; the final stretch is usually on foot.' },
        { q: 'How long is the transfer?', a: 'It depends on traffic and the exact destination; it is not a guaranteed time. The airport is several kilometres from the enclosure.' },
        { q: 'Is public transport advisable with luggage?', a: 'Possible but less direct with bags. A taxi or door-to-door service is usually more practical.' },
        { q: 'Where do I leave my luggage?', a: 'At your lodging or a point near the enclosure; the walled interior is pedestrian.' },
        { q: 'Is there anything to see on the way?', a: 'The route enters from the modern city toward the historic centre; the heritage experience begins once you cross the wall.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/donde-estacionar',
    group: 'visita',
    slug: 'donde-estacionar',
    priority: 'P1',
    related: ['visita/como-llegar', 'visita/puntos-de-acceso', 'visita/desde-aeropuerto', 'visita/calor-lluvia-seguridad'],
    es: {
      metaTitle: 'Dónde estacionar cerca de las Murallas de Cartagena',
      metaDescription: 'Zonas de parqueo en el centro histórico, restricciones y la ruta a pie hasta el recinto amurallado.',
      kicker: 'Visitar las murallas',
      lead: 'La guía del administrador menciona zonas de parqueo autorizadas en el centro histórico. Comprueba señalización, disponibilidad, tarifa y restricciones del lugar elegido; una referencia en el mapa no garantiza una plaza.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Parqueo en el centro histórico',
          paragraphs: [
            'Existen zonas de parqueo autorizadas dentro y cerca del recinto. La disponibilidad y la tarifa cambian según el lugar y la afluencia, así que conviene llegar antes en horas de mayor demanda.',
          ],
        },
        {
          title: 'Qué revisar al estacionar',
          bullets: [
            'Señalización y si el espacio está autorizado.',
            'Altura, horario, vigilancia y modalidad de pago.',
            'Restricciones de tráfico en el entorno del recinto.',
          ],
        },
        {
          title: 'La última parte a pie',
          paragraphs: [
            'El interior amurallado es peatonal. Deja el vehículo en un punto cercano y camina hasta el tramo de San Diego o del Centro que quieras recorrer.',
          ],
          callout: 'No estaciones junto al muro, accesos de emergencia o zonas no señalizadas.',
        },
      ],
      faq: [
        { q: '¿Dónde puedo estacionar cerca de las murallas?', a: 'La guía del administrador menciona zonas de parqueo autorizadas en el centro histórico. Verifica señalización, disponibilidad y tarifa del lugar elegido.' },
        { q: '¿Puedo dejar el carro junto a la muralla?', a: 'No lo recomendamos: evita el muro, los accesos de emergencia y las zonas no señalizadas. Deja el vehículo en un parqueo y termina a pie.' },
        { q: '¿El estacionamiento es gratis?', a: 'Depende del lugar y la modalidad; confírmalo en el parqueo elegido. No asumas que es gratuito.' },
        { q: '¿Conviene ir en coche al recinto?', a: 'Para llegar, sí; para recorrerlo, mejor a pie. El interior es peatonal y el calor hace incómodo el trayecto en vehículo.' },
        { q: '¿Qué pasa en horas de mucha afluencia?', a: 'La disponibilidad baja. Considera dejar el vehículo fuera del recinto en las horas pico.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Where to park near the Walls of Cartagena',
      metaDescription: 'Parking zones in the historic centre, restrictions, and the walk to the walled enclosure.',
      kicker: 'Visiting the walls',
      lead: 'The administrator’s guide mentions authorised parking areas in the historic centre. Check signs, availability, charge and restrictions at your chosen spot; a map reference does not guarantee a space.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Parking in the historic centre',
          paragraphs: [
            'Authorised parking zones exist inside and near the enclosure. Availability and fees change by location and demand, so it helps to arrive earlier during peak hours.',
          ],
        },
        {
          title: 'What to check when parking',
          bullets: [
            'Signage and whether the space is authorised.',
            'Height limits, hours, security and payment mode.',
            'Traffic restrictions around the enclosure.',
          ],
        },
        {
          title: 'The final part on foot',
          paragraphs: [
            'The walled interior is pedestrian. Leave the vehicle at a nearby point and walk to the San Diego or Centro section you want to walk.',
          ],
          callout: 'Do not park beside the wall, emergency accesses or unsigned areas.',
        },
      ],
      faq: [
        { q: 'Where can I park near the walls?', a: 'The administrator’s guide mentions authorised parking areas in the historic centre. Check signs, availability and fee at your chosen spot.' },
        { q: 'Can I leave the car beside the wall?', a: 'We do not recommend it: avoid the wall, emergency accesses and unsigned areas. Leave the vehicle in a lot and finish on foot.' },
        { q: 'Is parking free?', a: 'It depends on the place and mode; confirm at the chosen lot. Do not assume it is free.' },
        { q: 'Is driving to the enclosure worth it?', a: 'To arrive, yes; to walk it, better on foot. The interior is pedestrian and the heat makes driving uncomfortable.' },
        { q: 'What happens at peak times?', a: 'Availability drops. Consider leaving the vehicle outside the enclosure at peak hours.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'visita/cuanto-dura',
    group: 'visita',
    slug: 'cuanto-dura',
    priority: 'P2',
    related: ['visita/mejor-hora-atardecer', 'rutas/murallas-30-minutos', 'rutas/san-diego-las-bovedas-1-hora', 'visita/calor-lluvia-seguridad'],
    es: {
      metaTitle: 'Cuánto dura recorrer las Murallas de Cartagena',
      metaDescription: 'Qué ver en 30, 60 y 120 minutos: cómo ajustar el paseo a tu tiempo disponible.',
      kicker: 'Visitar las murallas',
      lead: 'El tiempo depende de cuánto quieras caminar, fotografiar y conectar con las calles históricas. Aquí una guía aproximada para tres bloques de tiempo.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Una vista rápida (30 min)',
          paragraphs: [
            'Sube en un punto de San Diego, recorre un tramo corto con vistas a la bahía y baja. Es suficiente para entender la escala del recinto sin agotarte.',
          ],
        },
        {
          title: 'Un paseo completo (60 min)',
          paragraphs: [
            'Recorre el tramo de San Diego hasta Las Bóvedas, baja por el Centro y vuelve. Incluye pausas, fotos y la transición entre el paseo elevado y las calles.',
          ],
        },
        {
          title: 'Recorrido amplio (120 min)',
          paragraphs: [
            'Añade plazas, el borde defensivo y la conexión con otros componentes del sistema. Si quieres enlazar museos o el Castillo San Felipe, mejor planea medio día o día completo.',
          ],
          callout: 'Estos tiempos son propuestas de la guía, no mediciones oficiales; ajusta al calor, la luz y tu ritmo.',
        },
      ],
      faq: [
        { q: '¿Cuánto tiempo necesito para las murallas?', a: 'Un tramo a ritmo tranquilo lleva entre 60 y 120 minutos. Una vista rápida puede bastar con 30 minutos.' },
        { q: '¿Se puede ver en media hora?', a: 'Sí: sube en San Diego, recorre un tramo corto y baja. Es una introducción rápida al recinto.' },
        { q: '¿Vale la pena dedicarle dos horas?', a: 'Si quieres fotos, plazas y conexión con el Centro, sí. Para añadir el Castillo San Felipe o museos, mejor medio día.' },
        { q: '¿El tiempo incluye el Castillo San Felipe?', a: 'No. El Castillo es aparte; incluirlo cambia la planificación a medio día o día completo.' },
        { q: '¿Cómo aprovecho poco tiempo?', a: 'Empieza en San Diego, elige un tramo y define una salida cercana a lo que visitarás después.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'How long to walk the Walls of Cartagena',
      metaDescription: 'What to see in 30, 60 and 120 minutes: how to fit the walk to your available time.',
      kicker: 'Visiting the walls',
      lead: 'The time depends on how much you want to walk, photograph and connect with the historic streets. Here is an approximate guide for three time blocks.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'A quick view (30 min)',
          paragraphs: [
            'Climb at a San Diego point, walk a short stretch with bay views and descend. Enough to understand the scale of the enclosure without exhausting yourself.',
          ],
        },
        {
          title: 'A full walk (60 min)',
          paragraphs: [
            'Walk the San Diego stretch to Las Bóvedas, descend through the Centro and return. Includes pauses, photos and the transition between the elevated walk and the streets.',
          ],
        },
        {
          title: 'A broad visit (120 min)',
          paragraphs: [
            'Add plazas, the defensive edge and the connection with other parts of the system. To link museums or San Felipe Castle, better plan a half day or full day.',
          ],
          callout: 'These times are the guide’s proposals, not official measurements; adjust to the heat, light and your pace.',
        },
      ],
      faq: [
        { q: 'How much time do I need for the walls?', a: 'A relaxed section takes between 60 and 120 minutes. A quick view can be enough in 30 minutes.' },
        { q: 'Can I see it in half an hour?', a: 'Yes: climb in San Diego, walk a short stretch and descend. It is a quick introduction to the enclosure.' },
        { q: 'Is two hours worth it?', a: 'If you want photos, plazas and the Centro connection, yes. To add San Felipe Castle or museums, better a half day.' },
        { q: 'Does the time include San Felipe Castle?', a: 'No. The Castle is separate; including it changes the plan to a half or full day.' },
        { q: 'How do I make the most of little time?', a: 'Start in San Diego, pick a stretch and define an exit near what you will visit next.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/mejor-hora-atardecer',
    group: 'visita',
    slug: 'mejor-hora-atardecer',
    priority: 'P1',
    related: ['visita/calor-lluvia-seguridad', 'rutas/fotografia-atardecer', 'visita/cuanto-dura', 'visita/horarios-y-cierres'],
    es: {
      metaTitle: 'Mejor hora para visitar las Murallas de Cartagena y ver el atardecer',
      metaDescription: 'Cuándo caminar la muralla para evitar el calor, ver el sol caer sobre el Caribe y fotografiar los baluartes.',
      kicker: 'Visitar las murallas',
      lead: 'Las primeras horas y el final de la tarde suelen ofrecer luz más suave y menos calor directo. El atardecer sobre la bahía es uno de los momentos más buscados del paseo.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Mañana temprano',
          paragraphs: [
            'La luz es suave y el calor apenas empieza. Es ideal para fotografiar la piedra coralina y caminar sin prisa antes de que se llene el recinto.',
          ],
        },
        {
          title: 'Atardecer',
          paragraphs: [
            'La hora dorada pinta los baluartes contra el mar. Los tramos que miran al oeste o a la bahía son los mejores para ver el sol caer.',
          ],
        },
        {
          title: 'Evita el mediodía',
          bullets: [
            'El sol caribeño es intenso entre las 11:00 y las 15:00.',
            'Busca sombra en plazas y calles; la muralla expuesta se calienta.',
            'Lleva agua y protección solar.',
          ],
          callout: 'El acceso, los cierres y las condiciones pueden variar; verifícalos antes de salir.',
        },
      ],
      faq: [
        { q: '¿Cuál es la mejor hora para las murallas?', a: 'Mañana temprano y final de la tarde: luz suave y menos calor. El atardecer sobre la bahía es el momento más fotografiado.' },
        { q: '¿Dónde ver el atardecer?', a: 'En los tramos que miran al oeste o a la bahía, como el borde de San Diego hacia Las Bóvedas.' },
        { q: '¿Se puede ir al mediodía?', a: 'Sí, pero el sol es fuerte; busca sombra, lleva agua y no hagas el tramo expuesto entero a esa hora.' },
        { q: '¿La muralla está iluminada en la noche?', a: 'Varios tramos quedan iluminados, aunque la habilitación de accesos puede variar; camina con precaución.' },
        { q: '¿El clima afecta el horario?', a: 'Sí: en temporada de lluvia conviene la mañana y revisar el pronóstico antes de salir.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Best time to visit the Walls of Cartagena and see sunset',
      metaDescription: 'When to walk the wall to avoid heat, watch the Caribbean sunset and photograph the bastions.',
      kicker: 'Visiting the walls',
      lead: 'Early morning and late afternoon usually bring softer light and less direct heat. The sunset over the bay is one of the most sought-after moments of the walk.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Early morning',
          paragraphs: [
            'The light is soft and the heat has barely begun. Ideal to photograph the coral stone and walk unhurried before the enclosure fills.',
          ],
        },
        {
          title: 'Sunset',
          paragraphs: [
            'Golden hour paints the bastions against the sea. The stretches facing west or the bay are best to watch the sun drop.',
          ],
        },
        {
          title: 'Avoid midday',
          bullets: [
            'The Caribbean sun is intense between 11:00 and 15:00.',
            'Seek shade in plazas and streets; the exposed wall heats up.',
            'Carry water and sun protection.',
          ],
          callout: 'Access, closures and conditions can change; verify them before leaving.',
        },
      ],
      faq: [
        { q: 'What is the best time for the walls?', a: 'Early morning and late afternoon: soft light and less heat. The bay sunset is the most photographed moment.' },
        { q: 'Where to watch the sunset?', a: 'On the stretches facing west or the bay, such as the San Diego edge toward Las Bóvedas.' },
        { q: 'Can I go at midday?', a: 'Yes, but the sun is strong; seek shade, carry water and avoid the whole exposed stretch at that hour.' },
        { q: 'Is the wall lit at night?', a: 'Several stretches are lit, though access availability may vary; walk carefully.' },
        { q: 'Does weather affect timing?', a: 'Yes: in rainy season mornings are better and checking the forecast before leaving is wise.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'visita/accesibilidad',
    group: 'visita',
    slug: 'accesibilidad',
    priority: 'P2',
    related: ['visita/puntos-de-acceso', 'rutas/murallas-con-ninos', 'visita/banos-sombra-agua', 'visita/calor-lluvia-seguridad'],
    es: {
      metaTitle: 'Accesibilidad en las Murallas de Cartagena: rampas y rutas alternativas',
      metaDescription: 'Movilidad reducida, sillas de ruedas, coches de bebé y opciones sin escalones en el recinto amurallado.',
      kicker: 'Visitar las murallas',
      lead: 'El recinto tiene desniveles y tramos con escaleras. Las calles llanas del Centro son la mejor opción si necesitas evitar escalones; no des por sentado que el paseo elevado es accesible.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Dónde es más fácil',
          paragraphs: [
            'El Centro histórico tiene calles más llanas y continuas que el paseo elevado. Para movilidad reducida, prioriza el nivel de calle y comprueba el acceso antes de subir.',
          ],
        },
        {
          title: 'Qué esperar en el paseo elevado',
          bullets: [
            'Rampas y escaleras en distintos tramos.',
            'Banos y descansos no garantizados en todo el recorrido.',
            'Pavimento irregular y bordillos en las calles.',
          ],
        },
        {
          title: 'Planifica con calma',
          paragraphs: [
            'Elige un punto de llegada según tus necesidades, comprueba pavimento y acceso, y no presupongas que rampas o paseos elevados son accesibles en todo momento.',
          ],
          callout: 'Esta guía no certifica accesibilidad; la habilitación de accesos puede cambiar sin aviso.',
        },
      ],
      faq: [
        { q: '¿Las murallas son accesibles en silla de ruedas?', a: 'El paseo elevado tiene desniveles y no todos los sectores son accesibles. Las calles llanas del Centro son una mejor opción; verifica in situ.' },
        { q: '¿Hay rampas sin escalones?', a: 'En algunos tramos, pero no en todos. No presupongas que una rampa está habilitada; comprueba el acceso antes de subir.' },
        { q: '¿Se puede ir con coche de bebé?', a: 'Sí en las calles del Centro; en el paseo elevado las escaleras y rampas lo complican. Planea el tramo a nivel de calle.' },
        { q: '¿Hay bancos o sombra continuos?', a: 'No está garantizado. Lleva agua y planea descansos en plazas.' },
        { q: '¿Dónde verifico accesibilidad oficial?', a: 'En canales del administrador; esta guía no opera el sitio.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Accessibility on the Walls of Cartagena: ramps and alternative routes',
      metaDescription: 'Reduced mobility, wheelchairs, strollers and step-free options in the walled enclosure.',
      kicker: 'Visiting the walls',
      lead: 'The enclosure has level changes and stepped sections. The flat Centro streets are the best option if you need to avoid steps; do not assume the elevated walk is accessible.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Where it is easier',
          paragraphs: [
            'The historic Centro has flatter, more continuous streets than the elevated walk. For reduced mobility, prioritise street level and check the access before climbing.',
          ],
        },
        {
          title: 'What to expect on the elevated walk',
          bullets: [
            'Ramps and stairs in different sections.',
            'Toilets and rest not guaranteed along the whole route.',
            'Uneven pavement and kerbs in the streets.',
          ],
        },
        {
          title: 'Plan calmly',
          paragraphs: [
            'Choose a drop-off point for your needs, check paving and access, and do not assume ramps or elevated walks are accessible at all times.',
          ],
          callout: 'This guide does not certify accessibility; access availability can change without notice.',
        },
      ],
      faq: [
        { q: 'Are the walls wheelchair accessible?', a: 'The elevated walk has level changes and not every sector is accessible. The flat Centro streets are a better option; verify on site.' },
        { q: 'Are there step-free ramps?', a: 'On some sections, not all. Do not assume a ramp is enabled; check the access before climbing.' },
        { q: 'Can I go with a stroller?', a: 'Yes on Centro streets; on the elevated walk stairs and ramps complicate it. Plan the street-level stretch.' },
        { q: 'Are there continuous benches or shade?', a: 'Not guaranteed. Carry water and plan plaza rests.' },
        { q: 'Where do I verify official accessibility?', a: 'Through administrator channels; this guide does not operate the site.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/calor-lluvia-seguridad',
    group: 'visita',
    slug: 'calor-lluvia-seguridad',
    priority: 'P2',
    related: ['visita/mejor-hora-atardecer', 'visita/banos-sombra-agua', 'rutas/cartagena-en-dia-de-lluvia', 'visita/accesibilidad'],
    es: {
      metaTitle: 'Calor, lluvia y seguridad en las Murallas de Cartagena',
      metaDescription: 'Cómo caminar la muralla con sol fuerte, lluvia y piedra mojada, y consejos de seguridad en el recinto.',
      kicker: 'Visitar las murallas',
      lead: 'El Caribe es caluroso y las lluvias son comunes en ciertas temporadas. La piedra irregular y mojada requiere calzado firme y paso seguro.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Ante el calor',
          bullets: [
            'Lleva agua, gorra y protector solar.',
            'Camina a la sombra de plazas y calles en las horas centrales.',
            'Evita el tramo expuesto entre las 11:00 y las 15:00.',
          ],
        },
        {
          title: 'Ante la lluvia',
          paragraphs: [
            'La piedra mojada es resbalosa. Acorta o aplaza el paseo expuesto y consulta avisos locales. Ten una capa ligera a mano.',
          ],
        },
        {
          title: 'Seguridad general',
          paragraphs: [
            'Mantén libres los pasos y cede el paso en escaleras y rampas. No subas a sectores no habilitados ni te sientes en el muro.',
          ],
          callout: 'El clima caribeño cambia deprisa; revisa el pronóstico cercano a tu visita.',
        },
      ],
      faq: [
        { q: '¿Hace mucho calor en la muralla?', a: 'Sí, el sol caribeño es intenso. Lleva agua y protección, y prefiere mañana o tarde.' },
        { q: '¿Qué hago si llueve?', a: 'La piedra mojada resbala; acorta o aplaza el tramo expuesto y lleva capa ligera.' },
        { q: '¿Es seguro caminar la muralla?', a: 'El recinto es público y transitado, pero cuida los desniveles y la piedra irregular; no subas a zonas no habilitadas.' },
        { q: '¿Puedo sentarme en el muro?', a: 'No lo recomendamos; respeta el patrimonio y evita sectores no habilitados.' },
        { q: '¿Debo revisar el clima antes?', a: 'Sí: el Caribe cambia rápido. Esta guía enlaza un pronóstico de Open-Meteo en la página principal.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Heat, rain and safety on the Walls of Cartagena',
      metaDescription: 'How to walk the wall in strong sun, rain and wet stone, plus safety tips in the enclosure.',
      kicker: 'Visiting the walls',
      lead: 'The Caribbean is hot and rains are common in certain seasons. The uneven, wet stone requires firm footwear and a secure step.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'In the heat',
          bullets: [
            'Carry water, a hat and sunscreen.',
            'Walk in plaza and street shade during the central hours.',
            'Avoid the exposed stretch between 11:00 and 15:00.',
          ],
        },
        {
          title: 'In the rain',
          paragraphs: [
            'Wet stone is slippery. Shorten or postpone the exposed walk and check local notices. Keep a light layer handy.',
          ],
        },
        {
          title: 'General safety',
          paragraphs: [
            'Keep passageways clear and yield on stairs and ramps. Do not climb unauthorised sectors or sit on the wall.',
          ],
          callout: 'Caribbean weather changes fast; check the forecast close to your visit.',
        },
      ],
      faq: [
        { q: 'Is it very hot on the wall?', a: 'Yes, the Caribbean sun is intense. Carry water and protection, and prefer morning or afternoon.' },
        { q: 'What if it rains?', a: 'Wet stone slips; shorten or postpone the exposed stretch and carry a light layer.' },
        { q: 'Is it safe to walk the wall?', a: 'The enclosure is public and busy, but mind the level changes and uneven stone; do not climb unauthorised sectors.' },
        { q: 'Can I sit on the wall?', a: 'We do not recommend it; respect the heritage and avoid unauthorised sectors.' },
        { q: 'Should I check the weather first?', a: 'Yes: the Caribbean changes quickly. This guide links an Open-Meteo forecast on the main page.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'visita/banos-sombra-agua',
    group: 'visita',
    slug: 'banos-sombra-agua',
    priority: 'P2',
    related: ['visita/calor-lluvia-seguridad', 'visita/accesibilidad', 'visita/mejor-hora-atardecer', 'comer/cafes-descanso-san-diego'],
    es: {
      metaTitle: 'Baños, sombra y agua en las Murallas de Cartagena',
      metaDescription: 'Dónde descansar, hidratarte y encontrar servicios esenciales durante el paseo por el recinto amurallado.',
      kicker: 'Visitar las murallas',
      lead: 'Lleva agua, protección solar y calzado firme. No se ha verificado una distribución de servicios a lo largo de todos los tramos, así que conviene planear descansos y revisar ubicaciones antes de subir.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Agua y hidratación',
          paragraphs: [
            'La piedra se calienta y el sol es fuerte. Lleva una botella reutilizable y retira tus residuos. Para recargar o comprar, apóyate en los negocios del recinto histórico.',
          ],
        },
        {
          title: 'Sombra y descanso',
          bullets: [
            'Las plazas del Centro ofrecen sombra y bancos.',
            'Las calles porticadas dan respiro al sol.',
            'La muralla expuesta tiene poca sombra.',
          ],
        },
        {
          title: 'Servicios esenciales',
          paragraphs: [
            'Confirma antes de salir dónde puedes encontrar un baño o pedir ayuda. No dependas de que haya servicios en cada tramo del paseo elevado.',
          ],
          callout: 'Esta guía no administra el sitio; la disponibilidad de servicios puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Hay baños en la muralla?', a: 'No está verificada una distribución a lo largo de todos los tramos. Confirma ubicaciones antes de subir y apóyate en los negocios del recinto.' },
        { q: '¿Dónde hay sombra?', a: 'En las plazas del Centro y las calles porticadas; la muralla expuesta tiene poca.' },
        { q: '¿Puedo comprar agua allí?', a: 'Sí en los negocios del recinto histórico; lleva botella reutilizable para recargar donde sea posible.' },
        { q: '¿Dónde descanso sin calor?', a: 'En plazas y portales del Centro durante las horas centrales.' },
        { q: '¿Hay puntos de ayuda médica?', a: 'Verifícalos antes de salir; no presupongas atención en el paseo elevado.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Toilets, shade and water on the Walls of Cartagena',
      metaDescription: 'Where to rest, hydrate and find essential services during the walk through the walled enclosure.',
      kicker: 'Visiting the walls',
      lead: 'Carry water, sun protection and firm footwear. A distribution of services along every stretch has not been verified, so plan breaks and check locations before climbing.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Water and hydration',
          paragraphs: [
            'The stone heats up and the sun is strong. Carry a refillable bottle and take your waste with you. To refill or buy, rely on the businesses in the historic enclosure.',
          ],
        },
        {
          title: 'Shade and rest',
          bullets: [
            'The Centro plazas offer shade and benches.',
            'Arcaded streets give a break from the sun.',
            'The exposed wall has little shade.',
          ],
        },
        {
          title: 'Essential services',
          paragraphs: [
            'Confirm before leaving where you can find a toilet or ask for help. Do not depend on services being on every elevated-walk stretch.',
          ],
          callout: 'This guide does not operate the site; service availability can change.',
        },
      ],
      faq: [
        { q: 'Are there toilets on the wall?', a: 'A distribution along every stretch has not been verified. Confirm locations before climbing and rely on the enclosure businesses.' },
        { q: 'Where is there shade?', a: 'In the Centro plazas and arcaded streets; the exposed wall has little.' },
        { q: 'Can I buy water there?', a: 'Yes at the historic enclosure businesses; carry a refillable bottle to top up where possible.' },
        { q: 'Where do I rest out of the heat?', a: 'In plazas and arcades of the Centro during the central hours.' },
        { q: 'Are there medical help points?', a: 'Confirm before leaving; do not assume care on the elevated walk.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },

  // ===================== B. HISTORIA (8) =====================
  {
    id: 'historia/construccion-murallas',
    group: 'historia',
    slug: 'construccion-murallas',
    priority: 'P1',
    related: ['historia/patrimonio-unesco', 'historia/baluartes-y-garitas', 'historia/piratas-y-defensa', 'historia/baluarte-santo-domingo'],
    es: {
      metaTitle: 'Construcción de las Murallas de Cartagena: etapas y trazado',
      metaDescription: 'Cómo se construyeron las murallas entre los siglos XVI y XVIII y por qué el recinto no fue una obra única.',
      kicker: 'Historia y fortificaciones',
      lead: 'El recinto no nació de una sola campaña. Su forma actual es el resultado de sucesivas decisiones militares, marítimas y urbanas mientras Cartagena crecía como puerto colonial.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Una defensa por etapas',
          paragraphs: [
            'UNESCO sitúa defensas españolas en 1586 y explica su ampliación durante el siglo XVIII. La historia corresponde a un sistema de murallas, fuertes y defensas de la bahía, no a una única obra.',
          ],
        },
        {
          title: 'De la muralla a la ciudad',
          paragraphs: [
            'En el tramo de San Diego, la piedra, las garitas y el trazado urbano muestran cómo la defensa se integró a la vida cotidiana. El recinto no encierra un monumento aislado, sino que conecta miradores, barrios y el mar.',
          ],
        },
        {
          title: 'Cómo verlo hoy',
          bullets: [
            'Observa el grosor de la piedra y las garitas como puestos de vigilancia.',
            'Lee el trazado como una frontera entre la ciudad y la bahía.',
            'Relaciona cada baluarte con su función defensiva, no solo como fondo fotográfico.',
          ],
          callout: 'Las fechas y la interpretación se basan en fuentes públicas; consulta las referencias al final de la página.',
        },
      ],
      faq: [
        { q: '¿Cuándo se construyeron las murallas de Cartagena?', a: 'UNESCO sitúa defensas españolas en 1586 y su ampliación en el siglo XVIII. Fue un proceso por etapas, no una obra única.' },
        { q: '¿Por qué tardaron tanto?', a: 'Porque respondían a sucesivas decisiones militares, marítimas y urbanas mientras la ciudad crecía como puerto colonial.' },
        { q: '¿De qué material están hechas?', a: 'Piedra coralina local, trabajada para resistir el clima caribeño y el fuego de artillería.' },
        { q: '¿Las murallas y el Castillo son lo mismo?', a: 'No. El Castillo San Felipe es una fortaleza aparte; las murallas son el recinto urbano del sistema defensivo.' },
        { q: '¿Quién las construyó?', a: 'Fueron obra de la Corona española con mano de obra local, en el marco del sistema defensivo del Caribe.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Construction of the Walls of Cartagena: stages and layout',
      metaDescription: 'How the walls were built between the 16th and 18th centuries and why the enclosure was not a single work.',
      kicker: 'History & fortifications',
      lead: 'The enclosure was not created in one campaign. Its present form reflects successive military, maritime and urban decisions as Cartagena grew into a colonial port.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Defence built in stages',
          paragraphs: [
            'UNESCO places Spanish defences in 1586 and describes their extension in the 18th century. This history concerns a system of walls, forts and bay defences, rather than one construction project.',
          ],
        },
        {
          title: 'From wall to city',
          paragraphs: [
            'In the San Diego stretch, stonework, sentry boxes and the urban plan show how defence became interwoven with daily life. The enclosure does not enclose an isolated monument, but connects viewpoints, neighbourhoods and the sea.',
          ],
        },
        {
          title: 'How to read it today',
          bullets: [
            'Notice the thickness of the stone and the sentry boxes as watch posts.',
            'Read the layout as a frontier between the city and the bay.',
            'Relate each bastion to its defensive function, not just as a photo backdrop.',
          ],
          callout: 'Dates and interpretation are based on public sources; see the references at the end of the page.',
        },
      ],
      faq: [
        { q: 'When were Cartagena’s walls built?', a: 'UNESCO places Spanish defences in 1586 and their extension in the 18th century. It was a staged process, not a single work.' },
        { q: 'Why did it take so long?', a: 'Because it answered successive military, maritime and urban decisions as the city grew as a colonial port.' },
        { q: 'What material are they made of?', a: 'Local coral stone, worked to resist the Caribbean climate and artillery fire.' },
        { q: 'Are the walls and the Castle the same?', a: 'No. San Felipe Castle is a separate fortress; the walls are the urban enclosure of the defensive system.' },
        { q: 'Who built them?', a: 'They were built by the Spanish Crown with local labour, within the Caribbean defensive system.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'historia/piratas-y-defensa',
    group: 'historia',
    slug: 'piratas-y-defensa',
    priority: 'P2',
    related: ['historia/construccion-murallas', 'historia/baluartes-y-garitas', 'historia/baluarte-santo-domingo', 'historia/patrimonio-unesco'],
    es: {
      metaTitle: 'Piratas y defensa de Cartagena: por qué se fortificó',
      metaDescription: 'El papel de los ataques corsarios en la construcción del sistema defensivo de Cartagena de Indias.',
      kicker: 'Historia y fortificaciones',
      lead: 'Cartagena fue uno de los puertos más atacados del Caribe. Ese riesgo explica buena parte del sistema defensivo que hoy caminas sobre la muralla.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Un puerto estratégico',
          paragraphs: [
            'Como nodo de las rutas marítimas del Imperio español, Cartagena atesoraba riqueza y atraía ataques. La defensa no fue solo militar, sino también urbana y logística.',
          ],
        },
        {
          title: 'De los ataques a las murallas',
          paragraphs: [
            'Los asedios y la amenaza corsaria empujaron a fortificar el recinto y la bahía. Las murallas, los baluartes y los fuertes forman una respuesta continua a ese riesgo.',
          ],
        },
        {
          title: 'Lo que queda hoy',
          bullets: [
            'Baluartes salientes diseñados para flanquear al enemigo.',
            'Garitas como puntos de vigilancia.',
            'El trazado que aún separa y protege la ciudad vieja.',
          ],
          callout: 'La interpretación histórica se basa en fuentes públicas como UNESCO y Fortificaciones Cartagena de Indias.',
        },
      ],
      faq: [
        { q: '¿Por qué Cartagena se fortificó?', a: 'Era un puerto estratégico y muy atacado del Caribe; el riesgo corsario impulsó el sistema defensivo que hoy es patrimonio.' },
        { q: '¿Qué papel jugaron los piratas?', a: 'Sus ataques y asedios empujaron a fortificar el recinto y la bahía de forma continua.' },
        { q: '¿Las murallas sirvieron en batallas?', a: 'Sí, formaron parte de la defensa del puerto frente a fuerzas navales enemigas en distintos momentos.' },
        { q: '¿El Castillo San Felipe es parte de eso?', a: 'Sí, es una pieza decisiva del sistema de fortificaciones terrestres de la ciudad.' },
        { q: '¿De dónde saco esta información?', a: 'De fuentes públicas enlazadas al final de la página (UNESCO y Fortificaciones Cartagena de Indias).' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Pirates and the defence of Cartagena: why it was fortified',
      metaDescription: 'The role of corsair attacks in building Cartagena de Indias’ defensive system.',
      kicker: 'History & fortifications',
      lead: 'Cartagena was one of the most attacked ports in the Caribbean. That risk explains much of the defensive system you now walk on the wall.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'A strategic port',
          paragraphs: [
            'As a node of the Spanish Empire’s maritime routes, Cartagena held wealth and attracted attacks. Defence was not only military, but also urban and logistical.',
          ],
        },
        {
          title: 'From attacks to walls',
          paragraphs: [
            'Sieges and the corsair threat pushed the fortification of the enclosure and the bay. The walls, bastions and forts form a continuous response to that risk.',
          ],
        },
        {
          title: 'What remains today',
          bullets: [
            'Projecting bastions designed to flank an enemy.',
            'Sentry boxes as watch points.',
            'The layout that still separates and protects the old town.',
          ],
          callout: 'The historical interpretation is based on public sources such as UNESCO and Fortificaciones Cartagena de Indias.',
        },
      ],
      faq: [
        { q: 'Why was Cartagena fortified?', a: 'It was a strategic and heavily attacked Caribbean port; the corsair risk drove the defensive system that is now heritage.' },
        { q: 'What role did pirates play?', a: 'Their attacks and sieges pushed the continuous fortification of the enclosure and the bay.' },
        { q: 'Did the walls serve in battles?', a: 'Yes, they were part of the port’s defence against enemy naval forces at different times.' },
        { q: 'Is San Felipe Castle part of this?', a: 'Yes, it is a decisive piece of the city’s land fortification system.' },
        { q: 'Where do I get this information?', a: 'From public sources linked at the end of the page (UNESCO and Fortificaciones Cartagena de Indias).' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'historia/baluartes-y-garitas',
    group: 'historia',
    slug: 'baluartes-y-garitas',
    priority: 'P2',
    related: ['historia/construccion-murallas', 'historia/piratas-y-defensa', 'historia/baluarte-santo-domingo', 'rutas/mapa-de-baluartes'],
    es: {
      metaTitle: 'Baluartes y garitas de Cartagena: estructura y función',
      metaDescription: 'Qué son los baluartes y las garitas de la muralla y cómo leerlos como sistema defensivo.',
      kicker: 'Historia y fortificaciones',
      lead: 'Los baluartes son estructuras salientes desde las que se podía disparar de flanco. Las garitas eran puestos de vigilancia. Juntos explican por qué el recinto se trazó así.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Los baluartes',
          paragraphs: [
            'Son volúmenes salientes en la muralla que permitían cubrir los flancos y no solo la línea frontal. Cada uno tenía nombre y función dentro del sistema.',
          ],
        },
        {
          title: 'Las garitas',
          paragraphs: [
            'Pequeñas casillas elevadas donde vigilantes observaban la bahía y la ciudad. Hoy son uno de los elementos más fotografiados del recinto.',
          ],
        },
        {
          title: 'Cómo leerlos al caminar',
          bullets: [
            'Cuenta los baluartes a lo largo de tu tramo y míralos como nodos de defensa.',
            'Observa las garitas como puntos de control visual.',
            'Relaciona el trazado con la línea de costa y los accesos.',
          ],
          callout: 'Las denominaciones específicas de cada baluarte pueden variar; esta guía las cita según fuentes públicas.',
        },
      ],
      faq: [
        { q: '¿Qué es un baluarte?', a: 'Una estructura saliente de la muralla desde la que se disparaba de flanco para defender los tramos contiguos.' },
        { q: '¿Qué es una garita?', a: 'Una casilla elevada de vigilancia, hoy uno de los símbolos más fotografiados del recinto.' },
        { q: '¿Por qué hay tantos baluartes?', a: 'Porque el sistema defensivo cubría flancos y accesos, no solo la línea frontal.' },
        { q: '¿Tienen nombre los baluartes?', a: 'Sí, pero las denominaciones específicas pueden variar; esta guía las cita según fuentes públicas.' },
        { q: '¿Dónde ver baluartes famosos?', a: 'El Baluarte de Santo Domingo es un punto de referencia en el tramo de San Diego.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Bastions and sentry boxes of Cartagena: structure and function',
      metaDescription: 'What the wall’s bastions and sentry boxes are and how to read them as a defensive system.',
      kicker: 'History & fortifications',
      lead: 'Bastions are projecting structures from which you could fire along the flank. Sentry boxes were watch posts. Together they explain why the enclosure was laid out this way.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'The bastions',
          paragraphs: [
            'They are projecting volumes in the wall that allowed covering the flanks, not just the frontal line. Each had a name and a function within the system.',
          ],
        },
        {
          title: 'The sentry boxes',
          paragraphs: [
            'Small elevated cabins where watchers observed the bay and the city. Today they are among the most photographed elements of the enclosure.',
          ],
        },
        {
          title: 'How to read them while walking',
          bullets: [
            'Count the bastions along your stretch and see them as defence nodes.',
            'Observe the sentry boxes as visual control points.',
            'Relate the layout to the coastline and the accesses.',
          ],
          callout: 'Specific names of each bastion may vary; this guide cites them per public sources.',
        },
      ],
      faq: [
        { q: 'What is a bastion?', a: 'A projecting wall structure from which you fired along the flank to defend adjacent stretches.' },
        { q: 'What is a sentry box?', a: 'A small elevated watch cabin, today one of the most photographed symbols of the enclosure.' },
        { q: 'Why so many bastions?', a: 'Because the defensive system covered flanks and accesses, not just the frontal line.' },
        { q: 'Do bastions have names?', a: 'Yes, but specific names may vary; this guide cites them per public sources.' },
        { q: 'Where to see famous bastions?', a: 'Baluarte de Santo Domingo is a reference point on the San Diego stretch.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'historia/patrimonio-unesco',
    group: 'historia',
    slug: 'patrimonio-unesco',
    priority: 'P1',
    related: ['historia/construccion-murallas', 'historia/baluartes-y-garitas', 'cerca/castillo-san-felipe', 'historia/piratas-y-defensa'],
    es: {
      metaTitle: 'Murallas de Cartagena y UNESCO: patrimonio mundial',
      metaDescription: 'Por qué el conjunto «Puerto, fortalezas y grupo monumental de Cartagena» es Patrimonio Mundial desde 1984.',
      kicker: 'Historia y fortificaciones',
      lead: 'UNESCO inscribió en 1984 el «Puerto, fortalezas y grupo monumental de Cartagena» por su arquitectura militar y su papel en las rutas marítimas históricas. Ese conjunto incluye las murallas y otras fortificaciones.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Qué se inscribió',
          paragraphs: [
            'La inscripción no es solo la muralla urbana: abarca el puerto, las fortalezas y el grupo monumental. Las murallas son una parte del sistema defensivo mayor.',
          ],
        },
        {
          title: 'Por qué importa al visitante',
          paragraphs: [
            'La condición de Patrimonio Mundial explica por qué el recinto se conserva y se protege. Al caminarlo, estás sobre una de las defensas militares mejor conservadas del Caribe.',
          ],
        },
        {
          title: 'Relación con otras fortificaciones',
          bullets: [
            'Las murallas y el Castillo San Felipe forman parte del mismo sistema.',
            'El conjunto supera el recinto urbano e incluye defensas de la bahía.',
            'La gestión y las fuentes oficiales suelen referirse al sistema en conjunto.',
          ],
          callout: 'Para la declaración oficial, consulta la ficha de UNESCO enlazada en las fuentes.',
        },
      ],
      faq: [
        { q: '¿Las murallas de Cartagena son UNESCO?', a: 'Forman parte del conjunto «Puerto, fortalezas y grupo monumental de Cartagena», inscrito por UNESCO en 1984.' },
        { q: '¿Solo la muralla urbana?', a: 'No: el conjunto también incluye el puerto, las fortalezas y el grupo monumental, además de defensas de la bahía.' },
        { q: '¿Desde cuándo es Patrimonio Mundial?', a: 'Desde 1984.' },
        { q: '¿El Castillo San Felipe entra en eso?', a: 'Sí, es parte del sistema de fortificaciones del mismo conjunto.' },
        { q: '¿Por qué se conserva tanto?', a: 'Por su valor universal excepcional como arquitectura militar caribeña y su papel en rutas marítimas históricas.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Cartagena Walls and UNESCO: World Heritage',
      metaDescription: 'Why the “Port, Fortresses and Group of Monuments, Cartagena” has been World Heritage since 1984.',
      kicker: 'History & fortifications',
      lead: 'UNESCO inscribed the “Port, Fortresses and Group of Monuments, Cartagena” in 1984 for its military architecture and role in historic maritime routes. That property includes the walls and other fortifications.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What was inscribed',
          paragraphs: [
            'The inscription is not just the urban wall: it covers the port, the fortresses and the monumental group. The walls are part of the wider defensive system.',
          ],
        },
        {
          title: 'Why it matters to the visitor',
          paragraphs: [
            'World Heritage status explains why the enclosure is conserved and protected. Walking it, you are on one of the best-preserved military defences in the Caribbean.',
          ],
        },
        {
          title: 'Relation to other fortifications',
          bullets: [
            'The walls and San Felipe Castle are part of the same system.',
            'The property goes beyond the urban enclosure and includes bay defences.',
            'Management and official sources usually refer to the system as a whole.',
          ],
          callout: 'For the official statement, see the UNESCO entry linked in the sources.',
        },
      ],
      faq: [
        { q: 'Are Cartagena’s walls UNESCO?', a: 'They are part of the “Port, Fortresses and Group of Monuments, Cartagena”, inscribed by UNESCO in 1984.' },
        { q: 'Only the urban wall?', a: 'No: the property also includes the port, the fortresses and the monumental group, plus bay defences.' },
        { q: 'Since when is it World Heritage?', a: 'Since 1984.' },
        { q: 'Does San Felipe Castle fall under this?', a: 'Yes, it is part of the same fortification system within the property.' },
        { q: 'Why is it so well preserved?', a: 'For its outstanding universal value as Caribbean military architecture and its role in historic maritime routes.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'historia/baluarte-san-pedro-martir',
    group: 'historia',
    slug: 'baluarte-san-pedro-martir',
    priority: 'P2',
    related: ['historia/baluartes-y-garitas', 'cerca/plaza-san-diego', 'historia/construccion-murallas', 'rutas/mapa-de-baluartes'],
    es: {
      metaTitle: 'Baluarte de San Pedro Mártir en Cartagena',
      metaDescription: 'Historia y visita del baluarte cerca de San Diego, parte del sistema defensivo de la muralla.',
      kicker: 'Historia y fortificaciones',
      lead: 'El Baluarte de San Pedro Mártir es uno de los nodos del sistema defensivo en el entorno de San Diego. Conocer su función ayuda a leer el recinto como una máquina militar.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Función dentro del sistema',
          paragraphs: [
            'Como baluarte, servía para flanquear los tramos contiguos y controlar accesos. Su ubicación lo vincula al barrio de San Diego y al borde que mira a la bahía.',
          ],
        },
        {
          title: 'Cómo visitarlo',
          bullets: [
            'Ubícalo en tu recorrido como punto de orientación.',
            'Observa su volumen saliente y la relación con la línea de costa.',
            'Conéctalo con el tramo de San Diego y Las Bóvedas.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica accesos y habilitación; algunos baluartes se recorren desde el paseo elevado y otros desde la calle.',
          ],
          callout: 'Las denominaciones y el estado de cada baluarte pueden variar; consulta fuentes oficiales.',
        },
      ],
      faq: [
        { q: '¿Qué es el Baluarte de San Pedro Mártir?', a: 'Un nodo del sistema defensivo de la muralla, cercano a San Diego, diseñado para flanquear tramos contiguos.' },
        { q: '¿Se puede visitar?', a: 'Se recorre como parte del trazado; verifica accesos y habilitación antes de ir.' },
        { q: '¿Está junto a la Plaza de San Diego?', a: 'Queda en el entorno de San Diego, dentro del recinto amurallado.' },
        { q: '¿Es lo mismo que el Castillo San Felipe?', a: 'No; el Castillo es una fortaleza aparte del sistema.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Baluarte de San Pedro Mártir in Cartagena',
      metaDescription: 'History and visit of the bastion near San Diego, part of the wall’s defensive system.',
      kicker: 'History & fortifications',
      lead: 'Baluarte de San Pedro Mártir is one of the defensive nodes near San Diego. Understanding its function helps read the enclosure as a military machine.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Function within the system',
          paragraphs: [
            'As a bastion, it served to flank adjacent stretches and control accesses. Its location links it to the San Diego district and the bay-facing edge.',
          ],
        },
        {
          title: 'How to visit it',
          bullets: [
            'Locate it on your route as an orientation point.',
            'Notice its projecting volume and relation to the coastline.',
            'Connect it with the San Diego stretch and Las Bóvedas.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Verify accesses and availability; some bastions are walked from the elevated path, others from the street.',
          ],
          callout: 'The names and condition of each bastion may vary; check official sources.',
        },
      ],
      faq: [
        { q: 'What is Baluarte de San Pedro Mártir?', a: 'A node of the wall’s defensive system near San Diego, designed to flank adjacent stretches.' },
        { q: 'Can it be visited?', a: 'It is walked as part of the layout; verify accesses and availability before going.' },
        { q: 'Is it next to Plaza de San Diego?', a: 'It lies in the San Diego surroundings, inside the walled enclosure.' },
        { q: 'Is it the same as San Felipe Castle?', a: 'No; the Castle is a separate fortress of the system.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'historia/santa-catalina-san-lucas',
    group: 'historia',
    slug: 'santa-catalina-san-lucas',
    priority: 'P2',
    related: ['historia/baluartes-y-garitas', 'cerca/plaza-san-diego', 'historia/baluarte-san-pedro-martir', 'rutas/mapa-de-baluartes'],
    es: {
      metaTitle: 'Santa Catalina y San Lucas: la Tenaza defensiva',
      metaDescription: 'El sistema de La Tenaza y dos baluartes que protegían el borde de San Diego.',
      kicker: 'Historia y fortificaciones',
      lead: 'Santa Catalina y San Lucas forman parte de La Tenaza, un conjunto defensivo pensado para cubrir flancos y la entrada al barrio de San Diego.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Qué era La Tenaza',
          paragraphs: [
            'La Tenaza agrupaba baluartes y trazados para defender el borde del recinto frente a la bahía y los accesos de San Diego. Santa Catalina y San Lucas son piezas de ese esquema.',
          ],
        },
        {
          title: 'Cómo leerlos hoy',
          bullets: [
            'Ubícalos como nodos de defensa en el tramo de San Diego.',
            'Relaciona su posición con la línea de costa y Las Bóvedas.',
            'Observa cómo el trazado conecta plazas y accesos.',
          ],
        },
        {
          title: 'Antes de visitar',
          paragraphs: [
            'Verifica accesos y habilitación; las denominaciones específicas pueden variar según la fuente.',
          ],
          callout: 'Esta guía describe el esquema defensivo según fuentes públicas; no opera el sitio.',
        },
      ],
      faq: [
        { q: '¿Qué es La Tenaza?', a: 'Un conjunto defensivo que agrupaba baluartes para cubrir flancos y accesos de San Diego frente a la bahía.' },
        { q: '¿Qué papel tenían Santa Catalina y San Lucas?', a: 'Eran baluartes del esquema de La Tenaza, parte del sistema de defensa del recinto.' },
        { q: '¿Dónde están?', a: 'En el entorno de San Diego, dentro del recinto amurallado.' },
        { q: '¿Se pueden visitar?', a: 'Se recorren como parte del trazado; verifica accesos antes de ir.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Santa Catalina and San Lucas: the defensive Tenaza',
      metaDescription: 'The Tenaza system and two bastions that protected the San Diego edge.',
      kicker: 'History & fortifications',
      lead: 'Santa Catalina and San Lucas are part of La Tenaza, a defensive set designed to cover flanks and the entrance to San Diego.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What La Tenaza was',
          paragraphs: [
            'La Tenaza grouped bastions and layouts to defend the enclosure edge against the bay and the San Diego accesses. Santa Catalina and San Lucas are pieces of that scheme.',
          ],
        },
        {
          title: 'How to read them today',
          bullets: [
            'Locate them as defence nodes on the San Diego stretch.',
            'Relate their position to the coastline and Las Bóvedas.',
            'Notice how the layout connects plazas and accesses.',
          ],
        },
        {
          title: 'Before visiting',
          paragraphs: [
            'Verify accesses and availability; specific names may vary by source.',
          ],
          callout: 'This guide describes the defensive scheme per public sources; it does not operate the site.',
        },
      ],
      faq: [
        { q: 'What is La Tenaza?', a: 'A defensive set that grouped bastions to cover flanks and San Diego accesses facing the bay.' },
        { q: 'What role did Santa Catalina and San Lucas play?', a: 'They were bastions of the Tenaza scheme, part of the enclosure’s defensive system.' },
        { q: 'Where are they?', a: 'In the San Diego surroundings, inside the walled enclosure.' },
        { q: 'Can they be visited?', a: 'They are walked as part of the layout; verify accesses before going.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'historia/baluarte-santa-clara',
    group: 'historia',
    slug: 'baluarte-santa-clara',
    priority: 'P2',
    related: ['historia/baluartes-y-garitas', 'historia/santa-catalina-san-lucas', 'cerca/plaza-santo-domingo', 'rutas/mapa-de-baluartes'],
    es: {
      metaTitle: 'Baluarte de Santa Clara en Cartagena',
      metaDescription: 'El baluarte, el convento adyacente y la ruta de entrada al recinto.',
      kicker: 'Historia y fortificaciones',
      lead: 'El Baluarte de Santa Clara se vincula a un conjunto religioso e histórico del recinto. Su lectura ayuda a entender cómo la defensa y la vida urbana compartían el mismo trazado.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Defensa y ciudad',
          paragraphs: [
            'Como baluarte, formaba parte del sistema que protegía el recinto. Su nombre se asocia a un convento y a un tramo con fuerte identidad histórica.',
          ],
        },
        {
          title: 'Cómo visitarlo',
          bullets: [
            'Ubícalo como punto de orientación en tu recorrido.',
            'Relaciona el baluarte con el edificio religioso adyacente.',
            'Conéctalo con el resto del borde defensivo hacia el Centro.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica accesos y habilitación; las denominaciones específicas pueden variar según la fuente.',
          ],
          callout: 'Esta guía cita el esquema defensivo según fuentes públicas; no administra el sitio.',
        },
      ],
      faq: [
        { q: '¿Qué es el Baluarte de Santa Clara?', a: 'Un baluarte del sistema defensivo del recinto, asociado a un conjunto religioso e histórico.' },
        { q: '¿Hay un convento ahí?', a: 'El nombre se vincula a un edificio religioso adyacente dentro del recinto amurallado.' },
        { q: '¿Se puede visitar?', a: 'Se recorre como parte del trazado; verifica accesos antes de ir.' },
        { q: '¿Está en el Centro?', a: 'Queda dentro del recinto amurallado, conectado con el borde defensivo hacia el Centro.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Baluarte de Santa Clara in Cartagena',
      metaDescription: 'The bastion, the adjacent convent and the entrance route to the enclosure.',
      kicker: 'History & fortifications',
      lead: 'Baluarte de Santa Clara is linked to a religious and historical set within the enclosure. Reading it helps understand how defence and urban life shared the same layout.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Defence and city',
          paragraphs: [
            'As a bastion, it was part of the system protecting the enclosure. Its name is associated with a convent and a stretch with strong historical identity.',
          ],
        },
        {
          title: 'How to visit it',
          bullets: [
            'Locate it as an orientation point on your route.',
            'Relate the bastion to the adjacent religious building.',
            'Connect it with the rest of the defensive edge toward the Centro.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Verify accesses and availability; specific names may vary by source.',
          ],
          callout: 'This guide cites the defensive scheme per public sources; it does not operate the site.',
        },
      ],
      faq: [
        { q: 'What is Baluarte de Santa Clara?', a: 'A bastion of the enclosure’s defensive system, associated with a religious and historical set.' },
        { q: 'Is there a convent there?', a: 'The name links to an adjacent religious building inside the walled enclosure.' },
        { q: 'Can it be visited?', a: 'It is walked as part of the layout; verify accesses before going.' },
        { q: 'Is it in the Centro?', a: 'It lies inside the walled enclosure, connected with the defensive edge toward the Centro.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },
  {
    id: 'historia/baluarte-santo-domingo',
    group: 'historia',
    slug: 'baluarte-santo-domingo',
    priority: 'P2',
    related: ['cerca/plaza-san-diego', 'historia/baluartes-y-garitas', 'rutas/san-diego-las-bovedas-1-hora', 'historia/construccion-murallas'],
    es: {
      metaTitle: 'Baluarte de Santo Domingo en Cartagena',
      metaDescription: 'El baluarte, la estatua de India Catalina y la ruta de miradores hacia la bahía.',
      kicker: 'Historia y fortificaciones',
      lead: 'El Baluarte de Santo Domingo es uno de los puntos de referencia del tramo de San Diego. Desde él se abren vistas a la bahía y conexiones con Las Bóvedas y el Centro.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Un punto clave del recorrido',
          paragraphs: [
            'El baluarte sirve como mirador y como nodo de transición entre el paseo elevado y las calles del Centro. Cerca quedan hitos como la estatua de India Catalina.',
          ],
        },
        {
          title: 'Cómo visitarlo',
          bullets: [
            'Úsalo como punto de inicio o descanso en el tramo de San Diego.',
            'Observa las vistas hacia la bahía y Las Bóvedas.',
            'Conéctalo con la Plaza de San Diego y el Centro.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica accesos y habilitación; las denominaciones específicas pueden variar según la fuente.',
          ],
          callout: 'Esta guía describe el esquema defensivo según fuentes públicas; no administra el sitio.',
        },
      ],
      faq: [
        { q: '¿Qué es el Baluarte de Santo Domingo?', a: 'Un baluarte del tramo de San Diego que funciona como mirador y nodo de transición hacia el Centro.' },
        { q: '¿Está cerca de India Catalina?', a: 'En el entorno de San Diego hay hitos como la estatua de India Catalina, cercana al baluarte.' },
        { q: '¿Se puede ver la bahía desde allí?', a: 'Sí, el baluarte abre vistas hacia la bahía y Las Bóvedas.' },
        { q: '¿Se puede visitar?', a: 'Se recorre como parte del trazado; verifica accesos antes de ir.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
    en: {
      metaTitle: 'Baluarte de Santo Domingo in Cartagena',
      metaDescription: 'The bastion, the India Catalina statue and the viewpoint route toward the bay.',
      kicker: 'History & fortifications',
      lead: 'Baluarte de Santo Domingo is a reference point on the San Diego stretch. From it open bay views and connections with Las Bóvedas and the Centro.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'A key point of the route',
          paragraphs: [
            'The bastion serves as a viewpoint and a transition node between the elevated walk and the Centro streets. Nearby landmarks like the India Catalina statue stand close.',
          ],
        },
        {
          title: 'How to visit it',
          bullets: [
            'Use it as a start or rest point on the San Diego stretch.',
            'Notice the views toward the bay and Las Bóvedas.',
            'Connect it with Plaza de San Diego and the Centro.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Verify accesses and availability; specific names may vary by source.',
          ],
          callout: 'This guide describes the defensive scheme per public sources; it does not operate the site.',
        },
      ],
      faq: [
        { q: 'What is Baluarte de Santo Domingo?', a: 'A bastion on the San Diego stretch that works as a viewpoint and transition node toward the Centro.' },
        { q: 'Is it near India Catalina?', a: 'In the San Diego surroundings stand landmarks like the India Catalina statue, close to the bastion.' },
        { q: 'Can you see the bay from there?', a: 'Yes, the bastion opens views toward the bay and Las Bóvedas.' },
        { q: 'Can it be visited?', a: 'It is walked as part of the layout; verify accesses before going.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: BASTION_PHOTO,
    },
  },

  // ===================== C. CERCA (8) =====================
  {
    id: 'cerca/las-bovedas',
    group: 'cerca',
    slug: 'las-bovedas',
    priority: 'P1',
    related: ['cerca/plaza-san-diego', 'rutas/san-diego-las-bovedas-1-hora', 'historia/baluartes-y-garitas', 'cerca/torre-del-reloj'],
    es: {
      metaTitle: 'Las Bóvedas de Cartagena: qué ver y cómo conectar con la muralla',
      metaDescription: 'Las antiguas construcciones abovedadas en el borde defensivo: historia, artesanías y cómo enlazarlas con el paseo.',
      kicker: 'Cerca de las murallas',
      lead: 'Las Bóvedas son construcciones abovedadas integradas al borde defensivo, al final del tramo de San Diego junto al mar. Hoy reúnen talleres de artesanías y otra escala para leer la relación entre arquitectura militar y vida urbana.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Qué son',
          paragraphs: [
            'Fueron parte del sistema defensivo y hoy funcionan como galería de artesanías y comercio. Su ubicación las convierte en un punto natural para empezar o terminar el paseo de la muralla.',
          ],
        },
        {
          title: 'Cómo visitarlas',
          bullets: [
            'Camina el tramo de San Diego hasta Las Bóvedas y baja por el Centro.',
            'Úsalas como referencia de inicio o descanso.',
            'Reserva tiempo para el comercio artesanal si te interesa.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los horarios de los talleres y comercios son propios; verifícalos el día de tu visita.',
          ],
          callout: 'Esta guía no recomienda comercios concretos; prioriza el tipo de experiencia y la procedencia informada.',
        },
      ],
      faq: [
        { q: '¿Qué son Las Bóvedas?', a: 'Construcciones abovedadas del borde defensivo, hoy galería de artesanías y comercio, al final del tramo de San Diego junto al mar.' },
        { q: '¿Son parte de la muralla?', a: 'Están integradas al borde defensivo y son un punto de referencia del recorrido.' },
        { q: '¿Se puede comprar artesanía?', a: 'Sí, hay talleres y comercios; verifica horarios el día de tu visita.' },
        { q: '¿Cómo las conecto con el paseo?', a: 'Camina el tramo de San Diego hasta Las Bóvedas y baja por el Centro.' },
        { q: '¿Están cerca de la Plaza de San Diego?', a: 'Sí, en el entorno de San Diego, dentro del recinto amurallado.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Las Bóvedas, Cartagena: what to see and how to connect with the wall',
      metaDescription: 'The historic vaulted structures on the defensive edge: history, crafts and how to link them with the walk.',
      kicker: 'Near the walls',
      lead: 'Las Bóvedas are vaulted structures integrated into the defensive edge, at the sea end of the San Diego stretch. Today they gather craft workshops and offer another scale to read the relationship between military architecture and urban life.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What they are',
          paragraphs: [
            'They were part of the defensive system and now work as a crafts gallery and shops. Their location makes them a natural point to start or finish the wall walk.',
          ],
        },
        {
          title: 'How to visit',
          bullets: [
            'Walk the San Diego stretch to Las Bóvedas and descend through the Centro.',
            'Use them as a start or rest reference.',
            'Reserve time for craft shopping if interested.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Workshop and shop hours are their own; verify them on your visit day.',
          ],
          callout: 'This guide does not recommend specific businesses; prioritise the type of experience and traceable sourcing.',
        },
      ],
      faq: [
        { q: 'What are Las Bóvedas?', a: 'Vaulted structures on the defensive edge, now a crafts gallery and shops, at the sea end of the San Diego stretch.' },
        { q: 'Are they part of the wall?', a: 'They are integrated into the defensive edge and are a reference point of the route.' },
        { q: 'Can I buy crafts?', a: 'Yes, there are workshops and shops; verify hours on your visit day.' },
        { q: 'How do I connect them with the walk?', a: 'Walk the San Diego stretch to Las Bóvedas and descend through the Centro.' },
        { q: 'Are they near Plaza de San Diego?', a: 'Yes, in the San Diego surroundings, inside the walled enclosure.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/plaza-san-diego',
    group: 'cerca',
    slug: 'plaza-san-diego',
    priority: 'P1',
    related: ['cerca/las-bovedas', 'visita/puntos-de-acceso', 'rutas/san-diego-las-bovedas-1-hora', 'cerca/india-catalina'],
    es: {
      metaTitle: 'Plaza de San Diego en Cartagena: barrio histórico y descanso',
      metaDescription: 'El barrio y la plaza de San Diego como punto de pausa y conexión con el paseo de la muralla.',
      kicker: 'Cerca de las murallas',
      lead: 'La Plaza de San Diego es un punto de pausa en el barrio histórico del mismo nombre. Sirve para conectar el paseo de la muralla con el trazado de calles, viviendas y espacios públicos.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Un barrio para caminar',
          paragraphs: [
            'San Diego concentra varios tramos del paseo elevado con continuidad. La plaza es un buen lugar para empezar, descansar y enlazar con Las Bóvedas.',
          ],
        },
        {
          title: 'Cómo usarla en tu ruta',
          bullets: [
            'Empieza aquí y sube hacia Las Bóvedas.',
            'Úsala como descanso a la sombra entre tramos.',
            'Conéctala con el Centro por calles peatonales.',
          ],
        },
        {
          title: 'Servicios cercanos',
          paragraphs: [
            'En el barrio hay opciones de comida y café; verifica horarios y reservas según lo que busques.',
          ],
          callout: 'Esta guía no recomienda establecimientos concretos; prioriza el tipo de experiencia.',
        },
      ],
      faq: [
        { q: '¿Qué es la Plaza de San Diego?', a: 'Una plaza del barrio histórico del mismo nombre, punto de pausa y conexión con el paseo de la muralla.' },
        { q: '¿Por qué empezar ahí?', a: 'Porque San Diego concentra tramos continuos del paseo elevado y conecta con Las Bóvedas.' },
        { q: '¿Hay dónde comer cerca?', a: 'El barrio tiene opciones; verifica horarios y reservas según lo que busques.' },
        { q: '¿Es accesible?', a: 'Las calles del barrio son más llanas que el paseo elevado; verifica accesos antes de subir.' },
        { q: '¿Cómo la conecto con el Centro?', a: 'Por calles peatonales que cruzan el recinto amurallado.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Plaza de San Diego, Cartagena: historic district and rest',
      metaDescription: 'The San Diego district and plaza as a pause point and connection with the wall walk.',
      kicker: 'Near the walls',
      lead: 'Plaza de San Diego is a pause point in the historic district of the same name. It connects the wall walk with the layout of streets, homes and public spaces.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'A district to walk',
          paragraphs: [
            'San Diego concentrates several continuous elevated-walk sections. The plaza is a good place to start, rest and link with Las Bóvedas.',
          ],
        },
        {
          title: 'How to use it on your route',
          bullets: [
            'Start here and climb toward Las Bóvedas.',
            'Use it as a shaded rest between stretches.',
            'Connect it with the Centro via pedestrian streets.',
          ],
        },
        {
          title: 'Nearby services',
          paragraphs: [
            'The district has food and coffee options; verify hours and bookings per what you seek.',
          ],
          callout: 'This guide does not recommend specific businesses; prioritise the type of experience.',
        },
      ],
      faq: [
        { q: 'What is Plaza de San Diego?', a: 'A plaza in the historic district of the same name, a pause point and connection with the wall walk.' },
        { q: 'Why start there?', a: 'Because San Diego concentrates continuous elevated-walk sections and connects with Las Bóvedas.' },
        { q: 'Is there food nearby?', a: 'The district has options; verify hours and bookings per what you seek.' },
        { q: 'Is it accessible?', a: 'The district streets are flatter than the elevated walk; verify accesses before climbing.' },
        { q: 'How do I connect it with the Centro?', a: 'Via pedestrian streets crossing the walled enclosure.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/la-serrezuela',
    group: 'cerca',
    slug: 'la-serrezuela',
    priority: 'P1',
    related: ['cerca/plaza-san-diego', 'comer/almuerzo-familiar-serrezuela', 'cerca/castillo-san-felipe', 'comer/restaurantes-cerca-murallas'],
    es: {
      metaTitle: 'La Serrezuela en Cartagena: compras y descanso bajo techo',
      metaDescription: 'El antiguo coso taurino convertido en centro de compras y gastronomía, ideal para días de lluvia.',
      kicker: 'Cerca de las murallas',
      lead: 'La Serrezuela es un antiguo coso taurino transformado en un espacio de compras y gastronomía. Queda a corta distancia del recinto amurallado y es una opción de descanso bajo techo y comida en días de lluvia.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'De plaza de toros a centro',
          paragraphs: [
            'El edificio reutiliza la estructura de una plaza de toros convertida en centro comercial y de restaurantes. Es un ejemplo de cómo Cartagena integra su historia con el uso cotidiano.',
          ],
        },
        {
          title: 'Por qué incluirla',
          bullets: [
            'Refugio bajo techo en días de lluvia.',
            'Opciones de comida y compras en un solo lugar.',
            'Cercana al recinto amurallado, a pocos minutos a pie o en corto traslado.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica horarios de tiendas y restaurantes; pueden cambiar. Esta guía no recomienda establecimientos concretos.',
          ],
          callout: 'La cercanía y el uso dependen del tráfico y del acceso elegido; no son tiempos garantizados.',
        },
      ],
      faq: [
        { q: '¿Qué es La Serrezuela?', a: 'Un antiguo coso taurino convertido en centro de compras y gastronomía, cerca del recinto amurallado.' },
        { q: '¿Por qué es útil para el visitante?', a: 'Es refugio bajo techo y opción de comida en días de lluvia, a pocos minutos del recinto.' },
        { q: '¿Se puede comer allí?', a: 'Sí, hay restaurantes; verifica horarios y reservas el día de tu visita.' },
        { q: '¿Está dentro de la muralla?', a: 'No, pero queda cercana; el acceso exacto depende del punto de partida.' },
        { q: '¿Sirve en días de lluvia?', a: 'Sí, al ser un espacio cubierto.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'La Serrezuela, Cartagena: shopping and indoor rest',
      metaDescription: 'The former bullring turned shopping and dining centre, ideal for rainy days.',
      kicker: 'Near the walls',
      lead: 'La Serrezuela is a former bullring transformed into a shopping and dining space. It lies a short distance from the walled enclosure and is an under-roof rest and food option on rainy days.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'From bullring to centre',
          paragraphs: [
            'The building reuses the structure of a bullring converted into a mall and restaurants. It shows how Cartagena integrates its history with daily use.',
          ],
        },
        {
          title: 'Why include it',
          bullets: [
            'Shelter under roof on rainy days.',
            'Food and shopping options in one place.',
            'Close to the walled enclosure, minutes on foot or a short ride.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Verify shop and restaurant hours; they may change. This guide does not recommend specific businesses.',
          ],
          callout: 'Proximity and access depend on traffic and the chosen entry; not guaranteed times.',
        },
      ],
      faq: [
        { q: 'What is La Serrezuela?', a: 'A former bullring turned shopping and dining centre near the walled enclosure.' },
        { q: 'Why is it useful to the visitor?', a: 'It is under-roof shelter and a food option on rainy days, minutes from the enclosure.' },
        { q: 'Can you eat there?', a: 'Yes, there are restaurants; verify hours and bookings on your visit day.' },
        { q: 'Is it inside the wall?', a: 'No, but it is close; the exact access depends on the starting point.' },
        { q: 'Is it good on rainy days?', a: 'Yes, as a covered space.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/india-catalina',
    group: 'cerca',
    slug: 'india-catalina',
    priority: 'P2',
    related: ['cerca/plaza-san-diego', 'historia/baluarte-santo-domingo', 'cerca/torre-del-reloj', 'rutas/san-diego-las-bovedas-1-hora'],
    es: {
      metaTitle: 'India Catalina en Cartagena: monumento y conexión peatonal',
      metaDescription: 'La estatua de India Catalina, su historia y cómo enlazarla con el paseo de la muralla.',
      kicker: 'Cerca de las murallas',
      lead: 'La estatua de India Catalina es un hito cercano a San Diego que recuerda la figura indígena vinculada a la fundación de Cartagena. Es un punto de referencia para conectar el paseo con el entorno histórico.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Quién fue',
          paragraphs: [
            'India Catalina fue una mujer indígena que sirvió de puente cultural en los primeros contactos entre los pueblos locales y los españoles. Su estatua conmemora ese papel en la historia de la ciudad.',
          ],
        },
        {
          title: 'Cómo visitarla',
          bullets: [
            'Ubícala como hito cerca de San Diego y el Baluarte de Santo Domingo.',
            'Úsala como punto de referencia para tu ruta a pie.',
            'Conéctala con la Plaza de San Diego y Las Bóvedas.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Es un monumento público al aire libre; no requiere entrada. Verifica el entorno y la seguridad peatonal.',
          ],
          callout: 'Esta guía describe el hito según fuentes públicas; no administra el sitio.',
        },
      ],
      faq: [
        { q: '¿Quién fue India Catalina?', a: 'Una mujer indígena que actuó como puente cultural en los primeros contactos con los españoles; su estatua conmemora ese papel.' },
        { q: '¿Dónde está la estatua?', a: 'Cerca de San Diego y del Baluarte de Santo Domingo, dentro del entorno del recinto.' },
        { q: '¿Tiene entrada?', a: 'Es un monumento público al aire libre; no requiere entrada.' },
        { q: '¿Cómo la conecto con la muralla?', a: 'Como hito peatonal cercano a San Diego y Las Bóvedas.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'India Catalina, Cartagena: monument and pedestrian link',
      metaDescription: 'The India Catalina statue, its history and how to link it with the wall walk.',
      kicker: 'Near the walls',
      lead: 'The India Catalina statue is a landmark near San Diego that recalls the indigenous figure linked to the founding of Cartagena. It is a reference point to connect the walk with the historic surroundings.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Who she was',
          paragraphs: [
            'India Catalina was an indigenous woman who served as a cultural bridge in the first contacts between local peoples and the Spanish. Her statue commemorates that role in the city’s history.',
          ],
        },
        {
          title: 'How to visit',
          bullets: [
            'Locate it as a landmark near San Diego and Baluarte de Santo Domingo.',
            'Use it as a reference point for your walking route.',
            'Connect it with Plaza de San Diego and Las Bóvedas.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'It is an open-air public monument; no admission required. Check the surroundings and pedestrian safety.',
          ],
          callout: 'This guide describes the landmark per public sources; it does not operate the site.',
        },
      ],
      faq: [
        { q: 'Who was India Catalina?', a: 'An indigenous woman who acted as a cultural bridge in the first contacts with the Spanish; her statue commemorates that role.' },
        { q: 'Where is the statue?', a: 'Near San Diego and Baluarte de Santo Domingo, within the enclosure surroundings.' },
        { q: 'Is there an admission?', a: 'It is an open-air public monument; no admission required.' },
        { q: 'How do I connect it with the wall?', a: 'As a pedestrian landmark near San Diego and Las Bóvedas.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/torre-del-reloj',
    group: 'cerca',
    slug: 'torre-del-reloj',
    priority: 'P2',
    related: ['cerca/plaza-santo-domingo', 'rutas/medio-dia-centro-historico', 'cerca/india-catalina', 'visita/puntos-de-acceso'],
    es: {
      metaTitle: 'Torre del Reloj de Cartagena: puerta y ruta peatonal',
      metaDescription: 'La antigua puerta de la ciudad amurallada y el inicio de la ruta a pie por el Centro.',
      kicker: 'Cerca de las murallas',
      lead: 'La Torre del Reloj es uno de los accesos históricos al recinto amurallado. Para quienes visitan la muralla, es un punto de referencia para entrar al Centro y enlazar plazas y calles.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Puerta de la ciudad',
          paragraphs: [
            'La Torre del Reloj marca una de las entradas tradicionales al recinto. Desde allí puedes caminar por el Centro histórico y conectar con el paseo de la muralla por varios puntos.',
          ],
        },
        {
          title: 'Cómo usarla en tu ruta',
          bullets: [
            'Úsala como hito para entrar al Centro desde fuera del recinto.',
            'Conéctala con la Plaza de la Aduana y las calles aledañas.',
            'Desde el Centro sube a la muralla por los accesos de San Diego.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Es un monumento público al aire libre; no requiere entrada. La afluencia es alta, así que camina con calma.',
          ],
          callout: 'Esta guía describe el hito según fuentes públicas; no administra el sitio.',
        },
      ],
      faq: [
        { q: '¿Qué es la Torre del Reloj?', a: 'Una de las entradas históricas al recinto amurallado y hito del Centro de Cartagena.' },
        { q: '¿Tiene entrada?', a: 'Es un monumento público al aire libre; no requiere entrada.' },
        { q: '¿Cómo la conecto con la muralla?', a: 'Desde el Centro subes por los accesos de San Diego.' },
        { q: '¿Está dentro de la muralla?', a: 'Marca uno de los accesos tradicionales al recinto.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Torre del Reloj, Cartagena: gate and walking route',
      metaDescription: 'The historic gate of the walled city and the start of the Centro walking route.',
      kicker: 'Near the walls',
      lead: 'The Torre del Reloj is one of the historic accesses to the walled enclosure. For wall visitors, it is a reference point to enter the Centro and link plazas and streets.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Gate of the city',
          paragraphs: [
            'The Torre del Reloj marks one of the traditional entrances to the enclosure. From there you can walk the historic Centro and connect with the wall walk at several points.',
          ],
        },
        {
          title: 'How to use it on your route',
          bullets: [
            'Use it as a landmark to enter the Centro from outside the enclosure.',
            'Connect it with Plaza de la Aduana and nearby streets.',
            'From the Centro, climb the wall via the San Diego accesses.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'It is an open-air public monument; no admission required. Crowds are high, so walk calmly.',
          ],
          callout: 'This guide describes the landmark per public sources; it does not operate the site.',
        },
      ],
      faq: [
        { q: 'What is the Torre del Reloj?', a: 'One of the historic entrances to the walled enclosure and a Centro landmark of Cartagena.' },
        { q: 'Is there an admission?', a: 'It is an open-air public monument; no admission required.' },
        { q: 'How do I connect it with the wall?', a: 'From the Centro you climb via the San Diego accesses.' },
        { q: 'Is it inside the wall?', a: 'It marks one of the traditional accesses to the enclosure.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/plaza-santo-domingo',
    group: 'cerca',
    slug: 'plaza-santo-domingo',
    priority: 'P2',
    related: ['cerca/torre-del-reloj', 'cerca/plaza-san-diego', 'comer/restaurantes-cerca-murallas', 'rutas/medio-dia-centro-historico'],
    es: {
      metaTitle: 'Plaza de Santo Domingo en Cartagena: historia y cafés',
      metaDescription: 'La plaza, la iglesia y las opciones de descanso y comida en el recinto amurallado.',
      kicker: 'Cerca de las murallas',
      lead: 'La Plaza de Santo Domingo reúne historia, arquitectura y vida cotidiana. Es un punto de descanso y de conexión con el paseo de la muralla y con opciones de comida y café.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Historia y entorno',
          paragraphs: [
            'La plaza se organiza en torno a la iglesia de Santo Domingo y a esculturas emblemáticas. Es uno de los espacios más transitados del recinto, con sombra y asientos.',
          ],
        },
        {
          title: 'Cómo usarla en tu ruta',
          bullets: [
            'Úsala como descanso a la sombra entre tramos.',
            'Conéctala con el Centro y la Torre del Reloj.',
            'Aprovecha las opciones de café y comida del entorno.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los horarios de iglesia y comercios son propios; verifícalos. Esta guía no recomienda establecimientos concretos.',
          ],
          callout: 'La plaza es pública y transitada; cuida tus pertenencias.',
        },
      ],
      faq: [
        { q: '¿Qué es la Plaza de Santo Domingo?', a: 'Una plaza del recinto amurallado en torno a la iglesia de Santo Domingo, con historia y vida cotidiana.' },
        { q: '¿Hay dónde sentarse?', a: 'Sí, la plaza tiene sombra y asientos; es buen descanso entre tramos.' },
        { q: '¿Hay cafés y comida?', a: 'El entorno tiene opciones; verifica horarios y reservas según lo que busques.' },
        { q: '¿Cómo la conecto con la muralla?', a: 'Por calles del Centro que suben al paseo en varios puntos.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Plaza de Santo Domingo, Cartagena: history and cafés',
      metaDescription: 'The plaza, the church and rest and food options inside the walled enclosure.',
      kicker: 'Near the walls',
      lead: 'Plaza de Santo Domingo gathers history, architecture and daily life. It is a rest point and a connection with the wall walk and with food and coffee options.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'History and surroundings',
          paragraphs: [
            'The plaza is organised around the Santo Domingo church and emblematic sculptures. It is one of the busiest spaces in the enclosure, with shade and seating.',
          ],
        },
        {
          title: 'How to use it on your route',
          bullets: [
            'Use it as a shaded rest between stretches.',
            'Connect it with the Centro and the Torre del Reloj.',
            'Take advantage of the café and food options around.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Church and shop hours are their own; verify them. This guide does not recommend specific businesses.',
          ],
          callout: 'The plaza is public and busy; mind your belongings.',
        },
      ],
      faq: [
        { q: 'What is Plaza de Santo Domingo?', a: 'A plaza in the walled enclosure around the Santo Domingo church, with history and daily life.' },
        { q: 'Is there somewhere to sit?', a: 'Yes, the plaza has shade and seats; good rest between stretches.' },
        { q: 'Are there cafés and food?', a: 'The surroundings have options; verify hours and bookings per what you seek.' },
        { q: 'How do I connect it with the wall?', a: 'Via Centro streets that climb the walk at several points.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/museo-naval-del-caribe',
    group: 'cerca',
    slug: 'museo-naval-del-caribe',
    priority: 'P2',
    related: ['cerca/castillo-san-felipe', 'rutas/cartagena-en-dia-de-lluvia', 'historia/patrimonio-unesco', 'cerca/torre-del-reloj'],
    es: {
      metaTitle: 'Museo Naval del Caribe en Cartagena',
      metaDescription: 'Historia marítima y opción de visita bajo techo cercana al recinto amurallado.',
      kicker: 'Cerca de las murallas',
      lead: 'El Museo Naval del Caribe reúne la historia marítima de la región y es una alternativa de visita bajo techo, útil en días de lluvia o calor intenso.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Qué ver',
          paragraphs: [
            'El museo aborda la historia naval y la relación de Cartagena con el mar. Es una opción complementaria al paseo de la muralla, sobre todo si buscas una parada cultural cubierta.',
          ],
        },
        {
          title: 'Cómo incluirlo',
          bullets: [
            'Úsalo como alternativa bajo techo en días de lluvia.',
            'Combínalo con el Centro y la muralla en una ruta de medio día.',
            'Verifica horario y tarifa antes de ir.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los museos tienen horarios y tarifas propios; confírmalos el día de tu visita.',
          ],
          callout: 'Esta guía no administra el sitio; la información de apertura puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Qué es el Museo Naval del Caribe?', a: 'Un museo de historia marítima de la región, alternativa de visita bajo techo cercana al recinto.' },
        { q: '¿Por qué incluirlo?', a: 'Es una parada cultural cubierta, útil en días de lluvia o calor.' },
        { q: '¿Tiene entrada?', a: 'Los museos suelen tener tarifa propia; verifícala antes de ir.' },
        { q: '¿Está dentro de la muralla?', a: 'Queda en el entorno de Cartagena; confirma la ubicación exacta.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página y del museo.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Museo Naval del Caribe, Cartagena',
      metaDescription: 'Maritime history and an under-roof visit option near the walled enclosure.',
      kicker: 'Near the walls',
      lead: 'The Museo Naval del Caribe gathers the maritime history of the region and is an under-roof visit alternative, useful on rainy days or in intense heat.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What to see',
          paragraphs: [
            'The museum addresses naval history and Cartagena’s relationship with the sea. It is a complement to the wall walk, especially if you seek a covered cultural stop.',
          ],
        },
        {
          title: 'How to include it',
          bullets: [
            'Use it as an under-roof alternative on rainy days.',
            'Combine it with the Centro and the wall on a half-day route.',
            'Verify hours and fee before going.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Museums keep their own hours and fees; confirm them on your visit day.',
          ],
          callout: 'This guide does not operate the site; opening information can change.',
        },
      ],
      faq: [
        { q: 'What is the Museo Naval del Caribe?', a: 'A museum of the region’s maritime history, an under-roof visit alternative near the enclosure.' },
        { q: 'Why include it?', a: 'It is a covered cultural stop, useful on rainy days or in heat.' },
        { q: 'Is there an admission?', a: 'Museums usually have their own fee; verify before going.' },
        { q: 'Is it inside the wall?', a: 'It lies in the Cartagena surroundings; confirm the exact location.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page and the museum.’s own.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'cerca/castillo-san-felipe',
    group: 'cerca',
    slug: 'castillo-san-felipe',
    priority: 'P2',
    related: ['historia/patrimonio-unesco', 'rutas/un-dia-murallas-castillo', 'cerca/museo-naval-del-caribe', 'visita/entrada-gratis'],
    es: {
      metaTitle: 'Castillo San Felipe de Barajas: murallas y fortaleza',
      metaDescription: 'Cómo combinar la muralla gratuita con el Castillo San Felipe y lo que cada uno implica.',
      kicker: 'Cerca de las murallas',
      lead: 'El Castillo San Felipe de Barajas es una pieza decisiva del sistema de fortificaciones, pero queda fuera del tramo gratuito de la muralla. Conviene entender la diferencia antes de planear.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Fortaleza aparte',
          paragraphs: [
            'A diferencia del paseo libre sobre la muralla, el Castillo San Felipe es una fortaleza con entrada de pago propia. Completa la visita con una perspectiva terrestre de la defensa de la ciudad.',
          ],
        },
        {
          title: 'Cómo combinarlos',
          bullets: [
            'Dedica la muralla a la mañana y el Castillo a la tarde, o viceversa.',
            'No asumas que una entrada cubre ambos; son sitios distintos.',
            'Verifica horario y tarifa del Castillo antes de ir.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'El Castillo está fuera del recinto del paseo gratuito y requiere traslado. Planifica el tiempo y el acceso.',
          ],
          callout: 'Esta guía no administra el sitio; la información de apertura puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Qué es el Castillo San Felipe de Barajas?', a: 'Es la fortaleza principal del sistema de defensas de Cartagena, sobre el cerro de San Lázaro. Es un sitio aparte de la muralla que se camina por el recinto.' },
        { q: '¿Está incluido en la muralla gratuita?', a: 'No. El paseo libre va sobre la muralla del recinto; el Castillo tiene entrada y horario propios. Son visitas distintas.' },
        { q: '¿Por qué visitarlo además de la muralla?', a: 'Ofrece la perspectiva terrestre de la defensa, túneles y una vista amplia de la ciudad y la bahía desde el cerro.' },
        { q: '¿Cómo combinarlos en un día?', a: 'Dedica una parte del día a la muralla y otra al Castillo; no asumas que una entrada cubre ambos.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas enlazadas al final de la página y de la entidad que administra la fortaleza.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Castillo San Felipe de Barajas: walls and fortress',
      metaDescription: 'How to combine the free wall walk with Castillo San Felipe and what each one involves.',
      kicker: 'Near the walls',
      lead: 'Castillo San Felipe de Barajas is a decisive piece of the fortification system, but it lies outside the free stretch of the wall. It helps to understand the difference before planning.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'A separate fortress',
          paragraphs: [
            'Unlike the free walk on the wall, Castillo San Felipe is a fortress with its own paid admission. It completes the visit with a land-side perspective of the city’s defence.',
          ],
        },
        {
          title: 'How to combine them',
          bullets: [
            'Spend the wall in the morning and the fortress in the afternoon, or the reverse.',
            'Do not assume one ticket covers both; they are different sites.',
            'Verify the fortress hours and fee before going.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'The fortress is outside the free wall enclosure and requires transport. Plan your time and access.',
          ],
          callout: 'This guide does not operate the site; opening information can change.',
        },
      ],
      faq: [
        { q: 'What is Castillo San Felipe de Barajas?', a: 'The main fortress of Cartagena’s defence system, built on San Lázaro hill. It is a separate site from the wall you walk within the enclosure.' },
        { q: 'Is it included in the free wall walk?', a: 'No. The free walk is on the enclosure wall; the fortress has its own admission and hours. They are different visits.' },
        { q: 'Why visit it beyond the wall?', a: 'It offers the land-side defence perspective, tunnels and a wide view of the city and the bay from the hill.' },
        { q: 'How to combine them in one day?', a: 'Devote part of the day to the wall and part to the fortress; do not assume one ticket covers both.' },
        { q: 'Where do I get the information?', a: 'From public sources linked at the end of the page and from the entity that operates the fortress.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },

  // ===================== D. COMER (8) =====================
  {
    id: 'comer/restaurantes-cerca-murallas',
    group: 'comer',
    slug: 'restaurantes-cerca-murallas',
    priority: 'P1',
    related: ['comer/cafes-descanso-san-diego', 'comer/almuerzo-familiar-serrezuela', 'visita/puntos-de-acceso', 'cerca/plaza-san-diego'],
    es: {
      metaTitle: 'Dónde comer cerca de las Murallas de Cartagena',
      metaDescription: 'Zonas con opciones de comida junto al recinto amurallado y cómo elegir sin sorpresas.',
      kicker: 'Comer y descansar',
      lead: 'Alrededor del recinto amurallado hay zonas con restaurantes y cafés, sobre todo en San Diego y junto a las plazas del Centro. Esta guía no recomienda negocios concretos: describe las zonas y qué esperar.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Zonas con opciones',
          paragraphs: [
            'San Diego y los alrededores de las plazas del Centro concentran buena parte de la oferta de comida y bebida. Caminar unas cuadras te da variedad sin salir del recinto amurallado.',
          ],
        },
        {
          title: 'Cómo elegir',
          bullets: [
            'Revisa el menú y los precios antes de sentarte.',
            'Pregunta si el servicio está incluido en la cuenta.',
            'Reserva en temporada alta o fines de semana si puedes.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Cada negocio tiene horarios y precios propios; confírmalos el día de tu visita.',
          ],
          callout: 'Esta guía no administra ningún restaurante; la información puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Hay restaurantes dentro de la muralla?', a: 'Sí, el recinto amurallado tiene restaurantes y cafés, concentrados en San Diego y las plazas del Centro.' },
        { q: '¿Qué zona conviene para comer?', a: 'San Diego y el borde del Centro ofrecen variedad a poca distancia del paseo de la muralla.' },
        { q: '¿Los precios son fijos?', a: 'Cada negocio fija los suyos; revisa el menú y pregunta por el servicio antes de pedir.' },
        { q: '¿Conviene reservar?', a: 'En temporada alta y fines de semana sí, porque el recinto es pequeño y se llena.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de los propios establecimientos el día de tu visita.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Where to eat near the Walls of Cartagena',
      metaDescription: 'Areas with food options next to the walled enclosure and how to choose without surprises.',
      kicker: 'Eat & rest',
      lead: 'Around the walled enclosure there are areas with restaurants and cafés, especially in San Diego and by the Centro plazas. This guide does not recommend specific businesses: it describes the areas and what to expect.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Areas with options',
          paragraphs: [
            'San Diego and the surroundings of the Centro plazas hold much of the food and drink offer. Walking a few blocks gives you variety without leaving the walled enclosure.',
          ],
        },
        {
          title: 'How to choose',
          bullets: [
            'Check the menu and prices before you sit down.',
            'Ask whether service is included in the bill.',
            'Book ahead in high season or on weekends if you can.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Each business keeps its own hours and prices; confirm them on your visit day.',
          ],
          callout: 'This guide does not operate any restaurant; information can change.',
        },
      ],
      faq: [
        { q: 'Are there restaurants inside the wall?', a: 'Yes, the walled enclosure has restaurants and cafés, concentrated in San Diego and the Centro plazas.' },
        { q: 'Which area is good for eating?', a: 'San Diego and the Centro edge offer variety a short walk from the wall walk.' },
        { q: 'Are prices fixed?', a: 'Each business sets its own; check the menu and ask about service before ordering.' },
        { q: 'Is it worth booking?', a: 'In high season and on weekends, yes, because the enclosure is small and fills up.' },
        { q: 'Where do I get the information?', a: 'From public sources and from the establishments themselves on your visit day.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/cafes-descanso-san-diego',
    group: 'comer',
    slug: 'cafes-descanso-san-diego',
    priority: 'P2',
    related: ['comer/restaurantes-cerca-murallas', 'cerca/plaza-san-diego', 'visita/calor-lluvia-seguridad', 'visita/banos-sombra-agua'],
    es: {
      metaTitle: 'Cafés para descansar en San Diego, Cartagena',
      metaDescription: 'Dónde parar a tomar algo y reponer energía durante el paseo de la muralla.',
      kicker: 'Comer y descansar',
      lead: 'San Diego es uno de los barrios donde el paseo de la muralla se combina mejor con una pausa. Hay cafés y heladerías en sus calles y plazas para descansar del sol.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Dónde descansar',
          paragraphs: [
            'Las calles de San Diego y las plazas cercanas al recinto tienen locales para sentarse, tomar café, jugo o un helado. Son una pausa natural entre tramos de la muralla.',
          ],
        },
        {
          title: 'Cómo aprovechar la pausa',
          bullets: [
            'Úsala para reponer agua y sombra en el punto más caluroso del día.',
            'Combínala con la sombra de una plaza antes de subir de nuevo al paseo.',
            'Verifica horario del local antes de contar con él.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los horarios de cafés y heladerías son propios; confírmalos el día de tu visita.',
          ],
          callout: 'Esta guía no recomienda un local concreto; la disponibilidad puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Hay cafés cerca del paseo de la muralla?', a: 'Sí, sobre todo en San Diego y las plazas del Centro, a pocos pasos de los tramos del paseo.' },
        { q: '¿Dónde descansar del calor?', a: 'Las plazas de San Diego dan sombra y asientos; úsalas entre tramos.' },
        { q: '¿Los cafés abren temprano?', a: 'Cada local fija su horario; verifícalo el día de tu visita.' },
        { q: '¿Conviene llevar agua?', a: 'Sí, y usar los locales para reponer y sentarse.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de los propios establecimientos.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Cafés to rest in San Diego, Cartagena',
      metaDescription: 'Where to stop for a drink and recover during the wall walk.',
      kicker: 'Eat & rest',
      lead: 'San Diego is one of the neighbourhoods where the wall walk combines best with a pause. Its streets and plazas have cafés and ice-cream spots to rest from the sun.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Where to rest',
          paragraphs: [
            'The streets of San Diego and the plazas near the enclosure have places to sit, have coffee, juice or ice cream. They are a natural break between wall stretches.',
          ],
        },
        {
          title: 'How to use the pause',
          bullets: [
            'Use it to refill water and find shade at the hottest part of the day.',
            'Combine it with plaza shade before climbing back to the walk.',
            'Check the venue hours before relying on it.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Café and ice-cream hours are their own; confirm them on your visit day.',
          ],
          callout: 'This guide does not recommend a specific venue; availability can change.',
        },
      ],
      faq: [
        { q: 'Are there cafés near the wall walk?', a: 'Yes, especially in San Diego and the Centro plazas, a few steps from the wall stretches.' },
        { q: 'Where to rest from the heat?', a: 'San Diego plazas give shade and seats; use them between stretches.' },
        { q: 'Do cafés open early?', a: 'Each venue sets its hours; verify on your visit day.' },
        { q: 'Is it worth carrying water?', a: 'Yes, and use the venues to refill and sit down.' },
        { q: 'Where do I get the information?', a: 'From public sources and from the venues themselves.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/almuerzo-familiar-serrezuela',
    group: 'comer',
    slug: 'almuerzo-familiar-serrezuela',
    priority: 'P2',
    related: ['comer/restaurantes-cerca-murallas', 'cerca/la-serrezuela', 'visita/mejor-hora-atardecer', 'comer/cocina-caribeña-cartagena'],
    es: {
      metaTitle: 'Almuerzo familiar cerca de La Serrezuela',
      metaDescription: 'La zona de La Serrezuela como opción de almuerzo tras el paseo de la muralla.',
      kicker: 'Comer y descansar',
      lead: 'La Serrezuela, al borde del recinto amurallado, es un punto de referencia cerca de donde puedes buscar un almuerzo más tranquilo en familia, alejado del bullicio de las plazas más céntricas.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'La zona',
          paragraphs: [
            'La Serrezuela queda en el entorno de San Diego y aparece en la referencia de ubicación de las murallas. Es un punto de partida para buscar opciones de comida sin alejarse mucho del recinto.',
          ],
        },
        {
          title: 'Cómo planear el almuerzo',
          bullets: [
            'Sal del paseo hacia el mediodía, cuando el sol está más fuerte.',
            'Busca locales con menú y precio visible antes de entrar.',
            'Pregunta por opciones para niños si viajas en familia.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los negocios tienen horarios y precios propios; confírmalos el día de tu visita.',
          ],
          callout: 'Esta guía no administra ningún local; la información puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Dónde almorzar en familia cerca de la muralla?', a: 'La zona de La Serrezuela y San Diego ofrece opciones a corta distancia del paseo.' },
        { q: '¿La Serrezuela es un restaurante?', a: 'Es un punto de referencia del entorno; la guía no recomienda un local concreto.' },
        { q: '¿Hay opciones para niños?', a: 'Pregunta en cada local por menú infantil o porciones.' },
        { q: '¿Qué hora conviene para almorzar?', a: 'Al mediodía, para descansar del sol más fuerte.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de los establecimientos el día de tu visita.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Family lunch near La Serrezuela',
      metaDescription: 'The La Serrezuela area as a lunch option after the wall walk.',
      kicker: 'Eat & rest',
      lead: 'La Serrezuela, on the edge of the walled enclosure, is a reference point near where you can look for a calmer family lunch, away from the busiest central plazas.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'The area',
          paragraphs: [
            'La Serrezuela lies in the San Diego surroundings and appears in the wall location reference. It is a starting point to look for food options without going far from the enclosure.',
          ],
        },
        {
          title: 'How to plan lunch',
          bullets: [
            'Leave the walk around midday, when the sun is strongest.',
            'Look for venues with a visible menu and price before entering.',
            'Ask about children’s options if you travel as a family.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Businesses keep their own hours and prices; confirm them on your visit day.',
          ],
          callout: 'This guide does not operate any venue; information can change.',
        },
      ],
      faq: [
        { q: 'Where to have a family lunch near the wall?', a: 'The La Serrezuela and San Diego area offers options a short distance from the walk.' },
        { q: 'Is La Serrezuela a restaurant?', a: 'It is a reference point of the area; the guide does not recommend a specific venue.' },
        { q: 'Are there options for children?', a: 'Ask each venue about a children’s menu or portions.' },
        { q: 'What time is good for lunch?', a: 'Around midday, to rest from the strongest sun.' },
        { q: 'Where do I get the information?', a: 'From public sources and from the venues on your visit day.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/cocina-caribeña-cartagena',
    group: 'comer',
    slug: 'cocina-caribeña-cartagena',
    priority: 'P2',
    related: ['comer/comida-calle-cartagena', 'comer/mercados-comida-cartagena', 'comer/postres-dulces-cartagena', 'cerca/plaza-san-diego'],
    es: {
      metaTitle: 'Cocina caribeña de Cartagena: platos típicos',
      metaDescription: 'Platos costeños que puedes encontrar cerca del recinto amurallado, sin nombres de negocios.',
      kicker: 'Comer y descansar',
      lead: 'La cocina de Cartagena es caribeña y costeña: usa pescado, coco, plátano y maíz. Conocer los platos típicos ayuda a elegir qué pedir durante la visita, sin depender de recomendaciones de negocios concretos.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Platos que suelen aparecer',
          bullets: [
            'Arepa de huevo: arepa de maíz con huevo dentro, frita.',
            'Mojarra y pescados del Caribe, a menudo con arroz de coco.',
            'Ceviche y tiraditos a base de pescado fresco.',
            'Mote de queso: sopa espesa de queso y ñame.',
          ],
        },
        {
          title: 'Cómo probarlos',
          paragraphs: [
            'Estos platos son parte de la cocina regional y los encontrarás en la oferta de comida del Centro y San Diego. Pide lo que quieras probar y verifica el precio antes de ordenar.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Las recetas y precios cambian según el local; esta guía solo describe la cocina, no negocios.',
          ],
          callout: 'No inventamos precios ni recomendamos restaurantes concretos.',
        },
      ],
      faq: [
        { q: '¿Qué es la cocina caribeña de Cartagena?', a: 'Es la cocina costeña del Caribe colombiano, basada en pescado, coco, plátano y maíz.' },
        { q: '¿Qué platos típicos hay?', a: 'Arepa de huevo, mojarra con arroz de coco, ceviche, mote de queso y dulces de coco, entre otros.' },
        { q: '¿Dónde probarlos cerca de la muralla?', a: 'En la oferta de comida del Centro y San Diego; elige por menú y precio.' },
        { q: '¿Son platos caros?', a: 'Depende del local; verifica el precio antes de ordenar.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas sobre la cocina regional de Cartagena.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Cartagena Caribbean cuisine: typical dishes',
      metaDescription: 'Coastal dishes you can find near the walled enclosure, without naming businesses.',
      kicker: 'Eat & rest',
      lead: 'Cartagena’s cuisine is Caribbean and coastal: it uses fish, coconut, plantain and corn. Knowing the typical dishes helps you choose what to order during the visit, without relying on specific business tips.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Dishes you often find',
          bullets: [
            'Arepa de huevo: corn arepa with an egg inside, fried.',
            'Mojarra and Caribbean fish, often with coconut rice.',
            'Ceviche and tiraditos based on fresh fish.',
            'Mote de queso: a thick cheese and yam soup.',
          ],
        },
        {
          title: 'How to try them',
          paragraphs: [
            'These dishes are part of the regional cuisine and appear in the Centro and San Diego food offer. Order what you want to try and verify the price before ordering.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Recipes and prices change by venue; this guide only describes the cuisine, not businesses.',
          ],
          callout: 'We do not invent prices or recommend specific restaurants.',
        },
      ],
      faq: [
        { q: 'What is Cartagena Caribbean cuisine?', a: 'It is the coastal cuisine of the Colombian Caribbean, based on fish, coconut, plantain and corn.' },
        { q: 'What typical dishes are there?', a: 'Arepa de huevo, mojarra with coconut rice, ceviche, mote de queso and coconut sweets, among others.' },
        { q: 'Where to try them near the wall?', a: 'In the Centro and San Diego food offer; choose by menu and price.' },
        { q: 'Are they expensive dishes?', a: 'It depends on the venue; verify the price before ordering.' },
        { q: 'Where do I get the information?', a: 'From public sources about Cartagena’s regional cuisine.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/comida-calle-cartagena',
    group: 'comer',
    slug: 'comida-calle-cartagena',
    priority: 'P2',
    related: ['comer/cocina-caribeña-cartagena', 'comer/mercados-comida-cartagena', 'visita/calor-lluvia-seguridad', 'cerca/torre-del-reloj'],
    es: {
      metaTitle: 'Comida callejera en Cartagena cerca de las murallas',
      metaDescription: 'Qué esperar de los puestos callejeros y cómo comer con precaución.',
      kicker: 'Comer y descansar',
      lead: 'En el entorno del recinto amurallado y en plazas como la de los Coches hay puestos y carritos de comida. Son una opción rápida, pero conviene algunas precauciones.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Qué suele haber',
          bullets: [
            'Arepas, empanadas y fruta cortada.',
            'Bebidas frescas y coco.',
            'Carritos cerca de las plazas del Centro.',
          ],
        },
        {
          title: 'Cómo comer con precaución',
          bullets: [
            'Elige puestos con movimiento de gente y comida reciente.',
            'Bebe agua embotellada o bebidas selladas.',
            'Lávate las manos o usa gel antes de comer.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'La oferta y los precios de la calle son variables; confírmalos en el momento.',
          ],
          callout: 'Esta guía no recomienda puestos concretos.',
        },
      ],
      faq: [
        { q: '¿Hay comida callejera cerca de la muralla?', a: 'Sí, sobre todo en plazas como la de los Coches y el entorno del Centro.' },
        { q: '¿Es seguro comer en la calle?', a: 'Elige puestos concurridos y con comida reciente, y bebe agua sellada.' },
        { q: '¿Qué suelen vender?', a: 'Arepas, empanadas, fruta, bebidas frescas y coco.' },
        { q: '¿Cuánto cuesta?', a: 'Varía por puesto y producto; confírmalo en el momento.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de tu propia observación en el lugar.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Street food in Cartagena near the walls',
      metaDescription: 'What to expect from street stalls and how to eat with caution.',
      kicker: 'Eat & rest',
      lead: 'Around the walled enclosure and in plazas like Los Coches there are food stalls and carts. They are a quick option, but some precautions help.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What you usually find',
          bullets: [
            'Arepas, empanadas and cut fruit.',
            'Fresh drinks and coconut.',
            'Carts near the Centro plazas.',
          ],
        },
        {
          title: 'How to eat with caution',
          bullets: [
            'Pick stalls with a crowd and fresh food.',
            'Drink bottled or sealed drinks.',
            'Wash your hands or use gel before eating.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Street offer and prices vary; confirm them on the spot.',
          ],
          callout: 'This guide does not recommend specific stalls.',
        },
      ],
      faq: [
        { q: 'Is there street food near the wall?', a: 'Yes, especially in plazas like Los Coches and the Centro surroundings.' },
        { q: 'Is it safe to eat on the street?', a: 'Choose busy stalls with fresh food, and drink sealed water.' },
        { q: 'What do they usually sell?', a: 'Arepas, empanadas, fruit, fresh drinks and coconut.' },
        { q: 'How much does it cost?', a: 'It varies by stall and item; confirm on the spot.' },
        { q: 'Where do I get the information?', a: 'From public sources and your own observation on site.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/bebidas-refrescantes-cartagena',
    group: 'comer',
    slug: 'bebidas-refrescantes-cartagena',
    priority: 'P2',
    related: ['comer/comida-calle-cartagena', 'visita/calor-lluvia-seguridad', 'comer/cocina-caribeña-cartagena', 'visita/banos-sombra-agua'],
    es: {
      metaTitle: 'Bebidas refrescantes en Cartagena: qué tomar',
      metaDescription: 'Opciones de bebidas para el calor del Caribe durante el paseo de la muralla.',
      kicker: 'Comer y descansar',
      lead: 'En Cartagena el calor es parte de la visita. Conocer las bebidas típicas ayuda a mantenerte hidratado mientras caminas la muralla.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Bebidas típicas',
          bullets: [
            'Agua de coco y coco fresco.',
            'Jugos de frutas tropicales.',
            'Limonada de coco, una mezcla dulce y refrescante.',
          ],
        },
        {
          title: 'Cómo mantenerte hidratado',
          bullets: [
            'Bebe con frecuencia, no solo cuando tengas sed.',
            'Prefiere bebidas selladas o recién preparadas.',
            'Combina la bebida con sombra y descanso.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los precios y la oferta cambian según el local; confírmalos al comprar.',
          ],
          callout: 'Esta guía describe bebidas típicas, no negocios concretos.',
        },
      ],
      faq: [
        { q: '¿Qué beber en Cartagena para el calor?', a: 'Agua de coco, jugos tropicales y limonada de coco son opciones típicas y refrescantes.' },
        { q: '¿El agua del grifo es potable?', a: 'Se recomienda beber agua embotellada o sellada durante la visita.' },
        { q: '¿Dónde comprar bebidas?', a: 'En puestos y locales del Centro y San Diego.' },
        { q: '¿Cuánto cuestan?', a: 'Varía por local y producto; confírmalo al comprar.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas sobre la gastronomía de Cartagena.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Refreshing drinks in Cartagena: what to drink',
      metaDescription: 'Drink options for the Caribbean heat during the wall walk.',
      kicker: 'Eat & rest',
      lead: 'In Cartagena the heat is part of the visit. Knowing the typical drinks helps you stay hydrated while walking the wall.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Typical drinks',
          bullets: [
            'Coconut water and fresh coconut.',
            'Tropical fruit juices.',
            'Limonada de coco, a sweet and refreshing mix.',
          ],
        },
        {
          title: 'How to stay hydrated',
          bullets: [
            'Drink often, not only when you feel thirsty.',
            'Prefer sealed or freshly prepared drinks.',
            'Pair drinks with shade and rest.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Prices and offer change by venue; confirm them when buying.',
          ],
          callout: 'This guide describes typical drinks, not specific businesses.',
        },
      ],
      faq: [
        { q: 'What to drink in Cartagena for the heat?', a: 'Coconut water, tropical juices and limonada de coco are typical and refreshing options.' },
        { q: 'Is tap water drinkable?', a: 'It is recommended to drink bottled or sealed water during the visit.' },
        { q: 'Where to buy drinks?', a: 'At stalls and venues in the Centro and San Diego.' },
        { q: 'How much do they cost?', a: 'It varies by venue and item; confirm when buying.' },
        { q: 'Where do I get the information?', a: 'From public sources about Cartagena’s food culture.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/postres-dulces-cartagena',
    group: 'comer',
    slug: 'postres-dulces-cartagena',
    priority: 'P2',
    related: ['comer/cocina-caribeña-cartagena', 'comer/bebidas-refrescantes-cartagena', 'comer/mercados-comida-cartagena', 'cerca/plaza-santo-domingo'],
    es: {
      metaTitle: 'Postres y dulces típicos de Cartagena',
      metaDescription: 'Dulces de coco y cocina dulce del Caribe que puedes probar cerca del recinto.',
      kicker: 'Comer y descansar',
      lead: 'La repostería de Cartagena gira en torno al coco y el azúcar de caña. Conocer estos dulces ayuda a cerrar la visita con algo típico, sin recomendar negocios concretos.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Dulces típicos',
          bullets: [
            'Cocadas y alegrías de coco.',
            'Dulces de coco en variedad.',
            'Postres con frutas tropicales.',
          ],
        },
        {
          title: 'Dónde probarlos',
          paragraphs: [
            'Los encontrarás en la oferta de dulces del Centro y San Diego. Elige por presentación y precio visible.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Los precios y la oferta cambian; esta guía solo describe los dulces típicos.',
          ],
          callout: 'No inventamos precios ni recomendamos negocios concretos.',
        },
      ],
      faq: [
        { q: '¿Qué dulces típicos hay en Cartagena?', a: 'Cocadas, alegrías de coco y dulces a base de coco y fruta tropical.' },
        { q: '¿Dónde probarlos cerca de la muralla?', a: 'En la oferta de dulces del Centro y San Diego.' },
        { q: '¿Son muy dulces?', a: 'Suelen llevar coco y azúcar; elige según tu gusto.' },
        { q: '¿Cuánto cuestan?', a: 'Varía por local y producto; confírmalo al comprar.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas sobre la gastronomía de Cartagena.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Typical desserts and sweets of Cartagena',
      metaDescription: 'Coconut sweets and Caribbean desserts you can try near the enclosure.',
      kicker: 'Eat & rest',
      lead: 'Cartagena’s baking centres on coconut and cane sugar. Knowing these sweets helps close the visit with something typical, without recommending specific businesses.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Typical sweets',
          bullets: [
            'Cocadas and alegrías de coco.',
            'Coconut-based sweets in variety.',
            'Desserts with tropical fruit.',
          ],
        },
        {
          title: 'Where to try them',
          paragraphs: [
            'You will find them in the Centro and San Diego sweet offer. Choose by visible presentation and price.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Prices and offer change; this guide only describes the typical sweets.',
          ],
          callout: 'We do not invent prices or recommend specific businesses.',
        },
      ],
      faq: [
        { q: 'What typical sweets are there in Cartagena?', a: 'Cocadas, alegrías de coco and sweets based on coconut and tropical fruit.' },
        { q: 'Where to try them near the wall?', a: 'In the Centro and San Diego sweet offer.' },
        { q: 'Are they very sweet?', a: 'They usually have coconut and sugar; choose to your taste.' },
        { q: 'How much do they cost?', a: 'It varies by venue and item; confirm when buying.' },
        { q: 'Where do I get the information?', a: 'From public sources about Cartagena’s food culture.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'comer/mercados-comida-cartagena',
    group: 'comer',
    slug: 'mercados-comida-cartagena',
    priority: 'P2',
    related: ['comer/comida-calle-cartagena', 'comer/cocina-caribeña-cartagena', 'cerca/torre-del-reloj', 'comer/bebidas-refrescantes-cartagena'],
    es: {
      metaTitle: 'Mercados y plazas de comida en Cartagena',
      metaDescription: 'Dónde encontrar mercados y zonas de comida cerca del recinto amurallado.',
      kicker: 'Comer y descansar',
      lead: 'Cartagena tiene mercados y plazas de comida donde la oferta es más local y variada. Quedan a corta distancia en transporte del recinto amurallado; úsalos como excursión de comida.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Qué son',
          paragraphs: [
            'Los mercados concentran fruta, pescado y comida preparada a precios locales. Son una forma de ver la cocina de Cartagena fuera de las plazas del turismo.',
          ],
        },
        {
          title: 'Cómo visitarlos',
          bullets: [
            'Ve temprano, cuando la oferta está completa.',
            'Pregunta precios antes de comprar.',
            'Combínalos con un trayecto corto en transporte desde el recinto.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'La ubicación y los precios de los mercados cambian; confírmalos el día de tu visita.',
          ],
          callout: 'Esta guía no recomienda un mercado concreto.',
        },
      ],
      faq: [
        { q: '¿Hay mercados de comida cerca de la muralla?', a: 'Hay mercados a corta distancia en transporte; son una excursión de comida fuera del recinto.' },
        { q: '¿Qué se compra en ellos?', a: 'Fruta, pescado y comida preparada a precios locales.' },
        { q: '¿Son baratos?', a: 'Suelen tener precios locales; pregunta antes de comprar.' },
        { q: '¿Qué hora conviene?', a: 'Temprano, cuando la oferta está completa.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de tu observación en el lugar.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Food markets and squares in Cartagena',
      metaDescription: 'Where to find markets and food areas near the walled enclosure.',
      kicker: 'Eat & rest',
      lead: 'Cartagena has markets and food squares where the offer is more local and varied. They are a short transport ride from the walled enclosure; use them as a food outing.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'What they are',
          paragraphs: [
            'Markets gather fruit, fish and prepared food at local prices. They are a way to see Cartagena’s cuisine away from the tourist plazas.',
          ],
        },
        {
          title: 'How to visit them',
          bullets: [
            'Go early, when the offer is full.',
            'Ask prices before buying.',
            'Combine them with a short transport ride from the enclosure.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Market location and prices change; confirm them on your visit day.',
          ],
          callout: 'This guide does not recommend a specific market.',
        },
      ],
      faq: [
        { q: 'Are there food markets near the wall?', a: 'There are markets a short transport ride away; they are a food outing outside the enclosure.' },
        { q: 'What is bought there?', a: 'Fruit, fish and prepared food at local prices.' },
        { q: 'Are they cheap?', a: 'They usually have local prices; ask before buying.' },
        { q: 'What time is good?', a: 'Early, when the offer is full.' },
        { q: 'Where do I get the information?', a: 'From public sources and your observation on site.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },

  // ===================== E. RUTAS (6) =====================
  {
    id: 'rutas/murallas-30-minutos',
    group: 'rutas',
    slug: 'murallas-30-minutos',
    priority: 'P1',
    related: ['visita/cuanto-dura', 'visita/puntos-de-acceso', 'comer/cafes-descanso-san-diego', 'cerca/plaza-san-diego'],
    es: {
      metaTitle: 'Ruta de las Murallas en 30 minutos',
      metaDescription: 'Un recorrido corto por la muralla de Cartagena si tienes poco tiempo.',
      kicker: 'Rutas y duración',
      lead: 'Si dispones de media hora, puedes subir a un tramo del paseo, caminar entre baluartes y bajar por una plaza cercana. Es la forma más rápida de entender la muralla sin comprometerte a un recorrido largo.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'El recorrido',
          bullets: [
            'Sube por una rampa en San Diego y camina el paseo elevado.',
            'Recorre un baluarte y una garita como referencia.',
            'Baja hacia una plaza del Centro para cerrar el tramo.',
          ],
        },
        {
          title: 'Cómo aprovecharlo',
          paragraphs: [
            'Usa la media hora para ver la bahía y el contraste entre el paseo y las calles. No intentes cubrir todo el recinto: la muralla se disfruta por tramos.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica el acceso y la sombra del momento; el sol fuerte acorta los paseos.',
          ],
          callout: 'Esta guía no administra el sitio; los accesos pueden cambiar.',
        },
      ],
      faq: [
        { q: '¿Se puede recorrer la muralla en 30 minutos?', a: 'Sí, subiendo y bajando por un tramo de San Diego puedes caminar el paseo elevado y ver baluartes en media hora.' },
        { q: '¿Qué alcanzo a ver en tan poco tiempo?', a: 'Un tramo del paseo, un baluarte, la bahía y el contraste con las calles del Centro.' },
        { q: '¿Vale la pena si tengo prisa?', a: 'Sí, es la forma más rápida de entender la muralla sin un recorrido largo.' },
        { q: '¿Necesito guía?', a: 'No; la muralla es un paseo señalizado, aunque una guía amplía el contexto histórico.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de la propia señalización del recinto.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Walls of Cartagena in 30 minutes',
      metaDescription: 'A short walk on the Cartagena wall if you have little time.',
      kicker: 'Routes & duration',
      lead: 'If you have half an hour, you can climb a wall stretch, walk between bastions and descend by a nearby plaza. It is the quickest way to understand the wall without committing to a long route.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'The route',
          bullets: [
            'Climb a ramp in San Diego and walk the elevated walk.',
            'Cover a bastion and a sentry box as reference.',
            'Descend towards a Centro plaza to close the stretch.',
          ],
        },
        {
          title: 'How to make the most of it',
          paragraphs: [
            'Use the half hour to see the bay and the contrast between the walk and the streets. Do not try to cover the whole enclosure: the wall is enjoyed in stretches.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Check the access and the shade of the moment; strong sun shortens walks.',
          ],
          callout: 'This guide does not operate the site; accesses can change.',
        },
      ],
      faq: [
        { q: 'Can you walk the wall in 30 minutes?', a: 'Yes, by climbing and descending a San Diego stretch you can walk the elevated walk and see bastions in half an hour.' },
        { q: 'What can I see in so little time?', a: 'A wall stretch, a bastion, the bay and the contrast with the Centro streets.' },
        { q: 'Is it worth it if I am in a rush?', a: 'Yes, it is the quickest way to understand the wall without a long route.' },
        { q: 'Do I need a guide?', a: 'No; the wall is a signposted walk, though a guide broadens the history.' },
        { q: 'Where do I get the information?', a: 'From public sources and the enclosure’s own signage.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'rutas/san-diego-las-bovedas-1-hora',
    group: 'rutas',
    slug: 'san-diego-las-bovedas-1-hora',
    priority: 'P1',
    related: ['visita/cuanto-dura', 'cerca/las-bovedas', 'cerca/plaza-san-diego', 'rutas/murallas-30-minutos'],
    es: {
      metaTitle: 'Ruta San Diego a Las Bóvedas en 1 hora',
      metaDescription: 'Un recorrido de una hora entre San Diego y Las Bóvedas por la muralla.',
      kicker: 'Rutas y duración',
      lead: 'Esta ruta conecta el barrio de San Diego con Las Bóvedas siguiendo tramos del paseo de la muralla. En una hora ves baluartes, el borde de la bahía y uno de los puntos más fotografiados del recinto.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'El recorrido',
          bullets: [
            'Arranca en San Diego y sube al paseo elevado.',
            'Sigue el borde defensivo hacia Las Bóvedas.',
            'Baja en Las Bóvedas para ver los antiguos almacenes.',
          ],
        },
        {
          title: 'Cómo dosificarlo',
          paragraphs: [
            'Haz pausas en la sombra de las plazas. Una hora es suficiente para el tramo sin prisa, pero el calor puede reducir el ritmo.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica el acceso y el estado del tramo el día de tu visita.',
          ],
          callout: 'Esta guía no administra el sitio; los accesos pueden cambiar.',
        },
      ],
      faq: [
        { q: '¿Se puede ir de San Diego a Las Bóvedas por la muralla?', a: 'Sí, siguiendo tramos del paseo elevado que conectan ambos puntos a lo largo de la bahía.' },
        { q: '¿Cuánto dura la ruta?', a: 'Una hora a paso tranquilo, con pausas en la sombra.' },
        { q: '¿Qué se ve en el camino?', a: 'Baluartes, el borde de la bahía y Las Bóvedas al final.' },
        { q: '¿Es apta para principiantes?', a: 'Sí, es un tramo continuo y señalizado, aunque tiene desniveles.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de la señalización del recinto.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'San Diego to Las Bóvedas route in 1 hour',
      metaDescription: 'A one-hour walk between San Diego and Las Bóvedas along the wall.',
      kicker: 'Routes & duration',
      lead: 'This route links the San Diego neighbourhood with Las Bóvedas following wall stretches. In an hour you see bastions, the bay edge and one of the most photographed spots of the enclosure.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'The route',
          bullets: [
            'Start in San Diego and climb the elevated walk.',
            'Follow the defensive edge towards Las Bóvedas.',
            'Descend at Las Bóvedas to see the old vaults.',
          ],
        },
        {
          title: 'How to pace it',
          paragraphs: [
            'Rest in the shade of plazas. An hour is enough for the stretch without rush, but heat can slow the pace.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Check the access and the state of the stretch on your visit day.',
          ],
          callout: 'This guide does not operate the site; accesses can change.',
        },
      ],
      faq: [
        { q: 'Can you go from San Diego to Las Bóvedas on the wall?', a: 'Yes, following elevated walk stretches that connect both points along the bay.' },
        { q: 'How long is the route?', a: 'One hour at a calm pace, with shade pauses.' },
        { q: 'What do you see on the way?', a: 'Bastions, the bay edge and Las Bóvedas at the end.' },
        { q: 'Is it good for beginners?', a: 'Yes, it is a continuous and signposted stretch, though it has slopes.' },
        { q: 'Where do I get the information?', a: 'From public sources and the enclosure’s signage.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'rutas/medio-dia-centro-historico',
    group: 'rutas',
    slug: 'medio-dia-centro-historico',
    priority: 'P1',
    related: ['visita/cuanto-dura', 'rutas/san-diego-las-bovedas-1-hora', 'cerca/plaza-san-diego', 'cerca/torre-del-reloj'],
    es: {
      metaTitle: 'Medio día en el Centro Histórico y las Murallas',
      metaDescription: 'Cómo repartir una mañana entre la muralla y las plazas del Centro.',
      kicker: 'Rutas y duración',
      lead: 'Una mañana de medio día permite combinar la muralla con las plazas del Centro Histórico. La clave es salir temprano, usar la sombra y no pretender cubrir todo el recinto.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Cómo repartir el tiempo',
          bullets: [
            'Empieza por la muralla en la franja más fresca de la mañana.',
            'Baja a las plazas del Centro para descansar y comer.',
            'Reserva tiempo para Las Bóvedas o San Diego a tu ritmo.',
          ],
        },
        {
          title: 'Cómo no agobiarse',
          paragraphs: [
            'El recinto es grande y con desniveles. Mejor pocos tramos bien disfrutados que recorrerlo entero bajo el sol.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica accesos y servicios el día de tu visita.',
          ],
          callout: 'Esta guía no administra el sitio; la información puede cambiar.',
        },
      ],
      faq: [
        { q: '¿Caben la muralla y el Centro en medio día?', a: 'Sí, si sales temprano y eliges pocos tramos bien disfrutados en lugar de cubrir todo.' },
        { q: '¿Qué orden conviene?', a: 'Muralla en la mañana fresca, plazas del Centro al mediodía para descansar.' },
        { q: '¿Hay dónde comer en medio día?', a: 'Sí, en las plazas del Centro y San Diego; verifica horarios.' },
        { q: '¿Cuánto tiempo necesito mínimo?', a: 'Una mañana de unas tres o cuatro horas para una visita tranquila.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de la señalización del recinto.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Half day in the Historic Centre and the Walls',
      metaDescription: 'How to split a morning between the wall and the Centro plazas.',
      kicker: 'Routes & duration',
      lead: 'A half-day morning lets you combine the wall with the Historic Centre plazas. The key is to start early, use the shade and not try to cover the whole enclosure.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'How to split the time',
          bullets: [
            'Start with the wall in the coolest morning window.',
            'Descend to the Centro plazas to rest and eat.',
            'Save time for Las Bóvedas or San Diego at your pace.',
          ],
        },
        {
          title: 'How not to overdo it',
          paragraphs: [
            'The enclosure is large and has slopes. A few stretches well enjoyed beat crossing it all under the sun.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Check accesses and services on your visit day.',
          ],
          callout: 'This guide does not operate the site; information can change.',
        },
      ],
      faq: [
        { q: 'Do the wall and the Centro fit in half a day?', a: 'Yes, if you start early and choose a few stretches well enjoyed rather than covering everything.' },
        { q: 'What order works?', a: 'Wall in the cool morning, Centro plazas at midday to rest.' },
        { q: 'Is there somewhere to eat at midday?', a: 'Yes, in the Centro and San Diego plazas; verify hours.' },
        { q: 'What is the minimum time I need?', a: 'A morning of about three or four hours for a calm visit.' },
        { q: 'Where do I get the information?', a: 'From public sources and the enclosure’s signage.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'rutas/un-dia-murallas-castillo',
    group: 'rutas',
    slug: 'un-dia-murallas-castillo',
    priority: 'P2',
    related: ['cerca/castillo-san-felipe', 'rutas/medio-dia-centro-historico', 'historia/patrimonio-unesco', 'visita/cuanto-dura'],
    es: {
      metaTitle: 'Un día con las Murallas y el Castillo San Felipe',
      metaDescription: 'Cómo organizar un día completo entre la muralla gratuita y la fortaleza.',
      kicker: 'Rutas y duración',
      lead: 'Un día completo permite combinar la muralla que se camina gratis con el Castillo San Felipe, que es un sitio aparte con entrada propia. La clave es separar los dos y no asumir que una entrada cubre ambos.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Cómo organizarlo',
          bullets: [
            'Dedica la mañana a la muralla, en la franja más fresca.',
            'Reserva la tarde para el Castillo San Felipe y su entorno.',
            'Deja margen para transporte entre ambos puntos.',
          ],
        },
        {
          title: 'Lo que implica cada uno',
          paragraphs: [
            'La muralla es un paseo libre sobre el recinto; el Castillo es una fortaleza con entrada de pago. Planearlos por separado evita confusiones.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica horario y tarifa del Castillo antes de ir; la muralla es libre pero sus accesos pueden variar.',
          ],
          callout: 'Esta guía no administra ninguno de los dos sitios.',
        },
      ],
      faq: [
        { q: '¿Se pueden ver la muralla y el Castillo en un día?', a: 'Sí, dedicando la muralla a la mañana y el Castillo a la tarde, con margen para el traslado.' },
        { q: '¿La entrada de uno cubre al otro?', a: 'No; son sitios distintos con entradas distintas.' },
        { q: '¿El Castillo está en la muralla?', a: 'No, está fuera del tramo gratuito del recinto y requiere traslado.' },
        { q: '¿Cuánto tiempo necesito?', a: 'Un día completo, con una mañana para la muralla y una tarde para el Castillo.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de la entidad que administra el Castillo.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'A day with the Walls and Castillo San Felipe',
      metaDescription: 'How to organise a full day between the free wall and the fortress.',
      kicker: 'Routes & duration',
      lead: 'A full day lets you combine the free wall walk with Castillo San Felipe, which is a separate site with its own admission. The key is to separate the two and not assume one ticket covers both.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'How to organise it',
          bullets: [
            'Spend the morning on the wall, in the coolest window.',
            'Save the afternoon for Castillo San Felipe and its surroundings.',
            'Leave margin for transport between the two points.',
          ],
        },
        {
          title: 'What each one involves',
          paragraphs: [
            'The wall is a free walk on the enclosure; the fortress is a paid site. Planning them separately avoids confusion.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Verify the fortress hours and fee before going; the wall is free but its accesses can vary.',
          ],
          callout: 'This guide does not operate either site.',
        },
      ],
      faq: [
        { q: 'Can you see the wall and the fortress in one day?', a: 'Yes, devoting the wall to the morning and the fortress to the afternoon, with margin for transport.' },
        { q: 'Does one ticket cover the other?', a: 'No; they are different sites with different admissions.' },
        { q: 'Is the fortress on the wall?', a: 'No, it lies outside the free enclosure stretch and requires transport.' },
        { q: 'How much time do I need?', a: 'A full day, with a morning for the wall and an afternoon for the fortress.' },
        { q: 'Where do I get the information?', a: 'From public sources and from the entity that operates the fortress.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'rutas/fotografia-atardecer',
    group: 'rutas',
    slug: 'fotografia-atardecer',
    priority: 'P1',
    related: ['visita/mejor-hora-atardecer', 'cerca/las-bovedas', 'rutas/san-diego-las-bovedas-1-hora', 'cerca/plaza-santo-domingo'],
    es: {
      metaTitle: 'Fotografía y atardecer en las Murallas',
      metaDescription: 'Dónde y cuándo fotografiar la muralla con mejor luz.',
      kicker: 'Rutas y duración',
      lead: 'La luz del final del día es la más buscada para fotografiar la muralla. Esta guía indica tramos y orientación sin revelar trucos de edición ni prometer resultados.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Cuándo',
          bullets: [
            'El atardecer da luz cálida y sombras largas sobre el paseo.',
            'Llega con antelación para ubicar el encuadre.',
            'El horario cambia según la época del año; verifícalo.',
          ],
        },
        {
          title: 'Dónde',
          paragraphs: [
            'Los tramos que miran a la bahía y Las Bóvedas son puntos habituales. Elige según la orientación del sol de ese día.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'El acceso al paseo puede tener horario; verifícalo el día de tu visita.',
          ],
          callout: 'Esta guía no garantiza acceso ni horario de cierre.',
        },
      ],
      faq: [
        { q: '¿Cuál es la mejor hora para fotografiar la muralla?', a: 'El atardecer, por la luz cálida; pero el horario cambia según la época del año.' },
        { q: '¿Dónde tomar buenas fotos?', a: 'Los tramos junto a la bahía y Las Bóvedas son puntos habituales.' },
        { q: '¿Hay que pagar para fotografiar?', a: 'El paseo de la muralla es libre; confirma accesos y horarios.' },
        { q: '¿El paseo cierra al anochecer?', a: 'El acceso puede tener horario; verifícalo el día de tu visita.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de la señalización del recinto.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Photography and sunset on the Walls',
      metaDescription: 'Where and when to photograph the wall with the best light.',
      kicker: 'Routes & duration',
      lead: 'Late-day light is the most sought after for photographing the wall. This guide points out stretches and orientation without revealing editing tricks or promising results.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'When',
          bullets: [
            'Sunset gives warm light and long shadows on the walk.',
            'Arrive early to place your frame.',
            'The time changes by season; verify it.',
          ],
        },
        {
          title: 'Where',
          paragraphs: [
            'The stretches facing the bay and Las Bóvedas are usual spots. Choose by the sun orientation of that day.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Access to the walk may have hours; verify it on your visit day.',
          ],
          callout: 'This guide does not guarantee access or closing time.',
        },
      ],
      faq: [
        { q: 'What is the best time to photograph the wall?', a: 'Sunset, for the warm light; but the time changes by season.' },
        { q: 'Where to take good photos?', a: 'The stretches by the bay and Las Bóvedas are usual spots.' },
        { q: 'Do you pay to photograph?', a: 'The wall walk is free; confirm accesses and hours.' },
        { q: 'Does the walk close at dusk?', a: 'Access may have hours; verify on your visit day.' },
        { q: 'Where do I get the information?', a: 'From public sources and the enclosure’s signage.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
  {
    id: 'rutas/cartagena-en-dia-de-lluvia',
    group: 'rutas',
    slug: 'cartagena-en-dia-de-lluvia',
    priority: 'P2',
    related: ['visita/calor-lluvia-seguridad', 'cerca/museo-naval-del-caribe', 'comer/cafes-descanso-san-diego', 'historia/patrimonio-unesco'],
    es: {
      metaTitle: 'Cartagena en un día de lluvia: qué hacer',
      metaDescription: 'Opciones bajo techo cerca de las murallas si llueve.',
      kicker: 'Rutas y duración',
      lead: 'Cartagena tiene temporadas lluviosas y chubascos que pueden interrumpir el paseo al aire libre. Esta guía reúne opciones bajo techo cercanas al recinto para reorganizar el día.',
      updated: UPDATED_ES,
      sections: [
        {
          title: 'Opciones bajo techo',
          bullets: [
            'Museos del entorno, como el Museo Naval del Caribe.',
            'Cafés y locales del Centro para esperar el chubasco.',
            'Galerías y plazas cubiertas del recinto.',
          ],
        },
        {
          title: 'Cómo reorganizar el día',
          paragraphs: [
            'Mueve la muralla a las franjas sin lluvia y usa los intervalos secos para caminar. El clima caribeño suele alternar sol y lluvia en el mismo día.',
          ],
        },
        {
          title: 'Antes de ir',
          paragraphs: [
            'Verifica horarios de museos y locales; pueden cambiar.',
          ],
          callout: 'Esta guía no administra los sitios bajo techo.',
        },
      ],
      faq: [
        { q: '¿Qué hacer en Cartagena si llueve?', a: 'Museos, cafés y plazas cubiertas del entorno del recinto son opciones bajo techo.' },
        { q: '¿La lluvia arruina la visita?', a: 'No del todo: el clima caribeño suele alternar sol y lluvia; usa los intervalos secos.' },
        { q: '¿Hay museos cerca de la muralla?', a: 'Sí, como el Museo Naval del Caribe en el entorno de Cartagena.' },
        { q: '¿La muralla se cierra con lluvia?', a: 'El acceso puede variar; verifícalo el día de tu visita.' },
        { q: '¿De dónde saco la información?', a: 'De fuentes públicas y de la señalización del recinto.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
    en: {
      metaTitle: 'Cartagena on a rainy day: what to do',
      metaDescription: 'Under-roof options near the walls if it rains.',
      kicker: 'Routes & duration',
      lead: 'Cartagena has rainy seasons and showers that can interrupt the open-air walk. This guide gathers under-roof options near the enclosure to reorganise the day.',
      updated: UPDATED_EN,
      sections: [
        {
          title: 'Under-roof options',
          bullets: [
            'Museums in the surroundings, like the Museo Naval del Caribe.',
            'Cafés and venues in the Centro to wait out the shower.',
            'Galleries and covered plazas of the enclosure.',
          ],
        },
        {
          title: 'How to reorganise the day',
          paragraphs: [
            'Move the wall to the rain-free windows and use the dry intervals to walk. Caribbean weather often alternates sun and rain on the same day.',
          ],
        },
        {
          title: 'Before you go',
          paragraphs: [
            'Verify museum and venue hours; they can change.',
          ],
          callout: 'This guide does not operate the under-roof sites.',
        },
      ],
      faq: [
        { q: 'What to do in Cartagena if it rains?', a: 'Museums, cafés and covered plazas in the enclosure surroundings are under-roof options.' },
        { q: 'Does rain ruin the visit?', a: 'Not entirely: Caribbean weather often alternates sun and rain; use the dry intervals.' },
        { q: 'Are there museums near the wall?', a: 'Yes, like the Museo Naval del Caribe in the Cartagena surroundings.' },
        { q: 'Does the wall close with rain?', a: 'Access can vary; verify on your visit day.' },
        { q: 'Where do I get the information?', a: 'From public sources and the enclosure’s signage.' },
      ],
      sources: SHARED_SOURCES,
      photo: WALL_PHOTO,
    },
  },
];

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

export const GROUP_ORDER: TopicGroup[] = ['visita', 'historia', 'cerca', 'comer', 'rutas'];
         