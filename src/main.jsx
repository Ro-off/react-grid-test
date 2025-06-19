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
