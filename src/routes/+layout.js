/**
 * Setting this to false here (in root layout) disables SSR for the entire app,
 * effectively turning it into a Single-Page Application (SPA), rendering purely in the browser.
 */
export const ssr = false;

/**
 * This prerenders the application at build time, so the entire app can be deployed as static files.
 * This is needed for adapter-static to work.
 */
export const prerender = true;