const INITIALSTATE = {
    movieList: []
}

const MovieReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'GET_MOVIES_BY_SEARCH_VALUE':
            return {
                ...state,
                movieList: action.movieList
            }
        default:
            return state;
    }
}

export default MovieReducer