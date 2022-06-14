import CustomDatatable from 'components/CustomDatatable'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const MovieList = () => {

  const { movieList } = useSelector(state => state.MovieReducer)

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
      name: "Başlık",
      selector: row => row.Title,
      sortable: true,
      maxWidth: "35%"
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

  return (
    <div>
      <CustomDatatable columns={columns} title="Filmler" data={movieList?.Search} dataLength={movieList?.totalResults}/>
    </div>
  )
}

export default MovieList