import { decodeToken } from 'react-jwt';

import { UserDecodedToken } from '../../types/auth';

export const getAuthToken = () => {
  const token = localStorage.getItem('@viniciuslima:auth');

  return token ? JSON.parse(token) : false;
};

export const setAuthToken = (token: string) => {
  localStorage.setItem('@viniciuslima:auth', JSON.stringify(token));
};

export const removeAuthToken = () => {
  localStorage.removeItem('@viniciuslima:auth');
};

export const getDecodedAuthToken = () => {
  return decodeToken<UserDecodedToken>(getAuthToken());
};
