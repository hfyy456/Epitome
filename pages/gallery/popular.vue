<template>
  <div class="container">
    <div class="row">
      <div v-for="(item) in srcList" :key="item.src" :style="{'width':item.per+'%'}" class="col">
        <a-card hoverable @mouseenter="hover" @mouseleave="leave">
          <a>
            <img slot="cover" style="height:352px;width:100%" alt="example" :src="item.src" />
            <div class="info" style="opacity:0">
              <div class="title">最基础的列表展示</div>
              <div class="actions">
                <span class="author">By Leon</span>
                <span class="right-items">
                  <span class="star">
                    <a-icon type="heart" />
                    <span>123</span>
                  </span>
                  <span class="star">
                    <a-icon type="eye" />
                    <span>123</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    name: 'gallery-popular'
    var srcList = [
      {
        src: '//live.staticflickr.com/65535/49993813052_c561883501_h.jpg',
        width: 1325,
        per: 0
      },
      {
        src: '//live.staticflickr.com/65535/49998466927_538c8d036d_h.jpg',
        width: 1325,
        per: 0
      },
      {
        src: '//live.staticflickr.com/65535/49998512131_b8785906b3_c.jpg',
        width: 534,
        per: 0
      },
      {
        src: '//live.staticflickr.com/65535/49991706422_518d3761c8_h.jpg',
        width: 1325,
        per: 0
      }
    ]
    function setCol(srcList) {
      var total = 0
      for (var i = 0; i < srcList.length; i++) {
        total += srcList[i].width
      }
      for (var i = 0; i < srcList.length; i++) {
        srcList[i].per = (srcList[i].width / total) * 100
      }
      return srcList
    }
    srcList = setCol(srcList)
    return { srcList }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    hover(e) {
      e.target.querySelector('.info').style.opacity = 1
    },
    leave(e) {
      e.target.querySelector('.info').style.opacity = 0
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  margin: 0 auto;
  background-color: #f3f5f6;
  padding-top: 10px;
  min-height: calc(100vh - 104px);
  .row {
    width: 94.5%;
    margin: 0 auto;
    .col {
      display: inline-block;
      @media screen and (max-width: 1366px) {
        display: inline-block;
        margin-top: 5px;
        width: 50% !important;
      }
      @media screen and (max-width: 600px) {
        display: block;
        margin-top: 5px;
        width: 100% !important;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      min-height: 40px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
      transition: opacity 0.2s;
      .title {
        color: #fff;
        margin-left: 10px;
      }
      .actions {
        margin: 0 10px 10px 10px;
        .author {
          color: hsla(0, 0%, 100%, 0.7);
          font-size: 14px;
          &:hover {
            color: #fff;
          }
        }
        .right-items {
          float: right;
          .star {
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }
  }

  /deep/ .ant-card-body {
    padding: 0;
  }
}
</style>