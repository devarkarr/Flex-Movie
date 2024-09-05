import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@/client-store": path.resolve(__dirname, "src/store/client"),
        "@/server-store": path.resolve(__dirname, "src/store/server/features"),
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
