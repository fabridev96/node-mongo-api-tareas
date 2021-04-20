import {Router} from 'express';

import * as tareasController from '../controllers/tarea.controller'

const router = Router();

router.get('/', tareasController.obtenerTareas);

router.post('/', tareasController.crearTarea);

router.get('/completas', tareasController.obtenerTareasCompletas);

router.get('/:id', tareasController.obtenerTarea);

router.delete('/:id', tareasController.borrarTarea);

router.put('/:id', tareasController.actualizarTarea);

export default router;