import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesBySearchValue } from 'redux/movie/action'

const MovieList = () => {
  const dispatch = useDispatch()

  const { movieList } = useSelector(state => state.MovieReducer)

  useEffect(() => {
    dispatch(getMoviesBySearchValue("Pokemon"))
  }, [])

  console.log("movieList", movieList)

  return (
    <div>MovieList</div>
  )
}

export default MovieList