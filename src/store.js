import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  passengersReducer: [],
  driversReducer: [],
  tripsReducer: [],
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
