import CustomDatatable from 'components/CustomDatatable'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardTitle, Col, Input, Label, Row } from 'reactstrap'
import { getMoviesBySearchValue } from 'redux/movie/action'
import { myContext } from 'utility/MyContext'

const MovieList = () => {

  const columns = [
    {
      name: "Poster",
      selector: row => row.Poster,
      sortable: true,
      maxWidth: "10%",
      cell: (a) => {
        return (
          <img className='m-2' alt='poster' src={`${a.Poster}`} width={100} height={100} />
        )
      }
    },
    {
      name: "IMDB ID",
      selector: row => row.imdbID,
      sortable: true,
      maxWidth: "12%"
    },
    {
      name: "Adı",
      selector: row => row.Title,
      sortable: true,
      maxWidth: "35%",
      cell: (a) => {
        return (
          <Link style={{ textDecoration: 'none' }} to={`movieDetail/${a.imdbID}`}>
            <span style={{ color: 'black' }}>{a.Title}</span>
          </Link>
        )
      }
    },
    {
      name: "Tür",
      selector: row => row.Type,
      sortable: true,
      maxWidth: "15%"
    },
    {
      name: "Yayınlandığı Tarih",
      selector: row => row.Year,
      sortable: true,
      maxWidth: "18%"
    },
    {
      name: "İşlemler",
      maxWidth: "10%",
      cell: (a) => {
        return (
          <Link to={`movieDetail/${a.imdbID}`}>
            <Button className='dataTableDetailButton' outline>Detay</Button>
          </Link>
        );
      },
    },
  ]


  const dispatch = useDispatch()
  const { movieList } = useSelector(state => state.MovieReducer)

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchvalue] = useState("Pokemon")
  const [yearSearch, setYearSearch] = useState("")
  const [typeSearch, setTypeSearch] = useState("")

  let data = {
    searchValue: searchValue,
    pageNumber: currentPage + 1,
    type: typeSearch,
    year: yearSearch
  }

  useEffect(() => {
    dispatch(getMoviesBySearchValue(data))
  }, [currentPage, searchValue, typeSearch, yearSearch])

  const handleFilter = (e) => {
    setSearchvalue(e.target.value)
    data.searchValue = e.target.value
    searchValue?.length > 0 && dispatch(getMoviesBySearchValue(data.searchValue, data.pageNumber))
  }

  const changeType = (e) => {
    setTypeSearch(e.target.value)
    setCurrentPage(0)
  }

  const changeYear = (e) => {
    setYearSearch(e.target.value)
    setCurrentPage(0)
  }

  return (
    <myContext.Provider value={{ currentPage: currentPage, setCurrentPage: setCurrentPage, searchValue: searchValue, dataLength: movieList?.totalResults }}>
      <Card className='dataTableCard'>
        <CardHeader className='border-bottom'>
          <Row className='m-3'>
            <Col>
              <CardTitle style={{ color: '#22577E' }} tag='h3'>Film Listesi</CardTitle>
            </Col>
          </Row>
          <Row className='m-3'>
            <Col >
              <Label className='filterLabel'>
                Film Adı
              </Label>
              <Input
                className='filterInput'
                type='text'
                bsSize='md'
                onChange={handleFilter}
                defaultValue={"Pokemon"}
              />
            </Col>
            <Col >
              <Label className='filterLabel'>
                Tarih 
              </Label>
              <Input
                placeholder='Yayınlanma Tarihi Ara'
                className='filterInput'
                type='text'
                bsSize='md'
                onChange={(e) => changeYear(e)}
              />
            </Col>
            <Col >
              <Label className='filterLabel'>
                Tür
              </Label>
              <Input
                className='filterInput'
                type='text'
                bsSize='md'
                type="select"
                onChange={(e) => changeType(e)}
              >
                <option value={""} style={{color:'red'}}>Tür Seçiniz</option>
                <option value={"series"}>Series</option>
                <option value={"movie"}>Movie</option>
                <option value={"episode"}>Episode</option>
              </Input>
            </Col>
          </Row>

        </CardHeader>
        <CustomDatatable columns={columns} title="Filmler" data={movieList?.Search} />
      </Card>
    </myContext.Provider>
  )
}

export default MovieList