/**
 * Created by agomez on 14/09/16.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './auhtorReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;