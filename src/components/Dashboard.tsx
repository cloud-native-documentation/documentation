import { FormEvent, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { Outlet } from "react-router-dom";
import { useLogin, useLogout } from "../api/auth";
import { useAuthStore } from "../store/auth";

function Dashboard() {
  const {
    trigger: triggerLogin,
    error: errorLogin,
    isMutating: isMutatingLogin,
  } = useLogin();
  const {
    trigger: triggerLogout,
    error: errorLogout,
    isMutating: isMutatingLogout,
  } = useLogout();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const HandleLogin = (e: FormEvent<HTMLFormElement>) => {
    if (!e.currentTarget.checkValidity()) return e.preventDefault();
    e.preventDefault();
    triggerLogin({
      username: e.currentTarget.account.value,
      password: e.currentTarget.password.value,
    });
  };

  const HandleLogout = () => {
    triggerLogout();
  };

  useEffect(() => {
    if (errorLogin || errorLogout)
      alert(errorLogin.message || errorLogout.message);
  }, [errorLogin, errorLogout]);

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
              disabled={isMutatingLogin}
            >
              <span className="text-white">Login</span>
            </button>
          </form>
        ) : (
          <button
            className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
            onClick={HandleLogout}
            style={{ height: "45px" }}
            disabled={isMutatingLogout}
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
