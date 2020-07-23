import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk ,logger)));

export default store;