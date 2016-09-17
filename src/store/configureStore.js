/**
 * Created by agomez on 14/09/16.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware  from 'redux-saga';

export default function configureStore(initialState) {
    // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware)),
        runSaga: sagaMiddleware.run
    };
}