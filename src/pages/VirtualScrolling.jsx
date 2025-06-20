import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    Grid,
    VirtualTable,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import {
    generateRows,
    defaultColumnValues,
} from '../demo-data/generator';

const getRowId = row => row.id;

const BasicSetup = () => {
    const [columns] = useState([
        { name: 'id', title: 'ID' },
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
    ]);
    const [rows] = useState(generateRows({
        columnValues: { id: ({ index }) => index, ...defaultColumnValues },
        length: 100000,
    }));
    return (
        <>
            <h4>Basic Setup</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                >
                    <VirtualTable />
                    <TableHeaderRow />
                </Grid>
            </Paper>
        </>
    );
};

export const VirtualScrolling = () => {
    return (
        <>
            <BasicSetup />
        </>
    );
};
