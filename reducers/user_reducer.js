import { AsyncStorage } from 'react-native';

const initialState = {
  user: {
    name: "lake b",
    number: 5555555555,
    email: "lakeb@aol.com",
    company: "lake corp"
  }
}

console.log("initialState", initialState);


const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "EDIT_USER":
      newState = JSON.parse(JSON.stringify(state))
      let editedUser = action.user;
      newState.user = editedUser;
      AsyncStorage.setItem('user', 'editedUser')
      return newState;
    default:
      return state;
  }
}

export default userReducer;
