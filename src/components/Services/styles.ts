import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  margin: 0 auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
