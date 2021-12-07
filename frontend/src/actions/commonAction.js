import { GLOBALTYPES } from './globalTypes'

export const success = (success) => {
    return {
        type: GLOBALTYPES.ALERT, 
        payload: {
            success: success.data.msg
        }
    };
};

export const failure = (error) => {
    return {
        type: GLOBALTYPES.ALERT,
        payload: {
            error: error.response.data.message
        } 
    };
};

