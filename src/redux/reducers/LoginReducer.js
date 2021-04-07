import * as actionType from "../actions/types";

const initState = {
  loading: false,
  loggedInUser: null,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.AUTH_LOGIN_REQUEST:
      return {
        loading: true,
        loggedInUser: null,
        error: null
      };

    case actionType.AUTH_LOGIN_ACCESS: {
      return {
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null
      };
    }

    case actionType.AUTH_LOGIN_FAILURE: {
      return {
        loading: false,
        loggedInUser: null,
        error: action.error
      };
    }

    case actionType.AUTH_LOGIN_LOGOUT: {
      return {
        loading: false,
        loggedInUser: null,
        error: null
      };
    }

    default:
      return state;
  }
};
