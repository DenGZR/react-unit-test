export const LOAD_USERS = 'USER/LOAD_ALL';
export const SEARCH_USER = 'USER/SEARCH';

const loadUsers = payload => ({
  type: LOAD_USERS,
  payload: payload.response
});

const searchUser = payload => ({
  type: SEARCH_USER,
  payload: payload.response
});

export const fetchAllUsers = () => {
  return (dispatch, state, api) => {
    return api('users')
      .then(response => dispatch(loadUsers({ response })))
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
