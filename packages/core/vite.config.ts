import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyLib",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `breeze-form.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
    },
  },
});
