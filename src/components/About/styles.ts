import styled, { keyframes } from 'styled-components';

import { ContainerFluid } from '../../styles/layout';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ContainerFluidEdited = styled(ContainerFluid)`
  overflow-x: hidden;
`;

export const Me = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  margin: 0 auto;
  width: 60%;
  z-index: 1;

  @media (max-width: 767px) {
    width: 100%;
  }

  h3 {
    margin-bottom: 5px;

    span {
      color: ${(p) => p.theme.colors.primary};
      background-image: ${(p) => p.theme.colors.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    span {
      font-weight: 600;
    }
  }

  .curriculum {
    margin: 15px 0 20px 0;
  }
`;

export const Photo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 35px;

  &,
  img {
    z-index: 1;
    width: 230px;
    height: 230px;
    border-radius: 100%;
    user-select: none;
  }

  .border {
    position: absolute;
    z-index: 0;

    width: 250px;
    height: 250px;
    top: -10px;
    left: -10px;
    border-radius: 100%;
    margin-bottom: 2rem;
    background: ${(p) => p.theme.colors.gradient};
    filter: drop-shadow(0 0 5px ${(p) => p.theme.colors.primary});
    animation: ${rotate} 3s linear infinite;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 18px;

  a {
    font-size: 1.5rem;
    color: ${(p) => p.theme.colors.font};

    &:hover {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;

export const BinaryBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0.8;
  z-index: 0;
  user-select: none;
`;

export const CodeBg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  opacity: 0.8;
  z-index: 0;
  user-select: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;
