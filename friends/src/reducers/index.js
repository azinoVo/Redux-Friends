// import actions when ready
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions'

const initialState = {
  friends: [],
  isLoggingIn: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: 
      return {
        ...state,
        isLoggingIn: true
    };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };



    default:
      return state;
  }
};

export default reducer;
