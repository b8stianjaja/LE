import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/widgets/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

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
      {
        path: '*', // Catches any route that doesn't match the ones above
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;