import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";

import {
  generateRows,
  defaultNestedColumnValues,
} from "../demo-data/generator";
import { EditingState } from "@devexpress/dx-react-grid";

const ValueGetters = () => {
  const [columns] = useState([
    {
      name: "firstName",
      title: "First Name",
      getCellValue: (row) => (row.user ? row.user.firstName : undefined),
    },
    {
      name: "lastName",
      title: "Last Name",
      getCellValue: (row) => (row.user ? row.user.lastName : undefined),
    },
    {
      name: "car",
      title: "Car",
      getCellValue: (row) => (row.car ? row.car.model : undefined),
    },
    { name: "position", title: "Position" },
    { name: "city", title: "City" },
  ]);
  const [rows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...defaultNestedColumnValues },
      length: 8,
    })
  );

  return (
    <>
      <h4>Custom Cell Value Getters</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
};

const getRowId = (row) => row.id;

const ValueSetters = () => {
  const [columns] = useState([
    {
      name: "firstName",
      title: "First Name",
      getCellValue: (row) => (row.user ? row.user.firstName : undefined),
    },
    {
      name: "lastName",
      title: "Last Name",
      getCellValue: (row) => (row.user ? row.user.lastName : undefined),
    },
    {
      name: "car",
      title: "Car",
      getCellValue: (row) => (row.car ? row.car.model : undefined),
    },
    { name: "position", title: "Position" },
    { name: "city", title: "City" },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...defaultNestedColumnValues },
      length: 8,
    })
  );
  const [editingColumnExtensions] = useState([
    {
      columnName: "firstName",
      createRowChange: (row, value) => ({
        user: { ...row.user, firstName: value },
      }),
    },
    {
      columnName: "lastName",
      createRowChange: (row, value) => ({
        user: { ...row.user, lastName: value },
      }),
    },
    {
      columnName: "car",
      createRowChange: (row, value) => ({ car: { model: value } }),
    },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <>
      <h4>
        {" "}
        <h4>Custom Cell Value Setters</h4>
      </h4>
      <Paper>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState
            columnExtensions={editingColumnExtensions}
            onCommitChanges={commitChanges}
          />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </Paper>
    </>
  );
};
export const DataAccessors = () => (
  <>
    <ValueGetters />
    <ValueSetters />
  </>
);
