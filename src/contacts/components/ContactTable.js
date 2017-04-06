import React from 'react';
import ContactRow from './ContactRow';

const ContactTable = (props) => (
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
            {!props.contacts ? null : props.contacts.map(contact => 
                <ContactRow 
                    key={contact.id}
                    contact={contact}
                    editContact={() => props.editContact(contact)}
                    removeContact={() => props.removeContact(contact.id)}
                />
            )}
        </tbody>
    </table>
)

ContactTable.propTypes = {
    contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    editContact: React.PropTypes.func.isRequired,
    removeContact: React.PropTypes.func.isRequired
}

export default ContactTable
