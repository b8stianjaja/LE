import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Use the new alias for cleaner imports
import { Layout } from '@/widgets/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

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