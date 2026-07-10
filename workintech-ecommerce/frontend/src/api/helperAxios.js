import axios from "axios";

const helperApi = axios.create({
  baseURL:
    import.meta.env.VITE_HELPER_API_URL ??
    "http://localhost:8081/api",
});

export default helperApi;