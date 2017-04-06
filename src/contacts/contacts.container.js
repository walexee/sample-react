import { connect } from 'react-redux';
import ContactPage from './components/ContactPage';
//import { showEdit, addContact } from './contacts.action';

export const contactActions = {
    REMOVE_CONTACT: 'REMOVE_CONTACT',
    SHOW_CONTACT_EDIT: 'SHOW_CONTACT_EDIT',
    ADD_CONTACT: 'ADD_CONTACT'
}

const mapStateToProps = (state, ownProps) => ({
    contacts: state.default.contacts, //for some reason the state is under default
    contact: state.default.contactInEdit,
    showEditor: state.default.showEditor
});

const mapDispatchToProps = (dispatch, props) => ({
    editContact: (contact) => {
        dispatch({
            type: contactActions.SHOW_CONTACT_EDIT,
            contact
        });
    },
    removeContact: (contactId) => {
        dispatch({
            type: contactActions.REMOVE_CONTACT,
            contactId
        });
    },
    saveContact: (contact) => { 
        dispatch({
            type: contactActions.ADD_CONTACT,
            contact
        });
    },
    addNewContact: () => {
        dispatch({
            type: contactActions.SHOW_CONTACT_EDIT,
            contact: {
                id: Math.round(Math.random() * 1000000000)
            }
        });
    }
});

const ContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage);

export default ContactsContainer;