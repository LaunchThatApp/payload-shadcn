const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    index: __dirname + "/src/index.ts",
    "client/index": __dirname + "/src/client/index.ts",
    "rsc/index": __dirname + "/src/rsc/index.ts",
  },
  output: {
    path: __dirname + "/dist",
  },
  options: {
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: true,
        decorators: true,
      },
      target: "es2020",
    },
  },
});
