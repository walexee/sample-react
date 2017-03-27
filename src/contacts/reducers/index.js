const contacts = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
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
        case 'REMOVE_CONTACT':
            return {
                contacts: state.contacts.filter(item => item.id !== action.contactId)
            };
        case 'SHOW_CONTACT_EDIT':
            return {
                ...state,
                contactInEdit: action.contact,
                showEditor: true
            };
        default:
            return state;
    }
};

export default contacts;