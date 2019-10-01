import { Permissions, Contacts } from 'expo';
import { getContactsAsync } from 'expo-contacts';

const whatever = async () => {
  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.Emails],
  });

  if (data.length > 0) {
    const contact = data[0];
    console.log(contact);
  }
  const initialState = {
    contacts: data
  }

}



const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      //reducer logic here
    case "EDIT_CONTACT":
      //reducer logic here
    case "DELETE CONTACT":
      //reducer logic here
    default:
      return state;
  }
}

export default contactsReducer;
