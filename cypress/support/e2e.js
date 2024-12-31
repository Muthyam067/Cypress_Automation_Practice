// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    if (err.message.includes('setPayment is not defined')) {
      return false;
    }
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors
    if (err.message.includes('Script error')) {
      return false;
    }
  });
  
// beforeEach(() => {
//   // Code to execute before each test, like resetting the state
//   cy.log("before each from global level")
//   cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//   cy.url().then((url)=>{
//     cy.log("first ur:",url);
//   })
//   cy.clearCookies();
//   cy.clearLocalStorage();
// });

// afterEach(() => {
//   cy.log("after each from global level")
//   // Code to execute after each test, like logging out or capturing logs
//  // cy.screenshot();
// });