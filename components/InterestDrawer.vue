<template>
  <div>
    <a-list size="small" bordered :data-source="topicList">
      <a-list-item class="hot-link" slot="renderItem" slot-scope="item">
        {{ `#${item.title}#` }}
      </a-list-item>
      <div slot="header" style="font-weight: bold">Hot Topic</div>
    </a-list>
    <a-tabs :tab-position="mode" @prevClick="callback" @nextClick="callback">
      <a-tab-pane v-for="i in 3" :key="i" :tab="`Tab-${i}`">
        <a-list
          class="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="interestGroup"
        >
          <a-list-item slot="renderItem" slot-scope="item">
            <a slot="actions">edit</a>
            <a-list-item-meta>
              <div slot="title">
                <div href="https://www.antdv.com/">{{ item.name }}</div>
                <div class="count">{{ `${item.members} member` }}</div>
              </div>
              <a-avatar
                shape="square"
                slot="avatar"
                :size="40"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  name: 'InterestDrawer',
  data() {
    return {
      mode: 'top',
      topicList: [
        { title: '肖战代言李宁', location: '/' },
        { title: '肖战粉丝公益倡导', location: '/' },
        { title: '肖战走秀', location: '/' },
        { title: '肖战新歌光点', location: '/' },
        { title: '肖战自拍', location: '/' },
      ],
      interestGroup: [
        {
          name: '我要上专辑封面',
          cover:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          members: 1000,
        },
      ],
    }
  },
  methods: {
    callback(val) {
      console.log(val)
    },
  },
}
</script>
<style lang='less' scoped>
.hot-link {
  &:hover {
    cursor: pointer;
    color: #1890ff;
  }
}
.count {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}
/deep/ .ant-list-item-action {
  margin-left: 0;
}
</style>
