<template>
    <div class="author-card">
        <div class="avatar-container">
            <a-avatar
                :size="64"
                icon="user"
                style="cursor:pointer"
            />
        </div>
        <div class="infor-container">
            <div class="title">asasdasd</div>
            <div class="name">
                <span>
                    By
                    <nuxt-link
                        to="/"
                        class="link"
                    >Leon</nuxt-link>
                </span>
                <span>
                    <a-button icon="plus">Follow</a-button>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.author-card {
    margin: 10px;
    padding: 10px;
    @media screen and(max-width: 768px) {
        padding: 0;
        margin: 10px;
    }
    .avatar-container {
        display: inline-block;
        vertical-align: middle;
    }
    .infor-container {
        display: inline-block;
        vertical-align: middle;
    }
    .name {
        font-weight: 600;
        font-size: 16px;
        padding: 0 5px 0 5px;
        .link {
            color: #000;
            &:hover {
                color: #008ddf;
                text-decoration: underline;
            }
        }
    }
    .title {
        font-weight: bold;
        font-size: 20px;
        padding: 0 5px 0 5px;
    }
}
</style>