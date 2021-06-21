import React, { createContext, useCallback, useState } from 'react';
import ICredentiaslDev from '../interfaces/credentialsDev';
import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
  active: string;
  created_at: Date | string;
  updated_at: Date | string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

export interface IAuthContextState {
  user: IUser;
  token: string;
  signInDev(credentials: ICredentiaslDev): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<IAuthContextState>(
  {} as IAuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('ProjectManagerToken');
    const user = localStorage.getItem('ProjectManagerUser');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signInDev = useCallback(async (credentials: ICredentiaslDev) => {
    const response = await api.post('/sessions', credentials);

    const { token, user } = response.data;

    localStorage.setItem('ProjectManagerToken', token);
    localStorage.setItem('ProjectManagerUser', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('ProjectManagerToken');
    localStorage.removeItem('ProjectManagerUser');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signInDev, user: data.user, token: data.token, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
