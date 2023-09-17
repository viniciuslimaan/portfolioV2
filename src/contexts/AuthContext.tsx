/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

import { User as UserType } from '../types/user';

import useAuth from '../hooks/useAuth';

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  user: UserType | null;
  login: (token: string) => void;
  logout: () => void;
}

const initialAuthContext: AuthContextProps = {
  authenticated: false,
  loading: true,
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initialAuthContext);

interface Props {
  children: JSX.Element;
}

function AuthProvider({ children }: Props) {
  const { authenticated, loading, user, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ authenticated, loading, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
