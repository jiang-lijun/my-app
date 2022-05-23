import { message } from 'antd'
import axios from 'axios'

const $http = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 2000
})

$http.interceptors.request.use(config => {
    config.headers.token = localStorage.getItem('token')
    return config
})

$http.interceptors.response.use(res => {
    console.log(res.data)
    let data = res.data
    if (data.status === 200) {
        message.success(data.data.data.msg)
        return data.data
    } else {
        message.error(data.data.data.msg)
        return Promise.reject(data)
    }
})

export default $http