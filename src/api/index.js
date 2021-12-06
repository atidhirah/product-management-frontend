import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const loginUser = (formData) => API.post("/user/login", formData);
export const registerUser = (formData) => API.post("/user/register", formData);
export const checkEmail = (formData) => API.post("/user/email", formData);
export const checkShopName = (formData) => API.post("/user/shopname", formData);
