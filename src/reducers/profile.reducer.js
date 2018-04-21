const loggedOutState = {
  isLoggedIn: false,
  profileData: {}
};
const loggedInState = {
  isLoggedIn: true,
  isCompleted: false,
  profileData: {
    name: 'Ashish Gupta'
  }
};

const initialState = loggedInState;

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}