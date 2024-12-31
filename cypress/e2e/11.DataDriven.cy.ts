describe('Data Driven Practice', () => {

    it('Read Data from file',()=>{

        cy.readFile('ReadData.json').then((data)=>{

            data.forEach((values: any)=>{
                cy.log(values.username);
                cy.log(values.password);
            })
        })
    });

    it('Write Data into file',()=>{
        const  abc ={
            "username": "user1",
            "password": "password1"
          };
        cy.writeFile('writeData.json', abc);
        
    });

   
});