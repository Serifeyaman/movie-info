import axios from "axios";
import { URL } from "constants/api";

export const getMovies = (searchValue) => {
    return axios.get(`${URL}&s=${searchValue}`)
}