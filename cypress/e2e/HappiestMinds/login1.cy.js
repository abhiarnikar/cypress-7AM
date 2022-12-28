/// <reference types="cypress" />

describe('verify the login functionality {regression}',{tags:'@regressionTag'},()=>{
   

    it('login with valid credentials',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.get('.app_logo').should('be.visible')
    })

    it('login with invalid credentials',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_use')
        cy.get('input[name="password"]').type('secret_sau')
        cy.get('input[type="submit"]').click()
        cy.get('.error-button').should('be.visible')
    })
})