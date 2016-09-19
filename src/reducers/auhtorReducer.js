/**
 * Created by agomez on 17/09/2016.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){
    switch (action.type){
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}