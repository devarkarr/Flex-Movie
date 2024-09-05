import axios from "axios";

const baseURL = import.meta.env.VITE_API_DOMAIN;
export default axios.create({ baseURL: baseURL });
