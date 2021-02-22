<template>
  <div>
    <div class="headers">
      <h1 class="title">{{ $route.path | setTitle }}</h1>
      <h2 class="subtitle">{{ $route.path | setSubtitle }}</h2>
      <a-menu v-model="current" class="tabs" mode="horizontal">
        <a-menu-item key="popular">
          <nuxt-link to="/gallery/popular">Popular</nuxt-link>
        </a-menu-item>
        <a-menu-item key="albums">
          <nuxt-link to="/gallery/albums">Albums</nuxt-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="content">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {
  name: 'gallery',
  /*watch: {
    '$route.path': function (newVal, oldVal) {
        this.current=[newVal.split('/')[2]]
    },
  }, */
  filters: {
    setSubtitle(value) {
      if (value == '/gallery/popular') {
        return 'See recently added photos with the highest Pulse.'
      } else {
        return 'See some popluar albums'
      }
    },
    setTitle(value) {
      if (value == '/gallery/popular') {
        return "What's popular these days"
      }
      if (value == '/gallery/albums') {
        return "What's popular these days"
      }
    },
  },
  data() {
    return {
      current: [],
    }
  },
  created(){
    this.current=[this.$route.path.split('/')[2]]
  },
}
</script>
<style lang="less" scoped>
.headers {
  background-color: #fff;
  .title {
    padding-left: 50px;
    margin: 0;
    font-size: 40px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .subtitle {
    padding-left: 50px;
    margin: 0;
    font-size: 15px;
    color: #525558;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .tabs {
    padding-left: 50px;
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
</style>
