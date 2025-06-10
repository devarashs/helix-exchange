import axios from "axios";

const api = process.env.NEXT_PUBLIC_API || "http://localhost:5000";
axios.defaults.baseURL = api;
export default axios;
