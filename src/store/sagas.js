import {watchLoadCourses, watchSaveCourse} from "../actions/courseActions";
import {watchLoadAuthors} from '../actions/authorActions';


// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        watchLoadCourses(),
        watchLoadAuthors(),
        watchSaveCourse()
    ];
}