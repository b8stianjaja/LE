import express from 'express';
import cors from 'cors';

// Inicializa la aplicación
const app = express();
const PORT = 5000; // El puerto donde correrá nuestro backend

// Middlewares (funciones que se ejecutan en cada petición)
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite que el servidor entienda peticiones con cuerpo JSON

// Una ruta de prueba para verificar que todo funciona
app.get('/api', (req, res) => {
  res.json({ message: "¡Hola desde el backend de Liberación Energética! ✨" });
});

// Pone el servidor a escuchar peticiones en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo exitosamente en http://localhost:${PORT}`);
});