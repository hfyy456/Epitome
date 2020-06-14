<template>
  <Layout>
    <Header>
      <Navbar />
    </Header>
    <Layout>
      <Content>
        <nuxt />
      </Content>
    </Layout>
    <Footer>
      <Footbar />
    </Footer>
  </Layout>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footbar from '~/components/Footbar.vue'

export default {
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {}
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
