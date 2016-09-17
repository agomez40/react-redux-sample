import {watchLoadCourses} from "../actions/courseActions";

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        watchLoadCourses()
    ]
}