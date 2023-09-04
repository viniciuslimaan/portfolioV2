import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  .icon {
    font-size: 3rem;
    color: ${(p) => p.theme.colors.primary};
  }
`;
