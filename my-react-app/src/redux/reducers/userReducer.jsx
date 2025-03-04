
const initialState = {
    user: {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
    },
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USERNAME':
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
      case 'SET_USER_PROFILE':
        return {
          ...state,
          user: action.payload,
        };
        
      default:
        return state;
    }
  };
  
  export default userReducer;
  