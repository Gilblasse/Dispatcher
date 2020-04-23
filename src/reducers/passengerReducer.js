import { ADD_PASSENGER, ADD_PASSENGERS, LOADING_PASSENGERS } from '../actions/passengerActions'
// import { v4 as uuidv4 } from 'uuid';

const initialState = {
    passengers: [],
    loading: false
}

function passengerReducer(state = initialState, action) {
    
    switch (action.type) {
        
        case ADD_PASSENGERS:
            return {...state, passengers: action.passengers}

        case ADD_PASSENGER:
            return {...state, passengers: [...state.passengers, action.passenger], loading: false}
        
        case LOADING_PASSENGERS:
            return {...state, loading: true}

        default:
            return state;
    }

}


export default passengerReducer