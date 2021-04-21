"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var tareasSchema = new _mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  completa: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});
tareasSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)('tarea', tareasSchema);

exports["default"] = _default;