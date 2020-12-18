const login_data = Object.freeze({
    USERNAME: Cypress.env().Username,
    PASSWORD: Cypress.env().Password,
    HEADER: "SWAGLABS"
  });
  
  export default login_data;
  