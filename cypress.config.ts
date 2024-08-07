import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.nytimes.com/games/wordle/index.html",
    viewportHeight: 1280,
    viewportWidth: 720,
    defaultCommandTimeout: 5000
  },
});
