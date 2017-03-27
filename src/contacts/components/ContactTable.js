import React, { Component } from 'react';
import ContactRow from './ContactRow';

export default class ContactTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map(contact => 
                        <ContactRow 
                            key={contact.id}
                            contact={contact}
                            editContact={() => this.props.editContact(contact)}
                            removeContact={() => this.props.removeContact(contact.id)}
                        />
                    )}
                </tbody>
            </table>
        );
    }

}
