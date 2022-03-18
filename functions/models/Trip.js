const { log } = require("firebase-functions/logger");
const { isEmpty } = require("lodash");
const { TripsDb } = require("../config");
const {tripAttr} = require("../constants/tripConstants");
const { camelize, camelizeKeys } = require("../helpers");
const { findOrCreateDriver } = require("./Driver");
const { findOrCreatePassenger } = require("./Passenger");

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

  static async update({id, ...tripObj}){
    await TripsDb.doc(id).update(tripObj)
    const trip = await Trip.findbyId(id)
    return trip
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
    if(!id) return null
    const snapshot = await TripsDb.doc(id).get()
    const trip = snapshot.data()

    log({FindingByID: {id, ...trip}})
    return {id, ...trip}
  }

  static async queryRow(tripObj){
    const { date=null, rowStart=null } = camelizeKeys(tripObj)
    const indexVal = `${date}_${rowStart}`

    if(!rowStart) return null
    let trip = {}
    const myQuery = await TripsDb.where("index",'==', indexVal).get()

    if (!myQuery.empty) {
      const doc = myQuery.docs[0]
      trip = {id: doc.id, ...doc.data()}
    }

    return trip
  }

  static async findOrCreate(tripObj){
    const { id=null, passenger:passName, driver:drivName, ...data} = camelizeKeys(tripObj)

    let trip = await Trip.findbyId(id) || await Trip.queryRow(tripObj)
    const passenger = await findOrCreatePassenger({name: passName || 'imNull'})
    const driver = await findOrCreateDriver({name: drivName || 'imNull'})

    if(!trip || isEmpty(trip)){
      trip = await Trip.create({
        ...data,
        passengerID: passenger.id,
        driverID: driver.id,
        index: `${data.date}_${data.rowStart}`
      })
    }else{
      trip = await Trip.update({...trip, passengerID: passenger.id ,driverID: driver.id })
    }

    return trip
  }

}

module.exports = Trip;