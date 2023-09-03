import { axiosJwt } from "./course";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API;

export const listSubmitTugas = async (idTugas)=>{
    const data = await axiosJwt.get(`${endpoint}/tugas/listsubmit/${idTugas}`)
    return data 
}


export const insertNilai = async (scoreData)=>{
    const data = await axiosJwt.post(`${endpoint}/nilai/`,scoreData)
    return data 
}

export const cancaleSubmit = async (idTugasSubmission)=>{
    const data = await axiosJwt.post(`${endpoint}/nilai/`,{
        idTugasSubmission
    })
    return data
}

export const tugasList = async (idPost)=>{
    const data = await axiosJwt.get(`${endpoint}/tugas/${idPost}`)
    return data
}


export const downloadFileTugas = (idCourse,fileName) =>{
    const url = `${endpoint}/file/${idCourse}/${fileName}`
    return window.open(url,'_blank');
}

