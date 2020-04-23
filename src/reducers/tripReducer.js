import { ADD_TRIP, ADD_TRIPS, LOADING_TRIPS, FIND_TRIP } from '../actions/tripActions'
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
            const trips = action.trips.length === 0 ? action.trips : action.trips.map(trip => sanitizeTrip(trip))  
            return {...state, trips, loading: false }
        
        case LOADING_TRIPS:
            return {...state, loading: true }

        case FIND_TRIP: 
            const filterTrips = state.trips.filter(trip => trip.id === parseInt(action.tripId))
            return {...state, trips: filterTrips}

    
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
            date: moment(trip.date).format("LL"),
            time: moment(trip.time).add(5,"hours").format("h:mm a")
        }
    )
}

export default tripReducer