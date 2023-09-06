import { axiosJwt } from "./course";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API

export const createQuiz = async(dataPayload)=>{
    const data = await axiosJwt.post(`${endpoint}/quis`,dataPayload)
    return data 
}

export const takeAQuiz = async(idQuiz)=>{
    const data = await axiosJwt.get(`${endpoint}/quis/${idQuiz}`)
    return data
}