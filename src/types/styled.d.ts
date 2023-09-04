import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      bgLight: string;
      primary: string;
      secondary: string;
      font: string;
      fontLight: string;
      gradient: string;
      gradientBg: string;
      error: string;
      warning: string;
      success: string;
    };
  }
}
