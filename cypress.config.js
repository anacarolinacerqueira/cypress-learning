const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  e2e: {
    projectId: "wp11gg",
    viewportWidth: 1366,
    viewportHeight: 768,
    baseUrl: 'https://buger-eats.vercel.app',
    setupNodeEvents(on, config) {
      //on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
    env: {
      "allureResultsPath": "allure-results",
      allureReuseAfterSpec: true
    }
  },
});