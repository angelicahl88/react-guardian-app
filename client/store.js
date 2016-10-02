import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/mainReducer';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
