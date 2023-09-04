import styled from 'styled-components';

interface ContentProps {
  position: 'left' | 'center' | 'right';
  marginBottom: string;
}

export const Content = styled.div<ContentProps>`
  position: relative;
  z-index: 1;
  text-align: ${(p) => p.position};
  margin-bottom: ${(p) => p.marginBottom};

  h2 {
    margin-bottom: 5px;
  }
`;
