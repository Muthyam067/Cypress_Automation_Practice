describe('File upload Handling Practice', () => {
    var upload = 'input[id="fileInput"]';

    it('upload a  single file',()=>{
        cy.visit('https://demoapps.qspiders.com/ui/fileUpload?sublist=0');
        cy.get(upload).selectFile(["C:/Users/DELL/Downloads/Node_API_Test_Report.pdf"],{force: true});

    })

    it('upload a  Multiple  file',()=>{
        cy.visit('https://demoapps.qspiders.com/ui/fileUpload?sublist=0');
        cy.get('a').contains('Multiple select').click({force:true});
        cy.get(upload).selectFile(["C:/Users/DELL/Downloads/Node_API_Test_Report.pdf",
            "C:/Users/DELL/Downloads/Sitefinity_API_Test_Report.pdf"],{force: true});
    })

});;