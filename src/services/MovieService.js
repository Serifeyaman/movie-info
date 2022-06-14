import axios from "axios";
import { URL } from "constants/api";

export const getMovies = (searchValue, pageNumber) => {
    return axios.get(`${URL}&s=${searchValue}&page=${pageNumber}`)
}

export const getMoviesByImdbId = (imdbId) => {
    return axios.get(`${URL}&i=${imdbId}`)
}