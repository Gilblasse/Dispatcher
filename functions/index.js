const functions = require("firebase-functions");
const { log } = require("firebase-functions/logger");
const TripsDb = require("./config");
const TripRouter = require("./routes/tripRoutes")

log({TripsDb})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.trips = functions.https.onRequest(TripRouter);
