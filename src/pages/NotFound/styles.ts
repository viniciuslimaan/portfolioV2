import styled, { keyframes } from 'styled-components';

import { Container } from '../../styles/layout';

const randomx = () => Math.floor(Math.random() * 31) - 15;
const randomy = () => Math.floor(Math.random() * 21) - 10;

const astronautFloating = keyframes`
    0% { transform: translateY(0px) translateX(0px) }
    25% { transform: translateY(${randomx()}px) translateX(${randomy()}px) rotate(5deg) }
    50% { transform: translateY(${randomx()}px) translateX(${randomy()}px) rotate(0deg) }
    75% { transform: translateY(${randomx()}px) translateX(${randomy()}px) rotate(-5deg) }
    100% { transform: translateY(0px) translateX(0px) }
`;

export const Content = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: -60px;
  text-align: center;

  h1 {
    line-height: 130%;
    user-select: none;

    @media (max-width: 767px) {
      font-size: 10rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 12rem;
    }
    @media (min-width: 1025px) {
      font-size: 15rem;
    }

    span {
      position: relative;
      z-index: 5;
    }
  }

  .title {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${(p) => p.theme.colors.font};
    margin: 10px 0;

    .typed-cursor {
      color: ${(p) => p.theme.colors.primary};
    }
  }

  button {
    margin-top: 20px;
  }
`;

export const Astronaut = styled.img`
  position: absolute;
  user-select: none;
  animation: ${astronautFloating} 10s linear infinite;

  top: -2rem;
  right: calc(50% - 15rem);
  width: 22rem;

  @media (max-width: 767px) {
    top: -0.5rem;
    right: calc(50% - 7rem);
    width: 10rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: -0.5rem;
    right: calc(50% - 7rem);
    width: 10rem;
  }
`;
