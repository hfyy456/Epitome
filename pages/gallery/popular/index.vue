<template>
  <div class="container">
    <a-row class="row">
      <div
        v-for="(item, index) in srcList"
        :key="item.src"
        :style="{'width':item.per+'%'}"
        style="display:inline-block"
      >
        <a-card hoverable>
          <a>
            <img slot="cover" style="height:352px;" alt="example" :src="item.src" />
            <div class="info" >1asdsadadasdsda</div>
          </a>
        </a-card>
      </div>
    </a-row>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    var srcList = [
      {
        src: "//live.staticflickr.com/65535/49993813052_c561883501_h.jpg",
        width: 1325,
        per: 0
      },
      {
        src: "//live.staticflickr.com/65535/49991821083_10170d71a7_c.jpg",
        width: 553,
        per: 0
      },
      {
        src: "//live.staticflickr.com/65535/49992110953_2502bf3167_h.jpg",
        width: 1325,
        per: 0
      },
      {
        src: "//live.staticflickr.com/65535/49991706422_518d3761c8_h.jpg",
        width: 1325,
        per: 0
      }
    ];
    function setCol(srcList) {
      var total = 0;
      for (var i = 0; i < 4; i++) {
        total += srcList[i].width;
      }
      for (var i = 0; i < 4; i++) {
        srcList[i].per = (srcList[i].width / total) * 100;
      }
      return srcList;
    }
    srcList = setCol(srcList);
    return { srcList };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 104px);
  .row {
    width: 94.5%;
    margin:auto;
    .info {
      position: absolute;
      bottom: 0;
      left:0;
      right:0;
      width: 100%;
      min-height: 40px;
      background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%);
    }
  }
  /deep/ .ant-card-body {
    padding: 0;
  }
}
</style>