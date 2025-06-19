import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { FilteringState, IntegratedFiltering } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
} from "@devexpress/dx-react-grid-material-ui";

import { generateRows } from "../demo-data/generator";

const BasicFiltering = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  return (
    <>
      <h4>Value Filtering</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <Table />
          <TableHeaderRow />
          <TableFilterRow />
        </Grid>
      </Paper>
    </>
  );
};

export const Filtering = () => {
  return (
    <>
      <BasicFiltering />
    </>
  );
};
