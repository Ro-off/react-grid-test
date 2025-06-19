import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";

import { generateRows } from "../demo-data/generator";

const BasicSelection = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 6 }));
  const [selection, setSelection] = useState([1]);

  return (
    <>
      <h4>Basic Setup</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
          <Table />
          <TableHeaderRow />
          <TableSelection />
        </Grid>
      </Paper>
    </>
  );
};

const PagingRowSelect = () => {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" },
  ]);
  const [rows] = useState(generateRows({ length: 8 }));
  const [selection, setSelection] = useState([]);

  return (
    <>
      <h4>Paging + Row select</h4>
      <div>
        <span>Total rows selected: {selection.length}</span>
        <Paper>
          <Grid rows={rows} columns={columns}>
            <PagingState defaultCurrentPage={0} pageSize={6} />
            <SelectionState
              selection={selection}
              onSelectionChange={setSelection}
            />
            <IntegratedPaging />
            <IntegratedSelection />
            <Table />
            <TableHeaderRow />
            <TableSelection showSelectAll selectByRowClick />
            <PagingPanel />
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export const Selection = () => {
  return (
    <>
      <BasicSelection />
      <PagingRowSelect />
    </>
  );
};
