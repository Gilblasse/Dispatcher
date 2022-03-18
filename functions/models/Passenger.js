const { log } = require("firebase-functions/logger");
const { isEmpty } = require("lodash");
const { PassengerDb } = require("../config");
const { passengerAttr } = require("../constants/tripConstants");
const { camelize, camelizeKeys } = require("../helpers");

class Passenger {
  static attr = passengerAttr.map(camelize);
  constructor(passengerObj) {
    Object.entries(passengerObj).forEach(([key,v]) => {
      const k = camelize(key)
      Passenger.attr.includes(k) && (this[k] = v)
      // this[k] = Passenger.attr.includes(k) ? v : null
    })
  }

  static async all(){
    const snapshot = await PassengerDb.get()
    const passengers = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return passengers
  }

  static async update({id, ...passengerObj}){
    await PassengerDb.doc(id).update(passengerObj)
    const passenger = await Passenger.findbyId(id)
    return passenger
  }

  static async delete(id){
    await PassengerDb.doc(id).delete()
  }

  static async create(passengerObj){
    const passengerRef = await PassengerDb.add(passengerObj)
    const passenger = await Passenger.findbyId(passengerRef.id)
    return passenger
  }

  static async findbyId(id){
    if(!id) return null
    const snapshot = await PassengerDb.doc(id).get()
    const passenger = snapshot.data()

    return {id, ...passenger}
  }

  static async queryRow(passengerObj){
    const { name } = camelizeKeys(passengerObj)

    if(!name || isEmpty(name)) return null
    let passenger = {}
    const myQuery = await PassengerDb.where("name",'==', name).get()

    if (!myQuery.empty) {
      const doc = myQuery.docs[0]
      passenger = {id: doc.id, ...doc.data()}
    }

    return passenger
  }

  static async findOrCreatePassenger(passengerObj){
    const { id=null, ...passengerData} = camelizeKeys(passengerObj)
    let passenger = await Passenger.findbyId(id) || await Passenger.queryRow(passengerObj)

    if(!passenger || isEmpty(passenger)){
      passenger = await Passenger.create({...passengerData})
    }

    return passenger
  }

}

module.exports = Passenger;