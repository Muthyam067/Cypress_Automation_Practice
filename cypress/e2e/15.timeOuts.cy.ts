Cypress.config('defaultCommandTimeout',200);
describe('Time outs Practice', () => {
    Cypress.config('defaultCommandTimeout',5000);
    const register ={
        userNameField : 'input[name="name"]',
        emailField : 'input[name="email"]',
        passWordField :'input[name="password"]',
        registerButton : 'button'
       }

    it('Time out practice 1',{defaultCommandTimeout:5000},() => {
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).should('be.disabled');
        cy.get(register.userNameField,{timeout:50000}).type("hello");
        cy.get('button',{timeout:4000})

    });
});
/*
. 1. Default Command Timeout
Description: The maximum time Cypress will wait for a single command to complete.
Default: 4000ms (4 seconds).

2. Page Load Timeout
Description: The maximum time Cypress waits for a page to load after a cy.visit() or a form submission.
Default: 60000ms (60 seconds).
Customization: Global or specific to cy.visit().
*/