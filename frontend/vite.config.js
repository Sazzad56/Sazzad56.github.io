import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GITHUB_PAGES_BASE is set by the deploy workflow to "/<repo-name>/" for a
// project page (e.g. github.com/you/portfolio -> you.github.io/portfolio/).
// Leave it unset (defaults to "/") for a user/profile page repo named
// exactly "<your-username>.github.io", which is served from the domain root.
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});
