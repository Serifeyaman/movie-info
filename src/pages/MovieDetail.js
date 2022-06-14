import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMoviesDetail } from 'redux/movie/action'

const MovieDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { movieDetail } = useSelector(state => state.MovieReducer)

  useEffect(() => {
    dispatch(getMoviesDetail(id))
  }, [id])

  console.log("movieDetail",movieDetail)

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail