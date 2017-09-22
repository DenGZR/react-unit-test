import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UsersReducer from './modules/Users/UsersReducer';

export default combineReducers({
  users: UsersReducer,
  form: formReducer
});
