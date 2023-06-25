import React from 'react';
import storage from '@/utils/storage';
import { configureClient } from '@/pages/api/client';

const accessToken = storage.get('auth');
configureClient({ accessToken });

function AuthLogin({ children, isInitiallyLogged = !!accessToken }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return children({ isLogged, handleLogout });
}

export default AuthLogin;
