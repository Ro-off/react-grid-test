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
