const firebase = require('firebase')
const {log} = require("firebase-functions/lib/logger");

log(process.env)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.AGMT_FIREBASE_API_KEY,
    authDomain: "agmtlambdaapi.firebaseapp.com",
    projectId: "agmtlambdaapi",
    storageBucket: "agmtlambdaapi.appspot.com",
    messagingSenderId: "419079393490",
    appId: "1:419079393490:web:b49013dc060a7284321d0b",
    measurementId: "G-NV89QSFP0J"
};

firebase.initialize(firebaseConfig)
const db = firebase.firestore()
const TripsDb = db.collection("trips");

module.exports = TripsDb