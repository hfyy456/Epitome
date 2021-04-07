<template>
  <div class="interest-container">
    <div class="interest-content">
      <div style="margin-top: 16px">
        <a-button type="primary" @click="showDrawer"> Open </a-button>
      </div>
    </div>
    <a-drawer
      placement="left"
      :closable="false"
      :visible="isVisible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <InterestDrawer />
    </a-drawer>
  </div>
</template> 
<script>
import InterestDrawer from "~/components/InterestDrawer";
export default {
  components:{
      InterestDrawer,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("isVisible", val);
    },
    showDrawer() {
      this.isVisible = true;
    },
    onClose() {
      this.isVisible = false;
    },
  },
};
</script>
<style lang='less' scoped>
.interest-container {
  min-height: calc(100vh - 104px);
  position: relative;
  overflow: hidden;
}
.interest-content {
}
</style>