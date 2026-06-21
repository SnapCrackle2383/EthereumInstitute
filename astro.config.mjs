// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom apex domain served from GitHub Pages.
  // Because we use a custom domain at the root, `base` stays '/'.
  site: 'https://ethereuminstitutional.org',
});
