const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl:'https://buger-eats.vercel.app',
      viewportWidth: 1440,
      viewportWidth: 900,
      setupNodeEvents(on, config){
        
      }
    },
  });