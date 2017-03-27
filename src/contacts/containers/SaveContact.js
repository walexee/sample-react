import { connect } from 'react-redux';
import ContactEditor from '../components/ContactEditor';
import { addContact } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
    contact: state.contactInEdit,
    showEditor: state.showEditor
});

const mapDispatchToProps = (dispatch, props) => ({
  saveContact: (contact) => { 
    dispatch(addContact(props, contact));
  }
});

const SaveContact = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEditor);

export default SaveContact;