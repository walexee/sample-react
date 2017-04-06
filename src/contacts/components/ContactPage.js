import React from 'react';
import ContactTable from './ContactTable';
import AddContactButton from './AddContactButton';
import ContactEditor from './ContactEditor';

const ContactPage = (props) => (
    <div>
        <ContactTable 
            contacts={props.contacts} 
            editContact={props.editContact} 
            removeContact={props.removeContact}/>
        <AddContactButton 
            showEditor={props.showEditor}
            addNewContact={props.addNewContact}  />
        <ContactEditor 
            showEditor={props.showEditor}
            contact={props.contact}
            saveContact={props.saveContact} />
        <p><a href="/counter">See Counter</a></p>
    </div>
);

ContactPage.propTypes = {
    contacts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    contact: React.PropTypes.object,
    showEditor: React.PropTypes.bool,
    saveContact: React.PropTypes.func.isRequired,
    addNewContact: React.PropTypes.func.isRequired,
    editContact: React.PropTypes.func.isRequired,
    removeContact: React.PropTypes.func.isRequired,
};

export default ContactPage;
