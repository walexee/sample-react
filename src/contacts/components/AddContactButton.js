import React from 'react';

const AddContactButton = (props) => {
    if (props.showEditor) {
        return null;
    }

    return <button onClick={props.addNewContact}>Add Contact</button>
}

AddContactButton.propTypes = {
    showEditor: React.PropTypes.bool,
    addNewContact: React.PropTypes.func.isRequired
};

export default AddContactButton
