import { buildWeatherUrl, validWeather } from './lib/weather';

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const CACHE_TTL = 600; // seconds (~10 minutes)

type Ctx = { waitUntil(promise: Promise<unknown>): void };

async function handleWeather(ctx: Ctx): Promise<Response> {
  const apiUrl = buildWeatherUrl();
  const cache = (globalThis as unknown as { caches?: { default: Cache } }).caches?.default;
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
    const upstream = await fetch(apiUrl, { signal: AbortSignal.timeout(8000), cf: { cacheTtl: CACHE_TTL } } as RequestInit);
    if (!upstream.ok) throw new Error(`upstream ${upstream.status}`);
    const data: unknown = await upstream.json();
    if (!validWeather(data)) throw new Error('invalid forecast');
    const response = new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': `public, max-age=${CACHE_TTL}`,
        'access-control-allow-origin': '*',
      },
    });
    if (cache) ctx.waitUntil(cache.put(cacheKey, response.clone()).catch(() => {}));
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
    if (url.protocol === 'http:' && url.hostname === 'wallsofcartagena.com') { url.protocol = 'https:'; return Response.redirect(url.href, 308); }
    if (['/404', '/404.html', '/404/'].includes(url.pathname)) {
      // Missing-path fallback lets ASSETS serve its custom404 without the /404.html canonical redirect.
      const fallback = new URL('/__wall_guide_not_found__', url);
      const response = await env.ASSETS.fetch(new Request(fallback, request));
      const headers = new Headers(response.headers);
      headers.delete('location'); headers.set('x-robots-tag', 'noindex'); headers.set('cache-control', 'no-store');
      return new Response(request.method === 'HEAD' ? null : response.body, { status: 404, headers });
    }
    if (url.pathname === '/api/weather') {
      return handleWeather(ctx);
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) { const headers = new Headers(response.headers); headers.set('x-robots-tag', 'noindex'); headers.set('cache-control', 'no-store'); headers.delete('location'); return new Response(request.method === 'HEAD' ? null : response.body, { status: 404, headers }); }
    return response;
  },
};
