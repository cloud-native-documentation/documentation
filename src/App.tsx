import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import * as components from "./components";
import * as pages from "./pages";
import PrivateRoute from "./private_route";
const router = createBrowserRouter([
  {
    path: "/",
    element: <components.Dashboard />,
    children: [
      {
        path: "/",
        element: <pages.Home />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <components.Dashboard />,
        children: [
          {
            path: "/workspace/:projectID",
            element: <pages.Workspace />,
          },
          {
            path: "/action",
            element: <pages.Action />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
