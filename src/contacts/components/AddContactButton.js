import React, { Component } from 'react';

export default class AddContactButton extends Component {
    render() {
        if (this.props.showEditor) {
            return null;
        }

        return (
            <button onClick={this.props.addNewContact}>Add Contact</button>
        );
    }
}
