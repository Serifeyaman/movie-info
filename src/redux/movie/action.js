import { getMovies, getMoviesByImdbId } from "services/MovieService";

export const getMoviesBySearchValue = (searchValue, pageNumber) => {
    return dispatch => {
        getMovies(searchValue, pageNumber).then((res) => {
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