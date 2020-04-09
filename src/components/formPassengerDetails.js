import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import {Form , Col, Row,Button, Navbar, Container, FormControl } from 'react-bootstrap';

export class FormPassengerDetails extends Component {
    render() {
        const {nextStep, handleFieldChanges, name, phone, mobility} = this.props
        return (
            <>
                <Navbar expand="lg" variant="light" bg="light">
                    <Link to="/" className="mr-5 text-muted"><i class="fas fa-times"></i></Link>
                    <Navbar.Brand className="ml-5">Passenger Trip Details</Navbar.Brand>
                </Navbar>

                <Container>
                <Form className="mt-5">
                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control id='name' data-type="passenger" type="text" onChange={handleFieldChanges} value={name} placeholder="Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control id='phone' data-type="passenger" onChange={handleFieldChanges} value={phone} type="tel" placeholder="Phone" />
                            <Form.Text className="text-muted">
                               Numbers Only. No Symbols Or Spaces
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control id="mobility" data-type="passenger" as="select" onChange={handleFieldChanges} value={mobility}>
                                <option value="Taxi">Taxi</option>
                                <option value="Ambulatory">Ambulatory</option>
                                <option value="Wheelchair">Wheelchair</option>
                                <option value="Stretcher">Stretcher</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>

                <div className="mt-5">
                    <Button onClick={nextStep} variant="primary"> Next </Button>
                </div>
                </Container>
            </>
        )
    }

}

export default FormPassengerDetails
