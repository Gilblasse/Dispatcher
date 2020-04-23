import React from 'react'

const bodyStyles = {
    paddingLeft: "2rem",
    paddingBottom: "2rem"
}

function TripBody({content}) {
    return (
        <div style={bodyStyles}>
           <small>
                PickUp @ {content}
            </small>
        </div>
    )
}

export default TripBody
