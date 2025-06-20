import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Grid,
  DragDropProvider,
  Table,
  TableHeaderRow,
  TableColumnReordering,
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
  const [tableColumnExtensions] = useState([
    { columnName: 'gender', width: 100 },
  ]);

  return (
    <>
      <h4>Value Formatting</h4>
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <DragDropProvider />
          <Table
            columnExtensions={tableColumnExtensions}
          />
          <TableColumnReordering
            defaultOrder={['city', 'gender', 'car', 'name']}
          />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
};



export const ColumnReordering = () => {
  return (
    <>
      <BasicSetup />
    </>
  );
};
