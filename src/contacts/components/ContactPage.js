import React, { Component } from 'react';
import ContactsList from '../containers/ContactsList';
import ShowEditor from '../containers/ShowEditor';
import SaveContact from '../containers/SaveContact';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <ContactsList />
                <ShowEditor />
                <SaveContact />
            </div>
        );
    }
}

export default ContactPage;