import { connect } from 'react-redux';
import AddContactButton from '../components/AddContactButton';

const mapStateToProps = (state, ownProps) => ({
    showEditor: state.showEditor
});

const mapDispatchToProps = (dispatch, ownProps) => ({
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

const ShowEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddContactButton);

export default ShowEditor;