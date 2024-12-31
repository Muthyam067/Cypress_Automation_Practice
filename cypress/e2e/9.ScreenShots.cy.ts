describe('Screenshot Handling Practice', () => {
   var userNameField ='input[name="name"]';

    it('page screenshot',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.wait(3000);
        const date = new Date();
        cy.screenshot(`PageScrenshot${date}`,{capture:'fullPage'});
        //(property) capture?: "fullPage" | "runner" | "viewport" | undefined


    })

    it('Element screenshot',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.wait(3000);
        cy.get(userNameField).screenshot('ElementScrenshot',{capture:'fullPage'});

    })

    it.only('Screnshot for failure',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        const url = cy.url();
        cy.url().should('contains','hello');

        //run by npx cypress run --spec file  so it will take screenshot
    })
});