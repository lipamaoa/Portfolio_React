import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import pages from "vite-plugin-react-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), pages()],
});
