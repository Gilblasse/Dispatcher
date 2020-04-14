import { combineReducers } from "redux";
import passengerReducer from './passengerReducer'
import tripReducer from './tripReducer'


const rootReducer = combineReducers({
    passengerReducer,
    tripReducer,
  });

  export default rootReducer