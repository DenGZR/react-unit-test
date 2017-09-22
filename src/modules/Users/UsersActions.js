export const GET_USERS = 'USER/GET_ALL';
export const SEARCH_USER = 'USER/SEARCH';

const getUsers = payload => ({
  type: GET_USERS,
  payload: payload.response
});

const searchUser = payload => ({
  type: SEARCH_USER,
  payload: payload.response
});

export const fetchAllUsers = () => {
  return (dispatch, state, api) => {
    return api('users')
      .then(response => dispatch(getUsers({ response })))
      .catch((err) => {
        console.log('req user error!!!', err);
      });
  };
};

export const fetchShearchUser = (id) => {  
  return (dispatch, state, api) => {
    return api(`users/${id}`)
      .then(response => dispatch(searchUser({ response })))
      .catch((err) => {
        console.log('req user error!!!', err);
      });
  };
};
