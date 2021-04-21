"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var tareasController = _interopRequireWildcard(require("../controllers/tarea.controller"));

var router = (0, _express.Router)();
router.get('/', tareasController.obtenerTareas);
router.post('/', tareasController.crearTarea);
router.get('/completas', tareasController.obtenerTareasCompletas);
router.get('/:id', tareasController.obtenerTarea);
router["delete"]('/:id', tareasController.borrarTarea);
router.put('/:id', tareasController.actualizarTarea);
var _default = router;
exports["default"] = _default;