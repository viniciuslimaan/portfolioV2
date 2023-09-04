import styled from 'styled-components';

interface ContainerProps {
  padding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  width: 75%;
  padding: ${(p) => p.padding && '5rem 0'};

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const ContainerFluid = styled.div`
  position: relative;
  width: 100%;
`;
