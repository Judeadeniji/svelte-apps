import { partytownVite } from "@builder.io/partytown/utils";
import { sveltekit } from "@sveltejs/kit/vite";
import { join } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    sveltekit(),
    partytownVite({
      dest: join(process.cwd(), ".svelte-kit/output/client/~partytown"),
    }),
  ],
});
