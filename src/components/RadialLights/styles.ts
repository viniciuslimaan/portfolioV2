import styled from 'styled-components';

interface LightsProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size?: string;
  blur?: string;
}

export const Light = styled.div<LightsProps>`
  position: absolute;
  top: ${(p) => p.top};
  bottom: ${(p) => p.bottom};
  left: ${(p) => p.left};
  right: ${(p) => p.right};
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  filter: blur(${(p) => p.blur});
  background: radial-gradient(circle, rgba(0, 21, 80, 0.8), transparent 70%);
`;
