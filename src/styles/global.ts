import { createGlobalStyle, keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3rem, 0);
    transform: translate3d(0, 3rem, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;

// FONT SIZES 400, 600, 800

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.bg};
    -webkit-font-smoothing: antialiased !important;
  }

  html {
    scroll-behavior: smooth;
  }

  :target {
    scroll-margin-top: 3rem;
  }

  ::selection {
    color: ${(props) => props.theme.colors.font};
    background: ${(props) => props.theme.colors.primary};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme.colors.fontLight};
  }

  h1, h2, h3 {
    font-weight: 800;
    color: ${(props) => props.theme.colors.font};
  }

  h1 {
    font-size: 4rem;
    @media (max-width: 767px) { font-size: 2.5rem; };
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    font-weight: 800;
    transition: 0.5s ease;
    color: ${(p) => p.theme.colors.primary};

    &:hover {
      color: ${(p) => p.theme.colors.secondary};
    }
  }

  /* React-modal */
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .ReactModal__Content {
    overflow-y: scroll;
    max-height: 90vh;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  /* Works on Firefox */
  .ReactModal__Content {
    scrollbar-width: 5px;
    scrollbar-color: #64FBD3 transparent;
  }

  /* Works on Chrome, Edge, and Safari */
  .ReactModal__Content::-webkit-scrollbar {
    width: 5px;
  }

  .ReactModal__Content::-webkit-scrollbar-track {
    background: transparent;
  }

  .ReactModal__Content::-webkit-scrollbar-thumb {
    background-color: #64FBD3;
    border-radius: 10px;
  }

  /* Animate.css */
  .animate__fadeInUp {
    position: relative;
    z-index: 1 !important;

    animation-name: ${fadeInUp};
    animation-duration: 1s !important;
  }

  .animate__fadeIn {
    animation-duration: 1.5s !important;
  }

  /* React-toastify */
  .Toastify__toast-theme--dark {
    background: linear-gradient(to top right, #000617 0%, #000b29 100%);
    border: 1px solid #000b29;
  }

  .Toastify__progress-bar-theme--dark {
    background: #64FBD3;
  }
`;

export default GlobalStyles;
