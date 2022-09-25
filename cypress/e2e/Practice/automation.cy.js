/// <reference types="cypress" />

describe('CSS selector',()=>{
    it('CSS Locators',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('T-SHIRTS')
        cy.get('button[name="submit_search"]').click()
        cy.get('.lighter').contains('T-SHIRTS')

    })
})