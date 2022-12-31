/// <reference types="cypress" />

describe('verify the login functionality ',()=>{

    it('verify with valid credentials {regression}',()=>{
        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('abhiarnikar725@gmail.com')
        cy.get('input[name="password"]').type('abhi@123')
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.get('img[title="Zoomin"]').should('be.visible')
        cy.get('img[class="MuiAvatar-img"]').should('be.visible')
    })

    // it('verify with invalaid credentails',()=>{
    //     cy.visit('https://www.zoomin.com/sign-in?%2F')
    //     cy.get('input[name="email"]').type('abhiarnikar725@gmail.com')
    //     cy.get('input[name="password"]').type('abhi@12')
    //     cy.get('button[type="submit"]').click()
    //     cy.get('div[class="Toastify__toast-container Toastify__toast-container--top-right"]').should('have.text','You have exceeded the number of  allowed attempts. Please try after 10 min.✖')
    // })
})