/// <reference types="cypress" />

export class Login {

    elements = {
        username: "#user-name",
        password: "#password",
        loginbutton: "#login-button",
        validationError: ".error-button",
        logo: ".app_logo"
    }

    visit(){
        cy.visit('https://www.saucedemo.com/')
    }

    validLogin(username, password) {
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginbutton).click()
        cy.url().should('contain', 'inventory')
    }

    invalidLogin(username, password) {
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginbutton).click()
        cy.get(this.elements.validationError).should('be.visible')
    }

    validateLog() {
        cy.get(this.elements.logo).should('be.visible')
    }
}