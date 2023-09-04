import styled from 'styled-components';

export const FormBg = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  z-index: 1;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  background: ${(p) => p.theme.colors.gradientBg};
  border: 1px solid ${(p) => p.theme.colors.bgLight};
`;
