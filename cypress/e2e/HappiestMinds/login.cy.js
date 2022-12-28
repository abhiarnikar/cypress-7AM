/// <reference types="cypress" />

describe('verify the login functionality {sanity}',{tags:'@sanityTag'},()=>{
    
    it('login with valid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-userdropdown-name').should('be.visible')
    })

    it('login with invalid credentails',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin1234')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('have.text','Invalid credentials')
    })
})