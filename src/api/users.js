import { axiosJwt } from "./course";
const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API;

export const handleUploadImage = async (image) => {
  const isUpload = await axiosJwt.put(
    `${endpoint}/users/image`,
    {
      image,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return isUpload;
};


export const getUsersById = async ()=>{
  const data = await axiosJwt.get(`${endpoint}/users`)
  return data
}


export const changeUsername = async (payload)=>{
  const data = await axiosJwt.post(`${endpoint}/users/changeUsername`,payload)
  return data
}

export const changePassword = async (payload)=>{
  const data = await axiosJwt.post(`${endpoint}/users/changePassword`,payload)
  return data
}
