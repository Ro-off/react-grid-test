import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
  generateRows,
  globalSalesValues,
} from '../demo-data/generator';


export const  Fundamentals = () => {

  const [columns] = useState([
    { name: 'region', title: 'Region' },
    { name: 'sector', title: 'Sector' },
    { name: 'customer', title: 'Customer' },
    { name: 'product', title: 'Product' },
    { name: 'amount', title: 'Sale Amount' },
  ]);
  const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
}

