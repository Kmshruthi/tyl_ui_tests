import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pages/login_page';
import login_data from '../data/loginData';
import LOGINENUM from "../ENUMS/loginPageENUM"

Given(/^I have logged in as a Standard user$/, () => {

    let visitUrl = Cypress.config().baseUrl.includes("localhost") ? "/" : LOGINENUM.PARTIAL_URL
    cy.visit(visitUrl);
    //Assert the landing page
    cy.contains(LOGINENUM.LOGIN, { timeout: 15000 }).should("be.visible");
    //Enter the login details
    LoginPage.typeEmail(login_data.USERNAME);
    LoginPage.typePassword(login_data.PASSWORD);
    LoginPage.pressSignIn();

});

