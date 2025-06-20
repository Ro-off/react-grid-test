import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableFixedColumns,
} from '@devexpress/dx-react-grid-material-ui';

import {
    generateRows,
    globalSalesValues,
} from '../demo-data/generator';

const BasicSetup = () => {
    const [columns] = useState([
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'channel', title: 'Channel' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'saleDate', title: 'Sale date' },
        { name: 'units', title: 'Units' },
        { name: 'amount', title: 'Sale Amount' },
    ]);
    const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));
    const [tableColumnExtensions] = useState([
        { columnName: 'region', width: 150 },
        { columnName: 'sector', width: 180 },
        { columnName: 'channel', width: 120 },
        { columnName: 'product', width: 230 },
        { columnName: 'customer', width: 230 },
        { columnName: 'saleDate', width: 130 },
        { columnName: 'units', width: 80 },
        { columnName: 'amount', align: 'right', width: 140 },
    ]);
    const [leftColumns] = useState(['region', 'channel']);
    const [rightColumns] = useState(['amount']);

    return (
        <>
            <h4>Value Formatting</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <Table
                        columnExtensions={tableColumnExtensions}
                    />
                    <TableHeaderRow />
                    <TableFixedColumns
                        leftColumns={leftColumns}
                        rightColumns={rightColumns}
                    />
                </Grid>
            </Paper>
        </>
    );
};


export const FixedColumns = () => {
    return (
        <>
            <BasicSetup />
        </>
    );
};
