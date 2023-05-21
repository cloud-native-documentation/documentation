import { Outlet, useLocation } from "react-router-dom";
import { useIsHistoryStore } from "../store/workspace";

function Dashboard() {
  const location = useLocation();
  const { isHistory, setIsHistory } = useIsHistoryStore();

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Dashboard</h1>
      {location.pathname === "/workspace" &&
        (isHistory ? (
          <button onClick={() => setIsHistory(false)}>[change to edit]</button>
        ) : (
          <button onClick={() => setIsHistory(true)}>
            [change to history]
          </button>
        ))}
      <Outlet />
    </div>
  );
}
export default Dashboard;
