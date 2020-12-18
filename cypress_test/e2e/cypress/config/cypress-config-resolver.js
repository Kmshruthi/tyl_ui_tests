const fs = require("fs-extra");
const path = require("path");

const cypressConfigResolverByFile = filename => {
  const pathToConfigFile = path.resolve(__dirname, `${filename}.json`);
  return fs.readJsonSync(pathToConfigFile);
};
const cypressConfigResolver = () => {
  console.log(process.env.ENV);
  return cypressConfigResolverByFile(
    process.env.ENV 
  );
};

module.exports.cypressConfigResolver = cypressConfigResolver;
