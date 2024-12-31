describe('Retry Practice', () => {
    
    var userNameField = 'input[name="name"]';

    it('retry Practice',()=>{
        cy.visit('https://demoapps.qspiders.com/ui?scenario=1');
        cy.log("Retry started");
        cy.get(userNameField).should('be.disabled');
    })
});
