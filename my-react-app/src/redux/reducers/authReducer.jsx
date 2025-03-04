
const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/loginSuccess':
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null, 
      };
    case 'auth/loginFailure':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload, 
      };
    case 'auth/logout':
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
