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

export const content: Record<Locale, Content> = {
  "es": {
    "locale": "es",
    "htmlLang": "es-CO",
    "siteName": "Guía de las Murallas de Cartagena",
    "title": "Murallas de Cartagena: visita, acceso gratuito y mapa",
    "description": "Planifica un paseo por las Murallas de Cartagena: acceso gratuito según el administrador, referencia en San Diego, rutas sugeridas, historia UNESCO y clima.",
    "navigation": [
      {
        "label": "La muralla",
        "href": "#muralla"
      },
      {
        "label": "Historia",
        "href": "#historia"
      },
      {
        "label": "Planifica",
        "href": "#planifica"
      },
      {
        "label": "Cerca de aquí",
        "href": "#cerca"
      },
      {
        "label": "Temporada",
        "href": "#temporada"
      },
      {
        "label": "Rutas",
        "href": "#rutas"
      },
      {
        "label": "Preguntas",
        "href": "#preguntas"
      }
    ],
    "utility": [
      {
        "label": "Privacidad",
        "href": "/privacidad/"
      },
      {
        "label": "Términos",
        "href": "/terminos/"
      },
      {
        "label": "Cookies",
        "href": "/cookies/"
      }
    ],
    "language": {
      "label": "Read in English",
      "href": "/en/",
      "short": "EN"
    },
    "hero": {
      "eyebrow": "San Diego · Cartagena de Indias, Colombia",
      "title": "Murallas de Cartagena (Cartagena de Indias)",
      "lead": "Recorre los baluartes y las calles de la ciudad amurallada de Cartagena de Indias. Empieza por la referencia de San Diego, elige un tramo según tu tiempo y consulta los accesos antes de subir al paseo elevado.",
      "primary": "Planifica tu recorrido",
      "secondary": "Conoce su historia",
      "imageAlt": "Garita y muralla de Cartagena, fotografía de Joe Ross de 2016"
    },
    "facts": [
      {
        "label": "Ubicación",
        "value": "San Diego · Cartagena de Indias"
      },
      {
        "label": "Coordenadas",
        "value": "10.42961° N, 75.54487° O"
      },
      {
        "label": "Conjunto patrimonial",
        "value": "Patrimonio Mundial UNESCO"
      },
      {
        "label": "Google Maps · 22 oct 2026",
        "value": "4,8/5 · 34.305 opiniones"
      }
    ],
    "overview": {
      "kicker": "Acerca de las Murallas de Cartagena",
      "title": "Sobre las Murallas de Cartagena en Cartagena de Indias",
      "paragraphs": [
        "Las murallas delimitan parte del centro histórico de Cartagena, en la costa caribeña de Colombia. Son una parte del conjunto «Puerto, fortalezas y conjunto monumental de Cartagena», inscrito por UNESCO en 1984; ese conjunto también incluye fortificaciones fuera del paseo urbano.",
        "Las Murallas de Cartagena forman parte de un sistema defensivo que protegió durante siglos uno de los puertos estratégicos del Caribe. En el tramo de San Diego, la piedra, las garitas y el trazado urbano permiten apreciar cómo la defensa se integró a la vida cotidiana de la ciudad.",
        "Hoy no se visita un monumento aislado. El paseo conecta miradores, barrios históricos y la relación permanente entre la ciudad amurallada y el mar. Recorre con calma, respeta los desniveles y deja que la escala del recinto revele su historia. Al visitar las Murallas de Cartagena, quienes recorren el lugar pueden explorar con facilidad monumentos históricos y puntos de interés cercanos, entre ellos Las Bóvedas y la Plaza de San Diego."
      ],
      "quote": "UNESCO destaca la extensión y conservación del sistema defensivo de Cartagena, desarrollado entre los siglos XVI y XVIII.",
      "attribution": "Resumen de la declaración de valor universal excepcional de UNESCO."
    },
    "history": {
      "kicker": "Historia y significado",
      "title": "Historia e importancia de las Murallas de Cartagena",
      "intro": "El recinto no nació de una sola obra. Su forma actual es el resultado de sucesivas decisiones militares, marítimas y urbanas, tomadas mientras Cartagena crecía como puerto colonial.",
      "milestones": [
        {
          "year": "Siglos XVI–XVIII",
          "title": "Una defensa por etapas",
          "text": "UNESCO sitúa defensas españolas en 1586 y explica su ampliación durante el siglo XVIII. La historia corresponde a un sistema de murallas, fuertes y defensas de la bahía, no a una única obra."
        },
        {
          "year": "1984",
          "title": "Patrimonio Mundial",
          "text": "UNESCO inscribió el puerto, las fortalezas y el conjunto monumental de Cartagena por su arquitectura militar y su papel en las rutas marítimas históricas."
        }
      ]
    },
    "visit": {
      "kicker": "Ubicación y cómo llegar",
      "title": "Dónde empezar y cuánto caminar",
      "intro": "El mejor recorrido no es una carrera por la parte alta. Alterna el paseo sobre la muralla con las calles de San Diego y el Centro, y toma en cuenta el calor, la luz y el flujo peatonal.",
      "items": [
        {
          "icon": "◷",
          "title": "Mejor momento",
          "text": "Las primeras horas de la mañana y el final de la tarde suelen ofrecer luz más suave y menor exposición directa. El acceso, cierres parciales y actividades pueden variar; verifícalos antes de salir."
        },
        {
          "icon": "⌁",
          "title": "Tiempo sugerido",
          "text": "Reserva entre 60 y 120 minutos para un tramo con pausas, fotografías y conexión con las calles históricas. Amplía el tiempo si deseas enlazar el paseo con museos, plazas o Getsemaní."
        },
        {
          "icon": "◉",
          "title": "Lectura del paisaje",
          "text": "Busca garitas, baluartes, rampas, cambios de nivel y vistas hacia la bahía. Son elementos funcionales de un sistema defensivo, no solo fondos fotográficos."
        }
      ]
    },
    "experience": {
      "title": "Piedra coralina, sombra breve y horizonte abierto.",
      "text": "La experiencia cambia con cada tramo. A ras de calle, el muro enmarca el tejido colonial; arriba, convierte la línea costera en una lectura continua de ciudad, mar y fortificación. Usa calzado con buena sujeción y evita sentarte o subir a sectores no habilitados.",
      "imageAlt": "Tramo de muralla y garita de Cartagena, fotografía de Joe Ross de 2016",
      "captions": [
        "Fotografía: Joe Ross · CC BY-SA 2.0",
        "Fuente: Wikimedia Commons"
      ]
    },
    "practical": {
      "kicker": "Información práctica",
      "title": "Llegar, orientarse y cuidar el recorrido.",
      "note": "Esta guía no administra el lugar. Las condiciones de movilidad, accesibilidad, servicios y tarifas pueden cambiar. Confirma la información esencial con fuentes oficiales el día de tu visita.",
      "groups": [
        {
          "title": "Desde el aeropuerto",
          "icon": "✈",
          "text": "Desde el Aeropuerto Internacional Rafael Núñez, organiza el traslado al centro histórico por un canal de transporte identificable. La duración y el precio dependen del tráfico y del destino exacto; no son tiempos garantizados.",
          "list": [
            "Verifica la tarifa y el medio de pago antes de iniciar el trayecto.",
            "Si viajas con equipaje o en grupo, pregunta por la capacidad del vehículo.",
            "Consulta con anticipación restricciones de tráfico, obras y horarios de llegada."
          ]
        },
        {
          "title": "Bus y transporte público",
          "icon": "↗",
          "text": "El sistema urbano Transcaribe articula diversos sectores de Cartagena. Para acercarte al recinto, revisa el trazado y la parada más conveniente según tu origen, y completa el último tramo a pie dentro del centro histórico.",
          "list": [
            "Consulta rutas, frecuencias y formas de pago en los canales operativos antes de viajar.",
            "Prevé caminata en superficies irregulares y bajo calor.",
            "No dependas de una única conexión si tienes una reserva o vuelo próximo."
          ]
        },
        {
          "title": "Taxi y movilidad bajo demanda",
          "icon": "▣",
          "text": "Los taxis autorizados son una opción práctica en trayectos puerta a puerta. Identifica el vehículo, acuerda o confirma la tarifa cuando aplique y utiliza puntos de recogida seguros, especialmente por la noche.",
          "list": [
            "Evita bloquear accesos estrechos o zonas de alto flujo peatonal.",
            "No subas al vehículo si no puedes identificar la matrícula o el conductor.",
            "Para recorridos breves dentro de la ciudad amurallada, caminar suele ser la alternativa más directa."
          ]
        },
        {
          "title": "Estacionamiento",
          "icon": "P",
          "text": "La guía del administrador menciona zonas de parqueo autorizadas en el centro histórico. Comprueba señalización, disponibilidad, tarifa y restricciones del espacio elegido; una referencia en un mapa no garantiza una plaza.",
          "list": [
            "No estaciones junto al muro, accesos de emergencia o zonas no señalizadas.",
            "Verifica altura, horario, vigilancia y modalidad de pago del lugar elegido.",
            "Considera dejar el vehículo fuera del recinto durante las horas de mayor afluencia."
          ]
        },
        {
          "title": "Servicios esenciales",
          "icon": "+",
          "text": "Lleva agua, protección solar y calzado firme. Confirma dónde puedes descansar, encontrar un baño o pedir ayuda antes de subir; no se ha verificado una distribución de servicios a lo largo de todos los tramos.",
          "list": [
            "Consulta la ubicación actual de baños y atención médica antes de salir.",
            "Lleva agua reutilizable y retira tus residuos.",
            "Para combustible o recarga, planifica fuera del núcleo peatonal y evita ingresar con el vehículo solo para buscar servicios."
          ]
        },
        {
          "title": "Entrada, costo y conservación",
          "icon": "$",
          "text": "Fortificaciones Cartagena de Indias indica que el recorrido por las murallas es gratuito y abierto al público. Esto no incluye entradas al Castillo San Felipe, museos, restaurantes, visitas guiadas ni eventos. Respeta cierres locales y señalización.",
          "list": [
            "La ficha de Maps figuraba abierta 24 horas el 22 de octubre de 2026: es una referencia del punto, no un horario garantizado de todos los sectores.",
            "No grabes, rayes, desmontes ni alteres piedra, señalización o vegetación.",
            "Mantén libres los pasos y cede el paso en escaleras, rampas y superficies estrechas."
          ]
        }
      ]
    },
    "food": {
      "kicker": "Comer con criterio",
      "title": "Los sabores del Caribe empiezan a pocas calles.",
      "text": "San Diego y los barrios históricos cercanos reúnen opciones de distinta escala. Para conservar una guía neutral, no recomendamos establecimientos concretos: prioriza el tipo de experiencia, el manejo de residuos y una pausa que no interrumpa el paseo patrimonial.",
      "cards": [
        {
          "title": "Cocina caribeña y colombiana",
          "text": "Busca preparaciones regionales, pescados y mariscos de procedencia informada, arroces, sopas y frutas locales. Pregunta por alérgenos y opciones sin alcohol si las necesitas."
        },
        {
          "title": "Café, agua y descanso breve",
          "text": "Elige espacios de hidratación y cafeterías con sombra para recuperar energía, sin depender de vendedores informales para tus necesidades básicas."
        },
        {
          "title": "Compras para el recorrido",
          "text": "Lleva una botella recargable y un refrigerio ligero. Reduce envases de un solo uso y conserva los residuos contigo hasta encontrar un punto adecuado."
        }
      ]
    },
    "nearby": {
      "kicker": "Monumentos cercanos",
      "title": "Lugares y monumentos alrededor de las Murallas de Cartagena",
      "text": "Estos sitios se incluyen por su valor histórico y urbano, no como una lista comercial. Confirma horarios, condiciones y accesibilidad directamente antes de la visita.",
      "cards": [
        {
          "title": "Las Bóvedas",
          "text": "Antiguas construcciones abovedadas integradas al borde defensivo. Ofrecen otra escala para observar el vínculo entre arquitectura militar y vida urbana."
        },
        {
          "title": "Plaza de San Diego",
          "text": "Un punto de pausa en el barrio histórico de San Diego. Sirve para conectar el paseo de muralla con el trazado de calles, viviendas y espacios públicos."
        },
        {
          "title": "Castillo San Felipe de Barajas",
          "text": "Una pieza decisiva del sistema de fortificaciones de Cartagena. Completa la visita con una perspectiva terrestre de la defensa de la ciudad."
        }
      ]
    },
    "map": {
      "kicker": "Punto de referencia",
      "title": "Ubicación de las Murallas de Cartagena en San Diego",
      "text": "Referencia de la ficha: Cl. de la Serrezuela, San Diego, Cartagena de Indias, Bolívar, Colombia (10.4296098, −75.544865). El punto ayuda a orientarte; no identifica todas las rampas ni certifica un acceso sin escalones.",
      "label": "Mapa de las Murallas de Cartagena"
    },
    "faq": {
      "kicker": "Preguntas frecuentes",
      "title": "Respuestas para un recorrido responsable.",
      "items": [
        {
          "q": "¿Qué son las Murallas de Cartagena?",
          "a": "Son el recinto urbano defensivo y parte de un sistema mayor de fortificaciones que protegió a Cartagena de Indias. El conjunto histórico de puerto, fortalezas y monumentos está inscrito como Patrimonio Mundial por UNESCO."
        },
        {
          "q": "¿Dónde está este tramo?",
          "a": "Referencia de la ficha: Cl. de la Serrezuela, San Diego, Cartagena de Indias, Bolívar, Colombia (10.4296098, −75.544865). El punto ayuda a orientarte; no identifica todas las rampas ni certifica un acceso sin escalones."
        },
        {
          "q": "¿Cuánto tiempo debo reservar?",
          "a": "Para un tramo a ritmo tranquilo, calcula entre una y dos horas. Añade tiempo si quieres recorrer las calles históricas o enlazar la visita con otros componentes del sistema defensivo."
        },
        {
          "q": "¿Hay un precio de entrada?",
          "a": "Fortificaciones Cartagena de Indias indica que el recorrido por las murallas es gratuito y abierto al público. Esto no incluye entradas al Castillo San Felipe, museos, restaurantes, visitas guiadas ni eventos. Respeta cierres locales y señalización."
        },
        {
          "q": "¿Puedo ir en coche y estacionar junto a la muralla?",
          "a": "La guía del administrador menciona zonas de parqueo autorizadas en el centro histórico. Comprueba señalización, disponibilidad, tarifa y restricciones del espacio elegido; una referencia en un mapa no garantiza una plaza."
        },
        {
          "q": "¿Qué debo llevar?",
          "a": "Agua, protección solar, calzado firme, teléfono cargado y un plan de ruta. En temporada de lluvia, lleva una capa ligera y presta atención a superficies mojadas."
        },
        {
          "q": "¿Están abiertas las murallas las 24 horas?",
          "a": "La ficha de Maps figuraba abierta 24 horas el 22 de octubre de 2026: es una referencia del punto, no un horario garantizado de todos los sectores. Consulta avisos del administrador; museos, comercios y actividades tienen condiciones propias."
        }
      ]
    },
    "sources": {
      "kicker": "Notas y fuentes",
      "title": "Cómo se elaboró esta guía.",
      "text": "Fuentes consultadas el 22 de octubre de 2026: UNESCO para el conjunto patrimonial y Fortificaciones Cartagena de Indias para la visita. La valoración y el horario de Maps son datos de terceros fechados. Las rutas y los tiempos sugeridos son propuestas de esta guía.",
      "items": [
        {
          "label": "UNESCO · Conjunto patrimonial de Cartagena",
          "url": "https://whc.unesco.org/en/list/285/"
        },
        {
          "label": "Fortificaciones Cartagena de Indias · Murallas",
          "url": "https://fortificacionescartagena.com.co/es/planee-su-visita/murallas-de-cartagena/"
        },
        {
          "label": "Google Maps · Walls of Cartagena",
          "url": "https://maps.app.goo.gl/FSZf8ZUWLQLJRJUZ6"
        }
      ]
    },
    "seasonal": {
      "kicker": "Estrategia por temporada",
      "title": "Cuándo visitar las Murallas de Cartagena",
      "intro": "Planifica según el pronóstico próximo a tu visita. Esta tabla propone formas de adaptar el paseo a las condiciones; no ofrece promedios climáticos medidos, precios ni predicciones de afluencia.",
      "rows": [
        {
          "period": "Con sol",
          "conditions": "Reduce el tramo expuesto y busca descansos.",
          "temp": "—",
          "rain": "—",
          "crowd": "Variable",
          "bestFor": "Paseo temprano y pausas a la sombra."
        },
        {
          "period": "Con lluvia o tormenta",
          "conditions": "La piedra mojada requiere precaución; consulta avisos locales.",
          "temp": "—",
          "rain": "—",
          "crowd": "Variable",
          "bestFor": "Acortar o aplazar el paseo expuesto."
        }
      ]
    },
    "itineraries": {
      "kicker": "Cómo recorrerla",
      "title": "Rutas sugeridas para las Murallas de Cartagena",
      "intro": "Estas rutas son independientes y no promueven ningún operador. Ajusta los tiempos a tu ritmo, al calor y a la luz.",
      "routes": [
        {
          "tag": "Medio día",
          "title": "Ruta esencial (3–4 h)",
          "text": "Un recorrido compacto por el tramo de San Diego y el borde defensivo.",
          "steps": [
            "Plaza de San Diego → sube a la muralla hacia Las Bóvedas.",
            "Baluarte de Santo Domingo: una parada para observar el paisaje; busca sombra donde esté disponible.",
            "Baja por el Centro hasta la Torre del Reloj y la Plaza de la Aduana.",
            "Pausa en una plaza con sombra antes de volver."
          ]
        },
        {
          "tag": "Día completo",
          "title": "Recinto + Castillo (7–8 h)",
          "text": "Combine el paseo urbano con la defensa terrestre y el barrio de Getsemaní.",
          "steps": [
            "Mañana: muralla de San Diego y Centro histórico.",
            "Mediodía: museo (oro, naval o historia) para escapar del sol.",
            "Tarde: Castillo San Felipe de Barajas.",
            "Atardecer: Getsemaní y vuelta por la muralla al anochecer."
          ]
        },
        {
          "tag": "Familiar",
          "title": "En familia con niños",
          "text": "Tramos cortos, sombra y pausas; evita el mediodía y los desniveles largos.",
          "steps": [
            "Empieza en Plaza de San Diego y comprueba el acceso que puedes utilizar.",
            "Caminata corta por Las Bóvedas con sombra.",
            "Helado o agua en la plaza; descanso a mitad.",
            "Evita subir rampas largas en las horas de más sol."
          ]
        },
        {
          "tag": "Foto y naturaleza",
          "title": "Luz y patrimonio",
          "text": "Apunta a la hora dorada y al azul para las siluetas de baluartes y garitas.",
          "steps": [
            "Madrugada o temprano: luz suave sobre el coral.",
            "Mediodía: detalles de piedra y vegetación.",
            "Hora dorada: baluartes contra el mar.",
            "Hora azul: muralla y faroles del Centro."
          ]
        },
        {
          "tag": "Accesible",
          "title": "Baja intensidad y movilidad reducida",
          "text": "Prefiere calles llanas del Centro y evita escaleras y rampas de la muralla.",
          "steps": [
            "Elige un punto de llegada según tus necesidades.",
            "Comprueba pavimento, bordillos y acceso antes de continuar.",
            "Planifica descansos; no se garantizan bancos ni sombra continuos.",
            "No presupongas que rampas o paseos elevados son accesibles."
          ]
        }
      ]
    },
    "responsibility": {
      "kicker": "Ciencia y responsabilidad",
      "title": "Cuidar las Murallas y su entorno",
      "intro": "Una guía independiente no cambia el lugar, pero sí cómo lo recorres. Estos puntos se basan en buenas prácticas de conservación y convivencia.",
      "groups": [
        {
          "title": "Cero residuos",
          "icon": "♻",
          "text": "Lleva botella reutilizable y retira lo que traigas. No dejes comida ni envases sobre la muralla; los restos atraen fauna y dañan la piedra."
        },
        {
          "title": "Sol y seguridad",
          "icon": "☼",
          "text": "El sol caribeño es intenso. Usa gorra, protector solar y agua; la piedra es irregular, así que calzado firme y paso seguro en rampas y escaleras."
        },
        {
          "title": "Patrimonio vivo",
          "icon": "✶",
          "text": "No grabes ni retires piedra, señalización o vegetación. Tu visita ayuda a sostener un sitio que lleva siglos protegiendo la ciudad."
        }
      ]
    },
    "footer": {
      "nonprofit": "Guía independiente de visitantes. No es el sitio del administrador del patrimonio.",
      "authorities": "La información patrimonial se contrasta con materiales públicos de UNESCO, Colombia Travel y el Aeropuerto Internacional Rafael Núñez; no contiene recomendaciones comerciales.",
      "copyright": "© 2026 Guía de las Murallas de Cartagena. Todos los derechos reservados.",
      "photo": "Los derechos de las fotografías pertenecen a sus autores originales. Imagen de muralla: Joe Ross, bajo CC BY-SA 2.0.",
      "credit": "Diseñada como un recurso educativo independiente sobre el patrimonio de Cartagena de Indias."
    }
  },
  "en": {
    "locale": "en",
    "htmlLang": "en",
    "siteName": "Cartagena Walls Visitor Guide",
    "title": "Walls of Cartagena: visiting, free access & map",
    "description": "Plan a walk along Cartagena’s walls: administrator guidance on free access, a San Diego map reference, suggested routes, UNESCO history and weather.",
    "navigation": [
      {
        "label": "The walls",
        "href": "#muralla"
      },
      {
        "label": "History",
        "href": "#historia"
      },
      {
        "label": "Plan a visit",
        "href": "#planifica"
      },
      {
        "label": "Nearby",
        "href": "#cerca"
      },
      {
        "label": "Seasons",
        "href": "#temporada"
      },
      {
        "label": "Routes",
        "href": "#rutas"
      },
      {
        "label": "FAQ",
        "href": "#preguntas"
      }
    ],
    "utility": [
      {
        "label": "Privacy",
        "href": "/en/privacy/"
      },
      {
        "label": "Terms",
        "href": "/en/terms/"
      },
      {
        "label": "Cookies",
        "href": "/en/cookies/"
      }
    ],
    "language": {
      "label": "Leer en español",
      "href": "/",
      "short": "ES"
    },
    "hero": {
      "eyebrow": "San Diego · Cartagena de Indias, Colombia",
      "title": "Walls of Cartagena (Cartagena de Indias)",
      "lead": "Explore the bastions and streets of Cartagena de Indias’ walled city. Start with the San Diego reference point, choose a section to suit your time and check access before taking the elevated walk.",
      "primary": "Plan your walk",
      "secondary": "Explore the history",
      "imageAlt": "Sentry box and wall in Cartagena, photographed by Joe Ross in 2016"
    },
    "facts": [
      {
        "label": "Location",
        "value": "San Diego · Cartagena de Indias"
      },
      {
        "label": "Coordinates",
        "value": "10.42961° N, 75.54487° W"
      },
      {
        "label": "Heritage setting",
        "value": "UNESCO World Heritage"
      },
      {
        "label": "Google Maps · 22 Oct 2026",
        "value": "4.8/5 · 34,305 reviews"
      }
    ],
    "overview": {
      "kicker": "About Walls of Cartagena",
      "title": "About Walls of Cartagena in Cartagena de Indias",
      "paragraphs": [
        "The walls enclose part of Cartagena’s historic centre on Colombia’s Caribbean coast. They form part of the “Port, Fortresses and Group of Monuments, Cartagena”, inscribed by UNESCO in 1984; that property also includes fortifications beyond the urban wall walk.",
        "Cartagena’s walls are part of a defensive system that protected one of the Caribbean’s strategic ports for centuries. In San Diego, stonework, sentry boxes, and the urban plan show how military defence became interwoven with everyday city life.",
        "This is not an isolated monument. The walk connects viewpoints, historic neighbourhoods, and the enduring relationship between the walled city and the sea. Move slowly, respect changes in level, and let the scale of the enclosure tell its story. When visiting Walls of Cartagena, visitors can easily explore surrounding historical landmarks and points of interest, including Las Bóvedas and Plaza de San Diego."
      ],
      "quote": "UNESCO highlights the scale and survival of Cartagena’s defensive system, developed between the 16th and 18th centuries.",
      "attribution": "Summary of UNESCO’s statement of Outstanding Universal Value."
    },
    "history": {
      "kicker": "History and significance",
      "title": "History and Significance of Walls of Cartagena",
      "intro": "The enclosure was not created in one campaign. Its present form reflects successive military, maritime, and urban decisions made as Cartagena grew into a colonial port.",
      "milestones": [
        {
          "year": "16th–18th centuries",
          "title": "Defence built in stages",
          "text": "UNESCO places Spanish defences in 1586 and describes their extension in the 18th century. This history concerns a system of walls, forts and bay defences, rather than one construction project."
        },
        {
          "year": "1984",
          "title": "World Heritage",
          "text": "UNESCO inscribed Cartagena’s port, fortresses and monumental ensemble for its military architecture and role in historic maritime routes."
        }
      ]
    },
    "visit": {
      "kicker": "Location and how to visit",
      "title": "Where to start and how far to walk",
      "intro": "The most rewarding route is not a race along the upper walkway. Alternate the wall walk with San Diego and Centro’s streets, and account for heat, light, and pedestrian flow.",
      "items": [
        {
          "icon": "◷",
          "title": "Best time",
          "text": "Early morning and late afternoon often bring softer light and less direct exposure. Access, partial closures, and activities can change, so check before setting out."
        },
        {
          "icon": "⌁",
          "title": "Suggested duration",
          "text": "Allow 60 to 120 minutes for one section, including pauses, photographs, and connections with historic streets. Add time if you wish to include museums, plazas, or Getsemaní."
        },
        {
          "icon": "◉",
          "title": "Reading the landscape",
          "text": "Look for sentry boxes, bastions, ramps, changes in level, and views toward the bay. These are functional elements of a defensive system, not merely photographic backdrops."
        }
      ]
    },
    "experience": {
      "title": "Coral stone, fleeting shade, and an open horizon.",
      "text": "The experience changes along each stretch. At street level, the wall frames the colonial fabric; above, it turns the coastline into a continuous reading of city, sea, and fortification. Wear secure footwear and do not sit or climb in unauthorised areas.",
      "imageAlt": "A section of Cartagena’s wall and sentry box, photographed by Joe Ross in 2016",
      "captions": [
        "Photo: Joe Ross · CC BY-SA 2.0",
        "Source: Wikimedia Commons"
      ]
    },
    "practical": {
      "kicker": "Practical information",
      "title": "Arriving, getting oriented, and walking with care.",
      "note": "This guide does not operate the site. Mobility, accessibility, services, and prices may change. Verify essential information through official sources on the day you visit.",
      "groups": [
        {
          "title": "From the airport",
          "icon": "✈",
          "text": "From Rafael Núñez International Airport, arrange transport to the historic centre through an identifiable provider. Journey time and cost depend on traffic and the exact drop-off point; no fixed duration is guaranteed.",
          "list": [
            "Confirm the fare and payment method before the journey begins.",
            "If travelling with luggage or as a group, ask about vehicle capacity.",
            "Check traffic restrictions, works, and arrival-time conditions in advance."
          ]
        },
        {
          "title": "Bus and public transport",
          "icon": "↗",
          "text": "Cartagena’s Transcaribe urban system links different areas of the city. Check the current route and the most convenient stop for your origin, then complete the final segment on foot within the historic centre.",
          "list": [
            "Confirm routes, frequencies, and payment methods through operating channels before travel.",
            "Expect a walk over uneven surfaces and in warm conditions.",
            "Do not rely on a single connection if you have a booking or flight to catch."
          ]
        },
        {
          "title": "Taxi and ride services",
          "icon": "▣",
          "text": "Authorised taxis can be practical for door-to-door journeys. Identify the vehicle, agree or confirm the fare where relevant, and use safe collection points, particularly in the evening.",
          "list": [
            "Do not block narrow entrances or high-pedestrian-flow zones.",
            "Do not enter a vehicle if you cannot identify its plate or driver.",
            "For short journeys within the walled city, walking is often the most direct option."
          ]
        },
        {
          "title": "Parking",
          "icon": "P",
          "text": "The administrator’s guide mentions authorised parking areas in the historic centre. Check signs, availability, charges and restrictions at your chosen location; a map reference does not guarantee a space.",
          "list": [
            "Do not park beside the wall, emergency access, or unsigned areas.",
            "Check height limits, hours, security, and payment terms at the facility you choose.",
            "Consider leaving your vehicle outside the enclosure during busier periods."
          ]
        },
        {
          "title": "Essential services",
          "icon": "+",
          "text": "Bring water, sun protection and secure footwear. Check where you can rest, find a toilet or ask for help before going up; facilities have not been verified along every section.",
          "list": [
            "Check the current location of toilets and medical attention before departure.",
            "Carry refillable water and take your waste with you.",
            "Plan fuel or charging outside the pedestrian core rather than driving in just to find services."
          ]
        },
        {
          "title": "Access, cost, and conservation",
          "icon": "$",
          "text": "Fortificaciones Cartagena de Indias describes the wall walk as free and open to the public. This does not include San Felipe Castle, museums, restaurants, guided tours or events. Follow local closures and signs.",
          "list": [
            "The Maps point was listed as open 24 hours on 22 October 2026: this is a point listing, not guaranteed opening of every section.",
            "Do not carve, remove, or alter stonework, signs, or vegetation.",
            "Keep passageways clear and yield on stairs, ramps, and narrow surfaces."
          ]
        }
      ]
    },
    "food": {
      "kicker": "Eat with perspective",
      "title": "Caribbean flavours begin a few streets away.",
      "text": "San Diego and nearby historic districts offer options at different scales. To remain neutral, this guide does not recommend specific businesses: prioritise the type of experience, waste awareness, and a pause that does not interrupt the heritage walk.",
      "cards": [
        {
          "title": "Caribbean and Colombian cooking",
          "text": "Look for regional preparations, traceable fish and seafood, rice dishes, soups, and local fruit. Ask about allergens and alcohol-free options if needed."
        },
        {
          "title": "Coffee, water, and a short rest",
          "text": "Choose places for hydration and coffee with shade so you can recover energy, rather than relying on informal vendors for basic needs."
        },
        {
          "title": "Supplies for the walk",
          "text": "Carry a refillable bottle and a light snack. Reduce single-use packaging and keep waste with you until you find an appropriate disposal point."
        }
      ]
    },
    "nearby": {
      "kicker": "Nearby landmarks",
      "title": "Landmarks & Attractions Around Walls of Cartagena",
      "text": "These sites are included for historical and urban value, not as commercial recommendations. Confirm opening conditions and accessibility directly before visiting.",
      "cards": [
        {
          "title": "Las Bóvedas",
          "text": "Historic vaulted structures integrated into the defensive edge. They offer another scale for understanding the relationship between military architecture and urban life."
        },
        {
          "title": "Plaza de San Diego",
          "text": "A pause point in the historic San Diego district, linking the wall walk with the city’s streets, homes, and public spaces."
        },
        {
          "title": "Castillo San Felipe de Barajas",
          "text": "A decisive piece of Cartagena’s defensive system, offering a landward perspective on the city’s protection."
        }
      ]
    },
    "map": {
      "kicker": "Reference point",
      "title": "Location of Walls of Cartagena in San Diego",
      "text": "Listing reference: Cl. de la Serrezuela, San Diego, Cartagena de Indias, Bolívar, Colombia (10.4296098, −75.544865). This point helps orientation; it does not identify every ramp or certify step-free access.",
      "label": "Map of Cartagena’s Walls"
    },
    "faq": {
      "kicker": "Frequently asked questions",
      "title": "Answers for a responsible walk.",
      "items": [
        {
          "q": "What are Cartagena’s walls?",
          "a": "They are the urban defensive enclosure and part of a wider fortification system that protected Cartagena de Indias. The historic port, fortresses, and monuments are inscribed as UNESCO World Heritage."
        },
        {
          "q": "Where is this section?",
          "a": "Listing reference: Cl. de la Serrezuela, San Diego, Cartagena de Indias, Bolívar, Colombia (10.4296098, −75.544865). This point helps orientation; it does not identify every ramp or certify step-free access."
        },
        {
          "q": "How much time should I allow?",
          "a": "For an unhurried section, allow one to two hours. Add time if you want to explore historic streets or connect the visit with other parts of the defensive system."
        },
        {
          "q": "Is there an admission fee?",
          "a": "Fortificaciones Cartagena de Indias describes the wall walk as free and open to the public. This does not include San Felipe Castle, museums, restaurants, guided tours or events. Follow local closures and signs."
        },
        {
          "q": "Can I drive and park beside the wall?",
          "a": "The administrator’s guide mentions authorised parking areas in the historic centre. Check signs, availability, charges and restrictions at your chosen location; a map reference does not guarantee a space."
        },
        {
          "q": "What should I bring?",
          "a": "Water, sun protection, secure shoes, a charged phone, and a route plan. In rainy periods, bring a light rain layer and be mindful of wet surfaces."
        },
        {
          "q": "Are the walls open 24 hours?",
          "a": "The Maps point was listed as open 24 hours on 22 October 2026: this is a point listing, not guaranteed opening of every section. Check administrator notices; museums, businesses and activities have separate arrangements."
        }
      ]
    },
    "sources": {
      "kicker": "Notes and sources",
      "title": "How this guide was prepared.",
      "text": "Sources checked on 22 October 2026: UNESCO for the heritage property and Fortificaciones Cartagena de Indias for visiting. Maps ratings and hours are dated third-party information. Suggested routes and durations are this guide’s proposals.",
      "items": [
        {
          "label": "UNESCO · Cartagena heritage property",
          "url": "https://whc.unesco.org/en/list/285/"
        },
        {
          "label": "Fortificaciones Cartagena de Indias · Murallas",
          "url": "https://fortificacionescartagena.com.co/es/planee-su-visita/murallas-de-cartagena/"
        },
        {
          "label": "Google Maps · Walls of Cartagena",
          "url": "https://maps.app.goo.gl/FSZf8ZUWLQLJRJUZ6"
        }
      ]
    },
    "seasonal": {
      "kicker": "Seasonal strategy",
      "title": "When to visit the Walls of Cartagena",
      "intro": "Check the forecast close to your visit. This table suggests ways to adapt the walk to conditions; it does not provide measured climate averages, prices or crowd forecasts.",
      "rows": [
        {
          "period": "Sunny conditions",
          "conditions": "Shorten exposed sections and plan breaks.",
          "temp": "—",
          "rain": "—",
          "crowd": "Variable",
          "bestFor": "Early walks and shaded breaks."
        },
        {
          "period": "Rain or thunderstorms",
          "conditions": "Wet stone requires care; check local notices.",
          "temp": "—",
          "rain": "—",
          "crowd": "Variable",
          "bestFor": "Shorten or postpone exposed walking."
        }
      ]
    },
    "itineraries": {
      "kicker": "How to walk it",
      "title": "Suggested routes for the Walls of Cartagena",
      "intro": "These routes are independent and promote no operator. Adjust the timing to your pace, the heat, and the light.",
      "routes": [
        {
          "tag": "Half day",
          "title": "Essential route (3–4 h)",
          "text": "A compact walk through the San Diego stretch and the defensive edge.",
          "steps": [
            "Plaza de San Diego → climb the wall toward Las Bóvedas.",
            "Baluarte de Santo Domingo: pause to view the surroundings; seek shade where available.",
            "Descend through the Centro to Torre del Reloj and Plaza de la Aduana.",
            "Pause in a shaded plaza before heading back."
          ]
        },
        {
          "tag": "Full day",
          "title": "Enclosure + Castle (7–8 h)",
          "text": "Pair the urban walk with the land defence and the Getsemaní neighbourhood.",
          "steps": [
            "Morning: San Diego wall and historic centre.",
            "Midday: a museum (gold, naval, or history) to escape the sun.",
            "Afternoon: Castillo San Felipe de Barajas.",
            "Sunset: Getsemaní and back along the wall at dusk."
          ]
        },
        {
          "tag": "Family",
          "title": "With children",
          "text": "Short stretches, shade, and breaks; avoid midday and long slopes.",
          "steps": [
            "Start at Plaza de San Diego and check a suitable access.",
            "Short walk along Las Bóvedas in the shade.",
            "Ice cream or water in the plaza; rest halfway.",
            "Avoid long ramps during the hottest hours."
          ]
        },
        {
          "tag": "Photo & nature",
          "title": "Light and heritage",
          "text": "Aim for golden and blue hour for the silhouettes of bastions and sentry boxes.",
          "steps": [
            "Dawn or early: soft light on the coral stone.",
            "Midday: stone and vegetation details.",
            "Golden hour: bastions against the sea.",
            "Blue hour: wall and Centro lanterns."
          ]
        },
        {
          "tag": "Accessible",
          "title": "Low effort, reduced mobility",
          "text": "Prefer flat Centro streets and avoid the wall stairs and ramps.",
          "steps": [
            "Choose a drop-off point for your needs.",
            "Check paving, kerbs and access before continuing.",
            "Plan breaks; continuous benches or shade are not guaranteed.",
            "Do not assume ramps or elevated walks are accessible."
          ]
        }
      ]
    },
    "responsibility": {
      "kicker": "Science and responsibility",
      "title": "Caring for the Walls and their setting",
      "intro": "An independent guide does not change the place, but it changes how you walk it. These points follow conservation and coexistence good practice.",
      "groups": [
        {
          "title": "Zero waste",
          "icon": "♻",
          "text": "Bring a refillable bottle and take away what you bring. Leave no food or packaging on the wall; scraps attract wildlife and damage the stone."
        },
        {
          "title": "Sun and safety",
          "icon": "☼",
          "text": "The Caribbean sun is strong. Wear a hat, sunscreen, and water; the stone is uneven, so wear firm shoes and step carefully on ramps and stairs."
        },
        {
          "title": "Living heritage",
          "icon": "✶",
          "text": "Do not carve or remove stone, signs, or vegetation. Your visit helps sustain a site that has protected the city for centuries."
        }
      ]
    },
    "footer": {
      "nonprofit": "Independent visitor guide. This is not the heritage administrator’s website.",
      "authorities": "Heritage information is checked against public material from UNESCO, Colombia Travel, and Rafael Núñez International Airport; it contains no commercial recommendations.",
      "copyright": "© 2026 Cartagena Walls Guide. All rights reserved.",
      "photo": "Photographs remain the property of their original authors. Wall image: Joe Ross, under CC BY-SA 2.0.",
      "credit": "Designed as an independent educational resource about the heritage of Cartagena de Indias."
    }
  }
};

export const legalContent = {
  "es": {
    "privacy": {
      "title": "Política de privacidad",
      "lead": "Servicios que utiliza esta guía y opciones de medición disponibles.",
      "sections": [
        {
          "title": "Datos y funciones",
          "paragraphs": [
            "Esta guía no ofrece cuentas, reservas ni un formulario de contacto. El alojamiento recibe los datos técnicos necesarios para servir solicitudes. No afirmamos que la medición sea anónima."
          ]
        },
        {
          "title": "Google Analytics",
          "paragraphs": [
            "Google Analytics 4 se activa cuando permites analíticas. Puede tratar identificadores, datos del dispositivo y navegación. Puedes cambiar la opción desde Configuración de cookies; revisa el mensaje que confirma si se guardó. Desactivar detiene la medición de Google Analytics en esta página y se intenta borrar sus cookies accesibles."
          ]
        },
        {
          "title": "Otros servicios",
          "paragraphs": [
            "El mapa integrado carga Google Maps, que aplica su propia política independientemente del control de Analytics. El pronóstico procede de Open-Meteo a través de un endpoint de este sitio. Las fotografías y los recursos del sitio se sirven desde el alojamiento."
          ]
        },
        {
          "title": "Información adicional",
          "paragraphs": [
            "Consulta la política de Google en https://policies.google.com/privacy y la de Open-Meteo en https://open-meteo.com/en/terms. Las preferencias no controlan tratamientos del alojamiento ni otras páginas abiertas."
          ]
        }
      ]
    },
    "terms": {
      "title": "Términos de uso",
      "lead": "Alcance y límites de esta guía independiente de visitantes.",
      "sections": [
        {
          "title": "Aceptación",
          "paragraphs": [
            "Al acceder o utilizar esta guía, aceptas estos términos. Si no estás de acuerdo con ellos, no utilices el sitio."
          ]
        },
        {
          "title": "Uso del contenido",
          "paragraphs": [
            "El contenido se ofrece exclusivamente con fines informativos y educativos. Somos una guía turística independiente de terceros y no estamos afiliados a ningún atractivo, entidad gubernamental, organización oficial u operador comercial."
          ]
        },
        {
          "title": "Exactitud de la información",
          "paragraphs": [
            "Procuramos presentar información contrastada y útil, pero no garantizamos que sea completa, actual o libre de errores. Las condiciones de acceso, rutas, horarios, precios, servicios y movilidad pueden cambiar sin aviso. Confirma toda información importante a través de fuentes responsables antes de viajar."
          ]
        },
        {
          "title": "Propiedad intelectual",
          "paragraphs": [
            "El diseño y el contenido original del sitio están protegidos por los derechos aplicables. Las fotografías conservan los derechos y las condiciones de sus autores originales; las imágenes con licencia Creative Commons se atribuyen conforme a sus términos. El uso de Google Maps está sujeto a los términos del proveedor."
          ]
        },
        {
          "title": "Limitación de responsabilidad",
          "paragraphs": [
            "Este sitio se ofrece tal como está y sin garantías. No asumimos responsabilidad por pérdidas, daños, decisiones de viaje o inconvenientes derivados del uso de esta información."
          ]
        }
      ]
    },
    "cookies": {
      "title": "Configuración de cookies",
      "lead": "Elige si permites Google Analytics y consulta el resultado de guardar tu decisión.",
      "sections": [
        {
          "title": "Preferencia local",
          "paragraphs": [
            "Se intenta guardar tu elección en el almacenamiento local de este navegador. No guardamos una preferencia de idioma. Si no se puede confirmar el guardado, Analytics permanece desactivado en esta página; revisa la advertencia sobre otras páginas."
          ]
        },
        {
          "title": "Analíticas opcionales",
          "paragraphs": [
            "Google Analytics 4 usa tecnologías de medición si lo permites. El mapa de Google funciona de forma separada. Puedes volver aquí desde el pie de cualquier página para cambiar la opción."
          ]
        }
      ]
    }
  },
  "en": {
    "privacy": {
      "title": "Privacy policy",
      "lead": "Services used by this guide and available measurement choices.",
      "sections": [
        {
          "title": "Data and features",
          "paragraphs": [
            "This guide provides no accounts, bookings or contact form. Hosting receives the technical data needed to serve requests. We do not claim measurement is anonymous."
          ]
        },
        {
          "title": "Google Analytics",
          "paragraphs": [
            "Google Analytics 4 starts when you allow analytics. It may process identifiers, device and browsing data. Change the choice in Cookie settings and check the saved result. Disabling stops Google Analytics measurement on this page and attempts to clear its accessible cookies."
          ]
        },
        {
          "title": "Other services",
          "paragraphs": [
            "The embedded map loads Google Maps, which applies its own policy independently of the Analytics control. Forecasts come from Open-Meteo through this site’s endpoint. Photos and site resources are served by the host."
          ]
        },
        {
          "title": "Further information",
          "paragraphs": [
            "See Google’s policy at https://policies.google.com/privacy and Open-Meteo’s terms at https://open-meteo.com/en/terms. Preferences do not control hosting processing or other open pages."
          ]
        }
      ]
    },
    "terms": {
      "title": "Terms of use",
      "lead": "Scope and limits of this independent visitor guide.",
      "sections": [
        {
          "title": "Acceptance",
          "paragraphs": [
            "By accessing or using this guide, you accept these terms. If you do not agree, do not use the website."
          ]
        },
        {
          "title": "Use of content",
          "paragraphs": [
            "Content is provided for informational and educational purposes only. We are an independent third-party visitor guide and are not affiliated with any attraction, government body, official organisation, or commercial operator."
          ]
        },
        {
          "title": "Accuracy of information",
          "paragraphs": [
            "We aim to provide checked and useful information, but do not guarantee that it is complete, current, or error-free. Access conditions, routes, opening hours, prices, services, and mobility can change without notice. Confirm important information through responsible sources before travelling."
          ]
        },
        {
          "title": "Intellectual property",
          "paragraphs": [
            "The website’s design and original content are protected by applicable rights. Photographs retain the rights and terms of their original authors; Creative Commons images are attributed under their licences. Google Maps use is subject to the provider’s terms."
          ]
        },
        {
          "title": "Limitation of liability",
          "paragraphs": [
            "This website is provided as is and without warranties. We do not accept liability for losses, damages, travel decisions, or inconvenience resulting from use of this information."
          ]
        }
      ]
    },
    "cookies": {
      "title": "Cookie settings",
      "lead": "Choose whether to allow Google Analytics and check whether your choice was saved.",
      "sections": [
        {
          "title": "Local preference",
          "paragraphs": [
            "We attempt to save your choice in this browser’s local storage. No language preference is stored. If saving cannot be confirmed, Analytics stays off on this page; check the warning about other pages."
          ]
        },
        {
          "title": "Optional analytics",
          "paragraphs": [
            "Google Analytics 4 uses measurement technologies if allowed. Google Maps works separately. Return here from any page footer to change the choice."
          ]
        }
      ]
    }
  }
};
