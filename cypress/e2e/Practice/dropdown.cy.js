/// <reference types="cypress" />

describe('handle dropdown',()=>{
    it('dropdown with select',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')

    })
    it('dropdown without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('India').type('{Enter}')
        cy.get('#select2-billing_country-container').should('have.text','India')
       
    })
    it(' Autosuggest dropdown without select',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()   
       
    })
    it('dynamic dropdown',()=>{
        cy.visit('https://www.google.com/')
        cy.get('input[type="text"]').type('Cypress Automation')
        cy.get('div[class="wM6W7d"]').should('have.length',11)
        cy.get('div[class="wM6W7d"]').each((el,index,array)=>{
            if(el.text()=='cypress automation jobs')
            {
             cy.wrap(el).click()
            }
        })
        cy.get('input[type="text"]').should('have.value','cypress automation jobs')
    })
})