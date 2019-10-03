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
  switch (action.type) {
    case "EDIT_USER":
      let editedUser = action.user;
      state.user = editedUser;
      console.log('new user state', state);
      return state;
    default:
      return state;
  }
}

export default userReducer;
