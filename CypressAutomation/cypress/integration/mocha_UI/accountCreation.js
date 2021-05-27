/// <reference types='Cypress'/>
var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");
describe('Account creation',function(){

    it('Register an account',function(){
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email_create').type(fakerator.internet.email());
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(fakerator.names.firstName())
        cy.get('#customer_lastname').type(fakerator.names.lastName())
        cy.get('#email').clear()
        cy.get('#email').type(fakerator.internet.email());
        cy.get('#passwd').type(fakerator.internet.password(8))
        cy.get('#firstname').type(fakerator.names.firstName())
        cy.get('#address1').type(fakerator.address.street())
        cy.get('#city').type(fakerator.address.city())
        cy.get('#id_state').select('Alabama')
        cy.get('#postcode').type(fakerator.address.postCode())
        cy.get('#phone_mobile').type(fakerator.phone.number())
        cy.get('#submitAccount > span').click()
        cy.get('.page-heading').should('have.text','My account')
    })
})