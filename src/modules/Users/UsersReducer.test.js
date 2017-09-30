
import * as actions from './UsersActions.js';
import * as types from './UsersActions.js';
import reducer from './UsersReducer.js';

const initialState = {
  data: [],
};

describe('[Users] reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });


});
