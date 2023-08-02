import {create} from 'zustand'


export const useSearchLocationStore = create((set) => ({
  search: {},
  setSearch: (newSearch) => set({ search: newSearch }),
}));


export const useSubmenuActiveStore = create((set)=>({
  subMenuActive : 0,
  setSubmenuActive : (isActive) =>set({subMenuActive :isActive})
}))
