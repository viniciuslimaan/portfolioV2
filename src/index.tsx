import React from 'react';
import ReactDOM from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/themes/theme';

import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-quill/dist/quill.snow.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#000b29" highlightColor="#000f36">
          <ToastContainer limit={2} />
          <GlobalStyles />
          <Routes />
        </SkeletonTheme>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
