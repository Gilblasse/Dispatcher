/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const {log} = require("firebase-functions/lib/logger");

class Passenger {
  constructor({db, passObj}={db: null, passObj: {}}) {
    this.Date = passObj && passObj.Date;
    this.passName = passObj && passObj.Passenger;
    this.db = db;
  }

  static async createOrGet(db, name) {
    const pass = {};
    const collection = await db.collection("passengers");
    const doc = await collection.where("name", "==", name).get();
    const doc2 = await collection.where("name", "==", name);

    log("DOC Data ===> ", doc.data());
    log("DOC 2 Data ===> ", doc2.data());
    // if (doc.id) {
    //   pass = await collection.where("name", "==", name);
    // } else {
    //   pass = await collection.add({name});
    // }

    log("PASS ===> ", pass);
    return pass;
  }
}

module.exports = Passenger;
