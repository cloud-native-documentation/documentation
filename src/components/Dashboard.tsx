import { Outlet } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleClick = () => {
  alert("To do");
};

function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between bg-purple-300 p-1">
        <div className="flex items-center">
          <button className="text-white bg-purple-300 hover:bg-purple-500 p-2">
            <FontAwesomeIcon icon={faBars} size="2x"/>
          </button>
          <h1 className="text-4xl font-extrabold text-white ml-4">Documentation</h1>
        </div>
        <form className="flex items-center">
          <div className="mb-3 mr-4">
            <label htmlFor="account" className="block text-gray-800 font-bold">Account:</label>
            <input type="text" name="account" id="account" placeholder="username" className="w-full border border-gray-300 py-2 pl-3 rounded mt-1 outline-none focus:ring-indigo-600 ring-indigo-600" />
          </div>
          <div className="mb-3 mr-4">
            <label htmlFor="password" className="block text-gray-800 font-bold">Password:</label>
            <input type="password" name="password" id="password" placeholder="password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-1 outline-none focus:ring-indigo-600 ring-indigo-600" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 p-2 mt-4 rounded-lg " onClick={handleClick} style={{ height: '45px' }}>
            <span className="text-white">Login</span>
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
