import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // Vite path-joins its own asset URLs but pastes `base` raw into
    // %BASE_URL% and import.meta.env.BASE_URL. A `--base` without a trailing
    // slash therefore yields "/projects/QA/portfoliofavicon.ico". Normalize
    // here, in the config hook, so both consumers see the same value.
    {
      name: "normalize-base-trailing-slash",
      config(userConfig) {
        const base = userConfig.base;
        if (typeof base === "string" && !base.endsWith("/")) {
          return { base: `${base}/` };
        }
      },
    },
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: true,
  },
});

// https://vite.dev/config/
