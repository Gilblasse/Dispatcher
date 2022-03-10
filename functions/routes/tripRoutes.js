const express = require("express");
const cors = require("cors")({origin: true});
const TripRouter = express.Router();
const TripController = require("../controllers/TripController")

TripRouter.use(express.json());
TripRouter.use(cors);

TripRouter.route('/')
.get(TripController.getTrips)
.post(TripController.create)
.put(TripController.updateTrip)
.delete(TripController.deleteTrip);

module.exports = TripRouter