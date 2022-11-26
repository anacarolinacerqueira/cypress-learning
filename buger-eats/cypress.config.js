const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    baseUrl:'https://buger-eats.vercel.app',
      setupNodeEvents(on, config){

      }
    },
  });