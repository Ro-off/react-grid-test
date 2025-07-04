import React, { useState, useReducer, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
    VirtualTableState,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    VirtualTable,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

const VIRTUAL_PAGE_SIZE = 100;
const MAX_ROWS = 50000;
const URL = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales';
const getRowId = row => row.Id;
const buildQueryString = (skip, take) => `${URL}?skip=${skip}&take=${take}`;

const initialState = {
    rows: [],
    skip: 0,
    requestedSkip: 0,
    take: VIRTUAL_PAGE_SIZE * 2,
    totalCount: 0,
    loading: false,
    lastQuery: '',
};

function reducer(state, { type, payload }) {
    switch (type) {
        case 'UPDATE_ROWS':
            return {
                ...state,
                ...payload,
                loading: false,
            };
        case 'START_LOADING':
            return {
                ...state,
                requestedSkip: payload.requestedSkip,
                take: payload.take,
            };
        case 'REQUEST_ERROR':
            return {
                ...state,
                loading: false,
            };
        case 'FETCH_INIT':
            return {
                ...state,
                loading: true,
            };
        case 'UPDATE_QUERY':
            return {
                ...state,
                lastQuery: payload,
            };
        default:
            return state;
    }
}


const BasicSetup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [columns] = useState([
        { name: 'Id', title: 'Id', getCellValue: row => row.Id },
        { name: 'ProductCategoryName', title: 'Category', getCellValue: row => row.ProductCategoryName },
        { name: 'StoreName', title: 'Store', getCellValue: row => row.StoreName },
        { name: 'ProductName', title: 'Product', getCellValue: row => row.ProductName },
        { name: 'SalesAmount', title: 'Amount', getCellValue: row => row.SalesAmount },
    ]);
    const [tableColumnExtensions] = useState([
        { columnName: 'Id', width: 80 },
        { columnName: 'ProductCategoryName', width: 220 },
        { columnName: 'StoreName', width: 220 },
        { columnName: 'SalesAmount', width: 120 },
    ]);

    const getRemoteRows = (requestedSkip, take) => {
        dispatch({ type: 'START_LOADING', payload: { requestedSkip, take } });
    };

    const loadData = () => {
        const {
            requestedSkip, take, lastQuery, loading,
        } = state;
        const query = buildQueryString(requestedSkip, take);
        if (query !== lastQuery && !loading) {
            dispatch({ type: 'FETCH_INIT' });
            fetch(query)
                .then(response => response.json())
                .then(({ data }) => {
                    dispatch({
                        type: 'UPDATE_ROWS',
                        payload: {
                            skip: requestedSkip,
                            rows: data,
                            totalCount: MAX_ROWS,
                        },
                    });
                })
                .catch(() => dispatch({ type: 'REQUEST_ERROR' }));
            dispatch({ type: 'UPDATE_QUERY', payload: query });
        }
    };

    useEffect(() => loadData());

    const {
        rows, skip, totalCount, loading,
    } = state;
    return (
        <>
            <h4>Cell Tooltip</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                >
                    <VirtualTableState
                        loading={loading}
                        totalRowCount={totalCount}
                        pageSize={VIRTUAL_PAGE_SIZE}
                        skip={skip}
                        getRows={getRemoteRows}
                    />
                    <VirtualTable columnExtensions={tableColumnExtensions} />
                    <TableHeaderRow />
                </Grid>
            </Paper>
        </>
    );
};

export const LazyLoading = () => {
    return (
        <>
            <BasicSetup />
        </>
    );
};
