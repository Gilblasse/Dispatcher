import React from 'react'
import {Button, Container } from 'react-bootstrap';
import { Collection, CollectionItem, Row, Col } from 'react-materialize';
import TripContainerHeader from '../tripContainerHeader';


function FormConfirmation({ passenger, trip, prevStep, bookTrip, isLoading}) {
    

    const passengerData = [
        ['Name',passenger.name],
        ['Phone',passenger.phone],
        ['Mobility',passenger.mobility]
    ]

    const tripData = [
        ['Date',trip.date],
        ['Pick Up',trip.time],
        ['Origin',trip.start.location],
        ['Destination',trip.end.location]
    ]

    const displayInfo = (label, value, keyVal)=> {
        return (
            <CollectionItem key={keyVal}>
                {label}: <span className="pl-2 text-muted">{value}</span>
            </CollectionItem>
        )
    }

    const dataToDisplay = data => {
        return data.map(info => displayInfo(info[0],info[1],info[0]))
    }
    

    return (
        <div className="confirmation-section-wrapper">
            <TripContainerHeader title="Confirmation" />
            
            <Row>
                <Col m={6} s={12}>
                    <Collection header="Passenger" className='confirmation-collection'>
                        {dataToDisplay(passengerData)}
                    </Collection>
                </Col>
            </Row>

            <Row>
                <Col m={6} s={12}>
                    <Collection header="Trip Info" className='confirmation-collection'>
                        {dataToDisplay(tripData)}
                    </Collection>
                </Col>
            </Row>

            <Container className="mt-5">
                <Button onClick={prevStep} variant="primary" className="mr-3"> Previous </Button>
                <Button onClick={bookTrip} variant="primary"> {isLoading ? "Loading..." : "Submit"} </Button>
            </Container>
        </div>
    )
}

export default FormConfirmation
