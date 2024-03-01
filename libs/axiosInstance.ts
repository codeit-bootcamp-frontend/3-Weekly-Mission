import axios from 'axios'
import { API_URL } from '@/constants/constant'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

export default axiosInstance
