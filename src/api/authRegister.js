import axios from "axios";

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
  console.log(password);
  console.log(email);
  console.log(phoneNumber);
  const datas = await axios.post(`${endpoint}/users`, {
    username: `${firstName}${lastName}`,
    email,
    phoneNumber,
    password,
    confirmPassword
  });
  return datas;
};

export const otpVerification = async (otp) =>{
  const data = await axios.post(`${endpoint}/auth/otp`,{
    otp
  });
  return data;
}
