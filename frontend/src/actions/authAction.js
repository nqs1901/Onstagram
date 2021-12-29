import { GLOBALTYPES } from './globalTypes'

export const loginSuccess = (data) => {
    return {
        type: GLOBALTYPES.AUTH,
        // payload: {
        //     token: data.tokens.access.token,
        //     user: data.user
        // } 
        data
    };
};

export const loginFailure = (error) => {
    return {
        type: GLOBALTYPES.ALERT,
        payload: {
            error: error.response.data.message
        } 
    };
};

export const logoutSuccess = () => {
    return {
        type: GLOBALTYPES.ALERT
    };
};

// export const signupSuccess = (data) => {
//     return {
//         type:  SIGN_UP_SUCCESS,
//         data
//     };
// };

// export const signupFailure = (error) => {
//     return {
//         type: SIGN_UP_FAILURE,
//         error
//     };
// };