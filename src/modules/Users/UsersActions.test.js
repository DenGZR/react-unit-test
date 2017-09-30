import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './UsersActions';
import * as types from './UsersActions';
import nock from 'nock';
import callApi from '../../utils/apiCaller';


const middlewares = [thunk.withExtraArgument(callApi)]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    const users = {"data": ["do something"]};
    const initialState = {
      data: [],
    };

    nock('https://jsonplaceholder.typicode.com')
      .get('/users')
      .reply(200, users)

    const expectedActions = [
      { type: types.LOAD_USERS,  payload: users}
    ];

    const store = mockStore(initialState);

    return store.dispatch(actions.fetchAllUsers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
