import { useContext } from 'react';
import { AuthContext, IAuthContextState } from '../context/auth';

export default function useAuth(): IAuthContextState {
  const context = useContext(AuthContext);

  return context;
}
