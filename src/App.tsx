import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";
import * as components from "./components";
import * as pages from "./pages";
import { useAuthStore } from "./store/auth";

function PrivateRoute() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
}
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
            path: "/workspace/:fileID",
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
