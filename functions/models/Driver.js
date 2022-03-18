const { log } = require("firebase-functions/logger");
const { isEmpty } = require("lodash");
const { DriverDb } = require("../config");
const { driverAttr } = require("../constants/tripConstants");
const { camelize, camelizeKeys } = require("../helpers");

class Driver {
  static attr = driverAttr.map(camelize);
  constructor(driverObj) {
    Object.entries(driverObj).forEach(([key,v]) => {
      const k = camelize(key)
      Driver.attr.includes(k) && (this[k] = v)
      // this[k] = Driver.attr.includes(k) ? v : null
    })
  }

  static async all(){
    const snapshot = await DriverDb.get()
    const passengers = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return passengers
  }

  static async update({id, ...driverObj}){
    await DriverDb.doc(id).update(driverObj)
    const driver = await Driver.findbyId(id)
    return driver
  }

  static async delete(id){
    await DriverDb.doc(id).delete()
  }

  static async create(driverObj){
    const driverRef = await DriverDb.add(driverObj)
    const driver = await Driver.findbyId(driverRef.id)
    return driver
  }

  static async findbyId(id){
    if(!id) return null
    const snapshot = await DriverDb.doc(id).get()
    const driver = snapshot.data()

    return {id, ...driver}
  }

  static async queryRow(driverObj){
    const { name } = camelizeKeys(driverObj)

    if(!name || isEmpty(name)) return null
    let driver = {}
    const myQuery = await DriverDb.where("name",'==', name).get()

    if (!myQuery.empty) {
      const doc = myQuery.docs[0]
      driver = {id: doc.id, ...doc.data()}
    }

    return driver
  }

  static async findOrCreateDriver(driverObj){
    const { id=null, ...driverData} = camelizeKeys(driverObj)
    let driver = await Driver.findbyId(id) || await Driver.queryRow(driverObj)

    if(!driver || isEmpty(driver)){
      driver = await Driver.create({...driverData})
    }

    return driver
  }

}

module.exports = Driver;