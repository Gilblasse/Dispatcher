import { ADD_TRIP, ADD_TRIPS, LOADING_TRIPS } from '../actions/tripActions'
import moment from 'moment'

const initialState = {
    trips: [],
    loading: false
}

function tripReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_TRIP:
            const trip = sanitizeTrip(action.trip)
            return {...state, trips: [...state.trips, trip], loading: false }

        case ADD_TRIPS:
            const trips = action.trips.map(trip => sanitizeTrip(trip))
            return {...state, trips, loading: false }
        
        case LOADING_TRIPS:
            return {...state, loading: true }

    
        default:
            return state;
    }

}


const sanitizeTrip = trip => {
    return (
        {
            ...trip, 
            startLocation: JSON.parse(trip.startLocation), 
            endLocation: JSON.parse(trip.endLocation), 
            date: moment(trip.time).format("LL"),
            time: moment(trip.time).format("LT") 
        }
    )
}

export default tripReducer