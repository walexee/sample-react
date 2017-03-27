export const addContact = (props, contact) => {
    return {
        type: 'ADD_CONTACT',
        contact: {
            id: contact.id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email
        }
    };
};

export const showEdit = (contact) => ({
    type: 'SHOW_CONTACT_EDIT',
    contact
});
