import user from './../assets/user.json';

const initialState = {
  user: user
}

console.log("initialState", initialState);


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      //reducer logic here
    default:
      return state;
  }
}

export default userReducer;
