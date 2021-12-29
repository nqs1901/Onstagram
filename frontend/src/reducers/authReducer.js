import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {
    token: null,
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.AUTH:
            // return action.payload;
            return Object.assign({}, state, {
                isAuthenticated: true,
                // isLoading: false,
                token: action.data,
            });
        default:
            return state;
    }
}


export default authReducer