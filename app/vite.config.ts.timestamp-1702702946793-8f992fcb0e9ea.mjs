// vite.config.ts
import react from "file:///C:/Src/interviews/Vite/example/.yarn/__virtual__/@vitejs-plugin-react-virtual-265c830a4c/5/Users/amber/AppData/Local/Yarn/Berry/cache/@vitejs-plugin-react-npm-4.2.0-d680dc596c-10.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { URL, fileURLToPath } from "node:url";
import { loadEnv } from "file:///C:/Src/interviews/Vite/example/.yarn/__virtual__/vite-virtual-c8ee08b8d1/5/Users/amber/AppData/Local/Yarn/Berry/cache/vite-npm-5.0.4-2cf5907a33-10.zip/node_modules/vite/dist/node/index.js";
import { defineProject } from "file:///C:/Src/interviews/Vite/example/.yarn/__virtual__/vitest-virtual-8749a77544/5/Users/amber/AppData/Local/Yarn/Berry/cache/vitest-npm-0.34.6-48e1d6f80a-10.zip/node_modules/vitest/dist/config.js";
var __vite_injected_original_import_meta_url = "file:///C:/Src/interviews/Vite/example/app/vite.config.ts";
var publicEnvVars = [
  "APP_ENV",
  "APP_NAME",
  "APP_ORIGIN",
  "GOOGLE_CLOUD_PROJECT",
  "FIREBASE_APP_ID",
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "GA_MEASUREMENT_ID"
];
var vite_config_default = defineProject(async ({ mode }) => {
  const envDir = fileURLToPath(new URL("..", __vite_injected_original_import_meta_url));
  const env = loadEnv(mode, envDir, "");
  publicEnvVars.forEach((key) => {
    if (!env[key])
      throw new Error(`Missing environment variable: ${key}`);
    process.env[`VITE_${key}`] = env[key];
  });
  return {
    cacheDir: fileURLToPath(new URL("../.cache/vite-app", __vite_injected_original_import_meta_url)),
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            firebase: ["firebase/analytics", "firebase/app", "firebase/auth"],
            react: ["react", "react-dom", "react-router-dom"]
          }
        }
      }
    },
    plugins: [
      // The default Vite plugin for React projects
      // https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"]
        }
      })
    ],
    server: {
      proxy: {
        "/api": {
          target: process.env.LOCAL_API_ORIGIN ?? process.env.API_ORIGIN,
          changeOrigin: true
        }
      }
    },
    test: {
      ...{ cache: { dir: "../.cache/vitest" } },
      environment: "happy-dom"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxTcmNcXFxcaW50ZXJ2aWV3c1xcXFxWaXRlXFxcXGV4YW1wbGVcXFxcYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxTcmNcXFxcaW50ZXJ2aWV3c1xcXFxWaXRlXFxcXGV4YW1wbGVcXFxcYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9TcmMvaW50ZXJ2aWV3cy9WaXRlL2V4YW1wbGUvYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgVVJMLCBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgeyBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGRlZmluZVByb2plY3QgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiO1xuXG5jb25zdCBwdWJsaWNFbnZWYXJzID0gW1xuICBcIkFQUF9FTlZcIixcbiAgXCJBUFBfTkFNRVwiLFxuICBcIkFQUF9PUklHSU5cIixcbiAgXCJHT09HTEVfQ0xPVURfUFJPSkVDVFwiLFxuICBcIkZJUkVCQVNFX0FQUF9JRFwiLFxuICBcIkZJUkVCQVNFX0FQSV9LRVlcIixcbiAgXCJGSVJFQkFTRV9BVVRIX0RPTUFJTlwiLFxuICBcIkdBX01FQVNVUkVNRU5UX0lEXCIsXG5dO1xuXG4vKipcbiAqIFZpdGUgY29uZmlndXJhdGlvbi5cbiAqIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVByb2plY3QoYXN5bmMgKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudkRpciA9IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4uXCIsIGltcG9ydC5tZXRhLnVybCkpO1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIGVudkRpciwgXCJcIik7XG5cbiAgcHVibGljRW52VmFycy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIWVudltrZXldKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6ICR7a2V5fWApO1xuICAgIHByb2Nlc3MuZW52W2BWSVRFXyR7a2V5fWBdID0gZW52W2tleV07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FjaGVEaXI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4uLy5jYWNoZS92aXRlLWFwcFwiLCBpbXBvcnQubWV0YS51cmwpKSxcblxuICAgIGJ1aWxkOiB7XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICAgZmlyZWJhc2U6IFtcImZpcmViYXNlL2FuYWx5dGljc1wiLCBcImZpcmViYXNlL2FwcFwiLCBcImZpcmViYXNlL2F1dGhcIl0sXG4gICAgICAgICAgICByZWFjdDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC1yb3V0ZXItZG9tXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBUaGUgZGVmYXVsdCBWaXRlIHBsdWdpbiBmb3IgUmVhY3QgcHJvamVjdHNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS1wbHVnaW4tcmVhY3QvYmxvYi9tYWluL3BhY2thZ2VzL3BsdWdpbi1yZWFjdC9SRUFETUUubWRcbiAgICAgIHJlYWN0KHtcbiAgICAgICAganN4SW1wb3J0U291cmNlOiBcIkBlbW90aW9uL3JlYWN0XCIsXG4gICAgICAgIGJhYmVsOiB7XG4gICAgICAgICAgcGx1Z2luczogW1wiQGVtb3Rpb24vYmFiZWwtcGx1Z2luXCJdLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcblxuICAgIHNlcnZlcjoge1xuICAgICAgcHJveHk6IHtcbiAgICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LkxPQ0FMX0FQSV9PUklHSU4gPz8gcHJvY2Vzcy5lbnYuQVBJX09SSUdJTixcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB0ZXN0OiB7XG4gICAgICAuLi57IGNhY2hlOiB7IGRpcjogXCIuLi8uY2FjaGUvdml0ZXN0XCIgfSB9LFxuICAgICAgZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxPQUFPLFdBQVc7QUFDdFQsU0FBUyxLQUFLLHFCQUFxQjtBQUNuQyxTQUFTLGVBQWU7QUFDeEIsU0FBUyxxQkFBcUI7QUFIeUosSUFBTSwyQ0FBMkM7QUFLeE8sSUFBTSxnQkFBZ0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQU1BLElBQU8sc0JBQVEsY0FBYyxPQUFPLEVBQUUsS0FBSyxNQUFNO0FBQy9DLFFBQU0sU0FBUyxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFDM0QsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLEVBQUU7QUFFcEMsZ0JBQWMsUUFBUSxDQUFDLFFBQVE7QUFDN0IsUUFBSSxDQUFDLElBQUksR0FBRztBQUFHLFlBQU0sSUFBSSxNQUFNLGlDQUFpQyxHQUFHLEVBQUU7QUFDckUsWUFBUSxJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHO0FBQUEsRUFDdEMsQ0FBQztBQUVELFNBQU87QUFBQSxJQUNMLFVBQVUsY0FBYyxJQUFJLElBQUksc0JBQXNCLHdDQUFlLENBQUM7QUFBQSxJQUV0RSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixjQUFjO0FBQUEsWUFDWixVQUFVLENBQUMsc0JBQXNCLGdCQUFnQixlQUFlO0FBQUEsWUFDaEUsT0FBTyxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxVQUNsRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsU0FBUztBQUFBO0FBQUE7QUFBQSxNQUdQLE1BQU07QUFBQSxRQUNKLGlCQUFpQjtBQUFBLFFBQ2pCLE9BQU87QUFBQSxVQUNMLFNBQVMsQ0FBQyx1QkFBdUI7QUFBQSxRQUNuQztBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVEsUUFBUSxJQUFJLG9CQUFvQixRQUFRLElBQUk7QUFBQSxVQUNwRCxjQUFjO0FBQUEsUUFDaEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsTUFBTTtBQUFBLE1BQ0osR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixFQUFFO0FBQUEsTUFDeEMsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
