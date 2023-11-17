import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  
  e2e: {
    baseUrl: "https://developer.mozilla.org",
    viewportHeight: 1280,
    viewportWidth: 720,
  },
});
