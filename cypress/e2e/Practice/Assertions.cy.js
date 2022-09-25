/// <reference types="cypress" />

describe('Assertions',()=>{
    it('Explicit assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-userdropdown-name').then(function(x){
              //cy.log(res)
              expect[Function.text].to.eq('Paul Collings')
        })
    })
})