import axios from "axios";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API
const axiosJwt = axios.create()
axiosJwt.interceptors.request.use(
    function (config){
        const accessToken = sessionStorage.getItem('at')
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return config;
    },
    function (error){
        console.log({inierrrorequest:error});
        throw error;
    }
)

axiosJwt.interceptors.response.use(
    function (response){
        return response
    },
    async function (error){
        console.log({iniErrorResponse:error})
        if(error.response.status === 403){
            await newAccessToken()
            const originalRequest = error.config
            return await axiosJwt(originalRequest)
        }
        throw error;
    }
)

export const getCourseByIdUsers = async (idUsers)=>{
    const {data} = await axiosJwt.get(`${endpoint}/course/${idUsers}`)
    return data
}


export const createCourse = async (data)=>{
    const addCourse = await axiosJwt.post(`${endpoint}/course`,data)
    return addCourse
}


export const newAccessToken = async ()=>{
    const refreshToken = sessionStorage.getItem('rt');
    const {data} =await axios.post(`${endpoint}/users/new-access-token`,{
        refreshToken
    })
    sessionStorage.setItem('at',data.accessToken);
}