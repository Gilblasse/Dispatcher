const {log} = require("firebase-functions/lib/logger");
// const Trip = require("../models/trip");
const Passenger = require("../models/passenger");

const create = async ({req, res, db}) => {
  const {Passenger: passengerName} = req.body;
  const passenger = Passenger.createOrGet(db, passengerName);

  log(`Name of Passenger ==> ${JSON.stringify({passenger})}`);

  res.status(201).send();
};

const getTrips = async ({req, res, db}) => {
  const limit = 3
  let commentsQuery = db.collection('trips')
              .where('date', '==', req.params.date)

  if (limit) {
    commentsQuery = commentsQuery.limit(limit);
  }

  return commentsQuery.get();
}

module.exports = {create, getTrips};
