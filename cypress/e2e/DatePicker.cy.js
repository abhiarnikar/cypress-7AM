/// <reference types="cypress" />

describe('verify the funcitonality of DatePicker in cypress', () => {

    it('verify the date Selection in cypress', () => {

        // let date = new Date()

        // let year = date.getFullYear()
        // let month = date.getMonth()
        // let daydate = date.getDate()

        // cy.log(year)
        // cy.log(month)
        // cy.log(daydate)

        let date2 = new Date()

        date2.setDate(date2.getDate() + 365)

        let year = date2.getFullYear()
        let month = date2.toLocaleString("default", { month: "long" })
        let daydate = date2.getDate()

        cy.log(year)
        cy.log(month)
        cy.log(daydate)

        cy.visit("http://www.webdriveruniversity.com/Datepicker/index.html")

        cy.get('#datepicker').click()

        // select Year 
        // select month 
        // select date 

        function SelectMonthandYear() {

            cy.get(".datepicker-switch").first().then(function ($el) {

                //cy.log($el.text())

                if (!$el.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectMonthandYear()
                }
            })
                
             
            cy.get(".datepicker-switch").first().then(function ($el) {

                //cy.log($el.text())

                if (!$el.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectMonthandYear()
                }
            })
        }

        SelectMonthandYear()

        function selectdate(){
            cy.get('td[class="day"]').contains(daydate).click()
        }
        selectdate()
    })
})