import express from "express";
import TareasRoutes from './routes/tareas.routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Configuraciones
app.set('port', 3000);

// Middlewares
const corsConfig = {};
app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rutas
app.get('/',(req, res) => {
    res.json({mensaje: "Bienvenid@ a mi aplicación"});
});

app.use('/api/tareas',TareasRoutes);

export default app;