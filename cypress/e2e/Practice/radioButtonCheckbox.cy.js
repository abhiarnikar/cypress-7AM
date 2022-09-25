/// <reference types="cypress" />

describe('checking the UI elements',()=>{
    it('checking radio button',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
       
       // checking visibility
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //selecting radio button
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })
    it.only('checking the Check Boxes',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // cy.get('#monday').should('be.visible')
        // cy.get('#monday').check().should('be.checked')
        // cy.get('#monday').uncheck().should('not.be.checked')

        //selecting all the checkboxes
        // cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        // cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        //selecting only one checkbox
         cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')
         cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

    
    })
})