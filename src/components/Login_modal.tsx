import { Modal } from "flowbite-react";
import { FormEvent, useRef } from "react";

interface LoginModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  HandleLogin: (e: FormEvent<HTMLFormElement>) => void;
  isMutatingLogin: boolean;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Modal
      show={props.show}
      size="md"
      onClose={() => {
        props.setShow(false);
        if (ref.current != null) ref.current.value = "";
      }}
    >
      <Modal.Header>
        <h3 className="text-lg font-medium">Login to Document!</h3>
      </Modal.Header>
      <Modal.Body>
        <form className="flex items-center" onSubmit={props.HandleLogin}>
          <div className="mb-3 mr-4">
            <label htmlFor="account" className="block font-bold text-gray-800">
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
            <label htmlFor="password" className="block font-bold text-gray-800">
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
            disabled={props.isMutatingLogin}
          >
            <span className="text-white">Login</span>
          </button>
        </form>
        <div
          style={{ opacity: 0.5, color: "purple" }}
          className="flex justify-end"
        ></div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
