import React from 'react';

const ContactRow = (props) => {
    if (!props.contact) {
        return null;
    }
    
    return (
        <tr>
            <td>{props.contact.firstName}</td>
            <td>{props.contact.lastName}</td>
            <td>{props.contact.email}</td>
            <td><button onClick={props.editContact}>Edit</button></td>
            <td><button onClick={props.removeContact}>Remove</button></td>
        </tr>
    );
}

ContactRow.propTypes = {
    contact: React.PropTypes.object,
    editContact: React.PropTypes.func.isRequired,
    removeContact: React.PropTypes.func.isRequired
}

export default ContactRow;
