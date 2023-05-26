import { FormEvent } from 'react';
import { VscMenu } from "react-icons/vsc";
import { Outlet, useLocation } from "react-router-dom";
import { useIsHistoryStore } from "../store/workspace";
import { useAuthStore } from "../store/auth";
import { useLogin, useLogout } from '../api/auth';

function Dashboard() {
  
  const location = useLocation();
  const { isHistory, setIsHistory } = useIsHistoryStore();
  const { isLoggedIn, jwt, setJwt, clearJwt } = useAuthStore();
  const HandleLogin = (e: FormEvent<HTMLFormElement>) => {
    if(!e.currentTarget.checkValidity())
      e.preventDefault();
    e.preventDefault();
    useLogin( e.currentTarget.account.value, e.currentTarget.password.value, setJwt )
    .then((data) => {
      console.log(data);
      alert("Login success");
    }).catch((err) => {
      alert("Login failed");
      console.log(err);
    });
  };

  const HandleLogout = () => {
    useLogout(jwt, clearJwt)
    .then((data) => {
      console.log(data);
      alert("Logout success");
    })
    .catch((err) => {
      alert("Logout failed");
      console.log(err);
    });
  };

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
        {!isLoggedIn ? (
          <form className="flex items-center" onSubmit={HandleLogin}>
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
                required
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
                required
              />
            </div>
            <button
              className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
              style={{ height: "45px" }}
            >
              <span className="text-white">Login</span>
            </button>
          </form>
        ) : (
          <button
            className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
            onClick={HandleLogout}
            style={{ height: "45px" }}
          >
            <span className="text-white">Logout</span>
          </button>
        )}
        {location.pathname === "/workspace" &&
          (isHistory ? (
            <button onClick={() => setIsHistory(false)}>[change to edit]</button>
          ) : (
            <button onClick={() => setIsHistory(true)}>
              [change to history]
            </button>
          ))}
      </div>
      <Outlet />
    </div>
  );
}
export default Dashboard;
