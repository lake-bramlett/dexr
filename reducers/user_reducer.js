const initialState = {
  user: {
    name: "lake b",
    number: 5555555555,
    email: "testytim@aol.com",
    company: "lake corp"
  }
}

console.log("initialState", initialState);


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      const newUserInfo = [ state.user,   ]
    default:
      return state;
  }
}

export default userReducer;
