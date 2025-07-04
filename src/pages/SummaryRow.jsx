import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    SummaryState,
    IntegratedSummary,
    DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableSummaryRow,
} from '@devexpress/dx-react-grid-material-ui';

import {
    generateRows,
    globalSalesValues,
} from '../demo-data/generator';

const CurrencyFormatter = ({ value }) => (
    value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
);

const CurrencyTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={CurrencyFormatter}
        {...props}
    />
);

const BasicSetup = () => {
    const [columns] = useState([
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
    ]);
    const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));
    const [tableColumnExtensions] = useState([
        { columnName: 'amount', align: 'right' },
    ]);
    const [totalSummaryItems] = useState([
        { columnName: 'region', type: 'count' },
        { columnName: 'amount', type: 'max' },
        { columnName: 'amount', type: 'sum' },
    ]);
    const [currencyColumns] = useState(['amount']);
    return (
        <>
            <h4>Basic Setup</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <CurrencyTypeProvider
                        for={currencyColumns}
                    />
                    <SummaryState
                        totalItems={totalSummaryItems}
                    />
                    <IntegratedSummary />
                    <Table
                        columnExtensions={tableColumnExtensions}
                    />
                    <TableHeaderRow />
                    <TableSummaryRow />
                </Grid>
            </Paper>
        </>
    );
};



export const SummaryRow = () => {
    return (
        <>
            <BasicSetup />
        </>
    );
};
