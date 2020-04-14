import React, { Component } from 'react';
import { Route,Switch } from "react-router";
import TripsContainer from './tripsContainer';
import TripFormContainer from '../components/tripFormContainer';


class SideBarContainer extends Component {
  render() {
    return (
      <div className="side-bar"> 
          <Switch> 
            <Route path="/trips/new" component={TripFormContainer}/>
            <Route path="/" component={TripsContainer}/>
          </Switch>
        </div>
    );
  }
}

export default SideBarContainer;
