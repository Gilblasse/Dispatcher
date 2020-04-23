import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { Link } from 'react-router-dom';

import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { fetchTrips } from '../actions/tripActions'
import {setDate} from '../actions/dateActions';
import moment from 'moment';
import {SwipeableDrawer,List,ListItem, ListItemIcon,ListItemText,Divider} from "@material-ui/core"

import PersonIcon from '@material-ui/icons/Person';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SettingsIcon from '@material-ui/icons/Settings';



function Navigation({fetchTrips, globalDate, setDate}) {

    const handleDateChange = (date) => {
        const formatedDate = moment(date).format("LL")
        setDate(date);
        fetchTrips(formatedDate)
    };


    const [left,setLeft] = useState(false)
    
    const list = () => {
       return ( 
           <>
                <div role="presentation" onClick={() => setLeft(false)} >
                </div>

                <List>
                    {[ ['Passengers',<PersonIcon/>,"/passengers"], ['Drivers',<LocalTaxiIcon/>,"/"], ['Vehicles',<AirportShuttleIcon/>,"/"]].map((text, index) => (
                        <Link className="menu-link" key={index} to={text[2]} onClick={() => setLeft(false)}>
                            <ListItem button >
                                <ListItemIcon className="menu-icon">{text[1]}</ListItemIcon>
                                <ListItemText primary={text[0]} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem button >
                        <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>

           </>
       )
    }

    return (
        <nav>
            <Navbar className="nav-bar">
                <i onClick={() => setLeft(true)} className="large material-icons left text-muted menu-btn">menu</i>
                <span className="mr-auto">
                    <Navbar.Brand href="#">Dispatcher</Navbar.Brand>
                </span>

                <span>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    
                        <KeyboardDatePicker
                            disableToolbar
                            className="navigation-date-picker"
                            variant="inline"
                            format="MMM dd, yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={globalDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                
                    </MuiPickersUtilsProvider>
                </span>
                
                <SwipeableDrawer
                className="menu-drawer"
                open={left}
                onClose={() => setLeft(false)}
                onOpen={() => setLeft(true)}
                >
                {list()}
                </SwipeableDrawer>

            </Navbar>

        </nav>

    )
}

function mapDispatchToProps(dispatch) {
    return { 
        fetchTrips: date => dispatch(fetchTrips(date)),
        setDate: date => dispatch(setDate(date))
    };
  } 

function mapStateToProps(state){
    return {
        globalDate: state.dateReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)