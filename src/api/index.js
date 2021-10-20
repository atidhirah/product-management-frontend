import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const loginUser = (formData) => API.post("/user/login", formData);
export const registerUser = (formData) => API.post("/user/register", formData);
