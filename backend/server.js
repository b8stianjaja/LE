import express from 'express';
import cors from 'cors';
import { servicesData, testimonialsData } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// --- API ROUTES ---

app.get('/api/services', (req, res) => {
    res.json(servicesData);
});

app.get('/api/services/:id', (req, res) => {
    const service = servicesData.find(s => s.id === req.params.id);
    if (service) {
        res.json(service);
    } else {
        res.status(404).json({ message: 'Servicio no encontrado' });
    }
});

app.get('/api/testimonials', (req, res) => {
    res.json(testimonialsData);
});

app.get('/', (req, res) => {
  res.send('API de Liberación Energética funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});