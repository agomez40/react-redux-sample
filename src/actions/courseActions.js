/**
 * Created by agomez on 14/09/16.
 */
import * as types from './actionTypes';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course};
}