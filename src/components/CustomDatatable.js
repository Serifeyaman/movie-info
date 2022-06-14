import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, Col, Input, Label, Row } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import ReactPaginate from 'react-paginate'
import "assets/css/paginate.css"
import "assets/css/customDatatable.css"
import CustomAlert from './CustomAlert'
import { getMoviesBySearchValue } from 'redux/movie/action'
import { useDispatch } from 'react-redux'

const CustomDatatable = ({ data, columns, title, dataLength }) => {

    const [currentPage, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [showDataCount, setShowDataCount] = useState(10)
    const [searchValue, setSearchvalue] = useState("Pokemon")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesBySearchValue(searchValue, currentPage + 1))
    }, [currentPage, searchValue])

    useEffect(() => {
        setPageCount(Math.ceil(dataLength / showDataCount));
    }, [itemOffset, showDataCount, dataLength]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * showDataCount) % dataLength;
        setCurrentPage(event.selected) //aktif sayfa
        setItemOffset(newOffset);
    };

    const handleFilter = (e) => {
        const value = e.target.value
        setSearchvalue(value)
        value?.length > 0 && dispatch(getMoviesBySearchValue(value, currentPage + 1))
    }

    const Next = () => {
        return (
            <div className='paginate-next-button'>
                <ChevronRight color='#22577E' size={15} />
            </div>
        )
    }
    const Previous = () => {
        return (
            <div className='paginate-previous-button'>
                <ChevronLeft color='#22577E' size={15} />
            </div>
        )
    }

    return (
        <Card className='dataTableCard'>
            <CardHeader className='border-bottom'>
                <Row className='m-3'>
                    <Col>
                        <CardTitle style={{ color: '#22577E' }} tag='h4'>{title} Listesi</CardTitle>
                    </Col>
                    <Col lg="3">
                        <Input
                            type='text'
                            bsSize='md'
                            id='search-input'
                            onChange={handleFilter}
                            defaultValue={"Pokemon"}
                        />
                    </Col>
                </Row>

            </CardHeader>
            {
                dataLength > 0 ?
                    <DataTable
                        noHeader
                        pagination
                        striped
                        paginationServer
                        className='react-dataTable w-100'
                        columns={columns}
                        sortIcon={<ChevronDown size={10} />}
                        paginationComponent={() => <ReactPaginate
                            nextLabel={<Next />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<Previous />}
                            renderOnZeroPageCount={null}

                            forcePage={currentPage}

                            activeLinkClassName={'active'}

                            pageClassName={'page-paginate-button'}
                            pageLinkClassName={'page-paginate-button'} //sayılar
                            breakClassName='page-paginate-button'
                            breakLinkClassName='page-paginate-button'
                            containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
                        />
                        }
                        data={data}
                    />
                    :
                    <CustomAlert message="Veri Bulunamadı" />
            }


        </Card>
    )
}

export default CustomDatatable