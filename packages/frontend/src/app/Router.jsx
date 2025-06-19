import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../widgets/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';

const router = createBrowserRouter([
  {
    element: <Layout />, // El Layout envuelve a todas las rutas hijas
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
      // Aquí agregaremos más rutas después
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;