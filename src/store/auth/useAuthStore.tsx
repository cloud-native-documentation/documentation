import { create } from "zustand";

interface AuthStoreState {
  jwt: string | null;
  isLoggedIn: boolean;
  setJwt: (token: string) => void;
  clearJwt: () => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
  jwt: localStorage.getItem('jwt') || null,
  isLoggedIn: localStorage.getItem('jwt') !== null,
  setJwt: (token) => {
    localStorage.setItem('jwt', token);
    set(() => ({ jwt: token }))
    set(() => ({ isLoggedIn: true }))
  },
  clearJwt: () => {
    localStorage.removeItem('jwt');
    set(() => ({ jwt: null }))
    set(() => ({ isLoggedIn: false }))
  },
}));

export default useAuthStore;
