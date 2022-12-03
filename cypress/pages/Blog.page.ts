
class BlogPage {
 
        get footerBlogBtn(){
            return cy.get("a[href='/resources']>span")
        }

        get verifyAPIBtn(){
            return cy.xpath("//button[text()='Verify API']")
        }

        get guidesTutorialsBtn(){
            return cy.xpath("//button[text()='Guides & Tutorials']")
        }

    clickBlogBtn(){
        this.footerBlogBtn.scrollIntoView();
        this.footerBlogBtn.click();
    }

    clickVerifyAPIBtn(){
        this.verifyAPIBtn.click();
    }

    clickGuidesAndTutorialsBtn(){
        this.guidesTutorialsBtn.click();
    }
}
export default new BlogPage();
