import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux'
import MobilityIcon from './mobilityIcon';
import RoomIcon from '@material-ui/icons/Room';




function Map({trips}) {
    const [viewPort, setviewPort] = useState({
        width: "69vw",
        height: "86vh",
        latitude: 41.708290,
        longitude: -73.923912,
        zoom: 12,
        pitch: 45
    })


    const createMarker = (trip,location) =>{
        const iconType = {
            startLocation: <MobilityIcon type={trip.passenger.mobility}/>,
            endLocation: <RoomIcon color="secondary"/>
        }
       return( 
            <Marker key={trip.id} latitude={trip[location].lat} longitude={trip[location].lng}>
               {iconType[location]}
            </Marker>
       )
    }    
    
    const startAddressMarkers = ()=>{
        return trips.length !== 0 ? trips.map(trip => createMarker(trip,"startLocation",)) : false
    }

    const endAddressMarkers = ()=>{
        return trips.length === 1 ? trips.map(trip => createMarker(trip,"endLocation")) : false
    }

    return (
        <div>
            <ReactMapGL 
            {...viewPort} 
            onViewportChange={viewPort => setviewPort(viewPort)}
            mapboxApiAccessToken="pk.eyJ1IjoiZ2lsYmxhc3NlIiwiYSI6ImNrOTZqemxxNTB3ZmwzcG15bXZjdXZ1c3EifQ.Las9FqslD8MOfocf6FZT2w"
            >
                {startAddressMarkers() ? startAddressMarkers() : ""}
                {endAddressMarkers() ? endAddressMarkers() : ""}
            </ReactMapGL>
            
        </div>
    )
}

const mapStateToProps = ({tripReducer: {trips}}) => ({trips})


export default connect(mapStateToProps)(Map)
