import { connect } from 'react-redux';
import ContactPage from './components/ContactPage';
import { showEdit, addContact } from './contacts.action';

const mapStateToProps = (state, ownProps) => ({
        contacts: state.default.contacts,
        contact: state.default.contactInEdit,
        showEditor: state.default.showEditor
});

const mapDispatchToProps = (dispatch, props) => ({
    editContact: (contact) => {
         dispatch(showEdit(contact));
    },
    removeContact: (contactId) => {
        dispatch({
            type: 'REMOVE_CONTACT',
            contactId
        });
    },
    saveContact: (contact) => { 
        dispatch(addContact(props, contact));
    },
    addNewContact: () => {
        dispatch({
            type: 'SHOW_CONTACT_EDIT',
            contact: {
                id: Math.round(Math.random() * 1000000000),
                firstName: '',
                lastName: '',
                email: ''
            }
        });
    }
});

const ContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage);

export default ContactsContainer;