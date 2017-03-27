import { connect } from 'react-redux';
import ContactTable from '../components/ContactTable';
import { showEdit } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => ({
    editContact: (contact) => {
         dispatch(showEdit(contact));
    },
    removeContact: (contactId) => {
        dispatch({
            type: 'REMOVE_CONTACT',
            contactId
        });
    }
});

const ContactsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactTable);

export default ContactsList;

