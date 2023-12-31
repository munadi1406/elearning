import axios from "axios";
import { axiosJwt } from "./course";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API;

export const auth = async (email, password) => {
  const data = await axios.post(`${endpoint}/auth`, {
    email,
    password,
  });
  return data;
};
export const register = async (data) => {
  const { firstName, lastName , email, password, phoneNumber,confirmPassword } = data;
  const datas = await axios.post(`${endpoint}/users`, {
    username: `${firstName} ${lastName}`,
    email,
    phoneNumber,
    password,
    confirmPassword
  });
  return datas;
};

export const otpVerification = async (otp) =>{
  const data = await axios.post(`${endpoint}/otpcheck`,{
    otp
  });
  return data;
}

export const requestNewOtp = async (email) =>{
  const data = await axios.post(`${endpoint}/newotp`,{
    email
  });
  return data;
}

export const logout = async()=>{
  const isLogout = await axiosJwt.put(`${endpoint}/logout`)
  return isLogout
}
