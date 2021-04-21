"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tareas = _interopRequireDefault(require("./routes/tareas.routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])(); // Configuraciones

app.set('port', 3000); // Middlewares

var corsConfig = {};
app.use((0, _cors["default"])(corsConfig));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // Rutas

app.get('/', function (req, res) {
  res.json({
    mensaje: "Bienvenid@ a mi aplicación"
  });
});
app.use('/api/tareas', _tareas["default"]);
var _default = app;
exports["default"] = _default;