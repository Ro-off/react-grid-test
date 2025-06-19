import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { DataTypeProvider, EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Input from "@mui/material/Input";

import { generateRows, globalSalesValues } from "../demo-data/generator";

const ValueFormatting = () => {
  const CurrencyFormatter = ({ value }) => (
    <b style={{ color: "darkblue" }}>
      {value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </b>
  );

  const CurrencyTypeProvider = (props) => (
    <DataTypeProvider formatterComponent={CurrencyFormatter} {...props} />
  );

  const DateFormatter = ({ value }) =>
    value.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3.$2.$1");

  const DateTypeProvider = (props) => (
    <DataTypeProvider formatterComponent={DateFormatter} {...props} />
  );

  const [columns] = useState([
    { name: "customer", title: "Customer" },
    { name: "product", title: "Product" },
    { name: "saleDate", title: "Sale Date" },
    { name: "amount", title: "Sale Amount" },
  ]);
  const [rows] = useState(
    generateRows({ columnValues: globalSalesValues, length: 8 })
  );
  const [tableColumnExtensions] = useState([
    { columnName: "amount", align: "right" },
  ]);
  const [dateColumns] = useState(["saleDate"]);
  const [currencyColumns] = useState(["amount"]);

  return (
    <>
      <h4>Value Formatting</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <CurrencyTypeProvider for={currencyColumns} />
          <DateTypeProvider for={dateColumns} />
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
};

const CustomEditors = () => {
  const getRowId = (row) => row.id;

  const BooleanFormatter = ({ value }) => <Chip label={value ? "Yes" : "No"} />;

  const BooleanEditor = ({ value, onValueChange }) => (
    <Select
      input={<Input />}
      value={value ? "Yes" : "No"}
      onChange={(event) => onValueChange(event.target.value === "Yes")}
      style={{ width: "100%" }}
    >
      <MenuItem value="Yes">Yes</MenuItem>
      <MenuItem value="No">No</MenuItem>
    </Select>
  );

  const BooleanTypeProvider = (props) => (
    <DataTypeProvider
      formatterComponent={BooleanFormatter}
      editorComponent={BooleanEditor}
      {...props}
    />
  );

  const [columns] = useState([
    { name: "customer", title: "Customer" },
    { name: "product", title: "Product" },
    { name: "units", title: "Units" },
    { name: "shipped", title: "Shipped" },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...globalSalesValues },
      length: 8,
    })
  );
  const [booleanColumns] = useState(["shipped"]);

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
      <h4>Custom Editors</h4>
      <Paper>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <BooleanTypeProvider for={booleanColumns} />
          <EditingState
            onCommitChanges={commitChanges}
            defaultEditingRowIds={[0]}
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

export const DataFormatting = () => {
  return (
    <>
      <ValueFormatting />
      <CustomEditors />
    </>
  );
};
