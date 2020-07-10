import { message } from 'ant-design-vue'

export default ({ app, redirect }) => {
    app.router.beforeEach(async (to, from, next) => {
        const path = to.path
        const token = app.$cookies.get('token')
        const isLogin = app.store.state.user.login
        if (token) {
            if (path == '/login') {
                redirect('/profile')
            } else {
                if (!isLogin) { //随便取个vuex的值，保证非刷新状态不会重复向后端发送请求
                    app.store
                        .dispatch('user/getInfo')
                        .then(
                            resolve => { next() },
                            reject => { app.router.push({ path: '/login' }) }
                        )
                        .catch(e => { app.router.push({ path: '/login' }) })
                } else {
                    next()
                }

            }

        } else {
            if (path == '/' || path == '/login') {
                next()
            } else {
                app.router.push({ path: '/login' })
            }
        }
    })
}