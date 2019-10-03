import { combineReducers } from 'redux';
import contactsReducer from './contacts_reducer';
import userReducer from './user_reducer';

export default combineReducers({
  user: userReducer,
  contacts: contactsReducer
})
