import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Row,
    Col,
    CardTitle,
    Spinner,
    Collapse,
    FormGroup,
    Label,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Alert
} from "reactstrap";

import './CustomTable.scss';

class CustomTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // modal: false,
            // isVisible: true,
            // activeModal: "",
            // reload: false,
            // collapse: true,
            // status: "Opened",
            rowData: props.rowData,
            paginationPageSize: props.paginationPageSize,
            currentPageSize: "",
            getPageSize: "",
            // searchVal: "",
            // defaultColDef: {
            //     sortable: true,
            //     // resizable: true,
            //     flex: 1,
            //     // suppressMenu: true
            // },
            columnDefs: props.columnDefs,
            // columnTypes: props.columnTypes,
            // customFilter: props.customFilter ? props.customFilter : [],
            // smsAction: props.smsAction ? props.smsAction : false,
            showSerial: props.showSerial ? props.showSerial : false,
            loadingData: props.loadingData ? props.loadingData : false
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            columnDefs: props.columnDefs,
            rowData: props.rowData,
        }
    }

    // showPageLimit = () => {
    //     const { getPageSize, currentPageSize } = this.state;
    //     const { rowData } = this.props;
    //     if (rowData && rowData.length) {

    //         if (currentPageSize && currentPageSize <= rowData.length) {
    //             return `${currentPageSize} of ${rowData.length}`;
    //         }
    //         else if (getPageSize <= rowData.length) {
    //             return `${getPageSize} of ${rowData.length}`;
    //         }
    //         else {
    //             return `${rowData.length} of ${rowData.length}`;
    //         }
    //     }
    //     else {
    //         return `0 of 0`;
    //     }
    // }

    render() {
        const {
            rowData,
            columnDefs,
            // defaultColDef,
            // getPageSize,
            // currentPageSize,
            showSerial
        } = this.state;

        let columnWidth = 100;
        if (columnDefs && columnDefs.length) {
            columnWidth = showSerial ? `${100 / (columnDefs.length + 1)}%` : `${100 / (columnDefs.length)}%`;
        }

        return (
            <>
                {/* <Card>
                    <CardBody>
                            <Row>
                                {this.state.customFilter.length
                                    ? this.state.customFilter.map(
                                        (filterItem, filterItemIndex) => {
                                            return (
                                                <Col lg="3" md="6" sm="12">
                                                    <FormGroup className="mb-0">
                                                        <Label for="role">{filterItem.name}</Label>
                                                        <Input
                                                            type="select"
                                                        // name={item.value}
                                                        // id={item.value}
                                                        // value={this.state[item.value]}
                                                        // onChange={e => {
                                                        //     this.setState(
                                                        //         {
                                                        //             [item.value]: e.target.value
                                                        //         },
                                                        //         () =>
                                                        //             this.filterData(
                                                        //                 item.value,
                                                        //                 this.state[item.value].toLowerCase()
                                                        //             )
                                                        //     )
                                                        // }}
                                                        >
                                                            <option value="All">All</option>
                                                            {filterItem.record && filterItem.record.length
                                                                ? filterItem.record.map((option) => (
                                                                    <option value={option}>{option}</option>
                                                                ))
                                                                : null}
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            );
                                        }
                                    )
                                    : null}
                            </Row>
                        </CardBody>
                    
                </Card> */}


                <Card>
                    <CardBody>
                        {/* <div className="mb-1">
                            <UncontrolledDropdown className="p-1 ag-dropdown">
                                <DropdownToggle tag="div">
                                    {this.showPageLimit()}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem
                                        tag="div"
                                        onClick={() => this.filterSize(20)}
                                    >
                                        20
                          </DropdownItem>
                                    <DropdownItem
                                        tag="div"
                                        onClick={() => this.filterSize(50)}
                                    >
                                        50
                          </DropdownItem>
                                    <DropdownItem
                                        tag="div"
                                        onClick={() => this.filterSize(100)}
                                    >
                                        100
                          </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div> */}
                        <Table responsive hover className="custom-table">
                            <thead>
                                <tr className={"tableHeaderRow"}>
                                    {
                                        showSerial ? <th className={"tableHeaderItem"} style={{ width: `${columnWidth}` }}><span></span>Serial</th> : null
                                    }
                                    {
                                        columnDefs && columnDefs.length ? columnDefs.map((columnData, columnIndex) => {
                                            return (<th className={"tableDataItem"} key={columnIndex} style={{ width: columnData.width ? columnData.width : `${columnWidth}`, ...columnData.style }}><span>{columnData.headerName}</span></th>)
                                        }) : null
                                    }
                                </tr>

                                <tr classnames={"tableFiltersRow"}>

                                    {
                                        columnDefs && columnDefs.length ? columnDefs.map((columnData, columnIndex) => {
                                            if (columnData.filter) {
                                                return (<th style={{ width: columnData.width ? columnData.width : `${columnWidth}` }} key={columnIndex}><Input type="text" /></th>)
                                            }
                                            else {
                                                return (<th></th>)
                                            }
                                        }) : null
                                    }
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    rowData && rowData.length ?
                                        rowData.map((rowItem, rowIndex) => {
                                            return (
                                                <tr key={rowIndex}>
                                                    {showSerial ? <td><span>{rowIndex + 1}</span></td> : null}
                                                    {
                                                        columnDefs && columnDefs.length ? columnDefs.map((columnData, columnIndex) => {
                                                            if (columnData.customRender && typeof columnData.customRender === "function") {
                                                                return <>
                                                                    <td className={"tableDataItem"} key={columnIndex} style={{ width: columnData.width ? columnData.width : ``, ...columnData.style }}>
                                                                        {columnData.customRender(rowItem, rowIndex)}
                                                                    </td>
                                                                </>
                                                            }
                                                            else {
                                                                return (<td className={"tableDataItem"} style={{ width: columnData.width ? columnData.width : `${columnWidth}`, ...columnData.style }} title={rowItem[`${columnData.field}`]} key={columnIndex}>{rowItem[`${columnData.field}`]}</td>)
                                                            }
                                                        }) : null
                                                    }
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr style={{ width: "100%", textAlign: 'center', padding: "20px" }}>
                                            <td colspan={columnDefs.length}>
                                                <Alert color="secondary">No Records Found</Alert>
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default CustomTable;