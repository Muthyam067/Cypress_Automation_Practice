describe('Mouse Handling Practice', () => {
    var doubleClick = 'button[id="dblclick"]';
    var rightClick = 'button[id="rightclick"]';
    var source='div[id="draggableElement"]'
    var destination='div[id="droppableElement"]'

    it('Double click',()=>{

        cy.visit('https://vinothqaacademy.com/mouse-event');
        cy.get(doubleClick).trigger('dblclick');
        cy.get('p[id="demo"]').invoke('text').then((text)=>{
            cy.log("Double clik action performed:",text);
        })
    })
    it('Right click',()=>{
        cy.visit('https://vinothqaacademy.com/mouse-event');
        cy.get(rightClick).trigger('contextmenu');
        cy.get("ul center").eq(0).invoke('text').then((text)=>{
            cy.log("right clik action performed:",text);
        })
    })
    it('Drag and Drop',()=>{
        cy.visit('https://vinothqaacademy.com/mouse-event');
         cy.get(source).trigger('mouseover').trigger('mousedown').trigger('mousemove');
        cy.get(destination).trigger('mouseup');
    })

    it('Mouse Over',()=>{
        cy.visit('https://vinothqaacademy.com/mouse-event');
         cy.get('[title="Enter First Name"]').trigger('mouseover')

        //  cy.get('selector').click('left');
        // cy.get('selector').rightclick();
        // cy.get('selector').dblclick('right');
        // cy.get('selector').trigger('mouseenter');//mousedown,mouseup,mousemove,mouseover,mouseenter
        // cy.get('selector').scrollIntoView().click();
        // cy.get('f').trigger('dblclick')
        // cy.get('f').trigger('contextmenu')//right click
        // cy.get('f').trigger('click');
        // cy.get('f').trigger('copy')
        // cy.get('f').trigger('play')
        // cy.get('f').trigger('drag')
        // cy.get('f').trigger('keydown');
        // cy.get('f').trigger('scroll')
        // cy.get('f').trigger('paste');
    })
   
});

