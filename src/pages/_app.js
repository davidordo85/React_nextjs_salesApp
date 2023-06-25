import React from 'react';
import { SSRProvider } from 'react-bootstrap';
import AuthLogin from '@/components/auth/authLogin/authLogin';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <AuthLogin>
        {({ isLogged, handleLogout }) => (
          <Component
            {...pageProps}
            isLogged={isLogged}
            handleLogout={handleLogout}
          />
        )}
      </AuthLogin>
    </SSRProvider>
  );
}

export default MyApp;
