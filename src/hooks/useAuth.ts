import { useEffect, useState } from 'react';

import { User as UserType } from '../types/user';

import api from '../services/api';

import {
  getAuthToken,
  removeAuthToken,
  setAuthToken,
} from '../utils/functions/authLocalStorage';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getAuthentication = async () => {
      const token = getAuthToken();

      if (!token) {
        return setLoading(false);
      }

      api.defaults.headers.Authorization = `Bearer ${token}`;

      try {
        const response = await api.post('/auth/me');

        setUser(response.data.data);
        setAuthenticated(true);
      } catch (err) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    getAuthentication();
  }, []);

  const login = (token: string) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthToken(token);
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
    removeAuthToken();
    delete api.defaults.headers.Authorization;
  };

  return { authenticated, loading, user, login, logout };
};

export default useAuth;
