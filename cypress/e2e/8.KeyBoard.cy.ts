describe('Key Board Handling Practice', () => {
   var userNameField = 'input[name="name"]';
   var emailField = 'input[name="email"]';
   var passWordField ='input[name="password"]';
   var registerButton = 'button'

    it('BackSpace and enter',()=>{
        cy.visit('https://demoapps.qspiders.com/ui?scenario=1');
        cy.get(userNameField).type('Admin').type('{backspace}');
        cy.get(userNameField).type('{enter}')
    });

    it.only('Copy and Paste',()=>{
        cy.visit('https://demoapps.qspiders.com/ui?scenario=1');

        cy.get(userNameField).type('Admin').trigger('keydown')

    });
});