import * as actions from '../actions';

function reducer(
    state = {
        isFetching: false,
        didInvalidate: false,
        movies: []
    },
    action
) {
    switch (action.type) {

        case actions.GET_DATA_PENDING:
            return { ...state, isLoading: true };
        case actions.GET_DATA_FULFILLED:
            return { ...state, isLoading: false, movies: action.payload };
        case actions.GET_DATA_REJECTED:
            return { ...state, isLoading: false, isError: true }


        default:
            return state
    }
}




export default reducer;