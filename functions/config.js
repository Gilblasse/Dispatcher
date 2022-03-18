const admin = require("firebase-admin");

admin.initializeApp();
const settings = { timestampsInSnapshots: true };
admin.firestore().settings(settings);
const db = admin.firestore();

const TripsDb = db.collection("trips");
const PassengerDb = db.collection("passengers");
const DriverDb = db.collection("drivers");

module.exports = {TripsDb, PassengerDb, DriverDb, db}