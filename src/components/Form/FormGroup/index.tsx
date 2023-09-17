import { ReactNode } from 'react';

import { FormGroupBg, FormInvalid } from './styles';

type inputError = {
  message?: string;
  type?: string;
};

interface Props {
  error?: inputError;
  children: ReactNode;
}

const FormGroup = ({ error, children }: Props) => {
  return (
    <FormGroupBg isInvalid={error ? true : false}>
      {children}

      {error && <FormInvalid>{error.message || ''}</FormInvalid>}
    </FormGroupBg>
  );
};

export default FormGroup;
