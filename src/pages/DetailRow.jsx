import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from '../demo-data/generator';

const BasicDetailRow = () => {
    const RowDetail = ({ row }) => (
        <div>
            Details for
            {' '}
            {row.name}
            {' '}
            from
            {' '}
            {row.city}
        </div>
    );

    const [columns] = useState([
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
    ]);
    const [rows] = useState(generateRows({ length: 8 }));

    return (
        <>
            <h4>Detail Row Setup</h4>
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <RowDetailState
                        defaultExpandedRowIds={[2, 5]}
                    />
                    <Table />
                    <TableHeaderRow />
                    <TableRowDetail
                        contentComponent={RowDetail}
                    />
                </Grid>
            </Paper>
        </>
    );
};




export const DetailRow = () => {
    return (
        <>
            <BasicDetailRow />
        </>
    );
};