import Tarea from '../models/Tareas';
import {getPagination} from '../libs/getPagination';

export const obtenerTareas = async (req, res) => {

    try {

        const {size, page, title} = req.query;

        const condition = title ? {
            title: {$regex: new RegExp(title), $options: "i"}
        } : {};

        console.log(condition);

        const {limit, offset} = getPagination(page, size);

        const tareas = await Tarea.paginate(condition, {offset, limit});
    
        res.json(tareas);
        
    } catch (error) {

        res.status(500).json({
            mensaje: error.message || "Algo fue mal devolviendo las tareas. Intente de nuevo"
        });
        
    }

}

export const crearTarea = async (req, res) => {

    if(!req.body.titulo){

        return res.status(400).json({
            mensaje: "El campo título es requerido"
        });

    }

    if(!req.body.descripcion){

        return res.status(400).json({
            mensaje: "El campo descripción es requerido"
        });

    }

    try {

        const nuevaTarea = new Tarea(
            {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                completa: req.body.completa ? req.body.completa : false
            }
        );
    
        const tareaGuardada = await nuevaTarea.save();
    
        res.json(tareaGuardada);
        
    } catch (error) {

        res.status(500).json({
            mensaje: error.message || "Algo fue mal creando la nueva tarea. Intente de nuevo"
        });
        
    }

}

export const obtenerTarea = async (req, res) => {

    const { id } = req.params;

    try {
    
        const tarea = await Tarea.findById(id);
    
        if(!tarea){
    
            return res.status(400).json(
                {
                    mensaje: `La tarea solicitada con el id: ${id} no existe`
                }
            );
    
        }
    
        res.json(tarea);

    } catch (error) {

        res.status(500).json({
            mensaje: `Hubo un error al devolver la tarea con el id: ${id}. Intente de nuevo.`
        });
        
    }

}

export const borrarTarea = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Tarea.findByIdAndDelete(id);
    
        res.json({
            "mensaje": "Tarea eliminada correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: `Hubo un error al eliminar la tarea con el id: ${id}. Intente de nuevo.`
        });
        
    }

}

export const obtenerTareasCompletas = async (req, res) => {

    const tareasCompletas = await Tarea.find({completa: true});

    res.json(tareasCompletas);

}

export const actualizarTarea = async (req, res) => {

    const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    });

    res.json(tareaActualizada);

}