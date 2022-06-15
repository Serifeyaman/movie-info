import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import ReactPaginate from 'react-paginate'
import "assets/css/paginate.css"
import "assets/css/customDatatable.css"
import "assets/css/filter.css"
import CustomAlert from './CustomAlert'
import { myContext } from 'utility/MyContext.js'

const CustomDatatable = ({ data, columns }) => {

    const context = useContext(myContext)

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [showDataCount, setShowDataCount] = useState(10)

    useEffect(() => {
        setPageCount(Math.ceil(context.dataLength / showDataCount));
    }, [itemOffset, showDataCount, context.dataLength]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * showDataCount) % context.dataLength;
        context.setCurrentPage(event.selected) //aktif sayfa
        setItemOffset(newOffset);
    };

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
        
        <>
            {
                context.dataLength > 0 ?
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

                            forcePage={context.currentPage}

                            activeLinkClassName={'active'}

                            pageClassName={'page-paginate-button'}
                            pageLinkClassName={'page-paginate-button'} //sayılar
                            breakClassName='page-paginate-button'
                            breakLinkClassName='page-paginate-button'
                            containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 m-1'}
                        />
                        }
                        data={data}
                    />
                    :
                    <CustomAlert message="Veri Bulunamadı" />
            }

        </>
    )
}

export default CustomDatatable