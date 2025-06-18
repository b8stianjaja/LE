import express from 'express';
import cors from 'cors';
import servicesRoutes from './api/routes/services.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', servicesRoutes);

// Root endpoint for health checks
app.get('/', (req, res) => {
  res.send('API is healthy and running!');
});

// A catch-all for 404s
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});