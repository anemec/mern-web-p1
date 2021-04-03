import axios from "axios";
import {
  BOX_LIST_REQUEST,
  BOX_LIST_SUCCESS,
  BOX_LIST_FAIL,
} from "../constants/boxConstants";

export const listBoxes = () => async (dispatch) => {
  try {
    dispatch({ type: BOX_LIST_REQUEST });

    const { data } = await axios.get(`/api/boxes`);

    dispatch({
      type: BOX_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOX_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
