import { getMovies, getMoviesByImdbId } from "services/MovieService";

export const getMoviesBySearchValue = (data) => {
    return dispatch => {
        getMovies(data).then((res) => {
            dispatch({
                type: 'GET_MOVIES_BY_SEARCH_VALUE',
                movieList: res.data
            })
        }).catch(err => console.log(err))
    }
}

export const getMoviesDetail = (imdbId) => {
    return dispatch => {
        getMoviesByImdbId(imdbId).then((res) => {
            dispatch({
                type: 'GET_MOVIES_BY_IMDB_ID',
                movieDetail: res.data
            })
        }).catch(err => console.log(err))
    }
}