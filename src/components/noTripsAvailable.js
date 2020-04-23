import React from 'react'
import car from '../images/animat-road-trip-color.gif'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
// import moment from 'moment';

function NoTripsAvailable(globalDate) {
    
    return (
        <div>
            <div className="no-trip-title">
                <Typography variant="h5" gutterBottom className="text-muted">
                    No Trips Booked Today
                </Typography>
            </div>

            <img src={car} alt="car"/>
        </div>
    )
}

const mapStateToProps = ({dateReducer: globalDate}) => ({globalDate})

export default connect(mapStateToProps)(NoTripsAvailable)
