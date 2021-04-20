import express from "express";
import TareasRoutes from './routes/tareas.routes';

const app = express();

// Configuraciones
app.set('port', 3000);

app.use(express.json());

// Rutas
app.get('/',(req, res) => {
    res.json({mensaje: "Bienvenid@ a mi aplicación"});
});

app.use('/api/tareas',TareasRoutes);

export default app;