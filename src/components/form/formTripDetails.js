import React from 'react'
import {Link} from 'react-router-dom'
import {Form , Col, Row,Button, Navbar, Container } from 'react-bootstrap';
import { Collection, CollectionItem, DatePicker, TimePicker} from 'react-materialize';
import moment from 'moment'
import LocationSearchInput from '../locationSearchInput';



function FormTripDetails(props) {
    const { nextStep, prevStep, handleLocationChanges, start, end, date, time } = props

    const handleTimePicker = e =>{
        if (e.target.value) handleLocationChanges(e.target.value, 'time')
    }

    return (
        <>
            <Collection style={{margin: 0}}>
                <CollectionItem>
                <Link to="/" className="mr-5 text-muted"><i className="fas fa-times"></i></Link>
                <Navbar.Brand className="ml-5"> Trip Details</Navbar.Brand>
                </CollectionItem>
            </Collection>

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
