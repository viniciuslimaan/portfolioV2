import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Admin/Dashboard'));
const User = lazy(() => import('../pages/Admin/User'));
const Portfolio = lazy(() => import('../pages/Admin/Portfolio'));
const Academic = lazy(() => import('../pages/Admin/Academic'));

interface Props {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
}

export const routesList: Props[] = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/admin',
    element: <Dashboard />,
    isPrivate: true,
  },

  {
    path: '/admin/user/:userId?',
    element: <User />,
    isPrivate: true,
  },

  {
    path: '/admin/portfolio/:portfolioId?',
    element: <Portfolio />,
    isPrivate: true,
  },

  {
    path: '/admin/academic/:academicId?',
    element: <Academic />,
    isPrivate: true,
  },
];
