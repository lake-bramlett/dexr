import { AsyncStorage } from 'react-native';

const initialState = {
    user: {
      name: "lake",
      number: 5555555555,
      email: "lakeb@aol.com",
      company: "lake corp"
    }
}

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "INITIALIZE_USER":
      newState = JSON.parse(JSON.stringify(state))
      let initializedUser = action.user;
      newState.user = initializedUser;
      return newState;
    case "EDIT_USER":
      newState = JSON.parse(JSON.stringify(state))
      let editedUser = action.user;
      newState.user = editedUser;
      AsyncStorage.setItem('user', JSON.stringify(editedUser))
      return newState;
    default:
      return state;
  }
}

export default userReducer;
