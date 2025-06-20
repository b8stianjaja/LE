// src/app/Router.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/widgets/Layout/Layout';
import { HomePage } from '@/pages/HomePage/HomePage';
import ServicesPage from '@/pages/ServicesPage/ServicesPage'; // FIXED: Was using curly braces {} incorrectly
import AboutPage from '@/pages/AboutPage/AboutPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage'; // FIXED: Was using curly braces {} incorrectly

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'servicios',
        element: <ServicesPage />,
      },
      {
        path: 'quien-soy',
        element: <AboutPage />,
      },
      {
        path: 'contacto',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};