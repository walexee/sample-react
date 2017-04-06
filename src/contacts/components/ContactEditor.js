import React, { Component } from 'react';

class ContactEditor extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.contact !== this.props.contact) {
            this.setContactValue(nextProps.contact)
        }
    }

    setContactValue(contact) {
        this.setState((prevState, props) => {
            let contactData = contact || {};
            return {
                id: contactData.id,
                firstName: contactData.firstName,
                lastName: contactData.lastName,
                email: contactData.email
            };
        });
    }

    handleValueChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState((prevState, props) => {
            return {[name]: value};
        });
    }

    handleBtnClick(event) {
        this.props.saveContact(this.state);
        this.setContactValue({});
    } 

    render() {
        if (!this.props.showEditor) {
            return null;
        }

        return (
            <div>
                <input type="text" name="firstName" onChange={this.handleValueChange} value={this.state.firstName} placeholder="First Name"/>
                <input type="text" name="lastName" onChange={this.handleValueChange} value={this.state.lastName} placeholder="Last Name" />
                <input type="email" name="email" onChange={this.handleValueChange} value={this.state.email} placeholder="Email Address" />
                <button onClick={this.handleBtnClick}>Save</button>
            </div>
        );
    }
}

export default ContactEditor;
