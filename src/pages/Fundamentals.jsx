import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { generateRows, globalSalesValues } from "../demo-data/generator";
import { alpha, styled } from "@mui/material/styles";

export const Fundamentals = () => {
  const [columns] = useState([
    { name: "region", title: "Region" },
    { name: "sector", title: "Sector" },
    { name: "customer", title: "Customer" },
    { name: "product", title: "Product" },
    { name: "amount", title: "Sale Amount" },
  ]);
  const [rows] = useState(
    generateRows({ columnValues: globalSalesValues, length: 8 })
  );

  const PREFIX = "Demo";
  const classes = {
    tableStriped: `${PREFIX}-tableStriped`,
  };
  const StyledTable = styled(Table.Table)(({ theme }) => ({
    [`&.${classes.tableStriped}`]: {
      "& tbody tr:nth-of-type(odd)": {
        backgroundColor: alpha(theme.palette.secondary.main, 0.15),
      },
    },
  }));

  const styles = {
    banking: {
      backgroundColor: "#f86fdc",
    },
    health: {
      backgroundColor: "#a2e2a4",
    },
    telecom: {
      backgroundColor: "#b3e5fc",
    },
    energy: {
      backgroundColor: "#ffcdd2",
    },
    insurance: {
      backgroundColor: "#f0f4c3",
    },
  };

  const TableRow = ({ row, ...restProps }) => (
    <Table.Row
      {...restProps}
      onClick={() => alert(JSON.stringify(row))}
      style={{
        cursor: "pointer",
        ...styles[row.sector.toLowerCase()],
      }}
    />
  );

  const TableComponent = (props) => (
    <StyledTable {...props} className={classes.tableStriped} />
  );

  const HighlightedCell = ({ value, style, ...restProps }) => (
    <Table.Cell
      {...restProps}
      style={{
        backgroundColor: value >= 20000 ? "green" : undefined,
        ...style,
      }}
    >
      <span
        style={{
          color: value >= 20000 ? "white" : undefined,
        }}
      >
        {value}
      </span>
    </Table.Cell>
  );

  const Cell = (props) => {
    const { column } = props;
    if (column.name === "amount") {
      return <HighlightedCell {...props} />;
    }
    return <Table.Cell {...props} />;
  };

  const [tableColumnExtensions] = useState([
    { columnName: "region", width: "100px", wordWrapEnabled: true },
  ]);

  return (
    <>
      <h4>Customize the Appearance</h4>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table
            tableComponent={TableComponent}
            cellComponent={Cell}
            rowComponent={TableRow}
            columnExtensions={tableColumnExtensions}
          />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
};
