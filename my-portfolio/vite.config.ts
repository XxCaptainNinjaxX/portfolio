import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
base: "/projects/portfolio/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
