import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "./providers/authProvider";

import "./css/style.css";
// import "./charts/ChartjsConfig";

import PrivateRoute from "./components/PrivateRoute";
// Import pages

import Main from './pages/Main';
import Singin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Singin />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
