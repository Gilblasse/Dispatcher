// import {fetchPassengers} from './passengerActions';

const ADD_TRIP = "ADD_TRIP"
const FIND_TRIP = "FIND_TRIP"
const ADD_TRIPS = "ADD_TRIPS"
const LOADING_TRIPS = "LOADING_TRIPS"
const FILTER_TRIP_BY_DATE = "FILTER_TRIP_BY_DATE"
const BASE_URL = "https://us-central1-agmtlambdaapi.cloudfunctions.net/trips"



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

const findTrip = (tripId) => {
  return {
    type: FIND_TRIP,
    tripId
  };
}




// ==============================================
//              TRIP FETCH REQUEST
// ==============================================

const bookTrip = ({passenger, trip}, date) => {

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({passenger,trip,date})
    }

    return (dispatch) => {
        dispatch(loadingTrip())

      fetch(BASE_URL,configObj)
        .catch(error => console.log("ERROR: ", error))
    };
}



const fetchTrips = date => {
  return (dispatch) => {
      dispatch(loadingTrip())

    fetch(`${BASE_URL}?date=${date}`)
      .then((resp) => resp.json())
      .then((trips) => dispatch(addTrips(trips)) )
      .catch(error => console.log("ERROR: ", error))
  };
}


const fetchTrip = tripId => {
  return (dispatch) => {
      dispatch(loadingTrip())

    fetch(`${BASE_URL}/${tripId}`)
      .then((resp) => resp.json())
      .then((trip) => dispatch(addTrips(trip)) )
      .catch(error => console.log("ERROR: ", error))
  };
}



const deleteFromDB = tripId => {
  return (dispatch) => {
    dispatch(loadingTrip())

  fetch(`${BASE_URL}/${tripId}`, {method: "DELETE"})
    .catch(error => console.log("ERROR: ", error))
};
}





export {
    addTrip,
    addTrips,
    bookTrip,
    fetchTrips,
    fetchTrip,
    findTrip,
    deleteFromDB,
    ADD_TRIP,
    ADD_TRIPS,
    FIND_TRIP,
    LOADING_TRIPS,
    FILTER_TRIP_BY_DATE
}
