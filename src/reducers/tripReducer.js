import { ADD_TRIP } from '../actions/tripActions'

const initialState = []

function tripReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TRIP:
            break;
    
        default:
            return state;
    }

}

export default tripReducer