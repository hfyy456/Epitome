<template>
  <div class="container">
    <a-row>
      <div v-for="(item, index) in srcList" :key="item.src" :style="{'width':item.width+'%'}" style="display:inline-block">
        <a-card hoverable>
          <img slot="cover" style="height:352px;" alt="example" :src="item.src" />
        </a-card>
      </div>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      srcList: [
        {
          src: "//live.staticflickr.com/65535/49993813052_c561883501_h.jpg",
          width: 20
        },
        {
          src: "//live.staticflickr.com/65535/49991821083_10170d71a7_c.jpg",
          width: 0
        },
        {
          src: "//live.staticflickr.com/65535/49992110953_2502bf3167_h.jpg",
          width: 0
        },
        {
          src: "//live.staticflickr.com/65535/49991706422_518d3761c8_h.jpg",
          width: 0
        }
      ]
    };
  },
  mounted() {
    this.setCol();
  },
  methods: {
    setCol() {
      var img = new Image();
      var width = [];
      var total = 0;
      for (var item of this.srcList) {
        img.src = item.src;
        width.push(img.width);
        total += img.width;
      }
      for (var i = 0; i < 4; i++) {
        console.log((width[i] / total) * 100)
        this.srcList[i].width = (width[i] / total) * 100;
        console.log(this.srcList[i].width);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 104px);
}
</style>