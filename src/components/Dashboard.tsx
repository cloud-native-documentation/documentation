import { Button } from "flowbite-react";
import { FormEvent, useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { Outlet } from "react-router-dom";
import { useLogin, useLogout } from "../api/auth";
import { useAuthStore } from "../store/auth";
import LoginModal from "./Login_modal";
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
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
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
          <div>
            <Button pill={true} onClick={() => setShowLoginModal(true)}>
              Login
            </Button>
            <LoginModal
              show={showLoginModal}
              setShow={setShowLoginModal}
              HandleLogin={HandleLogin}
              isMutatingLogin={isMutatingLogin}
            />
          </div>
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
