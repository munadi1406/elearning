import { create } from "zustand";

export const useDeleteCourse = create((set)=>({
    idCourse:0,
    setIdCourse:(ic)=> set({idCourse:ic}),
    showModalDelete:false,
    setShowModalDelete:(sm)=>set({showModalDelete:sm})
}))


export const useNotification = create((set)=>({
    status:false,
    setStatus:(s)=>set({status:s}),
    msgNotification:"",
    setMsgNotification:(st)=>set({msgNotification:st})
}))