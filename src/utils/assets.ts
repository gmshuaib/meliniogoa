/**
 * Self-contained inline noise/grain texture.
 *
 * Replaces the external `https://grainy-gradients.vercel.app/noise.svg` URL,
 * which intermittently 404s and spams the console. This data-URI is the same
 * fractal-noise effect, bundled so there is no network dependency.
 *
 * Usage: `style={{ backgroundImage: NOISE_TEXTURE_URL }}`
 */
export const NOISE_TEXTURE_URL =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
