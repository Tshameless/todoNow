import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 @ 为 src 目录的别名
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
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
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
    proxy: { 
      '/admin_apis': { 
       target:"http://192.168.1.204:7101/",// "http://124.220.76.87:8899" 
      //  target:"http://192.168.1.50:7101/",// "http://124.220.76.87:8899" //春雨本机
      //  target:"http://175.178.89.211:7785",// "http://124.220.76.87:8899" 
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/admin_apis/, '')
      }
    }
  },


}));
