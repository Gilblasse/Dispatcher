import { ADD_PASSENGER, ADD_PASSENGERS } from '../actions/passengerActions'
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
            const newState = {...state, passengers: [...state.passengers, action.passenger], loading: false}
            console.log(newState)
            return {...state, passengers: [...state.passengers, action.passenger], loading: false}
    
        default:
            return state;
    }

}


export default passengerReducer