const admin = require("firebase-admin");

admin.initializeApp();
const settings = { timestampsInSnapshots: true };
admin.firestore().settings(settings);
const db = admin.firestore();

const TripsDb = db.collection("trips");

module.exports = TripsDb