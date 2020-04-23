import React, { Component} from 'react'
import {Form ,Button, Container } from 'react-bootstrap';
import { TextInput, Select, Icon} from 'react-materialize';
import TripContainerHeader from '../tripContainerHeader';

export class FormPassengerDetails extends Component {

    render() {
        const {nextStep, handleFieldChanges, name, phone, mobility} = this.props
        return (
            <>
                <TripContainerHeader title={"Passenger Trip Details"}/>

                <Container>
                    <Form className="mt-5">
                        <Form.Group>
                            <TextInput
                            onChange={handleFieldChanges}
                            value={name}
                            data-type="passenger"
                            icon="person"
                            id='name'
                            label="Name"
                            />
                        </Form.Group>

                        <Form.Group>
                            <TextInput
                            onChange={handleFieldChanges}
                            value={phone}
                            type="tel"
                            data-type="passenger"
                            icon="local_phone"
                            id='phone'
                            label="Phone Number"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Select
                                data-type="passenger"
                                id="mobility"
                                icon={<Icon>cloud</Icon>}
                                multiple={false}
                                onChange={handleFieldChanges}
                                options={{
                                    classes: '',
                                    dropdownOptions: {
                                    alignment: 'left',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                    }
                                }}
                                value={mobility}
                                >
                                <option disabled value="" >Choose Passenger Mobility</option>
                                <option value="Taxi">Taxi</option>
                                <option value="Ambulatory">Ambulatory</option>
                                <option value="Wheelchair">Wheelchair</option>
                                <option value="Stretcher">Stretcher</option>
                            </Select>
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
