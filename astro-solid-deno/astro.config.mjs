import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    port: 3000,
  }),
  integrations: [solidJs()],
});
