import { validateEmail } from '../utils/Utils';
import api from '../utils/api';

const AuthService = {
  _url: process.env.REACT_APP_API_BASE_URL,

  _validateStringField(field, value) {
    if (typeof value !== 'string' || !value.trim().length)
      throw Error(`${field} is not valid`);
  },

  _validateEmail(email) {
    if (!validateEmail(email)) throw Error(`${email} is not a valid email`);
  },

  _userId(userId) {
    if (typeof userId !== 'undefined') {
      sessionStorage.setItem('userId', userId);

      return;
    }

    return sessionStorage.getItem('userId');
  },

  _token(token) {
    if (typeof token !== 'undefined') {
      sessionStorage.setItem('token', token);

      return;
    }

    return sessionStorage.getItem('token');
  },

  isLoggedIn() {
    const res = !!(this._userId() && this._token());

    return res;
  },

  login(credential) {
    // return api.post('/login', credential);
    return new Promise((res) =>
      res({
        firstname: 'User #1',
        id: 123,
        role: 10, //or 20
      })
    );
  },

  logout() {
    return Promise.resolve().then(() => {
      sessionStorage.clear();

      return true;
    });
  },

  getProfile() {
    return api.get(`/user/${this._userId()}`).then(({ user }) => user);
  },
};

export default AuthService;
