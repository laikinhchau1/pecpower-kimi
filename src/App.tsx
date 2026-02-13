import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/custom';
import {
  HomePage,
  ContactPage,
  ProjectDetailPage,
  NewsDetailPage,
  ServiceDetailPage,
} from '@/pages';
import { I18nProvider } from '@/i18n/simple-i18n';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage />,
      },
      {
        path: 'news/:articleId',
        element: <NewsDetailPage />,
      },
      {
        path: 'services/:serviceId',
        element: <ServiceDetailPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  return (
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  );
}

export default App;
