import React from 'react'
import {Form , Col, Row,Button, Container } from 'react-bootstrap';
import { DatePicker, TimePicker} from 'react-materialize';
import moment from 'moment'
import LocationSearchInput from '../locationSearchInput';
import TripContainerHeader from '../tripContainerHeader';



function FormTripDetails(props) {
    const { nextStep, prevStep, handleLocationChanges, start, end, date, time } = props

    const handleTimePicker = e =>{
        if (e.target.value) handleLocationChanges(e.target.value, 'time')
    }

    return (
        <>
            <TripContainerHeader title="Trip Details" />

            <Form className="mt-5">
                <Form.Group as={Row}>
                    <Col sm="10">
                        <LocationSearchInput
                        icon="location_searching" 
                        handleChange={handleLocationChanges}
                        address={start.location}
                        data-type="start"
                        type={'start'}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm="10">
                        <LocationSearchInput 
                        icon="location_on" 
                        handleChange={handleLocationChanges}
                        address={end.location}
                        data-type="end"
                        type={'end'}
                        />
                        </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm='5'>
                        <DatePicker 
                        icon="date_range" 
                        options={{
                            autoClose: true,
                            minDate: new Date(),
                            i18n: {
                                cancel: "",
                                clear: "",
                                done: "",
                            }
                        }}
                        onChange={v => handleLocationChanges(moment(v).format("LL"),'date')} 
                        defaultValue={date} 
                        />
                    </Col>

                    <Col sm='5'>
                        <div onBlur={handleTimePicker}>
                            <TimePicker
                            icon="access_time" 
                            options={{
                                autoClose: true,
                                i18n: {
                                    cancel: "",
                                    clear: "",
                                    done: "",
                                }
                            }}
                            defaultValue={time} 
                            />
                        </div>
                    </Col>
                </Form.Group>          
            </Form>


            <Container className="mt-5">
                <Button onClick={prevStep} variant="primary" className="mr-3"> Previous </Button>
                <Button onClick={nextStep} variant="primary"> Next </Button>
            </Container>
           
        </>
    )
}

export default FormTripDetails
