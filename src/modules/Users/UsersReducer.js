import { LOAD_USERS, SEARCH_USER } from './UsersActions';

const initialState = {
  data: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS: {
      return {
          ...state,
          data: action.payload,
        }
      }
    case SEARCH_USER: {
      return {
          ...state,
          data: [ action.payload ],
      }
    }

    default: {
      return state;
    }
  }
};

export default UsersReducer;
