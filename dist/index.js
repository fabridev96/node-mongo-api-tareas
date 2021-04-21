"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(process.env.PORT || _app["default"].get('port'));

console.log('Servidor en el puerto', _app["default"].get('port'));