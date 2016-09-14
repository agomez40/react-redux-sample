/**
 * Created by agomez on 14/09/16.
 */
export default function courseReducer(state = [], action){
    switch (action.type){
        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.course)];

        default:
            return state;
    }
}