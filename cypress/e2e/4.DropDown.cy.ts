describe('DropDown Handling Practice', () => {
    var dropdown = 'select[id="select2"]'

    it('Select and deSelect for single drop down', () => {
        cy.visit('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        cy.get('select[id="select2"]').select('Female',{force: true});
        cy.get('select[id="select2"]').select('',{force: true});
        cy.get('select[id="select2"]').select('Male',{force: true});
        cy.get('select[id="select2"]').find('option').eq(1).should('be.selected');
    });

    it('Select and deSelect for Multi select drop down', () => {
        cy.visit('https://demoqa.com/select-menu');
         cy.get('select[id="select2"]').select(["option1","option2","opyion3"]);
         // deselect all
         cy.get('select[id="select2"]').select('');     
    });
});