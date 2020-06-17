<template>
  <div>
    <div class="photo-container" :style="style">
      <div class="wrapper">
        <nuxt-link to="/gallery/popular">
          <a-icon type="arrow-left" class="left" />
        </nuxt-link>
        <img :src="baseUrl" class="photo" />
        <a-icon v-if="!full" type="arrows-alt" class="right" @click="fullscreen" />
        <a-icon v-else type="shrink" class="right" @click="exitScreen" />
      </div>
    </div>
    <div class="information-box">
      <div class="author">
        <div class="actions">
          <a-button type="primary" shape="square" icon="download" :size="size" />
          <a-button type="primary" shape="square" icon="star" :size="size" />
          <a-button type="primary" shape="square" icon="share-alt" :size="size" />
        </div>
        <authorCard />
        <a-divider />
      </div>
    </div>
    <div class="comment-box"></div>
  </div>
</template>
<script>
import authorCard from '~/components/authorCard.vue'
const baseUrl =
  'https://drscdn.500px.org/photo/1017302892/q%3D80_m%3D2000/v2?sig=839793636a7cc69021af290c4f90a0f5a38f0fed10bf7a316ff481d9687ff8e3'
export default {
  components: {
    authorCard
  },
  data() {
    return {
      baseUrl,
      style: {},
      full: false
    }
  },
  methods: {
    fullscreen() {
      this.style = {
        position: 'absolute',
        top: 0,
        'z-index': 999,
        width: '100vw',
        height: '100vh'
      }
      this.full = true
      document.documentElement.requestFullscreen()
    },
    exitScreen() {
      this.style = {}
      this.full = false
      document.exitFullscreen()
    }
  }
}
</script>
<style lang="less" scoped>
.photo-container {
  height: calc((100vh - 72px) - 198px);
  min-height: 420px;
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: center;
  .wrapper {
    padding: 24px calc(80px);
    align-items: center;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
    .left {
      font-size: 26px;
      color: #fff;
      position: absolute;
      @media screen and (max-width: 768px) {
        margin: 10px;
      }
      &:hover {
        color: #cdc9c9;
        cursor: pointer;
      }
    }
    .right {
      font-size: 30px;
      color: #fff;
      right: 80px;
      position: absolute;
      @media screen and (max-width: 768px) {
        right: 0;
        margin: 10px;
      }
      &:hover {
        color: #cdc9c9;
        cursor: pointer;
      }
    }
    .photo {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
.information-box {
  background-color: #f5f5f5;
  padding: 10px;
  display: inline-block;
  .author {
    padding: 10px;
    background-color: #fff;
  }
}
.comment-box {
    display: inline-block;

}
</style>