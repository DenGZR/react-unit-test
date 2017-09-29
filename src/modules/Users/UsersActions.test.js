import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './UsersActions.js';
import * as types from './UsersActions.js';
import nock from 'nock';
import callApi from '../../utils/apiCaller';


const middlewares = [thunk.withExtraArgument(callApi)]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    const users = {"todos": ["do something"]};
    nock('https://jsonplaceholder.typicode.com')
      .get('/users')
      .reply(200, users)

    const expectedActions = [
      { type: types.GET_USERS,  payload: users}
    ]
    const store = mockStore({ todos: [] })


    return store.dispatch(actions.fetchAllUsers()).then(() => {
      // return of async actions

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
