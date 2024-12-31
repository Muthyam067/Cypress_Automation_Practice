describe('Custom command Practice', () => {

    it('Custom command for login',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.readFile('loginData.json').then((data) => {
            data.forEach((ele: any) => {
               // cy.orangehrmLogin(ele.username, ele.password);

            });
        })
    })
});