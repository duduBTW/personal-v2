/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import nextTranslate from "next-translate";

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

export default nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
});
