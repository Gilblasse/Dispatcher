import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {fetchTrips} from '../actions/tripActions'
import { connect } from 'react-redux'

class TripsContainer extends Component {

  componentDidMount(){
    this.props.fetchTrips()
  }


  render() {
    return (
      <div> 
        {this.props.loading ? "Loading..." : "Trips"}
        <br/> 
        <input type="text"/>
        <button >
          <Link to="/trips/new">+</Link>
        </button>
        
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return{
    fetchTrips: ()=> dispatch(fetchTrips())
  }
}

const mapStateToProps = ({tripReducer: {loading}}) => ({loading})

export default connect(mapStateToProps,mapDispatchToProps)(TripsContainer);
