import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});