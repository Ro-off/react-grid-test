import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { GroupingState, IntegratedGrouping } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
} from "@devexpress/dx-react-grid-material-ui";

import { generateRows } from "../demo-data/generator";

const BasicGrouping = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));

  return (
    <>
      <h4>Basic Setup</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <GroupingState grouping={[{ columnName: "city" }]} />
          <IntegratedGrouping />
          <Table />
          <TableHeaderRow />
          <TableGroupRow />
        </Grid>
      </Paper>
    </>
  );
};

export const Grouping = () => {
  return (
    <>
      <BasicGrouping />
    </>
  );
};
