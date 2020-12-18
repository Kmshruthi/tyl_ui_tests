import LOGINENUM from '../ENUMS/loginPageENUM';

class LoginPage {

  static typeEmail(username) {
    cy
      .get("#user-name")
      .click({
        force: true
      })
      .clear()
      .type(username, { log: false }) 

  }

  static typePassword(password) {
    cy
      .get("#password")
      .click({
        force: true
      })
      .clear()
      .type(password, { log: false }) 
  }

  static pressSignIn() {
    cy.findAllByText(LOGINENUM.LOGIN, { timeout: 15000 }).eq(0).click({
      force: true
    });
  }

}

export default LoginPage;
