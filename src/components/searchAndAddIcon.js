import React from 'react'
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const addBtnStyles = {
  color: "white",
}

function SearchAndAddIcon() {
    return (
        <div className="filter-and-addTrip-btns">
          {/* <TextField id="standard-basic" label="Filter" className="trip-filter"/> */}

          <Link to="/trips/new" style={addBtnStyles}>
            <Fab color="primary" size="small"  style={{backgroundColor: "#3f51b5"}} >
                <AddIcon />
            </Fab>
          </Link>
        </div>
    )
}

export default SearchAndAddIcon
