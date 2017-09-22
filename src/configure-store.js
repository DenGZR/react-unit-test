import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import callApi from './utils/apiCaller';

const configureStore = () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(callApi)))
  );
};

export default configureStore;
