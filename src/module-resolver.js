const path = require("path");

module.exports = function (source) {
  // Replace path aliases (@/lib/utils, @/components/ui/*)
  let result = source;

  // Replace @/lib/utils with relative path
  result = result.replace(
    /from\s+["']@\/lib\/utils["']/g,
    `from "../../lib/utils.js"`,
  );

  // Replace @/components/ui/*
  result = result.replace(
    /from\s+["']@\/components\/ui\/([^"']*)["']/g,
    (match, componentName) => `from "../../components/ui/${componentName}.js"`,
  );

  return result;
};
