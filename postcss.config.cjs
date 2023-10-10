const { postcssConfig } = require("@wonderflow/config");

module.exports = {
  plugins: {
    ...postcssConfig.plugins,
    autoprefixer: {},
  },
};