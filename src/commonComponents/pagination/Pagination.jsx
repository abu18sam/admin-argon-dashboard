import { PaginationItem, Pagination, PaginationLink } from 'reactstrap';

const PaginationComponent = (props) => {

    return (
        <>
            <nav aria-label="...">
                <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                >
                    {props.currentPage > 1 && <PaginationItem className={`${props.currentPage == 1 ? 'disabled' : ''}`}>
                        <PaginationLink
                            href=""
                            onClick={props.onClickPrevious}
                            tabIndex="-1"
                        >
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">Previous</span>
                        </PaginationLink>
                    </PaginationItem>}
                    {props.currentPage > 1 && <PaginationItem >
                        <PaginationLink
                            href=""
                            onClick={props.onClickPrevious}
                        >
                            {props.currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>}
                    <PaginationItem className={"active"}>
                        <PaginationLink
                            href=""
                            onClick={(e) => e.preventDefault()}
                        >
                            {props.currentPage} <span className="sr-only">(current)</span>
                        </PaginationLink>
                    </PaginationItem>
                    {props.currentPage < Math.ceil(props.totalCount / props.pageSize) && <PaginationItem>
                        <PaginationLink
                            href=""
                            onClick={props.onClickNext}
                        >
                            {props.currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>}
                    {props.currentPage < Math.ceil(props.totalCount / props.pageSize) && <PaginationItem>
                        <PaginationLink
                            href=""
                            onClick={props.onClickNext}
                        >
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Next</span>
                        </PaginationLink>
                    </PaginationItem>}
                </Pagination>
            </nav>
        </>
    )
}

export default PaginationComponent;