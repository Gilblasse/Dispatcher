import React, { Component } from 'react';
import FormPassengerDetails from './formPassengerDetails';
import FormTripDetails from './formTripDetails';
import FormConfirmation from './formConfirmation';
import { connect } from 'react-redux'

class TripFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      step: 1,
      passenger:{
        name: '',
        phone:'',
        mobility:''
      },
      trip: {
        date: null,
        time: null,
        start: {
          location: '',
          lat: null,
          lng: null
        },
        end: {
          location: '',
          lat: null,
          lng: null
        },
        riders: 0,
        stairs:0,
        notes: '',
      }
    }
  }

  handleSubmit = () => {
    console.log('Submiting')

  }

  nextStep = ()=>{
    this.setState(prev => ({step: prev.step + 1 }))
  }

  prevStep = ()=>{
    this.setState(prev => ({step: prev.step - 1 }))
  }

  handleFieldChanges = e => {
    const elmt = e.target

    switch (elmt.dataset.type) {
      case 'passenger':
        this.setState(prev => ({passenger: {...prev.passenger, [elmt.id]: elmt.value}}) )
        break;
    
      case 'trip':
        console.log('Trip')
        break;

      default:
        console.log("No Match")
        break;
    }
  }

  handleLocationChanges(val, type, latlng) {
    switch (type) {
      case 'start':
      case 'end':
        this.setState(prev => {
          const tripObj = !!latlng
          ? {...prev.trip, [type]: {...prev.trip[type], location: val, lat: latlng.lat, lng: latlng.lng}} 
          : {...prev.trip, [type]: {...prev.trip[type], location: val}}
    
          return {
            trip: tripObj
          }
        })
      break;
      
      case 'date':
      case 'time':
        this.setState(prev => {
          return {
            ...prev,
            trip: {...prev.trip, [type]: val}
          }
        })
      break;

      default:
      break;
    }
    
  }



  render(){

    switch (this.state.step) {
      case 1:
        return (
          <FormPassengerDetails 
          {...this.state.passenger}  
          nextStep={this.nextStep} 
          handleFieldChanges={this.handleFieldChanges}
          />
        )
      
      case 2:
        return (
          <FormTripDetails 
          {...this.state.trip} 
          nextStep={this.nextStep} 
          prevStep={this.prevStep} 
          handleLocationChanges={this.handleLocationChanges.bind(this)}
          />
        )
      
      case 3:
        return (
          <FormConfirmation
          {...this.state}
          prevStep={this.prevStep}
          bookTrip={this.handleSubmit}
          />
        )

      default:
        return <h1>Passenger Details</h1>
    }

  }

}

export default connect()(TripFormContainer);
