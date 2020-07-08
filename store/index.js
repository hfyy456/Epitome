export const state = () => ({
    token: 'null'
})
export const getters = {
    userInfo: state => state.user.userInfo,
    isLogin: state => state.user.login,
    token: state => state.token
}
export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    }
}