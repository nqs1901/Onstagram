import axios from 'axios';
import { push } from 'connected-react-router';
import { GLOBALTYPES } from '../actions/globalTypes';
import { loginSuccess, logoutSuccess } from '../actions/authAction';
import { success, failure } from '../actions/commonAction';
import { API_URL, JWT_TOKEN,REFRESH_TOKEN } from '../config/config';
import { setLocalStorage, clearLocalStorage } from '../utils/storageUtil';

export const login = ({ email, password }) => async (dispatch) => {
    dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
    axios
      .post('/api/v1/auth/login', { email, password })
      .then((response) => {
        // dispatch(loginSuccess(response.data));
        dispatch({
          type: GLOBALTYPES.AUTH, 
          payload: {
              token: response.data.tokens.access.token,
              user: response.data.user
          } 
        })
        setLocalStorage(JWT_TOKEN, response.data.tokens.access.token);
        setLocalStorage(REFRESH_TOKEN, response.data.tokens.access.token);
        dispatch(success(response))
        dispatch(push('/'));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
};

export const refreshToken = (token) => async (dispatch) => {
  axios
    .post('/api/v1/auth/refresh-tokens', { token })
    .then((response) => {
      // dispatch(loginSuccess( response.data.tokens.access.token));
      clearLocalStorage(JWT_TOKEN);
      setLocalStorage(JWT_TOKEN, response.data.access.token);
      dispatch(success(response))
      dispatch(push('/'));
    })
    .catch((error) => {
      dispatch(failure(error));
    });
};

export const logout = () => {
  return (dispatch) => {
    clearLocalStorage(JWT_TOKEN);
    clearLocalStorage(REFRESH_TOKEN);
    dispatch(logoutSuccess());
    dispatch(push('/'));
    return false;
  };
};