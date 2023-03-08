class volunteerSignUp{
//css selectors
//cypress-xpath
//jquery selectors

//all stateless functions not generic
frameLoaded(){
    cy.frameLoaded('#frame-one1434677811')
}

enterFirstName(args){
    //const field=cy.iframe().find("input[name='RESULT_TextField-1']")
    const field=cy.iframe().find("#RESULT_TextField-1")
    field.clear().type(args);
    return this;  //return  enterFirstName
}
enterLastName(args){
    const field=cy.iframe().find("#RESULT_TextField-2")
    field.clear().type(args);
    return this;  //return  enterFirstName
}
enterPhoneNum(args){
    const field=cy.iframe().find("input[name='RESULT_TextField-3']")
    field.clear().type(args);
    return this;  //return  enterFirstName
}
enterCity(args){
    const field=cy.iframe().find("input[name='RESULT_TextField-4']")
    field.clear().type(args);
    return this;  //return  enterFirstName
}
enterCountry(args){
    const field=cy.iframe().find("input[name='RESULT_TextField-5']")
    field.clear().type(args);
    return this;  //return  enterFirstName
}

enterEmail(args){
    const field=cy.iframe().find("input[name='RESULT_TextField-6']")
    field.clear().type(args);
    return this;
}
//radio button
selectGender(){
    const field=cy.iframe().find("[name='RESULT_RadioButton-7']+label")
    field.first().should('not.be.checked')
    field.first().check()
    return this;
}
//element displaying css property use force true
selectDayAvailable(){
    const field=cy.iframe().find("[name='RESULT_CheckBox-8']")
    field.eq(1).should('not.be.checked')
    field.eq(1).check();
    return this;
}


selectTimeToContact(arg){
    const field=cy.iframe().find("#RESULT_RadioButton-9")   
    field.select(arg)
    return this;
}

submit(){
    const field=cy.iframe().find("#FSsubmit")   
    field.click()
    return this;
}

}
export default volunteerSignUp;