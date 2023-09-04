import styled from 'styled-components';

export const FooterBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  padding: 3rem 0;

  @media (max-width: 767px) {
    justify-content: center;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .icon {
    font-size: 1.2rem;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 15px;

  a {
    font-size: 1.3rem;
    color: ${(p) => p.theme.colors.font};

    &:hover {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;
