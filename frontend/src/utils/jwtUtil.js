import jwtDecode from 'jwt-decode';

import { getLocalStorage } from './storageUtil';
import { JWT_TOKEN } from '../config/config';

export let isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {

      // Checking if token is expired.
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};

// export let refreshToken()

export let getToken = (token) => {
  return getLocalStorage(token);
};

export let isAuthenticated = () => {
  return !!getToken(JWT_TOKEN) && !isTokenExpired(getToken(JWT_TOKEN));
};