import { AsyncStorage } from 'react-native';

let name;

const showData = async () => {
  let localInfo = await AsyncStorage.getItem('user');
  let user = JSON.parse(localInfo);
  name = JSON.stringify(user.name);
  console.log('name', name);
}

showData()

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
