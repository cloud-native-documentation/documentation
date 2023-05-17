import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { Outlet } from "react-router-dom";

const handleClick = () => {
  alert("To do");
};

function Dashboard() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between bg-purple-300 p-1">
        <div className="flex items-center">
          <button className="bg-purple-300 p-2 text-white hover:bg-purple-500">
            <VscMenu size={32} />
          </button>
          <h1 className="ml-4 text-4xl font-extrabold text-white">
            Documentation
          </h1>
        </div>
        {login ? (
          <form className="flex items-center">
            <div className="mb-3 mr-4">
              <label
                htmlFor="account"
                className="block font-bold text-gray-800"
              >
                Account:
              </label>
              <input
                type="text"
                name="account"
                id="account"
                placeholder="username"
                className="mt-1 w-full rounded border border-gray-300 py-2 pl-3 outline-none ring-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="mb-3 mr-4">
              <label
                htmlFor="password"
                className="block font-bold text-gray-800"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="mt-1 w-full rounded border border-gray-300 py-2 pl-3 outline-none ring-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <button
              className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
              onClick={handleClick}
              style={{ height: "45px" }}
            >
              <span className="text-white">Login</span>
            </button>
          </form>
        ) : (
          <button
            className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
            onClick={handleClick}
            style={{ height: "45px" }}
          >
            <span className="text-white">Logout</span>
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
