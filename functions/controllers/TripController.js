const Trip = require('../models/Trip');


const getTrips = async (req, res) => {
    const trips = await Trip.all()
    res.send({msg: 'ALL Trips', data: trips});
};

const getTrip = async (req, res) => {
    const id = req.params.id
    const trip = await Trip.findbyId(id)
    res.send({msg: 'Trip', data: trip});
};

const createTrip = async (req, res) => {
    const trip = await Trip.findOrCreate(req.body)
    res.send({msg: 'Trip Created', trip});
};


const updateTrip = async (req, res) => {
    await Trip.update(req.body)
    res.send({msg: 'Trip deleted'})
};

const deleteTrip = async (req, res) => {
    await Trip.delete(req.body.id)
    res.send({msg: 'Trip deleted'})
};

module.exports = {createTrip, getTrips, getTrip, updateTrip, deleteTrip};