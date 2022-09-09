// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('validateTable',(id,expected)=>{

    let sum = 0
        cy.get(`#t0${id}`).find('tr').each(function(el,index){
            if(index != 0){
                //cy.log(el)
                //cy.log(el.children('td').last().text())
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(function(){
            //cy.log(sum)
            expect(sum).to.eq(expected)
        })



})