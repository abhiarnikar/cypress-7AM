/// <reference types="cypress" />

import { Login } from "../login";

describe('test suite',()=>{

    it('valid login test',()=>{
        let login =new Login()
        login.visit()
        login.fillEmail('abhiarnikar725@gmail.com')
        login.fillPassword(7741985428)
        login.submit()
        login.Validate()
       
    })
})