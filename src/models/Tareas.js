import {Schema, model} from 'mongoose';

const tareasSchema = new Schema({

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
        default: false
    }

}, {
    versionKey: false,
    timestamps: true
});

export default model('tarea', tareasSchema);