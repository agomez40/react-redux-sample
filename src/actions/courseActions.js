/**
 * Created by agomez on 14/09/16.
 */
import * as types from './actionTypes';
import api from '../api/mockCourseApi';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

export function loadCourses(courses) {
    return { type: types.LOAD_COURSES, courses};
}

// worker Saga: will be fired on LOAD_COURSES actions
export function* fetchCourses(){
    try {
        const courses = yield call(api.getAllCourses);
        yield put({type: types.LOAD_COURSES_SUCCESS, courses: courses});
    } catch (e) {
        yield put({type: types.LOAD_COURSES_ERROR, message: e.message});
    }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
export function* watchLoadCourses() {
    yield* takeEvery(types.LOAD_COURSES, fetchCourses);
}