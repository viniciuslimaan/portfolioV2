import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

export const CardBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
  cursor: default;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 350px;
  border-radius: 5px;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover .img {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

interface ImageProps {
  src: string;
  type: string;
}

export const Image = styled.div<ImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(p) =>
    p.src ? 'url(' + p.src + ')' : p.theme.colors.fontLight};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.5s ease;
  width: 100%;
  height: 350px;
  cursor: pointer;
  border-radius: ${(p) => (p.type === 'design' ? '5px' : '5px 5px 0 0')};

  .view-icon {
    opacity: 0;
    font-size: 7rem;
    color: ${(p) => p.theme.colors.bg};
    transition: 0.5s ease;
  }

  &:hover .view-icon {
    opacity: 1;
  }
`;

export const Description = styled.div`
  position: relative;
  background: linear-gradient(
    to top right,
    ${(p) => p.theme.colors.bg} 0%,
    ${(p) => p.theme.colors.bgLight} 100%
  );
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  width: 100%;
  height: 100px;
  border-radius: 0 0 5px 5px;
  padding: 10px 15px;

  .type {
    font-size: 0.8rem;
    font-weight: 800;
    line-height: 100%;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.primary};
  }

  .name {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 130%;
    color: ${(p) => p.theme.colors.font};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 13px;

  margin-top: 10px;

  a {
    color: ${(p) => p.theme.colors.fontLight};
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.5s ease;

    &:hover {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;
