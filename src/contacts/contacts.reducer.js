import {contactActions} from './contacts.container';

// move the initial state to a better place
const initialState = {
  contacts: [{id: 1, firstName: 'John', lastName: 'Jobs', email: 'john.jobs@example.com'}],
  contactInEdit: {}
}

const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case contactActions.ADD_CONTACT:
            let contact = state.contacts.find(item => item.id === action.contact.id);

            if (contact) {
                Object.assign(contact, action.contact);
            } else {
                state.contacts.push(action.contact);
            }

            return {
                ...state,
                contacts: [...state.contacts],
                contactInEdit: {id: 0, firstName: '', lastName: '', email: ''},
                showEditor: false
            };

        case contactActions.REMOVE_CONTACT:
            return {
                contacts: state.contacts.filter(item => item.id !== action.contactId)
            };

        case contactActions.SHOW_CONTACT_EDIT:
            return {
                ...state,
                contactInEdit: action.contact,
                showEditor: true
            };
            
        default:
            return state;
    }
};

export default contactReducers;