const path = require("path");
module.exports = function(source) {
    let result = source;
    result = result.replace(/from\s+["']@\/lib\/utils["']/g, `from "../../lib/utils.js"`);
    result = result.replace(/from\s+["']@\/components\/ui\/([^"']*)["']/g, (match, componentName)=>`from "../../components/ui/${componentName}.js"`);
    return result;
};

//# sourceMappingURL=module-resolver.js.map