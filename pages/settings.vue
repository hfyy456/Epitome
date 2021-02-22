<template>
  <div>
    <div class="settings-headers">
      <h1 class="settings-title">{{ $route.path | setTitle }}</h1>
      <a-menu v-model="current" class="settings-tabs" mode="horizontal">
        <a-menu-item key="information">
          <nuxt-link to="/settings/information">Information</nuxt-link>
        </a-menu-item>
        <a-menu-item key="security">
          <nuxt-link to="/settings/security">Security</nuxt-link>
        </a-menu-item>
        <a-menu-item key="wealth">
          <nuxt-link to="/settings/wealth">Wealth</nuxt-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="settings-content">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: [],
    }
  },
  created(){
    this.current=[this.$route.path.split('/')[2]]
  },
  filters: {
    setTitle(value) {
      if (value == '/settings/information') {
        return 'Information Settings'
      }
      if (value == '/settings/security') {
        return 'Security Settings'
      }
      if (value == '/settings/wealth') {
        return 'Manage your wealth'
      }
    },
  },
}
</script>
<style lang="less" scoped>
.settings-headers {
  background-color: #fff;
  .settings-title {
    padding-left: 50px;
    margin: 1rem 0 .5rem 0;
    font-size: 24px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .settings-tabs {
    display: flex;
    justify-content: center;
    a {
      color: #71767a;
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 768px) {
      padding-left: 0px;
    }
  }
}
 .settings-content {
    background-color: #f3f5f6;
  }
</style>
