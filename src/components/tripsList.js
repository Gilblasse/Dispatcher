import React from 'react'
import TripHeader from './tripHeader'
import { Collapsible,CollapsibleItem} from 'react-materialize';
import TripBody from './tripBody';
import NoTripsAvailable from './noTripsAvailable';


function TripsList({trips, passengers}) {
    
    const findPassenger = (id) =>{
        return passengers.find(p => p.id === id)
    }

    const handleClick = e =>{
        if(isDescendant("BUTTON",e.target)){
            const liTag = getLiTag(e.target)
            const contentBody = liTag.querySelector('.collapsible-body')

            liTag.classList.remove("active")
            contentBody.style.display = "none" 
        }
    }

    const isDescendant = (parent, child) => {
        var node = child.parentNode;
        if (child.tagName === parent) return true

        while (node !== null) {
            if (node.tagName === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
   }

   const getLiTag = (child) => {
    var node = child.parentNode;

    while (node !== null) {
        if (node.tagName === "LI") {
            return node;
        }
        node = node.parentNode;
    }
    return false;
}




    return (
        <div>
            
            {
                trips.length === 0
                ? <NoTripsAvailable/>
                : (
                    <div onClick={handleClick}>
                        <Collapsible accordion>
                            { trips.map((trip,i) => {
                                const passenger = findPassenger(trip.passenger_id)

                                return(
                                    
                                    <CollapsibleItem
                                        key={i}
                                        expanded={false}
                                        header={<TripHeader trip={trip} passenger={passenger} />}
                                        node="div"
                                        className="passenger-trip-card"
                                        >
                                        <TripBody content={trip.startLocation.location}/>
                                        
                                    </CollapsibleItem>
                                    
                                )

                            })}
                        </Collapsible>
                    </div>
                )
            }

    
        </div>
    )
}


export default TripsList
