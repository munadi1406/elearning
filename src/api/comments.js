import { axiosJwt } from "./course";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API;

export const createComment = async (id_post,comment)=>{
    const data = await axiosJwt.post(`${endpoint}/comment`,{
        id_post,
        comment
    })
    return data 
}