import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  
  e2e: {
    baseUrl: "https://developer.mozilla.org",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
