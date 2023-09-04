import styled from 'styled-components';

export const CardBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  border-radius: 5px;
  cursor: default;
  width: 7.5rem;
  height: 7.5rem;
  transition: 0.5s ease;
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  background: ${(props) => props.theme.colors.gradientBg};

  &:hover .icon,
  &:hover p {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  .icon,
  p {
    transition: color 0.5s ease;
  }

  .icon {
    font-size: 2.8rem;
    color: ${(props) => props.theme.colors.font};
  }

  p {
    font-weight: 600;
    margin-top: 12px;
    font-size: 1rem;
  }
`;
