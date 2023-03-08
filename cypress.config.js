const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser = {}, args) => {

        if (browser.name === 'edge') {
          args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
        }
        return args;
        
      })
        
    },
    baseUrl:"https://testautomationpractice.blogspot.com/",
  },
});
