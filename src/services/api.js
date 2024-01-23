import axios from "axios"

export const api = axios.create({
  baseURL:"https://foodexplorer-api-7v52.onrender.com",
  withCredentials: true
}) 
