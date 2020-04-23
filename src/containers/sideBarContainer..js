import React, { Component } from 'react';
import { Route,Switch } from "react-router";
import TripsContainer from './tripsContainer';
import TripFormContainer from '../components/tripFormContainer';
import Trip from '../components/trip';


class SideBarContainer extends Component {
  render() {
    return (
      <div className="side-bar"> 
          <Switch> 
            <Route exact path="/trips/new" component={TripFormContainer}/>
            <Route path="/trips/:id" component={Trip}/>
            <Route path="/" component={TripsContainer}/>
          </Switch>
        </div>
    );
  }
}

export default SideBarContainer;
