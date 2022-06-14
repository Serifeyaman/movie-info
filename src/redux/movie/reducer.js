const INITIALSTATE = {
    movieList: [],
    movieDetail: {}
}

const MovieReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'GET_MOVIES_BY_SEARCH_VALUE':
            return {
                ...state,
                movieList: action.movieList
            }
        case 'GET_MOVIES_BY_IMDB_ID':
            return {
                ...state,
                movieDetail: action.movieDetail
            }
        default:
            return state;
    }
}

export default MovieReducer