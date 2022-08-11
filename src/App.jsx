import React, { useEffect } from 'react';
import { Routes, Navigate, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import Main from './pages/Main';
import Singin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import { useAuthState } from './providers/authProvider';

function App() {
  const location = useLocation();
  const { isLoggedIn } = useAuthState();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/signin" element={<Singin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate replace to="/signin" />} />
    </Routes>
  );
}

export default App;
