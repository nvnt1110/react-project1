import * as actionType from "../actions/types";

const initState = {
  sum: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.TEST_SUM:
      return {
        ...state,
        sum: state.sum + 1
      };

    default:
      return state;
  }
};
