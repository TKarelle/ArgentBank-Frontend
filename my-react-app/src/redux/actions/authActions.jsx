
export const loginSuccess = (token) => {
  localStorage.setItem('token', token);
  return {
    type: 'auth/loginSuccess',
    payload: token,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'auth/loginFailure',
    payload: error,
  };
};

export const logout = () => {
  return {
    type: 'auth/logout',
  };
};


