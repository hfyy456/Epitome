import { getToken } from '@/plugins/cookies'
import { message } from 'ant-design-vue'

export default function ({ route, redirect, store }) {
    const path = route.path

    if (!getToken() && path != '/' && path != '/login') {
        redirect({ path: '/login' })
    } else {
        if (path == '/login') {
            if (getToken()) {
                redirect({ path: '/' })
            }
        }
        store
            .dispatch('user/getInfo')
            .then(
                resolve => { },
                reject => { }
            )
            .catch(e => { })
    }
}