/// <reference types="cypress" />

describe('verify the login functionality ',()=>{
   

    it('login with valid credentials {regression}',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()
        cy.get('.app_logo').should('be.visible')
    })

    it('login with invalid credentials {smoke}',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_use')
        cy.get('input[name="password"]').type('secret_sau')
        cy.get('input[type="submit"]').click()
        cy.get('.error-button').should('be.visible')
    })
})