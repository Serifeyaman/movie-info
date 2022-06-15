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
      <Card style={{ display: 'flex', margin: 'auto', borderRadius: 8, backgroundColor: '#fff', marginTop: '5%', width: '65%' }}>
        <Row>
          <Breadcrumb className='p-4'>
            <BreadcrumbItem><a style={{ textDecoration: 'none', color: '#827397', fontSize: 20 }} href="/">Film Listesi</a></BreadcrumbItem>
            <BreadcrumbItem><a style={{ textDecoration: 'underline', fontSize: 20, fontWeight: 'bold', color: '#827397' }}>Film Bilgileri</a></BreadcrumbItem>
          </Breadcrumb>
        </Row>

        <CardHeader className='border-bottom'>
          <CardTitle style={{ color: '#827397' }} tag='h4'>{movieDetail?.Title} / {movieDetail?.Year}</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="4" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
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