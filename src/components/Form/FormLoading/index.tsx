import Skeleton from 'react-loading-skeleton';

import FormGroup from '../FormGroup';

interface Props {
  length?: number;
}

const FormLoading = ({ length = 1 }: Props) => {
  const forms = [];

  for (let i = 0; i < length; i++) {
    forms.push(
      <FormGroup>
        <Skeleton height={20} width={80} />
        <Skeleton height={40} />
      </FormGroup>,
    );
  }

  return (
    <>
      {forms}

      <Skeleton height={60} width={180} />
    </>
  );
};

export default FormLoading;
