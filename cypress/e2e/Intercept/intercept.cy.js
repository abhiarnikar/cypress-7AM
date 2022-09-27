/// <reference types="cypress" />

//const { curry } = require("cypress/types/lodash")

describe('verify the UI for kitchen example',()=>{
    it('verify the UI for GET comment',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam')
    })
    it('verify the UI for POST comment',function(){
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment')
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })
})