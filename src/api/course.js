import axios from "axios";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API
export const axiosJwt = axios.create()
axiosJwt.interceptors.request.use(
    function (config){
        const accessToken = sessionStorage.getItem('at')
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return config;
    },
    function (error){
        throw error;
    }
)

axiosJwt.interceptors.response.use(
    function (response){
        return response
    },
    async function (error){
        if(error.response.status === 401){
            await newAccessToken()
            const originalRequest = error.config
            return await axiosJwt(originalRequest)
        }
        throw error;
    }
)

export const getCourseByIdUsers = async (lastIdCourse)=>{
    const {data} = await axiosJwt.get(`${endpoint}/course/${lastIdCourse}`)
    return data
}

export const getCourseWhenUserAsMember = async (lastIdCourse)=>{
    const {data} = await axiosJwt.get(`${endpoint}/course/member/${lastIdCourse}`)
    return data
}


export const createCourse = async (data)=>{
    const addCourse = await axiosJwt.post(`${endpoint}/course`,data)
    return addCourse
}


export const detailCourse = async (idCourse)=>{
    const addCourse = await axiosJwt.get(`${endpoint}/course/detail/${idCourse}`)
    return addCourse
}


export const deleteCourse = async (idCourse)=>{
    const dropCourse = await axiosJwt.delete(`${endpoint}/course/${idCourse}`)
    return dropCourse
}


export const newAccessToken = async ()=>{
    const refreshToken = sessionStorage.getItem('rt');
    const {data} =await axios.post(`${endpoint}/new-access-token`,{
        refreshToken
    })
    sessionStorage.setItem('at',data.accessToken);
}

export const joinCourse = async (courseCode)=>{
    const data = await axiosJwt.post(`${endpoint}/course/join`,{
        courseCode
    })
    return data;
}

export const post = async (idCourse,idPost)=>{
    const data = await axiosJwt.get(`${endpoint}/post/${idCourse}/${idPost}`)
    return data;
}

export const detailPost = async (idPost)=>{
    const data = await axiosJwt.get(`${endpoint}/post/${idPost}`)
    return data;
}


export const posting = async (dataPayload)=>{
    const data = await axiosJwt.post(`${endpoint}/tugas`,dataPayload,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
    return data;
}


export const submitTugas = async (dataPayload)=>{
    const data = await axiosJwt.post(`${endpoint}/tugas/submit`,dataPayload,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
    return data;
}

export const handlePostPengumuman = async (dataPayload)=>{
    const data = await axiosJwt.post(`${endpoint}/pengumuman`,dataPayload)
    return data;
}


export const handleDeletePost = async (idPost)=>{
    const data = await axiosJwt.delete(`${endpoint}/post/${idPost}`)
    return data;
}


export const listMember = async (idCourse,idMember)=>{
    const data = await axiosJwt.get(`${endpoint}/course/listmember/${idCourse}/${idMember}'}`)
    return data;
}
