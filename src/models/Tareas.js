import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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

tareasSchema.plugin(mongoosePaginate);

export default model('tarea', tareasSchema);