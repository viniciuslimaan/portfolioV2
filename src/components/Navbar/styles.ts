import styled, { keyframes } from 'styled-components';

import { Container } from '../../styles/layout';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

interface NavbarBgProps {
  change_bg: boolean;
}

export const NavbarBg = styled.div<NavbarBgProps>`
  position: fixed;
  width: 100%;
  max-width: 100%;
  top: 0;
  z-index: 100;
  transition: 0.5s ease;
  background: ${(p) => (p.change_bg ? p.theme.colors.bg : 'transparent')};
  border-bottom: ${(p) =>
    p.change_bg ? `1px solid ${p.theme.colors.bgLight}` : 'none'};
`;

export const NavbarContainer = styled(Container)<NavbarBgProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  transition: padding 0.5s ease;
  padding: ${(p) => (p.change_bg ? '22px' : '35px')} 0;
`;

export const Logo = styled.a`
  user-select: none;

  img {
    height: 1.5rem;
  }
`;

export const Buttons = styled.div`
  display: none;
  gap: 30px;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

interface ButtonProps {
  btn_hamburger?: boolean;
}

export const Button = styled.a<ButtonProps>`
  font-weight: 400;
  font-size: ${(p) => (p.btn_hamburger ? '1.3rem' : '1rem')};
  text-decoration: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.font};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const Hamburger = styled.div`
  color: ${(p) => p.theme.colors.font};
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.5s ease;

  @media (min-width: 1200px) {
    display: none;
  }

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

interface ButtonsMobileProps {
  opened: boolean;
}

export const ButtonsMobile = styled.div<ButtonsMobileProps>`
  position: fixed;
  display: ${(p) => (p.opened ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  z-index: 99;
  width: 100%;
  height: 100vh;
  animation: ${fadeIn} 0.5s;
  background: ${(p) => p.theme.colors.bg};
`;
