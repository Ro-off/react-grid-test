import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { generateRows } from "../demo-data/generator";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";

const Controlled = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));
  const [sorting, setSorting] = useState([
    { columnName: "city", direction: "asc" },
  ]);
  return (
    <>
      <h4>Controlled</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState sorting={sorting} onSortingChange={setSorting} />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
    </>
  );
};

const Uncontrolled = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  return (
    <>
      <h4>Uncontrolled</h4>

      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState
            defaultSorting={[{ columnName: "city", direction: "asc" }]}
          />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
    </>
  );
};

export const ControlledAndUncontrolled = () => (
  <>
    <Controlled />
    <Uncontrolled />
  </>
);
