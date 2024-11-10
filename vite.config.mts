import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  define: {
    "process.env.VITE_GEENEE_SDK_TOKEN_DEV": JSON.stringify(
      process.env.VITE_GEENEE_SDK_TOKEN_DEV
    ),
    "process.env.VITE_GEENEE_SDK_TOKEN_PROD": JSON.stringify(
      process.env.VITE_GEENEE_SDK_TOKEN_PROD
    ),
    "process.env.VITE_GEENEE_REGISTRY": JSON.stringify(
      process.env.VITE_GEENEE_REGISTRY
    ),
    "process.env.VITE_GEENEE_AUTH_TOKEN": JSON.stringify(
      process.env.VITE_GEENEE_AUTH_TOKEN
    ),
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
});
