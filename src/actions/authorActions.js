/**
 * Created by Beto on 17/09/2016.
 */
import * as types from './actionTypes';
import api from '../api/mockAuthorApi';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export function loadAuthors(authors) {
    return { type: types.LOAD_AUTHORS, authors};
}

// worker Saga: will be fired on LOAD_COURSES actions
export function* fetchAuthors(){
    try {
        const authors = yield call(api.getAllAuthors);
        yield put({type: types.LOAD_AUTHORS_SUCCESS, authors: authors});
    } catch (e) {
        yield put({type: types.LOAD_AUTHORS_ERROR, message: e.message});
    }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
export function* watchLoadAuthors() {
    yield* takeEvery(types.LOAD_AUTHORS, fetchAuthors);
}