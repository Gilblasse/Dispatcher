import { combineReducers } from "redux";
import passengerReducer from './passengerReducer'
import tripReducer from './tripReducer'
import dateReducer from './dateReducer'

const rootReducer = combineReducers({
    passengerReducer,
    tripReducer,
    dateReducer
  });

  export default rootReducer