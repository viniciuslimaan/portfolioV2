import styled from 'styled-components';

interface ButtonBgProps {
  color: 'default' | 'green' | 'red' | 'blue';
  size: 'default' | 'full';
  disabled: boolean;
}

export const ButtonBg = styled.button<ButtonBgProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  padding: 0 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  width: ${(p) => (p.size === 'default' ? 'fit-content' : '100%;')};
  max-width: 100%;
  color: ${(p) => p.theme.colors.font};
  transition: filter 0.5s ease;
  ${(p) => p.color === 'default' && `background: ${p.theme.colors.gradient};`};
  ${(p) => p.color === 'green' && `background: ${p.theme.colors.success};`};
  ${(p) => p.color === 'red' && `background: ${p.theme.colors.error};`};
  ${(p) => p.color === 'blue' && `background: ${p.theme.colors.secondary};`};
  ${(p) => p.disabled && 'filter: grayscale(60%); cursor: not-allowed;'};

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    ${(p) =>
      !p.disabled &&
      (p.color === 'default'
        ? `filter: drop-shadow(0 0 3px ${p.theme.colors.primary});`
        : 'filter: brightness(0.9);')};
  }

  .icon {
    font-size: 1.6rem;
  }
`;
