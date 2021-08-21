const { merge } = require("webpack-merge");

const commonConfiguration = require("./webpack/common");
const dotenv = require("./dotenv");

module.exports = (_env, { mode }) => {
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfiguration, properlyConfig, dotenv);
  return mergedConfig;
};
