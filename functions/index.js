const express = require("express");
const cors = require("cors")({origin: true});
const app = express();
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const tripsController = require("./controllers/tripsController");

admin.initializeApp();
const settings = { timestampsInSnapshots: true };
admin.firestore().settings(settings);
const db = admin.firestore();

app.use(cors);

app.post("/", (req, res, next) => tripsController.create({req, res, next, db}));
app.get("/:date", (req, res, next) => tripsController.getTrips({req, res, next, db}));

exports.trips = functions.https.onRequest(app);

