import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import MobilityIcon from './mobilityIcon';

function TripHeader({trip, passenger}) {
    const history = useHistory()

    const mobility = type => {

        const icon = {
            Taxi: <i className="fad fa-taxi mobility-icon"></i>,
            Stretcher: <i className="fad fa-stretcher mobility-icon"></i>,
            Wheelchair: <i className="fad fa-wheelchair mobility-icon"></i>,
            Ambulatory: <i className="fad fa-crutches mobility-icon"></i>
        }

        return icon[type]
    }

    const handleClick = (e)=>{
        history.push(`/trips/${trip.id}`,{trip,passenger})
    }

    return (
        <span className="d-flex justify-content-between">
            
            <Card className="trip-card">
                <CardHeader
                avatar={<Avatar aria-label="recipe" >{mobility((passenger && passenger.mobility))}</Avatar>}
                title={passenger && passenger.name}
                subheader={trip.time}
                />
            </Card>
            <IconButton className='vertical-btn' onClick={handleClick}> <InfoOutlinedIcon/> </IconButton>
            
        </span>
    )

     
}

export default TripHeader
