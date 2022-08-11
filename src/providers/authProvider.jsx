import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

import { AuthService } from '../services';
import api from '../utils/api';

const AuthState = createContext();
const AuthDispatch = createContext();

const EVENT_TYPES = {
  UPDATE: 'update',
  LOGIN_SUCCESS: 'login_success',
  LOGIN_ERROR: 'login_error',
  LOGOUT: 'logout',
  CLEAR_ERRORS: 'clear_errors',
  ERROR: 'error',
};

const EVENTS = {
  [EVENT_TYPES.UPDATE]: (state, event) => {
    const { name, value } = event.payload;

    return {
      ...state,
      [name]: value,
    };
  },
  [EVENT_TYPES.LOGIN_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isLoggedIn: true,
      loading: false,
      me: payload,
    };
  },
  [EVENT_TYPES.LOGIN_ERROR]: (state, event) => {
    const { error } = event.payload;
    return {
      ...state,
      isLoggedIn: false,
      loading: false,
      error,
    };
  },
  [EVENT_TYPES.LOGOUT]: () => {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
      isLoggedIn: false,
    };
  },
  [EVENT_TYPES.ERROR]: (state, event) => {
    const { error } = event.payload;
    return {
      ...state,
      loading: false,
      error,
    };
  },
  [EVENT_TYPES.CLEAR_ERRORS]: (state) => {
    return {
      ...state,
      error: '',
    };
  },
};

const INITIAL_STATE = {
  isLoggedIn: AuthService.isLoggedIn(),
  loading: false,
  me: null,
  error: null,
};

const AuthReducer = (state, event) => {
  return EVENTS[event.type](state, event) || state;
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const handleUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: EVENT_TYPES.UPDATE, payload: { name, value } });
  };

  const handleLogin = (credential) => {
    dispatch({
      type: EVENT_TYPES.UPDATE,
      payload: { name: 'loading', value: true },
    });

    return AuthService.login(credential)
      .then((user) => {
        AuthService._userId(user.idUser);
        dispatch({ type: EVENT_TYPES.LOGIN_SUCCESS, payload: user });
        return true;
      })
      .catch(({ message }) => {
        dispatch({
          type: EVENT_TYPES.LOGIN_ERROR,
          payload: { error: message },
        });
        return false;
      });
  };

  const handleLogout = () => {
    return AuthService.logout().then(() => {
      dispatch({ type: EVENT_TYPES.LOGOUT });
    });
  };

  const handleClearErrors = () => {
    dispatch({ type: EVENT_TYPES.CLEAR_ERRORS });
  };

  const events = {
    onUpdate: handleUpdate,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onClearErrors: handleClearErrors,
  };

  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={events}>{children}</AuthDispatch.Provider>
    </AuthState.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthState);

  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatch);

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
