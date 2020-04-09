import React, { Component } from 'react';
import FormPassengerDetails from './formPassengerDetails';
import FormTripDetails from './formTripDetails';

class TripFormContainer extends Component {

  state = {
    step: 1,
    passenger:{
      name: '',
      phone:'',
      mobility:''
    },
    trip: {
      start: {
        time: '',
        location: '',
      },
      end: {
        time: '',
        location: '',
      },
      riders: 0,
      stairs:0,
      notes: '',
    }
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
          handleFieldChanges={this.handleFieldChanges}
          />
        )
      
      case 3:
        return <h1>Confirmation</h1> 

      default:
        return <h1>Passenger Details</h1>
    }

  }

}

export default TripFormContainer;
