import axios from "axios";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API;

export const auth = async (email, password) => {
  const authh = await axios.post(`${endpoint}/auth`, {
        email,
        password
  });
  return authh;
};
