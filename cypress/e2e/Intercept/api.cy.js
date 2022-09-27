/// <reference types="cypress" />

//const { resolve } = require("cypress/types/bluebird")

describe('verify the kitchen API elements',()=>{
    it('verify the GET comment',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
        })

    })
    it('verify the POST comment',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(201)
        })
        
    })
    it('verify the PUT comment',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
        })
        
    })
})