/// <reference types="cypress" />
import {Login} from "../POMpage/login";

describe('verify the login functionality',()=>{

    let login = new Login()

    it('verify with valid credentials',()=>{

        login.visit()
        login.validLogin('standard_user','secret_sauce')
    })


})
