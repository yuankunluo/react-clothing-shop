import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// Persist.
import { persistStore } from 'redux-persist';
// Thunk.
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(
    rootReducer, applyMiddleware(...middlewares)
    );

const persistor = persistStore(store);

export {store, persistor};