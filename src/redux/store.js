import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import ArtistsSaga from './sagas/artists';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(ArtistsSaga);

export default store;
