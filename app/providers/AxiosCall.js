import axios from "axios";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log("bakend url at axios file ",backend_url);

const instance = axios.create({
  baseURL: backend_url,
//   withCredentials: true, // ✅ Important for handling authentication
//   headers: {
//     "Content-Type": "application/json",
//   },
});

export default instance;

