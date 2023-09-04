import styled, { keyframes } from 'styled-components';

const pulseStar = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.2; }
    100% { opacity: 1; }
`;

interface StarProps {
  posy: string;
  posx: string;
  size: string;
  time: string;
}

export const Star = styled.div<StarProps>`
  position: absolute;
  background-color: #fff;
  top: ${(p) => p.posy}px;
  left: ${(p) => p.posx}px;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  animation: ${pulseStar} ${(p) => p.time}s ease-in-out infinite;
  box-shadow: 0px 0px 3px 1px rgba(255, 255, 255, 0.5);
`;

export const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to top,
    ${(p) => p.theme.colors.bg} 0%,
    #001550 100%
  );
`;
