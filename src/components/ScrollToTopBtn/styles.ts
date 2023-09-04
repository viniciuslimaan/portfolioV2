import styled from 'styled-components';

interface ButtonProps {
  visibility: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 15px;
  right: 15px;
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 99;
  color: ${(p) => p.theme.colors.font};
  background: ${(p) => p.theme.colors.bgLight};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    color 0.5s ease;
  opacity: ${(p) => (p.visibility ? '1' : '0')};
  visibility: ${(p) => (p.visibility ? 'visible' : 'hidden')};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;
