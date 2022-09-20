/// <reference types="cypress" />

describe('verify the create update delete', function () {

    let accessToken = `0330e52add8d99569bb9f7c32af269b0ef53f066a585e86906812056c05718d8`
    it('POST > PUT > DELETE', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.ramakrshna${Math.floor(Math.random() * 100000)}@145ce.com`,
                status: "active"
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eq(201)
            return res.body.id
        }).then(function (id) {
            //cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                body:
                {
                    name: "abhijit arnikar",
                    gender: "male",
                    email: `allasani.peddana${Math.floor(Math.random() * 100000)}@15ce.com`,
                    status: "active"
                }
            }).then((res)=>{
                //cy.log(res)
                expect(res.status).to.eq(200)
                return res.body.id
            }).then((id)=>{
                //cy.log(id)
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }).then((res)=>{
                    cy.log(res)
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})