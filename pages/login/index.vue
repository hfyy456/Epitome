<template>
  <div class="container">
    <div class="form">
      <div v-if="login" class="login">
        <h2 style="text-align:center;margin-bottom:20px;">Log in to Epitome</h2>
        <a-form-model ref="loginForm" :model="loginForm" :rules="rules">
          <a-form-model-item has-feedback prop="username">
            <a-input size="large" v-model="loginForm.username" placeholder="Username">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item has-feedback prop="password">
            <a-input
              size="large"
              v-model="loginForm.password"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item style="text-align:center;margin-bottom:0;">
            <a-button size="large" type="primary" @click="submitForm('loginForm')">NEXT</a-button>
          </a-form-model-item>
          <a-form-model-item style="text-align:center">
            Not a member?
            <a-button type="link" style="padding:0 5px;" @click="goRegister">Regist here.</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
      <div v-else class="register">
        <h2 style="text-align:center;margin-bottom:20px;">Register</h2>
        <a-form-model ref="registForm" :model="registForm" :rules="rules">
          <a-form-model-item has-feedback prop="username">
            <a-input size="large" v-model="registForm.username" placeholder="Username">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item has-feedback prop="email">
            <a-input size="large" v-model="registForm.email" placeholder="Email">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item has-feedback prop="password">
            <a-input
              size="large"
              v-model="registForm.password"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item style="text-align:center;margin-bottom:0;">
            <a-button size="large" type="primary" @click="submitForm('loginForm')">NEXT</a-button>
          </a-form-model-item>
          <a-form-model-item style="text-align:center">
            Already a member?
            <a-button type="link" style="padding:0 5px;" @click="goLogin">Login here.</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: true,
      loginForm: {
        username: '',
        password: ''
      },
      registForm: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    goRegister() {
      this.login = false
    },
    goLogin() {
      this.login = true
    }
  }
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