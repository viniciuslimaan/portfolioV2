import { isAxiosError } from 'axios';

import { toastError } from '../toast';

export const handleFormErrors = (err: any, setError: any): void => {
  if (isAxiosError(err)) {
    const error = err?.response?.data?.data;
    const validationErrors = error.errors;

    toastError(error.msg || 'Ocorreu um erro ao salvar os dados.');

    if (validationErrors) {
      Object.keys(validationErrors).forEach((key: any) => {
        setError(key, {
          type: 'custom',
          message: validationErrors[key][0] || '',
        });
      });
    }
  }
};
