/* eslint-disable require-jsdoc */

class Trip {
    constructor({db, tripObj}) {
      this.Date = tripObj.Date;
      this.passName = tripObj.Passenger;
      this.db = db;
    }
  }

  module.exports = Trip;
