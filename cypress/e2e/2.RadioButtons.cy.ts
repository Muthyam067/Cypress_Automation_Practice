describe('Radio boxes Handling Practice', () => {
    var radioButtons = '[type="radio"] +span'
    var radioButtonInput = '[type="radio"]'

    // Print radio buttons by cypress
    it('Print all radio buttons by Cypress Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/radio?sublist=0');
        cy.get(radioButtons).each(($radioElements) => {
            cy.wrap($radioElements).invoke('text').then((radioButtonLabel) => {
                cy.log("Printing radio button by using cypress: " + radioButtonLabel);
            })
        })
    });
    // Print radio buttons by JQUERY
    it('Print all radio buttons by JQUERY Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/radio?sublist=0');
        cy.get(radioButtons).each(($radioElements) => {
            const radioEle = $radioElements.text();
            cy.log("Printing radio button by using jquery: " + radioEle);
        })
    })

    // Print radio buttons by HTMl
    it('Print all radio buttons by HTML Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/radio?sublist=0');
        cy.get(radioButtons).then(($radioElements) => {
            $radioElements.map((index, ele) => {
                cy.log("Printing radio button by using html: " + ele.textContent);
            })
        })
    })

    // check radio buttons by cypress
    it('Check Radio buttons by Cypress Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/radio?sublist=0');
        cy.get(radioButtonInput).each(($radioElements) => {
            cy.wrap($radioElements).find('+span').invoke('text').then((radioButtonLabel) => {
                if (radioButtonLabel === 'Credit/Debit/ATM card') {
                    cy.wrap($radioElements).check({ force: true });
                }
            })
        })
    });

    // check radio buttons by Jquery
    it('Check Radio buttons by JQUERY Way', () => {
        cy.visit('https://demoapps.qspiders.com/ui/radio?sublist=0');
        cy.get(radioButtonInput).each(($radioElements) => {
           const text =  $radioElements.siblings('span').text();
           if(text=='Net Banking'){
            cy.wrap($radioElements).check({force:true});
           }
            
        })
    });

     // Validations
     it('Validate radio buttons', () => {
        cy.visit('https://demoapps.qspiders.com/ui/radio?sublist=0');
        cy.get(radioButtonInput).should('have.length',8);
          
    });
});