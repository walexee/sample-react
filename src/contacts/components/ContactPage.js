import React, { Component } from 'react';
import ContactTable from './ContactTable';
import AddContactButton from './AddContactButton';
import ContactEditor from './ContactEditor';

export default class ContactPage extends Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }

    render() {
        return (
            <div>
                <ContactTable 
                    contacts={this.props.contacts} 
                    editContact={this.props.editContact} 
                    removeContact={this.props.removeContact}/>
                <AddContactButton 
                    showEditor={this.props.showEditor}
                    addNewContact={this.props.addNewContact}  />
                <ContactEditor 
                    showEditor={this.props.showEditor}
                    contact={this.props.contact}
                    saveContact={this.props.saveContact} />
                <p><a href="/counter">See Counter</a></p>
            </div>
        );
    }
}
