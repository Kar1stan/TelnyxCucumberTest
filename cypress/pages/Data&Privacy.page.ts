
export class DataPrivacyPage {
        footerDataPrivacyBtn(){
            return cy.xpath("//span[text()='Data & Privacy']")
        }

        overviewBtn(){
            return cy.xpath("//button[text()='Overview']")
        }

        pageBtn(){
            return cy.xpath("//a[text()='page']")
        }

    clickDataPrivacyBtn(){
        this.footerDataPrivacyBtn().scrollIntoView();
        this.footerDataPrivacyBtn().click();
    }
    
    clickPrivacyLinkInOverviewBtn(){
        this.overviewBtn().scrollIntoView();
        this.pageBtn().click();
    }
}
