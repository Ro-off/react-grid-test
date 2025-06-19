import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

import { generateRows } from "../demo-data/generator";

const UncontrolledMode = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  const [sortingStateColumnExtensions] = useState([
    { columnName: "gender", sortingEnabled: false },
  ]);

  return (
    <>
      <h4>Uncontrolled Mode</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState
            defaultSorting={[{ columnName: "city", direction: "asc" }]}
            columnExtensions={sortingStateColumnExtensions}
          />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
    </>
  );
};

const ControlledMode = () => {
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
      <h4>Controlled Mode</h4>
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

export const Sorting = () => {
  return (
    <>
      <UncontrolledMode />
      <ControlledMode />
    </>
  );
};
