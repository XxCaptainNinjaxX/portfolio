import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // base: "/projects/portfolio/",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true,
  },
});

// https://vite.dev/config/
