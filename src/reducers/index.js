/**
 * Created by agomez on 14/09/16.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
   courses
});

export default rootReducer;