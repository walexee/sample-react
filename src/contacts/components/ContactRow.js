import React, { Component } from 'react';

class ContactRow extends Component {
    render() {
        if (!this.props.contact) {
            return null;
        }
        
        return (
            <tr>
                <td>{this.props.contact.firstName}</td>
                <td>{this.props.contact.lastName}</td>
                <td>{this.props.contact.email}</td>
                <td><button onClick={this.props.editContact}>Edit</button></td>
                <td><button onClick={this.props.removeContact}>Remove</button></td>
            </tr>
        );
    }
}

export default ContactRow;