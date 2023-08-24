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
