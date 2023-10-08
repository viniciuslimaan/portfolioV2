import styled, { DefaultTheme } from 'styled-components';

interface InputBgProps {
  theme: DefaultTheme;
  uploaded: boolean;
  isDragReject: boolean;
  isFocused: boolean;
}

const getColor = (p: InputBgProps) => {
  if (p.uploaded) return p.theme.colors.success;
  if (p.isDragReject) return p.theme.colors.error;
  if (p.isFocused) return p.theme.colors.primary;
  return p.theme.colors.fontLight;
};

export const InputBg = styled.div<InputBgProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  padding: 35px;
  border-width: 2px;
  border-radius: 5px;
  margin-top: 5px;
  cursor: default;
  border-style: dashed;
  border-color: ${(p) => getColor(p)};
  background-color: ${(p) => p.theme.colors.bgLight};
  transition: border 0.24s ease-in-out;

  p,
  small {
    color: ${(p) => getColor(p)} !important;
  }
`;

export const ImgPreview = styled.div`
  position: relative;
  margin-top: 25px;

  img {
    max-width: 100%;
  }
`;

export const ImgRemove = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.5s ease;
  background: ${(p) => p.theme.colors.error};

  &:hover {
    filter: brightness(0.8);
  }
`;
