import React, {useEffect} from 'react'
import TripContainerHeader from './tripContainerHeader'
import { useParams, useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchTrip, findTrip, deleteFromDB } from '../actions/tripActions';
import { CircularProgress } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MobilityIcon from './mobilityIcon'
import PhoneIcon from '@material-ui/icons/Phone';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TodayIcon from '@material-ui/icons/Today';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import moment from 'moment'


function Trip({ trips, fetchTrip, findTrip, deleteFromDB, globalDate }) {

    const history = useHistory()
    const params = useParams()
    let trip = trips[0]

    useEffect(() => {
        trips.length === 0 ? fetchTrip(params.id) : findTrip(params.id)
    }, [fetchTrip,findTrip,params.id,trips.length])


    const handleClick = ()=> {
        if(checkDate()){
            deleteFromDB(trip.id)
            history.push("/trips")
        }
    }

    const checkDate = () => {
        const today = moment(new Date()).format('MMMM DD YYYY')
        return moment(globalDate).isSameOrAfter(today)
    }
    
    const header = (
        <span>
            { trip && trip.passenger.name }
            <IconButton className="vertical-btn" onClick={handleClick}> <DeleteOutlineIcon color={checkDate() ? "secondary" : "disabled" }/> </IconButton>
        </span>
    )

    const passengerListItems = [
        { icon: <MobilityIcon type={!!trip && trip.passenger.mobility}/>, text: !!trip && trip.passenger.mobility},
        { icon: <PhoneIcon />, text: !!trip && trip.passenger.phone}, 
        { icon: <AccessAlarmIcon />, text: !!trip && trip.time},
        { icon: <TodayIcon />, text: !!trip && trip.date},
        { icon: <GpsFixedIcon />, text: !!trip && trip.startLocation.location},
        { icon: <RoomIcon />, text: !!trip && trip.endLocation.location}
    ]
    

debugger
    return (
        <div>
            
            {
                !trip 
                ? <CircularProgress size="5rem" thickness={4.5} className="loading-icon"/> 
                : (
                    <>
                        <TripContainerHeader title={header}/>

                        <List>

                            {
                                passengerListItems.map((item, i) => {
                                    return (

                                        <ListItem key={i}>
                                            <ListItemAvatar>
                                                <Avatar className="trip-icon">
                                                    {item.icon}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={item.text}  />
                                        </ListItem>
                        
                                    )
                                })
                            }

                        </List>

                    </>
                )
            }
            
            
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        trips: state.tripReducer.trips,
        globalDate: state.dateReducer
    }
}
export default connect(mapStateToProps,{ fetchTrip, findTrip, deleteFromDB})(Trip)
