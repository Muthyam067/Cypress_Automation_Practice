const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //screenshotOnRunFailure:true,
  screenshotsFolder:'cypress/abcd',
  //video:true,
  //retries:0,
  videosFolder: 'cypress/videos',
  //videoUploadOnPasses:true, 
  defaultCommandTimeout:50000,
  pageLoadTimeout:60000,
  // env: {
  //   configFile: 'dev', // Default to 'dev'
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   // baseUrl:'https://demoapps.qspiders.com/ui',
  },
});
