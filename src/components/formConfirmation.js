import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Navbar, Container } from 'react-bootstrap';
import { Collection, CollectionItem, Row, Col } from 'react-materialize';


function FormConfirmation(props) {
    
    const { passenger, trip, prevStep, bookTrip} = props

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
            <Collection className="main-header" style={{margin: 0}}>
                <CollectionItem>
                <Link to="/" className="mr-5 text-muted"><i class="fas fa-times"></i></Link>
                <Navbar.Brand className="ml-5"> Confirmation </Navbar.Brand>
                </CollectionItem>
            </Collection>
            
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
                <Button onClick={bookTrip} variant="primary"> Submit </Button>
            </Container>
        </div>
    )
}

export default FormConfirmation
