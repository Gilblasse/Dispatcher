
const ADD_PASSENGER = "ADD_PASSENGER"
const ADD_PASSENGERS = "ADD_PASSENGERS"
const BASE_URL = "http://localhost:3001/api/v1/passengers"


const addPassenger = passenger => {
    return {
      type: ADD_PASSENGER,
      passenger
    };
};

const addPassengers = passengers => {
    return {
        type: ADD_PASSENGERS,
        passengers
    };
}




function createPassenger(passenger) {

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(passenger)
    }

    return (dispatch) => {
      fetch(BASE_URL,configObj)
        .then((resp) => resp.json())
        .then((passenger) =>  dispatch(addPassenger(passenger)) )
        .catch(error => console.log("addNewPassengerToDB(): ",error))
    };
}



function fetchPassengers() {
    return (dispatch) => {
      fetch(BASE_URL)
        .then((resp) => resp.json())
        .then((passengers) => dispatch(addPassengers(passengers)) )
        .catch(error => console.log("fetchPassengers(): ", error))
    };
}





export {
    addPassenger,
    fetchPassengers,
    createPassenger,
    ADD_PASSENGER,
    ADD_PASSENGERS
}