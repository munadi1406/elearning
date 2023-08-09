import { create } from "zustand";

export const useToken = create((set) => ({
  accessToken: "",
  setAccessToken: (at) => set({ accessToken: at }),
  refreshToken: "",
  setRefreshToken: (rt) => set({ refreshToken: rt }),
}));

export const useRegisterMessage = create((set)=>({
  registerMessage:'',
  setRegisterMessage: (msg) => set({registerMessage:msg}),
}))
