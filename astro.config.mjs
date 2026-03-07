import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://luexi.github.io",
  base: "/CHAI",
  output: "static",
  server: {
    host: true,
    port: 8080,
  },
  integrations: [react(), tailwind()],
});
