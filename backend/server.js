import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// --- DATOS MOCK (Simulación de Base de Datos) ---

const servicesData = [
    { 
        id: 'alineacion-chakras', 
        name: 'Alineación de Chakras', 
        category: 'Equilibrios Fundamentales', 
        tagline: 'Recupera tu centro y vitalidad.',
        description: 'La Alineación de Chakras es una terapia energética profunda que trabaja sobre los siete centros de energía principales del cuerpo para restaurar el equilibrio físico, mental y emocional. Disuelve bloqueos y permite que tu energía vital fluya libremente.',
        benefits: [
            'Reducción notable del estrés y la ansiedad.',
            'Mayor claridad mental y enfoque.',
            'Sensación de paz interior y bienestar general.',
            'Aumento de la vitalidad y energía física.',
            'Equilibrio emocional y mayor resiliencia.'
        ],
        sessionFlow: 'Cada sesión comienza con una conversación para entender tus necesidades. Luego, te recuestas cómodamente mientras se trabaja sobre tus centros energéticos, utilizando técnicas de imposición de manos y cristales si es apropiado. Finalizamos con una charla para integrar la experiencia.',
        idealClient: 'Ideal para quienes se sienten estancados, abrumados, desconectados o simplemente buscan un reseteo energético profundo.',
        duration: '60 minutos', 
        price: '45.000' 
    },
    { 
        id: 'terapia-floral-bach', 
        name: 'Terapia Floral de Bach', 
        category: 'Terapias Vibracionales',
        tagline: 'Armonía emocional a través de la naturaleza.',
        description: 'La Terapia Floral de Bach utiliza esencias de 38 flores silvestres para equilibrar estados emocionales negativos como el miedo, la incertidumbre o la soledad. Es un sistema de sanación sutil, no invasivo y profundamente transformador.',
        benefits: [
            'Gestión de emociones como el miedo, la ira o la tristeza.',
            'Aumento de la autoestima y la confianza.',
            'Ayuda en procesos de cambio y duelos.',
            'Mejora de la calidad del sueño y reducción de la preocupación.'
        ],
        sessionFlow: 'La consulta se centra en una escucha compasiva de tu estado emocional actual para seleccionar la mezcla de esencias florales perfecta para ti. Recibirás un frasco con tu fórmula personalizada e indicaciones de uso.',
        idealClient: 'Perfecto para quienes buscan una herramienta de apoyo emocional suave y natural para transitar los desafíos de la vida.',
        duration: '45-60 minutos', 
        price: '40.000' 
    },
    { 
        id: 'limpieza-energetica', 
        name: 'Limpieza Energética / Clearance', 
        category: 'Equilibrios Fundamentales',
        tagline: 'Libera tu espacio y tu ser de energías densas.',
        description: 'Este servicio se enfoca en limpiar y purificar tu campo energético personal y/o tus espacios (hogar, oficina) de influencias o energías estancadas que puedan estar afectando tu bienestar. Se utilizan diversas técnicas como el sahumado, sonidos y visualización.',
        benefits: [
            'Sensación de ligereza y claridad inmediata.',
            'Mejora del ambiente en el hogar o lugar de trabajo.',
            'Eliminación de "pesadez" energética.',
            'Protección y fortalecimiento del campo áurico.'
        ],
        sessionFlow: 'Las sesiones pueden ser a distancia para limpiar tu energía personal o presenciales en Llay-Llay para la limpieza de espacios físicos. Se realiza un diagnóstico inicial y luego se procede con las técnicas de limpieza más adecuadas.',
        idealClient: 'Para quienes sienten que las cosas no fluyen, perciben un ambiente "cargado" o han pasado por situaciones estresantes.',
        duration: 'Variable', 
        price: 'Consultar' 
    },
];

const testimonialsData = [
    { id: 1, quote: "Una experiencia transformadora. Encontré una paz que no sabía que era posible y una guía clara para mi camino.", author: "María G.", location: "Llay-Llay" },
    { id: 2, quote: "La terapia floral fue un antes y un después en mi manejo de la ansiedad. Totalmente recomendado.", author: "Juan P.", location: "Catemu" },
    { id: 3, quote: "Sentí un cambio inmediato en mi energía y claridad después de la sesión. El profesionalismo y la calidez son destacables.", author: "Ana V.", location: "Online" },
];


// --- RUTAS DE LA API ---

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