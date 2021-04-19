import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {

    res.send('pagina tareas')

});

export default router;