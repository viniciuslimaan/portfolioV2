import styled from 'styled-components';

interface FormGroupProps {
  isInvalid?: boolean;
}

export const FormGroupBg = styled.div<FormGroupProps>`
  label {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.fontLight};

    small {
      color: #808080;
      font-size: 0.7rem;
    }
  }

  input,
  select,
  textarea {
    border: none;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 5px;
    background: ${(p) => p.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.font};
    border: ${(p) =>
      p.isInvalid
        ? `1px solid ${p.theme.colors.error}`
        : `1px solid ${p.theme.colors.bgLight}`};
  }

  input:active,
  select:active,
  textarea:active,
  input:focus,
  select:focus,
  textarea:focus {
    border: 1px solid ${(p) => p.theme.colors.primary};
  }
`;

export const FormInvalid = styled.p`
  font-size: 0.8rem;
  color: ${(p) => p.theme.colors.error};
  margin-top: 5px;
`;
