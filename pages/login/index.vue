<template>
    <div class="container">
        <div class="form">
            <div
                v-if="login"
                class="login"
            >
                <h2 style="text-align:center;margin-bottom:20px;">Log in to Epitome</h2>
                <a-form-model
                    ref="loginForm"
                    :model="loginForm"
                    :rules="loginRules"
                >
                    <a-form-model-item
                        has-feedback
                        prop="username"
                    >
                        <a-input
                            size="large"
                            v-model="loginForm.username"
                            placeholder="Username"
                        >
                            <a-icon
                                slot="prefix"
                                type="user"
                                style="color:rgba(0,0,0,.25)"
                            />
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item
                        has-feedback
                        prop="password"
                    >
                        <a-input
                            size="large"
                            v-model="loginForm.password"
                            type="password"
                            placeholder="Password"
                        >
                            <a-icon
                                slot="prefix"
                                type="lock"
                                style="color:rgba(0,0,0,.25)"
                            />
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item style="text-align:center;margin-bottom:0;">
                        <a-button
                            size="large"
                            type="primary"
                            @click="submitLoginForm('loginForm')"
                        >NEXT</a-button>
                    </a-form-model-item>
                    <a-form-model-item style="text-align:center">
                        Not a member?
                        <a-button
                            type="link"
                            style="padding:0 5px;"
                            @click="goRegister"
                        >Regist here.</a-button>
                    </a-form-model-item>
                </a-form-model>
            </div>
            <div
                v-else
                class="register"
            >
                <h2 style="text-align:center;margin-bottom:20px;">Register</h2>
                <a-form-model
                    ref="registForm"
                    :model="registForm"
                    :rules="registRules"
                >
                    <a-form-model-item
                        has-feedback
                        prop="username"
                    >
                        <a-input
                            size="large"
                            v-model="registForm.username"
                            placeholder="Username"
                        >
                            <a-icon
                                slot="prefix"
                                type="user"
                                style="color:rgba(0,0,0,.25)"
                            />
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item
                        has-feedback
                        prop="email"
                    >
                        <a-input
                            size="large"
                            v-model="registForm.email"
                            placeholder="Email"
                        >
                            <a-icon
                                slot="prefix"
                                type="mail"
                                style="color:rgba(0,0,0,.25)"
                            />
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item
                        has-feedback
                        prop="password"
                    >
                        <a-input
                            size="large"
                            v-model="registForm.password"
                            type="password"
                            placeholder="Password"
                        >
                            <a-icon
                                slot="prefix"
                                type="lock"
                                style="color:rgba(0,0,0,.25)"
                            />
                        </a-input>
                    </a-form-model-item>
                    <a-form-model-item style="text-align:center;margin-bottom:0;">
                        <a-button
                            size="large"
                            type="primary"
                            @click="submitRegistForm('registForm')"
                        >NEXT</a-button>
                    </a-form-model-item>
                    <a-form-model-item style="text-align:center">
                        Already a member?
                        <a-button
                            type="link"
                            style="padding:0 5px;"
                            @click="goLogin"
                        >Login here.</a-button>
                    </a-form-model-item>
                </a-form-model>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let validatePass = (rule, value, callback) => {
            if (value.length < 5 || value.length > 16) {
                callback(new Error('Password should be between 6-16.'))
            } else {
                callback()
            }
        }
        let validateUsername = (rule, value, callback) => {
            if (value.length < 5 || value.length > 16) {
                callback(new Error('Username should be between 6-16.'))
            } else {
                callback()
            }
        }
        let validateUsername2 = (rule, value, callback) => {
            if (value.length < 5 || value.length > 16) {
                callback(new Error('Username should be between 6-16.'))
            } else {
                this.$axios
                    .post('user/username', { username: value })
                    .then(res => {
                        console.log(res.message)
                        const code = res.code
                        const msg = res.message
                        if (code == 20000) {
                            callback()
                        } else {
                            callback(new Error(msg))
                        }
                    })
            }
        }
        let validateEmail = (rule, value, callback) => {
            let emailPat = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
            let matchArray = value.match(emailPat)
            if (matchArray == null) {
                callback(new Error('Please enter corret Email address'))
            } else {
                this.$axios.post('user/email', { email: value }).then(res => {
                    console.log(res.message)
                    const code = res.code
                    const msg = res.message
                    if (code == 20000) {
                        callback()
                    } else {
                        callback(new Error(msg))
                    }
                })
            }
        }
        return {
            login: true,
            loginForm: {
                username: '',
                password: '',
            },
            registForm: {
                username: '',
                password: '',
                email: '',
            },
            loginRules: {
                username: [{ validator: validateUsername, trigger: 'change' }],
                password: [{ validator: validatePass, trigger: 'change' }],
            },
            registRules: {
                username: [
                    { validator: validateUsername2, trigger: 'blur' },
                    { validator: validateUsername, trigger: 'change' },
                ],
                password: [{ validator: validatePass, trigger: 'change' }],
                email: [{ validator: validateEmail, trigger: 'blur' }],
            },
        }
    },
    methods: {
        goRegister() {
            this.$refs['loginForm'].clearValidate()
            this.login = false
        },
        goLogin() {
            this.$refs['registForm'].clearValidate()
            this.login = true
        },
        async submitLoginForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$axios.post('user/login', this.loginForm).then(res => {
                        const code = res.code
                        if (code == 20000) {
                        } else {
                            this.$refs[formName].clearValidate()
                        }
                    })
                } else {
                    return false
                }
            })
        },
        async submitRegistForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$refs[formName].clearValidate()
                    this.$axios
                        .post('user/regist', this.registForm)
                        .then(res => {
                            const code = res.code
                            if (code == 20000) {
                            } else {
                                this.$refs[formName].clearValidate()
                            }
                        })
                } else {
                    return false
                }
            })
        },
    },
}
</script>
<style lang="less" scoped>
.container {
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591956136934&di=dbac6a5f5456d9c62fba70924f9e852f&imgtype=0&src=http%3A%2F%2Fwww.33lc.com%2Farticle%2FUploadPic%2F2012-8%2F20128161011230274.jpg);
    margin: 0 auto;
    min-height: calc(100vh - 104px);
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
        background-color: #fff;
        border-radius: 0.25rem;
        .login {
            margin: 35px;
        }
        .register {
            margin: 35px;
        }
    }
}
</style>