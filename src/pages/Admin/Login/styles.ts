import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 3rem 0;
  width: 400px;
  max-width: 90%;
  height: 100vh;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  width: 100%;
  padding: 30px;
  z-index: 1;
  background: ${(p) => p.theme.colors.gradientBg};
  border: 1px solid ${(p) => p.theme.colors.bgLight};
`;

export const FormTop = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  h2 {
    margin-bottom: 5px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: ${(p) => p.theme.colors.font};
  }

  input {
    border: none;
    font-size: 1rem;
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 5px;
    background: ${(p) => p.theme.colors.bgLight};
    color: ${(p) => p.theme.colors.font};
  }
`;

export const Logo = styled.img`
  user-select: none;
  height: 1.5rem;
`;
