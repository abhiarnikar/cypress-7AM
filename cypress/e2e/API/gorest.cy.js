/// <reference types="cypress" />

describe('verify the Gorest API', () => {

    let accessToken = `0330e52add8d99569bb9f7c32af269b0ef53f066a585e86906812056c05718d8`
    it('verify the GET API', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.length).to.eq(10)
            expect(res.duration).to.be.lessThan(700)

            res.body.forEach(element => {
                expect(element).to.have.keys(["id", "name", "email", "status", "gender"])
            });
            res.body.forEach(element => {
                expect(element.id).not.to.null
                expect(element.name).not.to.null
                expect(element.email).not.to.null
                expect(element.status).not.to.null
                expect(element.gender).not.to.null
            })
        })
    })

    it('verify the POST API', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.ramakrshna${Math.floor(Math.random()*100000)}@145ce.com`,
                status: "active"
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }

        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.duration).to.lessThan(1000)
            expect(res.body).to.have.keys("id","name","gender","status","email")
        })
    })

    it('verify the PUT API',()=>{
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/16",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body:
                {
                    name:"Allasani Peddana",
                 email:`allasani.peddana${Math.floor(Math.random()*100000)}@15ce.com`,
                  status:"active"
                  }

        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body).to.have.keys("id","name","gender","status","email")
           
        })
    })
    it('verify the DELETE API',()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/16",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }

        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(204)
        })
    })

})