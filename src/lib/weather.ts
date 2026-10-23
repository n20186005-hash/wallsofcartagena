// Shared, framework-free helpers for Cartagena Walls weather.
// Used by the Cloudflare Worker (/api/weather) and the client widget.
// No API keys are involved; data comes from the public Open-Meteo endpoint.

export type Lang = 'es' | 'en';

export const WALL_LAT = 10.4296098;
export const WALL_LON = -75.544865;

export interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    uv_index_max: number[];
  };
}

export function buildWeatherUrl(lat = WALL_LAT, lon = WALL_LON): string {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max',
    timezone: 'America/Bogota',
    forecast_days: '7',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

export interface WmoInfo {
  es: string;
  en: string;
  icon: string;
  rain: boolean;
  storm: boolean;
}

export const WMO: Record<number, WmoInfo> = {
  0: { es: 'Despejado', en: 'Clear', icon: '☀', rain: false, storm: false },
  1: { es: 'Mayormente despejado', en: 'Mainly clear', icon: '☀', rain: false, storm: false },
  2: { es: 'Parcialmente nublado', en: 'Partly cloudy', icon: '⛅', rain: false, storm: false },
  3: { es: 'Nublado', en: 'Overcast', icon: '☁', rain: false, storm: false },
  45: { es: 'Niebla', en: 'Fog', icon: '🌫', rain: false, storm: false },
  48: { es: 'Niebla helada', en: 'Rime fog', icon: '🌫', rain: false, storm: false },
  51: { es: 'Llovizna ligera', en: 'Light drizzle', icon: '🌦', rain: true, storm: false },
  53: { es: 'Llovizna', en: 'Drizzle', icon: '🌦', rain: true, storm: false },
  55: { es: 'Llovizna densa', en: 'Dense drizzle', icon: '🌧', rain: true, storm: false },
  61: { es: 'Lluvia ligera', en: 'Light rain', icon: '🌦', rain: true, storm: false },
  63: { es: 'Lluvia', en: 'Rain', icon: '🌧', rain: true, storm: false },
  65: { es: 'Lluvia intensa', en: 'Heavy rain', icon: '🌧', rain: true, storm: false },
  66: { es: 'Lluvia engelante', en: 'Freezing rain', icon: '🌧', rain: true, storm: false },
  67: { es: 'Lluvia engelante', en: 'Freezing rain', icon: '🌧', rain: true, storm: false },
  71: { es: 'Nieve débil', en: 'Light snow', icon: '🌨', rain: true, storm: false },
  73: { es: 'Nieve', en: 'Snow', icon: '🌨', rain: true, storm: false },
  75: { es: 'Nieve intensa', en: 'Heavy snow', icon: '🌨', rain: true, storm: false },
  77: { es: 'Granizo menudo', en: 'Snow grains', icon: '🌨', rain: true, storm: false },
  80: { es: 'Chubascos débiles', en: 'Light showers', icon: '🌦', rain: true, storm: false },
  81: { es: 'Chubascos', en: 'Showers', icon: '🌧', rain: true, storm: false },
  82: { es: 'Chubascos intensos', en: 'Violent showers', icon: '🌧', rain: true, storm: false },
  85: { es: 'Chubascos de nieve', en: 'Snow showers', icon: '🌨', rain: true, storm: false },
  86: { es: 'Chubascos de nieve', en: 'Snow showers', icon: '🌨', rain: true, storm: false },
  95: { es: 'Tormenta', en: 'Thunderstorm', icon: '⛈', rain: true, storm: true },
  96: { es: 'Tormenta con granizo', en: 'Thunderstorm w/ hail', icon: '⛈', rain: true, storm: true },
  99: { es: 'Tormenta con granizo', en: 'Thunderstorm w/ hail', icon: '⛈', rain: true, storm: true },
};

export function wmo(code: number): WmoInfo {
  return WMO[code] ?? { es: 'Condición mixta', en: 'Mixed conditions', icon: '🌡', rain: false, storm: false };
}

export function uvLabel(uv: number, lang: Lang): string {
  if (uv < 3) return lang === 'es' ? 'Baja' : 'Low';
  if (uv < 6) return lang === 'es' ? 'Moderada' : 'Moderate';
  if (uv < 8) return lang === 'es' ? 'Alta' : 'High';
  if (uv < 11) return lang === 'es' ? 'Muy alta' : 'Very high';
  return lang === 'es' ? 'Extrema' : 'Extreme';
}

const WEEKDAYS: Record<Lang, string[]> = {
  es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

export function weekdayLabel(dateStr: string, lang: Lang): string {
  const d = new Date(`${dateStr}T12:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return WEEKDAYS[lang][d.getDay()];
}

export interface Advice {
  alert: string[];
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}

type RainLevel = 'none' | 'drizzle' | 'light' | 'moderate' | 'heavy' | 'storm' | 'snow';

function rainLevel(code: number): RainLevel {
  if (code >= 95) return 'storm';
  if (code === 65 || code === 82) return 'heavy';
  if (code === 63 || code === 81) return 'moderate';
  if (code === 61 || code === 80) return 'light';
  if (code >= 51 && code <= 57) return 'drizzle';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  return 'none';
}

function beaufort(kmh: number): number {
  return [1, 5, 11, 19, 28, 38, 49, 61, 74, 89, 103, 118].filter((b) => kmh >= b).length;
}

const COPY = {
  es: {
    lightning: 'Tormenta eléctrica: aplaza el paseo elevado, busca refugio seguro y consulta avisos locales.',
    waterClosed: 'Con tormenta, evita zonas expuestas y consulta al operador antes de cualquier actividad acuática.',
    heavyRain: 'Lluvia fuerte: evita zonas bajas y piedra resbaladiza; consulta avisos antes de subir. Lleva impermeable.',
    indoor: 'Lluvia moderada: prioriza recintos cubiertos (museos, portales) y acorta el tramo al aire libre.',
    lightRain: 'Lluvia ligera: la piedra se vuelve resbaladiza, pisa con cuidado; los miradores se aprecian menos.',
    foldUmbrella: 'Paraguas plegable o impermeable ligero.',
    rainProbPlan: 'Alta probabilidad de lluvia: lleva paraguas o impermeable y planea el recorrido cerca de sitios cubiertos.',
    rainGear: 'Paraguas o impermeable.',
    raincoat: 'Impermeable; mejor sin paraguas largo por el viento.',
    heat: 'Calor alto: reduce el tiempo al sol, pasea temprano o al atardecer y usa la sombra al mediodía.',
    uvPlan: 'Radiación ultravioleta alta: busca sombra y protégete la piel.',
    layer: 'Gran diferencia de temperatura entre el día y la noche: lleva una prenda ligera para abrigarte.',
    cold: 'Frío notable: abrigo grueso y bufanda.',
    mild: 'Temperaturas suaves: con ropa ligera basta; una capa extra por si refresca.',
    lightClothes: 'Ropa clara y transpirable.',
    windHigh: 'Viento fuerte (7+): evita bordes expuestos y objetos sueltos; consulta avisos locales y al operador de cualquier actividad.',
    wind56: 'Viento moderado a fuerte (5–6): sujeta sombreros y evita bordes expuestos; consulta condiciones con el operador si vas al mar.',
    sunny: 'Día despejado: ideal para el paseo al aire libre y para ver amaneceres y atardeceres desde los baluartes.',
    cloudy: 'Cielo nublado: luz suave, muy buena para fotos y para caminar sin sol intenso.',
    fog: 'Niebla: baja la visibilidad y la piedra está húmeda; camina con precaución y evita los bordes cerca del mar.',
    water: 'Botella de agua reutilizable.',
    sunGear: 'Protector solar, gafas de sol y gorra.',
    shoes: 'Calzado firme para la piedra irregular.',
  },
  en: {
    lightning: 'Thunderstorm: postpone elevated walking, seek safe shelter and check local notices.',
    waterClosed: 'In a storm, avoid exposed areas and check with the operator before any water activity.',
    heavyRain: 'Heavy rain: avoid low ground and slippery stone; check notices before going up. Bring a raincoat.',
    indoor: 'Moderate rain: prefer covered spaces (museums, arcades) and shorten the open-air stretch.',
    lightRain: 'Light rain: the stone gets slippery, step carefully; viewpoints are less enjoyable.',
    foldUmbrella: 'Packable umbrella or light rain shell.',
    rainProbPlan: 'High rain chance: bring an umbrella or raincoat and plan the route near covered spots.',
    rainGear: 'Umbrella or raincoat.',
    raincoat: 'Raincoat; skip the long umbrella in wind.',
    heat: 'High heat: limit sun time, walk early or at sunset, and use shade at midday.',
    uvPlan: 'High UV: seek shade and protect your skin.',
    layer: 'Big day–night temperature swing: bring a light layer you can add or remove.',
    cold: 'Noticeably cold: warm coat and scarf.',
    mild: 'Mild temperatures: light clothing is enough; an extra layer if it cools.',
    lightClothes: 'Light, breathable clothing.',
    windHigh: 'Strong wind (7+): avoid exposed edges and loose objects; check local notices and your activity operator.',
    wind56: 'Moderate to strong wind (5–6): secure hats and avoid exposed edges; ask your operator about conditions before going to sea.',
    sunny: 'Clear day: great for the open-air walk and for sunrise or sunset from the bastions.',
    cloudy: 'Overcast: soft light, ideal for photos and long walks without harsh sun.',
    fog: 'Fog: visibility drops and stone is damp; walk carefully and avoid edges near the sea.',
    water: 'Refillable water bottle.',
    sunGear: 'Sunscreen, sunglasses, and a hat.',
    shoes: 'Firm shoes for the uneven stone.',
  },
} as const;

export function buildAdvice(data: OpenMeteoResponse, lang: Lang): Advice {
  const c = COPY[lang];
  const daily = data.daily;
  const code = daily.weather_code?.[0] ?? 0;
  const prob = daily.precipitation_probability_max?.[0] ?? 0;
  const maxT = daily.temperature_2m_max?.[0] ?? 0;
  const minT = daily.temperature_2m_min?.[0] ?? 0;
  const uv = daily.uv_index_max?.[0] ?? 0;
  const wind = daily.wind_speed_10m_max?.[0] ?? 0;
  const lvl = beaufort(wind);
  const rl = rainLevel(code);

  const alert: string[] = [];
  const risk: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];

  // Rain / storms (multi-select; only relevant lines show)
  const rainItems: string[] = [];
  if (rl === 'storm') {
    alert.push(c.lightning);
    plan.push(c.waterClosed);
  } else if (rl === 'heavy' || rl === 'moderate') {
    risk.push(c.heavyRain);
    plan.push(c.indoor);
    rainItems.push(c.raincoat);
  } else if (rl === 'light' || rl === 'drizzle') {
    plan.push(c.lightRain);
    rainItems.push(c.foldUmbrella);
  }
  if (prob >= 60 && rainItems.length === 0 && rl !== 'storm') {
    plan.push(c.rainProbPlan);
    rainItems.push(c.rainGear);
  }
  items.push(...rainItems);

  // Temperature
  if (maxT >= 32) {
    plan.push(c.heat);
    outfit.push(c.lightClothes);
    items.push(c.water);
  }
  if (maxT - minT > 8) outfit.push(c.layer);
  if (maxT <= 10) outfit.push(c.cold);
  if (maxT < 26 && maxT > 10 && rl === 'none' && lvl < 5) outfit.push(c.mild);

  // UV
  if (uv >= 5) items.push(c.sunGear);
  if (uv >= 8) plan.push(c.uvPlan);

  // Wind
  if (lvl >= 7) alert.push(c.windHigh);
  else if (lvl >= 5) risk.push(c.wind56);

  // Sky condition (when not raining)
  if (rl === 'none') {
    if (code === 0 || code === 1) plan.push(c.sunny);
    else if (code === 3) plan.push(c.cloudy);
  }

  // Fog
  if (code === 45 || code === 48) risk.push(c.fog);

  // Always-useful default
  items.push(c.shoes);

  return { alert, risk, outfit, plan, items };
}

export function validWeather(value: unknown): value is OpenMeteoResponse {
  if (!value || typeof value !== 'object') return false;
  const data = value as OpenMeteoResponse;
  if (!data.current || !data.daily) return false;
  const finite = (n: unknown) => typeof n === 'number' && Number.isFinite(n);
  if (!['temperature_2m','apparent_temperature','relative_humidity_2m','precipitation','weather_code','wind_speed_10m','is_day'].every(k => finite((data.current as unknown as Record<string, unknown>)[k]))) return false;
  const d = data.daily;
  return Array.isArray(d.time) && d.time.length === 7 && d.time.every(t => /^\d{4}-\d{2}-\d{2}$/.test(t)) && ['weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','wind_speed_10m_max','uv_index_max'].every(k => { const a = (d as unknown as Record<string, unknown>)[k]; return Array.isArray(a) && a.length === 7 && a.every(finite); });
}
