describe('Base Url Practice', () => {
    Cypress.config('baseUrl','https://demoapps.qspiders.com/ui')
   
    it('BaseURL',()=>{
        cy.visit('/');
    });
});