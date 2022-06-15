import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'

const MovieDetailTable = () => {
    const { movieDetail } = useSelector(state => state.MovieReducer)

    const timeConvert = (mins) => {
        var hours = parseInt(mins / 60);
        var minutes = mins % 60;
        return `${hours}s  ${minutes}dk`;
    }

    const detailData = [
        {
            colTitle: "Yayınlanma Tarihi",
            colValue: movieDetail?.Released
        },
        {
            colTitle: "Süre",
            colValue: timeConvert(movieDetail?.Runtime?.split(' ')[0])
        },
        {
            colTitle: "Tür",
            colValue: movieDetail?.Type
        },
        {
            colTitle: "Yönetmen",
            colValue: movieDetail?.Director
        },
        {
            colTitle: "Senarist",
            colValue: movieDetail?.Writer
        },
        {
            colTitle: "Oyuncular",
            colValue: movieDetail?.Actors
        },
        {
            colTitle: "IMDb Puanı",
            colValue: movieDetail?.imdbRating
        }
    ]

    return (
        <>
            {
                detailData?.map((item, key) => (
                    <Row key={key} style={{ padding: '3%' }}>
                        <Col lg="4">
                            <h6>{item.colTitle} : </h6>
                        </Col>

                        <Col lg="8">
                            {item.colValue}
                        </Col>
                    </Row>
                ))
            }

        </>
    )
}

export default MovieDetailTable