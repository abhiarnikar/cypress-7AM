/// <reference types="cypress" />

export class Login {

    visit() {
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
    }

    fillEmail(value) {
        let field = cy.get('#Email')
        field.type(value)
        return this
    }

    fillPassword(value){
        let field= cy.get('#Password')
        field.type(value)
        return this
    }
    submit(){
        let button = cy.get('.button-1.login-button')
        button.click()
    }
}