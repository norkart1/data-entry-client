import axios from "axios";
const API_URL = "https://your-vercel-backend-url.vercel.app/api";

export const addData = async (data) => axios.post(`${API_URL}/add`, data);
export const getData = async () => {
  const res = await axios.get(`${API_URL}/get`);
  return res.data;
};
