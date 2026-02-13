import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MainLayout, ProtectedRoute } from '@/components/custom';
import {
  HomePage,
  ContactPage,
  ProjectDetailPage,
  NewsDetailPage,
  ServiceDetailPage,
  AdminPage,
  AdminLogin,
} from '@/pages';
import { I18nProvider } from '@/i18n/simple-i18n';
import { AuthProvider } from '@/hooks/useAuth';
import { Toaster } from '@/components/ui/sonner';
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
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <I18nProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </I18nProvider>
    </AuthProvider>
  );
}

export default App;
