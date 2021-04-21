"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualizarTarea = exports.obtenerTareasCompletas = exports.borrarTarea = exports.obtenerTarea = exports.crearTarea = exports.obtenerTareas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Tareas = _interopRequireDefault(require("../models/Tareas"));

var _getPagination2 = require("../libs/getPagination");

var obtenerTareas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, tareas;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
            condition = title ? {
              title: {
                $regex: new RegExp(title),
                $options: "i"
              }
            } : {};
            console.log(condition);
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 7;
            return _Tareas["default"].paginate(condition, {
              offset: offset,
              limit: limit
            });

          case 7:
            tareas = _context.sent;
            res.json(tareas);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              mensaje: _context.t0.message || "Algo fue mal devolviendo las tareas. Intente de nuevo"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function obtenerTareas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerTareas = obtenerTareas;

var crearTarea = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nuevaTarea, tareaGuardada;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body.titulo) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              mensaje: "El campo título es requerido"
            }));

          case 2:
            if (req.body.descripcion) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              mensaje: "El campo descripción es requerido"
            }));

          case 4:
            _context2.prev = 4;
            nuevaTarea = new _Tareas["default"]({
              titulo: req.body.titulo,
              descripcion: req.body.descripcion,
              completa: req.body.completa ? req.body.completa : false
            });
            _context2.next = 8;
            return nuevaTarea.save();

          case 8:
            tareaGuardada = _context2.sent;
            res.json(tareaGuardada);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](4);
            res.status(500).json({
              mensaje: _context2.t0.message || "Algo fue mal creando la nueva tarea. Intente de nuevo"
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 12]]);
  }));

  return function crearTarea(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.crearTarea = crearTarea;

var obtenerTarea = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, tarea;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Tareas["default"].findById(id);

          case 4:
            tarea = _context3.sent;

            if (tarea) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              mensaje: "La tarea solicitada con el id: ".concat(id, " no existe")
            }));

          case 7:
            res.json(tarea);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              mensaje: "Hubo un error al devolver la tarea con el id: ".concat(id, ". Intente de nuevo.")
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function obtenerTarea(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.obtenerTarea = obtenerTarea;

var borrarTarea = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Tareas["default"].findByIdAndDelete(id);

          case 4:
            res.json({
              "mensaje": "Tarea eliminada correctamente"
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              mensaje: "Hubo un error al eliminar la tarea con el id: ".concat(id, ". Intente de nuevo.")
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function borrarTarea(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.borrarTarea = borrarTarea;

var obtenerTareasCompletas = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var tareasCompletas;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Tareas["default"].find({
              completa: true
            });

          case 2:
            tareasCompletas = _context5.sent;
            res.json(tareasCompletas);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function obtenerTareasCompletas(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.obtenerTareasCompletas = obtenerTareasCompletas;

var actualizarTarea = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var tareaActualizada;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Tareas["default"].findByIdAndUpdate(req.params.id, req.body, {
              useFindAndModify: false
            });

          case 2:
            tareaActualizada = _context6.sent;
            res.json(tareaActualizada);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function actualizarTarea(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.actualizarTarea = actualizarTarea;