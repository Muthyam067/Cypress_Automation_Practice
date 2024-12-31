describe('Input Handling Practice',()=>{

   
    const register ={
     userNameField : 'input[name="name"]',
     emailField : 'input[name="email"]',
     passWordField :'input[name="password"]',
     registerButton : 'button'
    }
    // 1. Type - Cypress
    it('Register into Qspider demo site with Cypress Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
      cy.get(register.userNameField).type("Admin");
      cy.get(register.emailField).type("a@gmail.com");
      cy.get(register.passWordField).type("Admin@123",{force:true});
      cy.get(register.registerButton).contains('Register').click();
    })
    // 2. Type - jquery
    it('Register into Qspider demo site with JQUERY Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).then(($userNameField)=>{
            $userNameField.val("BDMIN");
        })
        cy.get(register.emailField).then(($emailField)=>{
            $emailField.val("b@gmail.com");
        })
        cy.get(register.passWordField).then(($passwordField)=>{
            $passwordField.val("BDMIN");
        })
        cy.get(register.registerButton).contains('Register').then(($registerButton)=>{
            cy.wrap($registerButton).click();
        })
    })
    // 1. GET ATTRIBUTES CYPRESS
    it('Get Attribute Values from Qspider demo site with Cypress Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).invoke('attr','placeholder').then((placeholder)=>{
            cy.log("Print placeholder of userNameFiled: "+placeholder);
        })
        cy.get(register.emailField).invoke('attr','placeholder').then((placeholder)=>{
            cy.log("Print placeholder of emailField: "+placeholder);
        })
        cy.get(register.passWordField).invoke('attr','placeholder').then((placeholder)=>{
            cy.log("Print placeholder of passWordField: "+placeholder);
        })
    })
    // 2. GET ATTRIBUTES BY JQUERY
    it('Get Attribute Values Qspider demo site with JQUERY Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).then(($userNameField)=>{
          const value=  $userNameField.attr('placeholder');
          cy.log("Print placeholder of userName field by JQUERY: "+value); 
        })
        cy.get(register.emailField).then(($emailField)=>{
            const value=  $emailField.attr('placeholder');
          cy.log("Print placeholder of passWordField by JQUERY: "+value);
        })
        cy.get(register.passWordField).then(($passwordField)=>{
            const value=  $passwordField.attr('placeholder');
          cy.log("Print placeholder of passWordField by JQUERY: "+value);
        }) 
    })
        // 2. GET ATTRIBUTES BY HTML
    it('Get Attribute Values Qspider demo site with HTML Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).then(($userNameField)=>{
          const field  =$userNameField.toArray();
          cy.log("Print placeholder of userName field by HTML: "+field[0].getAttribute('placeholder')); 
        })
        cy.get(register.emailField).then(($emailField)=>{
            const field=  $emailField.toArray();
          cy.log("Print placeholder of passWordField by HTML: "+field[0].getAttribute('placeholder'));
        })
        cy.get(register.passWordField).then(($passwordField)=>{
            const field=  $passwordField.toArray();
          cy.log("Print placeholder of passWordField by HTML: "+field[0].getAttribute('placeholder'));
        }) 
    })
      // 1. GET VALUES CYPRESS
      it('Get Values from Qspider demo site with Cypress Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).invoke('val').then((value)=>{
            cy.log("Print placeholder of userNameFiled: "+value?.toString.length);
        })
        cy.get(register.emailField).invoke('val').then((value)=>{
            cy.log("Print value of emailField: "+value?.toString.length);
        })
        cy.get(register.passWordField).invoke('val').then((value)=>{
            cy.log("Print value of passWordField: "+value?.toString.length);
        })
    })

      // 2. VALUES - JQUERy
      it('Register into Qspider demo site with JQUERY Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
        cy.get(register.userNameField).then(($userNameField)=>{
           const value = $userNameField.val();
            cy.log("Print value of userNameField by Jquery way: "+value?.toString.length);
        })
        cy.get(register.emailField).then(($emailField)=>{
            const value = $emailField.val();
            cy.log("Print value of emailField  by Jquery way: "+value?.toString.length);
        })
        cy.get(register.passWordField).then(($passwordField)=>{
            const value = $passwordField.val();
            cy.log("Print value of passWordField  by Jquery way: "+value?.toString.length);
        })    
    })

    // USAGE OF EQ
    it('Register into Qspider demo site with Cypress Way by using eq',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
      cy.get('input').eq(0).type("Admin");
      cy.get('input').eq(1).type("a@gmail.com");
      cy.get('input').eq(0).type("Admin@123",{force:true});
      cy.get('button').contains('Register').click();
    })

    // ELEMENT STATES BY CYPRESS
    it('States of elements in Qspider demo site with Cypress Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
      cy.get(register.userNameField).should('be.visible');
      cy.get(register.emailField).should('be.enabled');
      cy.get(register.passWordField).should('not.be.disabled');
      cy.get(register.passWordField).should('not.be.focused');

      //attribute
      cy.get(register.userNameField).type("entered text");
      cy.get(register.userNameField).should('contain.value','text');
      cy.get('[type="submit"]').should('contain.text','Register');
      cy.get('[type="submit"]').should('contain','Register');
      cy.get(register.userNameField).should('contain.value','ter');
      cy.get(register.userNameField).should('have.attr','name');
      cy.get(register.userNameField).should('have.value','entered text');
      cy.get(register.userNameField).should('have.attr', 'name','name');
      //cy.get(register.userNameField).should('have.class','id');
    })   
    
    it('States of elements in  Qspider demo site with JQUERY Way',()=>{
        cy.visit('https://demoapps.qspiders.com/ui');
      cy.get(register.userNameField).then(($element)=>{

        const isVisible =$element.is(':visible');
        const isEnabled = $element.is(':enabled');
        const isdisabled = $element.is(':disabled');
        cy.log(`${isEnabled},${isVisible},${isdisabled}`);


      })
      
})
});