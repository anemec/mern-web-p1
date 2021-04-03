import {
  BOX_LIST_REQUEST,
  BOX_LIST_SUCCESS,
  BOX_LIST_FAIL,
} from "../constants/boxConstants";

export const boxListReducer = (state = {}, action) => {
  switch (action.type) {
    case BOX_LIST_REQUEST:
      return [];
    case BOX_LIST_SUCCESS:
      return action.payload;
    case BOX_LIST_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
