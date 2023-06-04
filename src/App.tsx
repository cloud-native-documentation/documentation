import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as components from "./components";
import * as pages from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <components.Dashboard />,
    children: [
      {
        path: "/",
        element: <pages.Home />,
      },
      {
        path: "/workspace/:projectID",
        element: <pages.Workspace />,
      },
      {
        path: "/action",
        element: <pages.Action />,
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
