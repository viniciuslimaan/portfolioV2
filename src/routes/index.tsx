import { Suspense, lazy, useContext } from 'react';
import {
  BrowserRouter,
  Routes as AllRoutes,
  Route,
  Navigate,
} from 'react-router-dom';

import PageFadeIn from '../components/FadeInAnimations/Page';
import SuspenseLoading from '../components/SuspenseLoading';

import { AuthContext } from '../contexts/AuthContext';
import { routesList } from './routes';

const NotFound = lazy(() => import('../pages/NotFound'));
const Login = lazy(() => import('../pages/Admin/Login'));

const Routes = (): JSX.Element => {
  const { authenticated, loading } = useContext(AuthContext);

  return (
    <BrowserRouter basename="/">
      <AllRoutes>
        {routesList.map((item, i) => (
          <Route
            key={i}
            path={item.path}
            element={
              item.isPrivate && !authenticated ? (
                <Navigate to="/admin/login" replace />
              ) : (
                <Suspense fallback={<SuspenseLoading />}>
                  <PageFadeIn>{item.element}</PageFadeIn>
                </Suspense>
              )
            }
          />
        ))}

        <Route
          path="/admin/login"
          element={
            !loading ? (
              authenticated ? (
                <Navigate to="/admin" replace />
              ) : (
                <Suspense fallback={<SuspenseLoading />}>
                  <PageFadeIn>
                    <Login />
                  </PageFadeIn>
                </Suspense>
              )
            ) : (
              <SuspenseLoading />
            )
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<SuspenseLoading />}>
              <PageFadeIn>
                <NotFound />
              </PageFadeIn>
            </Suspense>
          }
        />
      </AllRoutes>
    </BrowserRouter>
  );
};

export default Routes;
