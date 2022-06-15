import MovieDetailTable from 'components/MovieDetailTable'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'
import { getMoviesDetail } from 'redux/movie/action'

const MovieDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { movieDetail } = useSelector(state => state.MovieReducer)

  useEffect(() => {
    dispatch(getMoviesDetail(id))
  }, [id])

  return (
      <Card className='detailCard'>
        <Row>
          <Breadcrumb className='p-4'>
            <BreadcrumbItem><a className='crumbs-item1' href="/">Film Listesi</a></BreadcrumbItem>
            <BreadcrumbItem><a className='crumbs-item2'>Film Bilgileri</a></BreadcrumbItem>
          </Breadcrumb>
        </Row>

        <CardHeader className='border-bottom'>
          <CardTitle style={{ color: '#827397' }} tag='h4'>{movieDetail?.Title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="4" className='detailCard-imgCol'>
              <img src={movieDetail?.Poster} width="100%" alt='bookImage' />
            </Col>
            <Col lg="8">
              <MovieDetailTable />
            </Col>
          </Row>

        </CardBody>
      </Card>
  )
}

export default MovieDetail