/* */ 
"use strict";
var _interopRequire = function(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
};
exports.ExpressionStatement = ExpressionStatement;
var t = _interopRequire(require('../../../types/index'));
var optional = exports.optional = true;
function ExpressionStatement(node) {
  if (t.isIdentifier(node.expression, {name: "debugger"})) {
    this.remove();
  }
}
exports.__esModule = true;
