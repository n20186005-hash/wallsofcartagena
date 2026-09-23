import { buildWeatherUrl, type OpenMeteoResponse } from './lib/weather';

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const CACHE_TTL = 600; // seconds (~10 minutes)

type Ctx = { waitUntil(promise: Promise<unknown>): void };

async function handleWeather(ctx: Ctx): Promise<Response> {
  const apiUrl = buildWeatherUrl();
  const cache = (globalThis as { caches?: { default: Cache } }).caches?.default;
  const cacheKey = new Request(apiUrl);

  if (cache) {
    try {
      const cached = await cache.match(cacheKey);
      if (cached) return cached;
    } catch {
      /* ignore cache read errors */
    }
  }

  try {
    const upstream = await fetch(apiUrl, { cf: { cacheTtl: CACHE_TTL } } as RequestInit);
    if (!upstream.ok) throw new Error(`upstream ${upstream.status}`);
    const data = (await upstream.json()) as OpenMeteoResponse;
    const response = new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': `public, max-age=${CACHE_TTL}`,
        'access-control-allow-origin': '*',
      },
    });
    if (cache) ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch {
    return new Response(JSON.stringify({ error: 'unavailable' }), {
      status: 502,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') {
      return handleWeather(ctx);
    }
    return env.ASSETS.fetch(request);
  },
};
