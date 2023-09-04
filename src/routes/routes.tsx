import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Admin/Dashboard'));
const User = lazy(() => import('../pages/Admin/User'));
const Portfolio = lazy(() => import('../pages/Admin/Portfolio'));
const Academic = lazy(() => import('../pages/Admin/Academic'));
const Login = lazy(() => import('../pages/Admin/Login'));

interface Props {
  path: string;
  element: JSX.Element;
}

export const routesList: Props[] = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/admin',
    element: <Dashboard />,
  },

  {
    path: '/admin/user/:userId?',
    element: <User />,
  },

  {
    path: '/admin/portfolio/:portfolioId?',
    element: <Portfolio />,
  },

  {
    path: '/admin/academic/:academicId?',
    element: <Academic />,
  },

  {
    path: '/admin/login',
    element: <Login />,
  },
];
