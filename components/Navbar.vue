<template>
  <div class="nav">
    <span class="logo" @click="goIndex">Epitome</span>
    <a-menu mode="horizontal" class="items">
      <a-sub-menu>
        <span slot="title" class="item-1">Gallery</span>
        <a-menu-item-group>
          <a-menu-item key="gallery:1">
            <nuxt-link to="/gallery/popular">Popular</nuxt-link>
          </a-menu-item>
          <a-menu-item key="gallery:2">
            <nuxt-link to="/gallery/albums">Albums</nuxt-link>
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="community" class="item-2">
            <nuxt-link to="/community">Community</nuxt-link>
      </a-menu-item>
    </a-menu>
    <span class="search-container">
      <a-icon type="search" style="font-size:15px;" />
      <a-divider type="vertical" style="margin-left:2px;font-size:20px;" />
      <input class="search-input" />
    </span>
    <span>
      <template v-if="login">
        <a-badge dot class="message">
          <a-icon type="message" style="font-size:24px;" />
        </a-badge>
        <a-dropdown placement="bottomCenter">
          <a-avatar class="avatar" shape="square" :src="userInfo.avatar" :size="38" />
          <a-menu slot="overlay">
            <a-menu-item>
              <nuxt-link to="/profile">Profile</nuxt-link>
            </a-menu-item>
            <a-menu-item>
              <nuxt-link to="/upload">Upload</nuxt-link>
            </a-menu-item>
             <a-menu-item>
              <nuxt-link to="/settings/information">Settings</nuxt-link>
            </a-menu-item>
            <a-menu-item>
              <a @click="logout">Log out</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
      <a-button v-else class="sign">
        <nuxt-link to="/login">Log in</nuxt-link>
      </a-button>
    </span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ userInfo: 'userInfo', login: 'isLogin' })
  },
  mounted() {},
  methods: {
    goIndex() {
      this.$router.push('/')
    },
    logout() {
      this.$store.dispatch('user/logout').then(res => {
        this.goIndex()
      })
    }
  }
}
</script>
<style lang="less" scoped>
@val: '25% - 91px';
.search-input {
  width: 15%;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
}
.search-container {
  @media screen and (max-width: 670px) {
    display: none;
  }
}
.avatar {
  display: inline-block;
  position: absolute;
  bottom: 3px;
  cursor: pointer;
  right: 1px;
}
.message {
  position: absolute;
  right: 60px;
  top: 28%;
}
.sign {
  font-size: 18px;
  padding: 0;
  border: none;
  font-weight: 500;
  right: 2px;
  line-height: 47px;
  position: absolute;
}
.items {
  width: calc(~'100% - @{val}');
  display: inline-block;
  border-bottom: none;
}
.logo {
  font-size: 24px;
  font-weight: 500;
  padding-left: 5px;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
}
.nav {
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 2px 8px #f0f1f2;
}
.item-1 {
  position: relative;
  font-size: 14px;
  font-weight: 500;
}
.item-2 {
  position: relative;
  font-size: 14px;
  font-weight: 500;
}
</style>
