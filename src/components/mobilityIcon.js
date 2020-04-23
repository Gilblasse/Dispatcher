import React from 'react'

function MobilityIcon({type}) {
    
    const Taxi = (
        <i className="far fa-circle mobility-outer-circle">
            <i className="fad fa-taxi mobility-icon"></i>
        </i>
    )
    
    const Stretcher = (
        <i className="far fa-circle mobility-outer-circle">
            <i className="fad fa-stretcher mobility-icon"></i>
        </i>
    )
    
    const Wheelchair = (
        <i className="far fa-circle mobility-outer-circle">
            <i className="fad fa-wheelchair mobility-icon"></i>
        </i>
    )
    
    const Ambulatory = (
        <i className="far fa-circle mobility-outer-circle">
            <i className="fad fa-crutches mobility-icon"></i>
        </i>
    )
    
    const mobilityType = type => {
    
        const icon = {
            Taxi,
            Stretcher,
            Wheelchair,
            Ambulatory
        }
    
        return icon[type]
    }
    
     

    return (
        <>
            {mobilityType(type)}
        </>
    )
}


export default MobilityIcon
