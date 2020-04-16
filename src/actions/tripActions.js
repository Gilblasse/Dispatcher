const ADD_TRIP = "ADD_TRIP"
const ADD_TRIPS = "ADD_TRIPS"
const LOADING_TRIPS = "LOADING_TRIPS"
const BASE_URL = "http://localhost:3001/api/v1/trips"



const addTrip = trip => {
    return {
      type: ADD_TRIP,
      trip
    };
};

const addTrips = trips => {
    return {
      type: ADD_TRIPS,
      trips
    };
};

const loadingTrip = () => {
    return {
      type: LOADING_TRIPS,
    };
};




// ==============================================
//              TRIP FETCH REQUEST
// ==============================================

const bookTrip = ({passenger, trip}) => {

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({passenger,trip})
    }

    return (dispatch) => {
        dispatch(loadingTrip())
        
      fetch(BASE_URL,configObj)
        .then((resp) => resp.json())
        .then((trip) => dispatch(addTrip(trip)) )
        .catch(error => console.log("ERROR: ", error))
    };
}



const fetchTrips = () => {

    return (dispatch) => {
        dispatch(loadingTrip())
        
      fetch(BASE_URL)
        .then((resp) => resp.json())
        .then((trips) => dispatch(addTrips(trips)) )
        .catch(error => console.log("ERROR: ", error))
    };

}






export {
    addTrip,
    addTrips,
    bookTrip,
    fetchTrips,
    ADD_TRIP,
    ADD_TRIPS,
    LOADING_TRIPS
}