import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes as AllRoutes, Route } from 'react-router-dom';

import PageFadeIn from '../components/FadeInAnimations/Page';
import SuspenseLoading from '../components/SuspenseLoading';

import { routesList } from './routes';

const NotFound = lazy(() => import('../pages/NotFound'));

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter basename="/">
      <AllRoutes>
        {routesList.map((item, i) => (
          <Route
            key={i}
            path={item.path}
            element={
              <Suspense fallback={<SuspenseLoading />}>
                <PageFadeIn>{item.element}</PageFadeIn>
              </Suspense>
            }
          />
        ))}

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
}
