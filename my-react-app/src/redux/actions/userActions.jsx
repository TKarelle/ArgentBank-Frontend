
export const setUserProfile = (userProfile) => {
  return {
    type: 'SET_USER_PROFILE',
    payload: userProfile,  
  };
};

export const updateUsername = (username) => ({
  type: 'UPDATE_USERNAME',
  payload: username,
});
