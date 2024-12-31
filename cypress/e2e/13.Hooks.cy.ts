describe('Hooks Practice', () => {

    beforeEach(()=>{
        cy.log("File level before Each");
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.url().then((url)=>{
    cy.log("first ur:",url);
  })
    })
    beforeEach(()=>{
        cy.log("File level After Each");
        Cypress.config('video')
    })
    before(()=>{
        cy.log("File level before ");
    })
    before(()=>{
        cy.log("File level After");
    })

    it('first',()=>{
        cy.log("first it block");
    })
    it('second',()=>{
        cy.log("first it block");
    })

});