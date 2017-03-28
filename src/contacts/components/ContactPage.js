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
                <p><a href="/counter">See Counter</a></p>
            </div>
        );
    }
}

export default ContactPage;