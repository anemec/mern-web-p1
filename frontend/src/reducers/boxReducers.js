import {
  BOX_LIST_REQUEST,
  BOX_LIST_SUCCESS,
  BOX_LIST_FAIL,
  BOX_REQUEST,
  BOX_SUCCESS,
  BOX_FAIL,
} from '../constants/boxConstants';

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

export const boxDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case BOX_REQUEST:
      return {};
    case BOX_SUCCESS:
      return action.payload;
    case BOX_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
