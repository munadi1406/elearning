import { axiosJwt } from "./course";

const endpoint = import.meta.env.VITE_SOME_ENDPOINT_API;

export const createQuiz = async (dataPayload) => {
  const data = await axiosJwt.post(`${endpoint}/quis`, dataPayload);
  return data;
};

export const takeAQuiz = async (idQuiz) => {
  const data = await axiosJwt.get(`${endpoint}/quiz/${idQuiz}`);
  return data;
};

export const detailQuestion = async (idQuestion) => {
  const data = await axiosJwt.get(`${endpoint}/question/${idQuestion}`);
  return data;
};

export const addAnswer = async (datas) => {
  const data = await axiosJwt.post(`${endpoint}/answer`, datas);
  return data;
};
export const getScore = async (idQuiz) => {
  const data = await axiosJwt.get(`${endpoint}/score/${idQuiz}`);
  return data;
};
export const getEvaluateQuiz = async (idQuiz) => {
  const data = await axiosJwt.get(`${endpoint}/quiz-evaluate/${idQuiz}`);
  return data;
};


