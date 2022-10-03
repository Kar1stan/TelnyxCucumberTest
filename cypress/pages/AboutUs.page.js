
class AboutUsPage {
    elements={
        footerAboutUsBtn(){
            return cy.xpath("//span[text()='About Us']")
        },
        linkGoogleMapsAmsterdam(){
            return cy.get("a[href='https://www.google.com/maps/place/Keizersgracht+221,+1016+DV+Amsterdam,+Netherlands/@52.3728035,4.8832875,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609c487250cfd:0x5a97225b97b7a18a!8m2!3d52.3728035!4d4.8854762']")
        },
        inputGoogleSearch(){
            return cy.get("#searchboxinput")
        },
    }
    locateAmsterdam(){
        this.elements.linkGoogleMapsAmsterdam().click({ force: true});
    }
}
module.exports = new AboutUsPage();