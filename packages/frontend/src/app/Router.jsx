import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../widgets/Layout'; // Asumiremos que Layout está en widgets

// Importación de páginas (las crearemos a continuación si no existen)
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/servicios',
        element: <ServicesPage />,
      },
      {
        path: '/quien-soy',
        element: <AboutPage />,
      },
      {
        path: '/contacto',
        element: <ContactPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;