const loggedOutState = {
  isLoggedIn: false,
  profileData: null
};
const loggedInState = {
  isLoggedIn: true,
  isCompleted: false,
  profileData: {
    name: 'Ashish Gupta',
    appliedCount: 2,
    data: [{
      id: Math.round(Math.random()*10000),
      title: 'Delivery / Pickup Driver',
      salary: 3000,
      employer: 'Spars Studio',
      shift: 'Morning',
      area: 'Pritampura',
      type: 'Onsite',
      verified: true,
      applied_date: '10 Jan, 2018'
    }, {
      id: Math.round(Math.random()*10000),
      title: 'Cleaner / Helper',
      salary: 5200,
      employer: 'Vouge',
      shift: 'All day',
      area: 'NCR',
      type: 'Onsite',
      verified: true,
      applied_date: '9 Jan, 2018'
    }]
  }
};

const initialState = loggedInState;

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}