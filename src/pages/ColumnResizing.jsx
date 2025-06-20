import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableColumnResizing,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from '../demo-data/generator';

const BasicSetup = () => {
    const [columns] = useState([
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
    ]);
    const [rows] = useState(generateRows({ length: 6 }));
    const [defaultColumnWidths] = useState([
        { columnName: 'name', width: 180 },
        { columnName: 'gender', width: 180 },
        { columnName: 'city', width: 180 },
        { columnName: 'car', width: 240 },
    ]);
    return (
        <>
            <h4>Value Formatting</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <Table />
                    <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
                    <TableHeaderRow />
                </Grid>
            </Paper>
        </>
    );
};



export const ColumnResizing = () => {
    return (
        <>
            <BasicSetup />
        </>
    );
};
