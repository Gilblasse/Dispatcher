const { log } = require('firebase-functions/lib/logger');
const TripsDb = require("../config");


const getTrips = async (req, res) => {
    const snapshot = await TripsDb.get()
    const trips = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    res.send({msg: 'ALL Trips', data: trips});
};

const getTrip = async (req, res) => {
    const id = req.params.id
    let trip = {}
    // const snapshot = await TripsDb.doc(id).get()
    const query = await TripsDb.where('Passenger', '==', 'Boby').get()
    if (!query.empty) {
        const snapshot = query.docs[0];
        trip = snapshot.data();
    }

    res.send({msg: 'Trip', data: trip});
};

const createTrip = async (req, res) => {
    const data = req.body
    const tripRef = await TripsDb.add(data)
    res.send({msg: 'Trip Created', id: tripRef.id});
};

const updateTrip = async (req, res) => {
    res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!');
};

const deleteTrip = async (req, res) => {
    res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!');
};

module.exports = {createTrip, getTrips, getTrip, updateTrip, deleteTrip};