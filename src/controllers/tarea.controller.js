import Tarea from '../models/Tareas';

export const obtenerTareas = async (req, res) => {

    const tareas = await Tarea.find();

    res.json(tareas);

}

export const crearTarea = async (req, res) => {

    const nuevaTarea = new Tarea(
        {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            completa: req.body.completa ? req.body.completa : false
        }
    );

    const tareaGuardada = await nuevaTarea.save();

    res.json(tareaGuardada);

}

export const obtenerTarea = async (req, res) => {

    const tarea = await Tarea.findById(req.params.id);

    res.json(tarea);

}

export const borrarTarea = async (req, res) => {

    await Tarea.findByIdAndDelete(req.params.id);

    res.json({
        "mensaje": "Tarea eliminada correctamente"
    });

}

export const obtenerTareasCompletas = async (req, res) => {

    const tareasCompletas = await Tarea.find({completa: true});

    res.json(tareasCompletas);

}

export const actualizarTarea = async (req, res) => {

    const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body);

    res.json(tareaActualizada);

}