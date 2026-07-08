import { defineConfig, ProxyOptions  } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const host = process.env.TAURI_DEV_HOST;

const apiProxyOptions: ProxyOptions = {
  target: 'http://localhost:5000/api',
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/api/, ''),
};

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [tsconfigPaths(),react()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available

  
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
   proxy: {
      '/api': apiProxyOptions,
    },
}));
