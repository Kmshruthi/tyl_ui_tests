const { cypressConfigResolver } = require("../config/cypress-config-resolver");
const pluginExecuteCommand = require("./plugin-execute-command");
const cucumber = require("cypress-cucumber-preprocessor").default;
var fs = require("fs");

// This is called with config from cypress.json. When you return a json from this plugin function ..
// .. It adds and modifies the configuration that is returned.
// You can then use in your code as "Cypress.env().okta_password" or "Cypress.baseUrl" etc
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  on("task", {
    pluginExecuteCommand
  });
  return cypressConfigResolver();
};
