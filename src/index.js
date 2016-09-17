/**
 * Created by agomez40 on 12/09/16.
 */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import rootSaga from './store/sagas'
import {loadCourses} from './actions/courseActions'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);