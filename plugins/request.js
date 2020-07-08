import { message } from 'ant-design-vue';
export default function ({ app }) {
    const axios = app.$axios
    const cookies = app.$cookies
    let token = cookies.get('token')
    // 基本配置
    axios.defaults.timeout = 10000
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.put['Content-Type'] = 'application/json'
    axios.defaults.withCredentials = false
    axios.defaults.headers.patch['Content-Type'] = 'application/json'
    console.log(token)
    if (token) {
        axios.defaults.headers.post['authorization'] = token
    }
    axios.interceptors.response.use(res => {
        const code = res.data.code
        const msg = res.data.message
        if (code != 20000 && code != 50000) {
            message.error(msg)
        } else {
            return res.data
        }

    })
    // 错误回调
    axios.onError((error) => {
        //console.log(error)
        switch (error.response.status) {
            case 401:
                location.href = '/login'
                break
            case 200:
                console.log('abcd')
        }
    })
}