import { Button } from "flowbite-react";
import { FormEvent, useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useLogin, useLogout } from "../api/auth";
import { useAuthStore } from "../store/auth";
import LoginModal from "./Login_modal";
import Explorer from "./explorer/Explorer";
import useMe from "../api/auth/useMe";
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
  const { data: user, isLoading: userLoading, error: userError } = useMe();
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
  const [showExplorer, setShowExplorer] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowExplorer(false); // Redirect to the home page or login page
    }
  }, [isLoggedIn, setShowExplorer]);

  const handleOpenExplorer = () => {
    setShowExplorer(!showExplorer);
  };
  useEffect(() => {
    if (errorLogin || errorLogout)
      alert(errorLogin.message || errorLogout.message);
  }, [errorLogin, errorLogout]);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    // if (showExplorer)
    setShowExplorer(false);
  }, [location]);
  return (
    <>
      <div className="flex items-center justify-between bg-purple-300 p-1">
        <div className="flex items-center">
          {isLoggedIn ? (
            <div>
              <button
                onClick={handleOpenExplorer}
                className="bg-purple-300 p-2 text-white hover:bg-purple-500"
              >
                <VscMenu size={32} />
              </button>
            </div>
          ) : (
            <div></div>
          )}
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
          <div className="flex" style={{ gap: "10px" }}>
            {!userLoading && !userError && user && (
              <button
                className="mt-4 rounded-lg bg-gray-500 p-2 hover:bg-gray-600 "
                style={{ marginTop: "auto", marginBottom: "auto" }}
              >
                <span className="text-white">
                  {user.username} ({user.department})
                </span>
              </button>
            )}
            <Link to="/action">
              <button
                className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
                style={{ marginTop: "auto", marginBottom: "auto" }}
              >
                <span className="text-white">Action</span>
              </button>
            </Link>
            <button
              className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
              onClick={HandleLogout}
              style={{ marginTop: "auto", marginBottom: "auto" }}
              disabled={isMutatingLogout}
            >
              <span className="text-white">Logout</span>
            </button>
          </div>
        )}
      </div>
      {showExplorer ? <Explorer /> : <Outlet />}
    </>
  );
}
export default Dashboard;
