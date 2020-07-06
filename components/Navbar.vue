<template>
    <div class="nav">
        <span class="logo">Epitome</span>
        <a-menu mode="horizontal"
                class="items">
            <a-sub-menu>
                <span slot="title"
                      class="item-1">Gallery</span>
                <a-menu-item-group>
                    <a-menu-item key="gallery:1">
                        <nuxt-link to="/gallery/popular">Popular</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="gallery:2">Option 2</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="a"
                         class="item-2">
                <a href="https://antdv.com"
                   target="_blank"
                   rel="noopener noreferrer">Community</a>
            </a-menu-item>
        </a-menu>
        <span>
            <a-icon type="search"
                    style="font-size:15px;" />
            <a-divider type="vertical"
                       style="margin-left:2px;font-size:20px;" />
            <input class="search-input" />
        </span>
        <span>
            <a-avatar v-if="login"
                      class="avatar"
                      shape="square"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      :size="38" />
            <a-button v-else
                      class="sign">
                <nuxt-link to="/login">Log in</nuxt-link>
            </a-button>
        </span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            login: false
        };
    },
    methods: {}
};
</script>
<style lang="less" scoped>
@val: 18%;
.search-input {
    width: 15%;
    border: none;
    font-size: 16px;
    &:focus {
        outline: none;
    }
    @media screen and(max-width: 1024px) {
        width: 20%;
    }
    @media screen and(max-width: 380px) {
        width: 15%;
    }
}
.avatar {
    position: relative;
    bottom: 3px;
    cursor: pointer;
}
.sign {
    font-size: 18px;
    padding: 0;
    border: none;
    margin-left: 6px;
    font-weight: 500;
}
.items {
    width: calc(~'90% - @{val}');
    display: inline-block;
    border-bottom: none;
    @media screen and(max-width: 1614px) {
        width: 60%;
    }
    @media screen and(max-width: 1366px) {
        width: 55%;
    }
    @media screen and(max-width: 1024px) {
        width: 50%;
    }
    @media screen and(max-width: 800px) {
        width: 45%;
    }
    @media screen and(max-width: 500px) {
        width: 31%;
    }
    @media screen and(max-width: 430px) {
        width: 27%;
    }
    @media screen and(max-width: 390px) {
        width: 23%;
    }
    @media screen and(max-width: 360px) {
        width: 18%;
    }
    @media screen and(max-width: 320px) {
        width: 16%;
    }
}
.logo {
    margin-left: 45px;
    @media screen and(max-width: 1024px) {
        margin-left: 10px;
    }
    font-size: 24px;
    font-weight: 500;
    &:hover {
        color: #1890ff;
        cursor: pointer;
    }
}
.nav {
    border-bottom: 1px solid #e8e8e8;
    box-shadow: 0 2px 8px #f0f1f2;
}
.item-1 {
    position: relative;
    font-size: 14px;
    font-weight: 500;
}
.item-2 {
    position: relative;
    font-size: 14px;
    font-weight: 500;
}
</style>