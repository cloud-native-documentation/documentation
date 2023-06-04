import { create } from "zustand";

interface AuthStoreState {
  token: string | null;
  isLoggedIn: boolean;
  set: (token: string) => void;
  clear: () => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
  token: localStorage.getItem("jwt") || null,
  isLoggedIn: !!localStorage.getItem("jwt"),
  set: (token) => {
    localStorage.setItem("jwt", token);
    set(() => ({ token: token }));
    set(() => ({ isLoggedIn: true }));
  },
  clear: () => {
    localStorage.removeItem("jwt");
    set(() => ({ token: null }));
    set(() => ({ isLoggedIn: false }));
  },
}));

export default useAuthStore;
