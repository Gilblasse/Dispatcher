import { ADD_PASSENGER } from '../actions/passengerActions'
// import { v4 as uuidv4 } from 'uuid';

const initialState = []

function passengerReducer(state = initialState, action) {
    
    switch (action.type) {
        case ADD_PASSENGER:
            break;
    
        default:
            return state;
    }

}


export default passengerReducer