import React, { Component } from 'react';
import NotificationBar from '../components/notificationBar';
import Map from '../components/map';


class MapContainer extends Component {
  render() {
    return (
      <div> 
            <NotificationBar/>
            <Map/>
        </div>
    );
  }
}

export default MapContainer;
