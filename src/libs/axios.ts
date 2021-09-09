import axios from 'axios'

const $axios = axios.create({
  baseURL: '/api',
})

export default $axios
