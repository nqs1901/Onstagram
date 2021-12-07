import axios from 'axios';
import { push } from 'connected-react-router';
import { GLOBALTYPES } from '../actions/globalTypes';
import { loginSuccess, logoutSuccess } from '../actions/authAction';
import { success, failure } from '../actions/commonAction';
import { API_URL, JWT_TOKEN } from '../config/config';
import { setLocalStorage, clearLocalStorage } from '../utils/storageUtil';

export const login = ({ email, password }) => async (dispatch) => {
    dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
    axios
      .post('/api/v1/auth/login', { email, password })
      .then((response) => {
        dispatch(loginSuccess(response.data));
        setLocalStorage(JWT_TOKEN, response.data.tokens.access.token);
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
    dispatch(logoutSuccess());
    dispatch(push('/'));
    return false;
  };
};