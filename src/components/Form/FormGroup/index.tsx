import { ReactNode } from 'react';

import { FormGroupBg, FormInvalid } from './styles';

interface Props {
  isInvalid?: boolean;
  errorMsg?: string;
  children: ReactNode;
}

const FormGroup = ({ isInvalid, errorMsg, children }: Props) => {
  return (
    <FormGroupBg isInvalid={isInvalid}>
      {children}

      {isInvalid && <FormInvalid>{errorMsg}</FormInvalid>}
    </FormGroupBg>
  );
};

export default FormGroup;
