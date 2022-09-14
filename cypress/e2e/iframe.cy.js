/// <reference types="cypress" />

describe('verify the iframe in cypress', () => {

    const getIframeBody = (id)=>{
        return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
    }

    it('verify the iframe by Jquery', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href="index.html"]').should('have.text', 'Home')
        // find the iframe
        // apply jquery method apple 
        // reach the body if iframe document body 
        // then reach out to element 
        cy.get('[id="frame"]').then(function($iframe){
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('body')
            cy.get('@body').find('[href="index.html"]').should('be.visible')
        })
    })

    it('verify the iframe by javascript',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('[id="frame"]').then(function(el){
            let body = el[0].contentDocument.body
            cy.wrap(body).as('body')
            cy.get('@body').find('[href="index.html"]').should('have.text','Home')
        })
    })
    it('verify the ifram via javascript',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('frame').find('a[href="index.html"]').should('have.text','Home')

    })
})