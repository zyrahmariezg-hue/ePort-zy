/**
 * Keeps public assets valid when the portfolio is served from its GitHub Pages
 * project subpath as well as from the Vite development server.
 */
export function publicAsset(filename: string) {
  return `${import.meta.env.BASE_URL}${filename}`
}
