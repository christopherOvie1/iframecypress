import  volunteerSignUp  from "../pageObjects/volunteerSignUp.po" 
describe ('form submission',()=>{
   const page = new volunteerSignUp();
    it('test case 001 - check volunterrrsignup form submission',()=>{

        cy.fixture('testData.json').then((data)=>{

            cy.visit("https://testautomationpractice.blogspot.com/")
            //cy.visit('/')
            page.frameLoaded()
            page.enterFirstName(data.firstName)
            page.enterLastName(data.lastName)
            page.enterPhoneNum(data.phoneNumber)
            page.enterCity(data.city)
            page.enterCountry(data.country)
            page.enterEmail(data.email)
            page.selectGender()
            page.selectDayAvailable()
            page.selectTimeToContact(data.timeToContact)
            page.submit()

        })
       
    })

})