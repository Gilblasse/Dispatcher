import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TripsContainer extends Component {
  render() {
    return (
      <div> 

        Trips
        <br/> 
        <input type="text"/>
        <button >
          <Link to="/trips/new">+</Link>
        </button>
        
      </div>
    );
  }
}

export default TripsContainer;
