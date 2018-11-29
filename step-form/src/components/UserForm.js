import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        const { step, firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <h1>FormPersonalDetails</h1>
                )
            case 3:
                return (
                    <h1>Confirm</h1>
                )
            case 4:
                return (
                    <h1>Success</h1>
                )
            default:
                return (
                    <h1>Default</h1>
                )
        }
    }
    
}

export default UserForm;