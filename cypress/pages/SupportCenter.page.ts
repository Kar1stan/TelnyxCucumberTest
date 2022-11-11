
export class SupportCenterPage {
        footerSupportCenterBtn(){
            return cy.xpath("//span[text()='Support Center']")
        }

        headlingReferenceMaterial(){
            return cy.xpath("//h2[text()='Reference Material']")
        }

        spanAccessibleCanadaAct(){
            return cy.xpath("//span[text()='Accessible Canada Act (ACA): Feedback Process Description']")
        }
    
    clickLogInBtn(){
        this.footerSupportCenterBtn().scrollIntoView();
        this.footerSupportCenterBtn().click();
    }

    clickAccessibleCanadaActInReferenceMaterial(){
        this.headlingReferenceMaterial().scrollIntoView();
        this.headlingReferenceMaterial().click();
        this.spanAccessibleCanadaAct().click();
    }
}
