import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    Grid,
    Table,
    TableHeaderRow,
    ColumnChooser,
    TableColumnVisibility,
    Toolbar,
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
    const [defaultHiddenColumnNames] = useState(['gender', 'car']);
    return (
        <>
            <h4>Column Visibility</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <Table />
                    <TableHeaderRow />
                    <TableColumnVisibility
                        defaultHiddenColumnNames={defaultHiddenColumnNames}
                    />
                    <Toolbar />
                    <ColumnChooser />
                </Grid>
            </Paper>
        </>
    );
};

export const ColumnVisibility = () => {
    return (
        <>
            <BasicSetup />
        </>
    );
};
