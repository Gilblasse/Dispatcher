import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Route,Switch } from "react-router";
import TripsContainer from './tripsContainer';
import TripFormContainer from '../components/tripFormContainer';


class SideBarContainer extends Component {
  render() {
    return (
      <div className="side-bar"> 
            <Container>
                <Switch> 
                    <Route path="/trips/new" component={TripFormContainer}/>
                    <Route path="/" component={TripsContainer}/>
                </Switch>
            </Container>
        </div>
    );
  }
}

export default SideBarContainer;
