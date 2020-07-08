<template>
    <div class="container">
        <div class="row">
            <div
                v-for="(item) in srcList"
                :key="item.src"
                :style="{'width':item.per+'%'}"
                class="col"
            >
                <a-card
                    hoverable
                    @mouseenter="hover"
                    @mouseleave="leave"
                >
                    <a>
                        <img
                            slot="cover"
                            style="height:352px;width:100%"
                            alt="example"
                            :src="item.src"
                        />
                        <div
                            class="info"
                            style="opacity:0"
                        >
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
    props: {
        srcList: {
            type: Array,
            default: null,
        },
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
        },
    },
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