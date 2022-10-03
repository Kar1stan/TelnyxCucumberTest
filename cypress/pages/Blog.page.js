
class BlogPage {
    elements={
        footerBlogBtn(){
            return cy.xpath("//span[text()='Blog']")
        },
        verifyAPIBtn(){
            return cy.xpath("//button[text()='Verify API']")
        },
        guidesTutorialsBtn(){
            return cy.xpath("//button[text()='Guides & Tutorials']")
        },
    }
    setBlogFilterhByProductAndContent(){
        this.elements.verifyAPIBtn().click({ force: true});
        this.elements.guidesTutorialsBtn().click({ force: true});
    }
}
module.exports = new BlogPage();