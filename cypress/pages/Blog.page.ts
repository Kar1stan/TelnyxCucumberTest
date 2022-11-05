
export class BlogPage {
 
        footerBlogBtn(){
            return cy.get("a[href='/resources']>span")
        }

        verifyAPIBtn(){
            return cy.xpath("//button[text()='Verify API']")
        }

        guidesTutorialsBtn(){
            return cy.xpath("//button[text()='Guides & Tutorials']")
        }

    clickBlogBtn(){
        this.footerBlogBtn().scrollIntoView();
        this.footerBlogBtn().click();
    }

    setBlogFilterhByProductAndContent(){
        this.verifyAPIBtn().click();
        this.guidesTutorialsBtn().click();
    }
}
