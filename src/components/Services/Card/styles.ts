import styled, { keyframes } from 'styled-components';

const floating = keyframes`
    0% { transform: translateY(0px) }
    50% { transform: translateY(-5px) }
    100% { transform: translateY(0px) }
`;

export const CardBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 25px 18px;
  border-radius: 5px;
  text-align: center;
  max-width: 350px;
  cursor: default;
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  background: linear-gradient(
    to top right,
    ${(p) => p.theme.colors.bg} 0%,
    ${(p) => p.theme.colors.bgLight} 100%
  );

  &:hover .icon {
    color: ${(props) => props.theme.colors.secondary};
  }

  .icon {
    font-size: 5rem;
    margin: 8px 0;
    color: ${(p) => p.theme.colors.primary};
    transition: color 0.5s ease;
    animation: ${floating} 5s ease-in-out infinite;
  }

  h3 {
    margin-bottom: 5px;
  }
`;
