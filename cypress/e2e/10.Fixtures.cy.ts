describe('Fixtures Handling Practice', () => {

    it('Fixture file data read',()=>{

        cy.fixture('example.json').then((data)=>{
            cy.log(data.name);
            cy.log( data.email);
            cy.log(data.body);
        })
    })
    it('Fixture file of Multiple data read',()=>{
        cy.fixture('multipledata.json').then((data)=>{
            data.forEach((elements: any)=>{
                cy.log(elements)
            });
            
        })
    })

    it.only('Fixture file of Multiple data read as objects',()=>{
        cy.fixture('multipleDataObjects.json').then((data)=>{
            cy.log(data);
            
        })
    })
});
