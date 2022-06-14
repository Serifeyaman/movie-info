import { getMovies } from "services/MovieService";

export const getMoviesBySearchValue = (searchValue) => {
    return dispatch => {
        getMovies(searchValue).then((res) => {
            dispatch({
                type: 'GET_MOVIES_BY_SEARCH_VALUE',
                movieList: res.data
            })
        }).catch(err => console.log(err))
    }
}