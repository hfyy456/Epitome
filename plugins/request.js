import { message } from 'ant-design-vue';
export default function ({ app }) {
    const axios = app.$axios
    const cookies = app.$cookies
    // 基本配置
    axios.defaults.timeout = 10000
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.withCredentials = false

    axios.interceptors.request.use(config => {
        let token = cookies.get('token')
        console.log(token)
        config.withCredentials = false
        if (token) {
            config.headers.post['authorization'] = token
        }
        return config

    })


    axios.interceptors.response.use(res => {
        const code = res.data.code
        if (!code) {
            return res
        }
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