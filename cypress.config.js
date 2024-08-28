const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://person-front.onrender.com/",
    setupNodeEvents(on, config) {
      // Nothing
    },
    chromeWebSecurity: false
  },
});
