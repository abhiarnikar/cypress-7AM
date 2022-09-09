/// <reference types="cypress" />

describe('verify the functionality of table in cypress',()=>{

    it('verify the first table',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum =0
        cy.get('[id="t01"]').find('tr').each((el,index)=>{
            if(index != 0){
                //cy.log(el)
                //cy.log(el.children('td').last().text())
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(function(){
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })
    
    it.only('verify the first table',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum =0
        cy.get('[id="t02"]').find('tr').each((el,index)=>{
            if(index != 0){
                //cy.log(el)
                //cy.log(el.children('td').last().text())
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(function(){
            cy.log(sum)
            expect(sum).to.eq(163)
        })
    })

    it.only('verify the  table via utility',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.validateTable(1,159)
        cy.validateTable(2,163)
        
    })


})


