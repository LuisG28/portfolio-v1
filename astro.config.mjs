import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: 'https://LuisG28.github.io',
  base: 'portfolio-v1',
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  }
});