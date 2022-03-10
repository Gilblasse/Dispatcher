const functions = require("firebase-functions");
const TripRouter = require("./routes/tripRoutes")


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.trips = functions.https.onRequest(TripRouter);
