import { useEffect, useState } from 'react';
import { Card, CardHeader, Button, CardFooter } from 'reactstrap';
import CustomTable from '../../../commonComponents/customTable/CustomTable';
import { useHistory } from 'react-router';
import PaginationComponent from '../../../commonComponents/pagination/Pagination';
import { ADD_USER, ADMIN_LAYOUT } from '../../../constants/RouterConstants';

const UserListing = props => {

    const history = useHistory();

    const [rowData, setRowData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    let ColumnDefs = [
        {
            headerName: "Serial",
            field: "id",
            // width: 20,
            filter: false,
            // style: {
            //     width: 80,
            //     maxWidth: 100,
            //     minWidth: 80,
            // }
        },
        {
            headerName: "Name",
            field: "full_name",
            // width: 100,
            filter: false,
        },
        {
            headerName: "Email",
            field: "email",
            // width: 100,
            filter: false,
        },
        {
            headerName: "Action",
            filter: false,
            customRender: (rowItem, rowIndex) => {
                return (
                    <div className="action-btns-containers">
                        <Button color="success" >Edit</Button>
                        <Button color="danger" >Delete</Button>
                        <Button color="primary" >Active/Inactive</Button>
                    </div>

                )
            },
            style: {
                width: 'fit-content'
            }
        },
    ]

    const addUser = () => {
        history.push(`${ADMIN_LAYOUT}${ADD_USER}`);
    }

    return (
        //         <div>
        // UserListing
        //         </div>
        <>
            <Card>
                <CardHeader>
                    <h2>Users</h2>
                    <Button color="primary" onClick={addUser}>Add User</Button>
                </CardHeader>

                <CustomTable
                    rowData={rowData}
                    columnDefs={ColumnDefs}
                    paginationPageSize={10}
                />

                <CardFooter className="py-4">
                    <PaginationComponent
                        currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={pageSize}
                        // onClickPrevious={onClickPrevious}
                        // onClickNext={onClickNext}
                    />
                </CardFooter>
            </Card>
        </>
    )
}

export default UserListing;