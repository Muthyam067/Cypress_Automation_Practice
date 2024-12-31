describe('env PracticePractice', () => {
    var userNameField = 'input[name="name"]';
    Cypress.config('env');

    it('env block',()=>{
        const a = Cypress.env('staging');
        cy.log(a);
        cy.log(Cypress.env('baseUrl'))


    })
});