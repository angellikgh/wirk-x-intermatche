import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import Main from './pages/Main';
import Singin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Singin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
