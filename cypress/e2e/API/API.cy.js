/// <reference types="cypress" />

describe('validate the API',()=>{

    it('validate the GET API',function(){ // abhi
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
    it('validate the POST API',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
        })
    })
    it('validate the PUT API',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })
    it('validate the DELETE API',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then((res)=>{
            expect(res.status).to.eq(204)
        })
    })

})