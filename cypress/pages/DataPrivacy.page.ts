
class DataPrivacyPage {
        get footerDataPrivacyBtn(){
            return cy.xpath("//span[text()='Data & Privacy']")
        }

        get overviewBtn(){
            return cy.xpath("//button[text()='Overview']")
        }

        get pageBtn(){
            return cy.xpath("//a[text()='page']")
        }

    clickDataPrivacyBtn(){
        this.footerDataPrivacyBtn.scrollIntoView();
        this.footerDataPrivacyBtn.click();
    }
    
    clickPrivacyLinkInOverviewBtn(){
        this.overviewBtn.scrollIntoView();
        this.pageBtn.click();
    }
}
export default new DataPrivacyPage();