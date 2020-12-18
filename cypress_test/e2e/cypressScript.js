const cypress = require("cypress");
const config = require("./cypress/config/" + process.env.ENV + ".json");

// Get all spec files
const filesSpec = "./cypress/integration/features/**/*";

// Setting CYPRESS_RECORD_KEY if provided in the argument, else default from config is taken
const [, , ...argumentsArr] = process.argv;

const CYPRESS_RECORD_KEY =
  _parseArguments(argumentsArr, "CYPRESS_RECORD_KEY") ||
  config.cypressDashboardKey;

const CYPRESS_TAGS = process.env.GREP_TAG || "@all"

console.log(
  "CYPRESS_RECORD_KEY used : ",
  CYPRESS_RECORD_KEY,
  "\nCYPRESS_TAGS used : ",
  CYPRESS_TAGS
);

// Cypress run
cypress
  .run({
    spec: filesSpec,
    record: true,
    key: CYPRESS_RECORD_KEY,
    env: {
      TAGS: CYPRESS_TAGS
    }
  })
  .then(results => {
    process.exit(results.totalFailed);
  });

// Helper function for parsing array of arguments for a given value
function _parseArguments(arguments, val) {
  let argFind = arguments.find(arg => {
    return arg.includes(val);
  });
  return argFind ? argFind.split("=")[1] : argFind;
}
