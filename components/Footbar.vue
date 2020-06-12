<template>
  <div class="content">
    <ul class="foot-ul">
      <li>
        <a class="link">About</a>
      </li>
      <li>
        <a class="link">Contact</a>
      </li>
      <li>
        <a class="link">Licensing</a>
      </li>
      <li>
        <a class="link">Download</a>
      </li>

      <li>
        <div>
          <ul class="ul-social">
            <li>
              <a-icon type="github" class="icons" />
            </li>
            <li>
              <a-icon type="qq" class="icons" />
            </li>
            <li>
              <a-icon type="wechat" class="icons" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 16px;
  height: 56px;
  background-color: black;
  .link {
    color: hsla(0, 0%, 100%, 0.6);
    &:hover {
      cursor: pointer;
      color: #fff;
    }
    > li {
      display: inline-block;
    }
  }
  .foot-ul {
    color: white;
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  .ul-social {
    display: flex;
    list-style: none;
    font-size: 20px;
    color: hsla(0, 0%, 100%, 0.6);
    justify-content: center;
    .icons {
      &:hover {
        cursor: pointer;
        color: #fff;
      }
      margin-left: 20px;
      position: relative;
      bottom: 4px;
    }
  }
  ul {
    padding: 0%;
  }
}
</style>