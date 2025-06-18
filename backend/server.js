import express from 'express';
import cors from 'cors';

// --- MOCK DATA ---
// NOTE: This data was missing from a 'data.js' file. It has been added here.
// You should move this data into a new file: 'backend/data.js'
const servicesData = [
    { id: '1', name: 'Reiki', excerpt: 'Sanación energética para equilibrar cuerpo y mente.', description: 'Reiki es una técnica de sanación japonesa que utiliza la imposición de manos para canalizar energía universal, promoviendo la relajación y el bienestar.', benefits: ['Reduce el estrés', 'Alivia la ansiedad', 'Mejora el sueño'], imageUrl: '/images/reiki.jpg' },
    { id: '2', name: 'Terapia Floral', excerpt: 'Esencias florales para armonizar tus emociones.', description: 'La Terapia Floral utiliza esencias de flores para tratar desequilibrios emocionales, ayudando a restaurar la armonía interior.', benefits: ['Equilibrio emocional', 'Claridad mental', 'Paz interior'], imageUrl: '/images/terapia-floral.jpg' },
    { id: '3', name: 'Registros Akáshicos', excerpt: 'Accede a la sabiduría de tu alma.', description: 'La lectura de Registros Akáshicos te permite acceder a la información del libro de tu alma para obtener guía y sanación.', benefits: ['Autoconocimiento', 'Sanación de patrones', 'Propósito de vida'], imageUrl: '/images/registros-akashicos.jpg' }
];

const testimonialsData = [
    { id: '1', quote: 'Una experiencia transformadora. Me sentí renovada y en paz.', author: 'Ana Pérez' },
    { id: '2', quote: 'Encontré la claridad que necesitaba. Totalmente recomendado.', author: 'Carlos González' }
];
// --- END MOCK DATA ---


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