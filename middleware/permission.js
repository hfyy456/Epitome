import { getToken } from '@/plugins/cookies'
import { message } from 'ant-design-vue'

export default function ({ route, redirect, store }) {
    const path = route.path
    const token = getToken()
    if (!token && path != '/' && path != '/login') {
        redirect({ path: '/login' })
    } else {
        if (path == '/login') {
            console.log(path)
            console.log(token)
            if (token) {
                redirect({ path: '/' })
            }
        } else if (path == '/') {
            return
        } store
            .dispatch('user/getInfo')
            .then(
                resolve => { },
                reject => { }
            )
            .catch(e => { })
    }

}