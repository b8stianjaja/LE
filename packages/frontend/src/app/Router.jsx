import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/widgets/Layout/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import AboutPage from '@/pages/AboutPage/AboutPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

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