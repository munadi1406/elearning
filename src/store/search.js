import {create} from 'zustand'


export const useSearchLocationStore = create((set) => ({
  search: {},
  setSearch: (newSearch) => set({ search: newSearch }),
}));
