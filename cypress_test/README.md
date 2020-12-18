---

# Run locally with Cypress UI

---

Note: Always be in the e2e folder i.e `cd cypress_test/e2e` else when you execute one of the below commands - New cypress folder will be created and it wont work.

Option 1 - Using npm run which opens a UI and you can click on the respective cypress feature file to run test

```

## Command to run the test

```

npx cypress open -e TEST_ENV="prod"


<!-- Command to run dockerised -->
 powershell -ExecutionPolicy Bypass -File build.ps1 -target=__UiEnd2EndTests

