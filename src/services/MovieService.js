import axios from "axios";
import { URL } from "constants/api";

export const getMovies = (data) => {
    return axios.get(`${URL}&s=${data.searchValue}&page=${data.pageNumber}&type=${data.type}&y=${data.year}`)
}

export const getMoviesByImdbId = (imdbId) => {
    return axios.get(`${URL}&i=${imdbId}`)
}