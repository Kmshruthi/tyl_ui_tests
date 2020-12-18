```

# About Cypress

```
Cypress is a JavaScript End to End Testing or UI testing framework. It makes end to end testing, debugging, reporting excitingly easy. Cypress explains here https://www.cypress.io/how-it-works the details on different features it holds.

```

# Package.json dependencies 

```
- cypress: Main framework which allows end to end testing.

- cypress-cucumber-preprocessor: Allows us to integrate gherkin cucumber syntax for easy business readability. Also, I have used the Page object model which makes it easy to understand.

- cypress-testing-library: Custom commands which supports selecting elements in DOM by just using text. Eliminates CSS selector headaches.
fs-extra: Used for reading JSON file for setting different configuration for different environments.

- cross-env: No need to explicitly match syntax for setting environment variables in windows or Linux or UNIX machines.

```
# Initial Setup

```
Assumption: We assume you have installed node.js along with npm in your machine

Step 1: git clone  "https://github.com/Kmshruthi/tyl_ui_tests.git"

Step 2: open project in editor – preferably visual studio code. Open terminal in visual studio code.

Step 3: cd cypress_test/e2e. Always be in the e2e folder i.e `cd cypress_test/e2e` else when you execute one of the below commands - New cypress folder will be created and it wont work.

Step 4: npm install

```

# Command to run the test

```

- npx cypress open -e TEST_ENV="prod"
or
- npm run test:prod

Using npm run which opens a UI and you can click on the respective cypress feature file to run test

```
# Command to run dockerised from the root of the project

```
 powershell -ExecutionPolicy Bypass -File build.ps1 -target=__UiEnd2EndTests

