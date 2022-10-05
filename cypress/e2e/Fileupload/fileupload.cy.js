/// <reference types="cypress" />

describe('fileUpload option in Cypress',()=>{
    
    it('verify the file upload',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        
        let myfile = 'gorest - Copy.txt'
        cy.get('input[name="fileUpload"]').attachFile(myfile)
        cy.get('.filename').should('contain.text','gorest - Copy.txt')
    })

    it('verify the Drag and Drop file option',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')

        let myfile1 = 'Capture.jpg.jpg'
        cy.get('#file').attachFile(myfile1)
        cy.get('[class="box__success"]').should('contain.text','Done')
    })

    it('verify the multiple file upload',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myfile = 'gorest - Copy.txt'
        let myfile1 = 'Capture.jpg.jpg'
        let myfile2 = 'example.json'
        cy.get('#filesToUpload').attachFile([myfile,myfile1,myfile2])
        cy.get('#fileList').children().should('have.length',3)


    })

    it.only('verify the fileName change while Uploading',()=>{
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myfile = 'gorest - Copy.txt' 
        cy.get('#filesToUpload').attachFile({filePath:myfile, fileName: 'firstfile.txt'})
        cy.get('#fileList').children().should('have.length',1)
        cy.get('#fileList').children().first().should('have.text','firstfile.txt')

    })
})
