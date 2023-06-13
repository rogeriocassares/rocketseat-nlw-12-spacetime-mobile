import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://192.168.0.250:3333',
  baseURL: 'http://10.33.133.143:3333',
})
