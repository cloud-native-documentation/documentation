import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold">Dashboard</h1>
      <Outlet />
    </div>
  );
}
export default Dashboard