describe('Pop ups and Alert Handling Practice', () => {
    var alertBox = "button[id='buttonAlert2']"
    var confirm = "button[id='buttonAlert5']"
    var prompt = "button[id='buttonAlert1']"

    it('Alert Handle', () => {
        cy.visit('https://demoapps.qspiders.com/ui/alert?sublist=0');
        cy.get(alertBox).click({ force: true });

        cy.on('window:alert', (alertMessage) => {

        });
        cy.wait(5000);
        cy.get('p[class="text-center pt-2"]').invoke('text').then((text) => {
            cy.log("printing alert message:", text);
        })
        cy.get('p[class="text-center pt-2"]').should('have.text','Alert Button Clicked')
    })

    it('Confirm Handle', () => {
        cy.visit('https://demoapps.qspiders.com/ui/alert?sublist=0');
        cy.get('a').contains('Confirm').click({force: true});
        cy.get(confirm).click({ force: true });

        cy.on('window:confirm', (alertMessage) => {
            return false;

        });
        cy.wait(5000);
        cy.get('p[class="pt-2 text-center"]').invoke('text').then((text) => {
            cy.log("printing alert message:", text);
        })
    })

    it.only('Prompt  Handle', () => {
        cy.visit('https://demoapps.qspiders.com/ui/alert?sublist=0');
        cy.get('a').contains('Prompt').click({force: true});
        cy.get(prompt).click({ force: true });
        cy.on('window:confirm',((alertmessage)=>{
            return false
        }))
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("hello world");

        })
    })
});