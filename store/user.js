export const state = () => ({
    userInfo: null,
    token: '',
    login: ''
})

export const mutations = {
    SET_USERINFO: (state, data) => {
        state.userInfo = data
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_LOGIN(state, b) {
        state.login = b
    }

}
export const actions = {
    login({ commit }, params) {
        return new Promise((resolve, reject) => {
            this.$axios.post('user/login', params).then(res => {
                const code = res.code
                if (code == 20000) {
                    commit('SET_LOGIN', true)
                    commit('SET_USERINFO', res.data)
                    this.$cookies.set('token', res.token)
                    resolve(res)
                }
                reject(res.message)
            })
        })
    },
    getInfo({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.post('user/info', {}).then(res => {
                console.log(res)
                commit('SET_USERINFO', res.data)
                if (!res.data) {
                    return reject('Verification failed, please Login again.')
                }
                commit('SET_LOGIN', true)
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    regist({ commit }, params) {
        return new Promise((resolve, reject) => {
            this.$axios.post('user/regist', params).then(res => {
                const code = res.code
                if (code == 20000) {
                    commit('SET_LOGIN', true)
                    this.$cookies.set('token', res.token)
                    commit('SET_USERINFO', res.data)
                    resolve(res)
                } else {
                    reject(res.message)
                }
            })
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_LOGIN', false)
            this.$cookies.removeAll()
            commit('SET_USERINFO', {})
            resolve()
        }).catch(e => {
            console.log(e)
        })
    }
}