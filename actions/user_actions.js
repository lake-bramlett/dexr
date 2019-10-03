export const editUser = (user) => {
  return {
    type: "EDIT_USER",
    user: user
  };
};

export const initializeUser = (user) => {
  return {
    type: "INITIALIZE_USER",
    user: user
  };
};
