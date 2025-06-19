import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { SearchState, IntegratedFiltering } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

import { generateRows } from "../demo-data/generator";

const BasicSetup = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 6 }));
  return (
    <>
      <h4>Basic Search Setup</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SearchState defaultValue="Mark" />
          <IntegratedFiltering />
          <Table />
          <TableHeaderRow />
          <Toolbar />
          <SearchPanel />
        </Grid>
      </Paper>
    </>
  );
};

export const Searching = () => {
  return (
    <>
      <BasicSetup />
    </>
  );
};
