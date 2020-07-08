import { getToken } from '@/plugins/cookies'
import { message } from 'ant-design-vue'

export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        console.log(to.path)
        const path = to.path
        const token = getToken()
        if (!token && path != '/' && path != '/login') {
            next('/login')
        } else {
            if (path == '/login') {
                console.log(path)
                console.log(token)
                if (token) {
                    app.router.go(-1)
                } else {
                    next()
                }
            } else {
                app.store
                    .dispatch('user/getInfo')
                    .then(
                        resolve => { next() },
                        reject => { }
                    )
                    .catch(e => { next('/login') })
            }

        }
    })
}