import axios,{AxiosInstance } from "axios";

const host:AxiosInstance  = axios.create({
    baseURL: "http://localhost:5000"
});


export {
    host
}