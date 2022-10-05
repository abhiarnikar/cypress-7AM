/// <reference types="cypress" />

describe('verify the intercept concept', () => {
    it('verify the GET concept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            cy.log(response)
            cy.log(request)
            cy.get('.network-comment').should('have.text', response.body.body)
            expect(response.statusCode).to.eq(200)
            expect(request.method).to.eq('GET')
        })

    })
    it('verify the GET concept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }, {
            body: {
                "body": "i am learing javascript",
                "email": "Eliseo@gardner.biz",
                "id": 25,
                "name": "id labore ex et quam laborum",
                "postId": 7
            }
        }
        ).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            cy.log(response)
            cy.log(request)
            cy.get('.network-comment').should('have.text', response.body.body)
            expect(response.statusCode).to.eq(200)
            expect(request.method).to.eq('GET')
        })

    })
    it('verify the POST comment',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function({response,request}){
            cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eq(201)
            expect(response.body).to.have.keys(['email','id','body','name'])
            expect(request.method).to.eq('POST')
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
    })
    it('verify the PUT comment',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('putComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function({response,request}){
            cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.have.keys(['email','id','body','name'])
            expect(request.method).to.eq('PUT')
           
        })
    })

    it('verify the PUT comment',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },
       {
        body:{
            "body": "I am learning cypress",
             "email": "abhi@cypress.io",
             "id": 25,
             "name": "Using PUT in cy.intercept()"
        }
       }
        ).as('putComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function({response,request}){
            cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.have.keys(['email','id','body','name'])
            expect(request.method).to.eq('PUT')
           
        })
    })
})