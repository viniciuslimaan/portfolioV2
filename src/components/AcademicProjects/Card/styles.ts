import styled from 'styled-components';

export const CardBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
  width: 100%;
  max-width: 350px;

  &:hover h3,
  &:hover p {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  &:hover .img {
    opacity: 0.8;
  }

  &:hover .img .view-icon {
    opacity: 1;
  }
`;

interface ImageProps {
  src: string;
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
  width: 100%;
  height: 200px;
  border-radius: 10px;
  transition: 0.5s ease;

  .view-icon {
    opacity: 0;
    font-size: 6rem;
    color: ${(p) => p.theme.colors.bg};
    transition: 0.5s ease;
  }
`;

export const Description = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.gradientBg};
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  width: 80%;
  max-width: 100%;
  text-align: center;
  margin-top: -15px;
  border-radius: 5px;
  padding: 10px 20px;

  h3,
  p {
    transition: color 0.5s ease;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const ModalClose = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${(p) => p.theme.colors.font};
  background: ${(p) => p.theme.colors.gradientBg};
  border: 1px solid ${(p) => p.theme.colors.bgLight};
  border-radius: 5px;
  transition: 0.5s ease;

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

export const ModalTitle = styled.div`
  margin: 15px 0 20px 0;

  p {
    margin-top: 3px;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.primary};
  }

  h3 {
    font-size: 2rem;
  }
`;

export const ModalText = styled.p`
  color: ${(p) => p.theme.colors.fontLight};
  text-align: justify;
`;
