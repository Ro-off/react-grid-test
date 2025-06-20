import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import App from "./App.jsx";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import { Fundamentals } from "./pages/Fundamentals";
import { ControlledAndUncontrolled } from "./pages/ControlledAndUncontrolled";
import { DataAccessors } from "./pages/DataAccessors";
import { DataFormatting } from "./pages/DataFormatting";
import { Sorting } from "./pages/Sorting";
import { Paging } from "./pages/Paging";
import { Filtering } from "./pages/Filtering";
import { Searching } from "./pages/Searching";
import { Grouping } from "./pages/Grouping";
import { Selection } from "./pages/Selection";
import { Editing } from "./pages/Editing";
import { DetailRow } from "./pages/DetailRow"
import { ColumnReordering } from "./pages/ColumnReordering";
import { ColumnResizing } from "./pages/ColumnResizing";
import { ColumnVisibility } from "./pages/ColumnVisibility";
import { BandedColumns } from "./pages/BandedColumns";
import { FixedColumns } from "./pages/FixedColumns";
import { VirtualScrolling } from "./pages/VirtualScrolling";
import { LazyLoading } from "./pages/LazyLoading";
import { TreeData } from "./pages/TreeData.jsx";
import { SummaryRow } from "./pages/SummaryRow.jsx";

const routes = [
  { path: "/", label: "Test", element: <App /> },
  { path: "/fundamentals", label: "Fundamentals", element: <Fundamentals /> },
  {
    path: "/controlledUncontrolled",
    label: "Controlled And Uncontrolled",
    element: <ControlledAndUncontrolled />,
  },
  {
    path: "/dataAccessors",
    label: "Data Accessors",
    element: <DataAccessors />,
  },
  {
    path: "/dataFormatting",
    label: "Data Formatting",
    element: <DataFormatting />,
  },
  {
    path: "/sorting",
    label: "Sorting",
    element: <Sorting />,
  },
  {
    path: "/paging",
    label: "Paging",
    element: <Paging />,
  },
  {
    path: "/filtering",
    label: "Filtering",
    element: <Filtering />,
  },
  { path: "/searching", label: "Searching", element: <Searching /> },
  { path: "/grouping", label: "Grouping", element: <Grouping /> },
  { path: "/selection", label: "Selection", element: <Selection /> },
  { path: "/editing", label: "Editing", element: <Editing /> },
  { path: "/detailRow", label: "Detail Row", element: <DetailRow /> },
  { path: "/columnReordering", label: "Column Reordering", element: <ColumnReordering /> },
  { path: "/columnResizing", label: "Column Resizing", element: <ColumnResizing /> },
  { path: "/columnVisibility", label: "Column Visibility", element: <ColumnVisibility /> },
  { path: "/bandedColumns", label: "Banded Columns", element: <BandedColumns /> },
  { path: "/fixedColumns", label: "Fixed Columns", element: <FixedColumns /> },
  { path: "/virtualScrolling", label: "Virtual Scrolling", element: <VirtualScrolling /> },
  { path: "/lazyLoading", label: "Lazy Loading", element: <LazyLoading /> },
  { path: "/treeData", label: "Tree Data", element: <TreeData /> },
  { path: "/summaryRow", label: "Summary Row", element: <SummaryRow /> }
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: 15,
          margin: 30,
          placeContent: "center",
          maxWidth: "90vw",
          marginLeft: 0,
          marginRight: 0,
          flexWrap: "wrap"
        }}
      >
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            end
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {route.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
