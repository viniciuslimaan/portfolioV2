import styled from 'styled-components';

import { Container } from '../../styles/layout';

export const ContactBg = styled(Container)`
  background: linear-gradient(
    to top right,
    ${(p) => p.theme.colors.bg} 0%,
    ${(p) => p.theme.colors.bgLight} 100%
  );
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  border-radius: 10px;
  margin-top: 5rem;

  img {
    position: absolute;
    right: -4.5%;
    bottom: 0;
    width: 58%;
    user-select: none;

    @media (max-width: 767px) {
      display: none;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 50%;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  z-index: 1;

  width: 55%;
  padding: 3rem 3.5rem;

  @media (max-width: 767px) {
    width: 100%;
    padding: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 2.5rem;
    width: 75%;
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Item = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
  width: fit-content;

  &:hover > .icon {
    color: ${(p) => p.theme.colors.secondary};
  }

  .icon {
    font-size: 1.5rem;
    color: ${(p) => p.theme.colors.primary};
    transition: 0.5s ease;
  }

  div > .title {
    font-weight: 600;
    color: ${(p) => p.theme.colors.font};
  }
`;
