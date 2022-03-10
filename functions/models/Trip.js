const { isEmpty } = require("lodash");
const TripsDb = require("../config");
const tripAttr = require("../constants/tripConstants");
const { camelize, camelizeKeys } = require("../helpers");
class Trip {
  static attr = tripAttr.map(camelize);
  constructor(tripObj) {
    Object.entries(tripObj).forEach(([key,v]) => {
      const k = camelize(key)
      Trip.attr.includes(k) && (this[k] = v)
      // this[k] = Trip.attr.includes(k) ? v : null
    })
  }

  static async all(){
    const snapshot = await TripsDb.get()
    const trips = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return trips
  }

  static async update(data){
    const {id, ...tripObj} = data
    await TripsDb.doc(id).update(tripObj)
  }

  static async delete(id){
    await TripsDb.doc(id).delete()
  }

  static async create(tripObj){
    const tripRef = await TripsDb.add(tripObj)
    const trip = await Trip.findbyId(tripRef.id)
    return trip
  }

  static async findbyId(id){
    const snapshot = await TripsDb.doc(id).get()
    const trip = snapshot.data()
    return {id, trip}
  }

  static async queryTrip(tripObj){
    let trip = {}
    const {date=null, startTime=null, passengerID=null, driver=null} = camelizeKeys(tripObj)

    const query = await TripsDb
      .where('date', '==', date)
      .where('startTime', '==', startTime)
      .where('passengerID', passengerID)
      .where('driverID', '==', driver)
      .get()

    if (!query.empty) {
      const snapshot = query.docs[0];
      trip = snapshot.data();
    }

    return trip
  }

  static async findOrCreate(tripObj){
    const { id=null } = tripObj
    let trip = await id ? Trip.findbyId(id) : Trip.queryTrip(tripObj)

    if(isEmpty(trip)){
      trip = await Trip.create(tripObj)
    }

    return trip
  }

}

module.exports = Trip;