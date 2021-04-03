import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { boxListReducer } from "./reducers/boxReducers";

const reducer = combineReducers({
  boxList: boxListReducer,
});

const initialState = {
  boxList: {
    boxList: [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
