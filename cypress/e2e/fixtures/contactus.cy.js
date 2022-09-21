import users from '../../fixtures/multipleusers.json'
import objI from '../../fixtures/contactus.json'
//import { it } from 'mocha';

/// <reference types="cypress" />

describe('verify the contactus form',()=>{
     let objG ; //undefined note --- because scope of this keyword in arrow function is of it's immediate parent
    before(()=>{
        cy.fixture('contactus').then((data)=>{
            objG = data
        })
    })

    //firtsway

    let info= {
        firstName:"abhijit",
        lastName:"arnikar",
        email:"abhiarnikar725@gmail.com",
        comments:"i am learning typescript"
    }

    it('verify the contact us form by object',function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    // second way
    it('verify the contact us form by fixture for one test case',function(){

        cy.fixture('contactus').then(function(obj){
            //cy.log(obj)
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(obj.firstName)
            cy.get('input[name="last_name"]').type(obj.lastName)
            cy.get('input[name="email"]').type(obj.email)
            cy.get('textarea[name="message"]').type(obj.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })

    })

    // third way
    it('verify the contact us form via fixture from before',()=>{
        //cy.log(objG)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(objG.firstName)
            cy.get('input[name="last_name"]').type(objG.lastName)
            cy.get('input[name="email"]').type(objG.email)
            cy.get('textarea[name="message"]').type(objG.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')

    })

    // fourth way
    it('verify the contact us form via fixture from import',()=>{
        cy.log(objI)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(objI.firstName)
            cy.get('input[name="last_name"]').type(objI.lastName)
            cy.get('input[name="email"]').type(objI.email)
            cy.get('textarea[name="message"]').type(objI.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
    })

    // bad Approach
     it('verify the contact us form via fixture from import',()=>{
        cy.log(users)
        users.forEach(function(el){
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })
     })

     users.forEach(function(el,index){
        it.only(`verify the multiple data -${index+1}`,()=>{
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text','Thank You for your Message!')
        })
     })

})