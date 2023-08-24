import { create } from "zustand";

export const useToken = create((set) => ({
  accessToken: "",
  setAccessToken: (at) => set({ accessToken: at }),
  refreshToken: "",
  setRefreshToken: (rt) => set({ refreshToken: rt }),
}));

export const useRegisterMessage = create((set) => ({
  registerMessage: "",
  setRegisterMessage: (msg) => set({ registerMessage: msg }),
}));

export const useDataUser = create((set) => ({
  idUsers: 0,
  setIdUsers: (id) => set({ idUsers: id }),
  username: "",
  setUsername: (u) => set({ username: u }),
  email: "",
  setEmail: (e) => set({ email: e }),
  role: "",
  setRole: (r) => set({ role: r }),
  image: "",
  setImage: (img) => set({ image: img }),
}));
