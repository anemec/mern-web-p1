import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { boxListReducer, boxDetailsReducer } from './reducers/boxReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
  boxList: boxListReducer,
  boxDetails: boxDetailsReducer,
  userLogin: userLoginReducer,
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
