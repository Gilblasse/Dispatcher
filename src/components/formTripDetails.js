import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Form , Col, Row,Button, Navbar, Container } from 'react-bootstrap';
// import { MDBDatePicker } from 'mdbreact';
import DateTimePicker from 'react-datetime-picker';


function FormTripDetails(props) {
    const { nextStep, prevStep, handleFieldChanges } = props
    const [date, setCount] = useState(new Date());

    const onChange = date => setCount(date)
    
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Link to="/" className="mr-5 text-muted"><i class="fas fa-times"></i></Link>
                <Navbar.Brand className="ml-3">Trip Details</Navbar.Brand>
            </Navbar>

            <Container>
                <Form className="mt-5">
                <Form.Group as={Row}> 
                        <Form.Label>Pick Up Time</Form.Label>  
                        <Col sm="10">
                            <DateTimePicker
                            onChange={onChange}
                            value={date}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control id='name' data-type="trip" type="text" onChange={handleFieldChanges} value="" placeholder="Start Location" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control id='phone' data-type="trip" onChange={handleFieldChanges} value="" type="tel" placeholder="End Location" />
                        </Col>
                    </Form.Group>

                   
                </Form>

                <div className="mt-5">
                    <Button onClick={prevStep} variant="primary"> Previous </Button>
                    <Button onClick={nextStep} variant="primary"> Next </Button>
                </div>
            </Container>
        </>
    )
}

export default FormTripDetails
