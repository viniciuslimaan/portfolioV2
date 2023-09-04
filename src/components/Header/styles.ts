import styled, { keyframes } from 'styled-components';

const meteorFall = keyframes`
    0% {
      transform: rotate(-40deg) translateX(60px);
      width: 40px;
    }

    40% {
      transform: rotate(-40deg) translateX(60px);
      width: 40px;
    }

    100% {
      transform: rotate(-40deg) translateX(-100vw);
      width: 100px;
    }
`;

const moonShine = keyframes`
  0% {
      filter: drop-shadow(0 0 2px #fff);
  }

  50% {
      filter: drop-shadow(0 0 5px #fff);
  }

  100% {
      filter: drop-shadow(0 0 2px #fff);
  }
`;

const meteorShine = keyframes`
  from {
    width: 30px;
    left: -12.5px;
  }

  to {
    width: 50px;
    left: -22.5px;
  }
`;

const jump = keyframes`
    0% { transform: translateY(0) }
    5% { transform: translateY(-5px) }
    10% { transform: translateY(0) }
    15% { transform: translateY(-5px) }
    20% { transform: translateY(0) }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const Title = styled.h1`
  line-height: 115%;
  margin: 8px 0 25px 0;
`;

export const Presentation = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.font};

  span {
    font-weight: 800;
    color: ${(p) => p.theme.colors.primary};
    background-image: ${(p) => p.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubTitle = styled.p`
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1025px) {
    width: 65%;
  }
`;

export const Moon = styled.div`
  position: absolute;
  top: 17%;
  right: 10%;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
    0 0 0 0.6rem rgba(255, 255, 255, 0.05),
    0 0 0 1.2rem rgba(255, 255, 255, 0.05),
    0 0 0 1.8rem rgba(255, 255, 255, 0.05);
  animation: ${moonShine} 5s ease infinite;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1300px) {
    top: 14%;
    right: 7%;
  }

  &:after {
    position: absolute;
    content: '';
    background-color: #e6e6e6;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    top: 3.75rem;
    left: 1.25rem;
    box-shadow:
      0.9rem -2.1rem 0 0.2rem #e6e6e6,
      1.5rem -0.3rem 0 -0.06rem #e6e6e6;
  }
`;

interface MeteorProps {
  top?: string;
  left?: string;
  right?: string;
}

export const Meteor = styled.div<MeteorProps>`
  position: absolute;
  top: ${(p) => p.top};
  left: ${(p) => p.left};
  right: ${(p) => p.right};
  width: 80px;
  height: 5px;
  border-radius: 3px 100% 100% 3px;
  filter: drop-shadow(0 0 5px #fff);
  background-image: linear-gradient(to right, #fff 10%, #fff5 50%, #fff0 100%);
  animation: ${meteorFall} 8s ease 5s infinite;

  @media (max-width: 767px) {
    display: none;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 3px;
    border-radius: 100%;
    transform: scale(5);
    filter: drop-shadow(0 0 3px #fff5);
    background: linear-gradient(to left, transparent, #fff, transparent);
    transition: 0.5s ease;
    animation: ${meteorShine} 8s ease 5s infinite;
  }

  &:after {
    transform: rotate(40deg);
  }

  &:before {
    transform: rotate(130deg);
  }
`;

export const Down = styled.a`
  position: absolute;
  bottom: 25px;
  left: calc(50% - 1rem);
  font-size: 2rem;
  animation: ${jump} 3s ease 7s infinite;
  color: ${(p) => p.theme.colors.font};
`;
