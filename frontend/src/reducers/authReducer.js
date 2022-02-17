import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {
    // token: null,
    // user: {},
}

const authReducer = (state = initialState, action) => {
    console.log("he;")
    switch (action.type){
        case GLOBALTYPES.AUTH:
            console.log("DF",action)
            // return action.payload;
            return action.payload;
                // ...state,
                // token: action.data.tokens.access.token,
                // user: action.data.user,
                // isLoading: false,
                
            
        default:
            return state;
    }
}


export default authReducer