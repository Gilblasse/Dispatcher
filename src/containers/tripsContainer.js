import React, { Component } from 'react';
import {fetchTrips} from '../actions/tripActions'
import {fetchPassengers} from '../actions/passengerActions'
import { connect } from 'react-redux'
import TripsList from '../components/tripsList';
import { setDate } from '../actions/dateActions'
import { CircularProgress } from '@material-ui/core';
import SearchAndAddIcon from '../components/searchAndAddIcon';
class TripsContainer extends Component {

  componentDidMount(){
    this.props.fetchTrips(this.props.date)
    this.props.fetchPassengers()
  }

  isLoading = ()=> {
    return this.props.tripLoading && this.props.passengerLoading ? true : false
  }

  render() {
    return (
      <div className="trips-container">
          <div className="trip-top-border"></div>
          {this.isLoading() 
            ? <CircularProgress size="5rem" thickness={4.5} className="loading-icon"/> 
            : <TripsList trips={this.props.trips} passengers={this.props.passengers}/> 
          }       
        <br/> 

        <SearchAndAddIcon/>        
      </div>
    );
  }
}


const mapStateToProps = ({dateReducer: date, tripReducer: {loading, trips}, passengerReducer: {loading: isLoad, passengers} }) => ({
  tripLoading: loading, 
  trips,
  passengerLoading: isLoad,
  passengers,
  date
})

export default connect(mapStateToProps,{fetchTrips, fetchPassengers, setDate})(TripsContainer);
