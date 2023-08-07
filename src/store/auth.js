import { create } from "zustand";

export const useToken = create((set) => ({
  accessToken: "",
  setAccessToken: (at) => set({ accessToken: at }),
  refreshToken: "",
  setRefreshToken: (rt) => set({ refreshToken: rt }),
}));
