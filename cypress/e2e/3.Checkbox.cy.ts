describe('checkbox Handling in cypress', () => {

    var checkBoxes = '[type="checkbox"] +span'
    var checkBoxInput = '[type="checkbox"]'
    // Print Check boxes by cypress
    it('Print all Check boxes by Cypress Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        cy.get(checkBoxes).each(($checkBoxElements) => {
            cy.wrap($checkBoxElements).invoke('text').then((checkBoxLabel) => {
                cy.log("Printing checkboxes by using cypress: " + checkBoxLabel);
            })
        })
    });
    // Print  Check boxes by JQUERY
    it('Print all Check boxes by JQUERY Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        cy.get(checkBoxes).each(($checkBoxElements) => {
            const checkBoxEle = $checkBoxElements.text();
            cy.log("Printing Check boxes by using jquery: " + checkBoxEle);
        })
    })

    // check Check boxes by cypress
    it('Check  and uncheck Check boxes by  Cypress Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        cy.get(checkBoxInput).each(($checkBoxElements) => {
            cy.wrap($checkBoxElements).find('+span').invoke('text').then((checkBoxLabel) => {
                if ((checkBoxLabel === 'WhatsApp') || (checkBoxLabel == 'Flipper')) {
                    cy.wrap($checkBoxElements).check({ force: true });
                }
            })
        })
        // Print  checked Checkboxes
        var checkedCount = 0;
        cy.get(checkBoxInput).each(($checkBoxElements) => {
            const bool = $checkBoxElements.prop('checked');
            if (bool == true) {
                checkedCount++
            }
        })
        cy.log(`Total number of checked check boxes: ${checkedCount}`);

        // UN CHECK
        cy.get(checkBoxInput).each(($checkBoxElements) => {
            const bool = $checkBoxElements.prop('checked');
            if (bool == true) {
                cy.wrap($checkBoxElements).uncheck({force: true});
                cy.wrap($checkBoxElements).should('not.be.checked');

            }
        })

    });

});