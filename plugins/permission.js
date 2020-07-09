import { message } from 'ant-design-vue'

export default ({ app, redirect }) => {
    app.router.beforeEach(async (to, from, next) => {
        const path = to.path
        const token = app.$cookies.get('token')
        //console.log(token)
        if (token) {
            if (path == '/login') {
                redirect('/profile')
            } else {
                app.store
                    .dispatch('user/getInfo')
                    .then(
                        resolve => { next() },
                        reject => { app.router.push({ path: '/login' }) }
                    )
                    .catch(e => { app.router.push({ path: '/login' }) })
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