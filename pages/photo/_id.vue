<template>
    <div style="background-color:#f5f5f5">
        <div class="photo-container"
             :style="style">
            <div class="wrapper">
                <nuxt-link to="/gallery/popular">
                    <a-icon type="arrow-left"
                            class="left" />
                </nuxt-link>
                <img :src="baseUrl"
                     class="photo" />
                <a-icon v-if="!full"
                        type="arrows-alt"
                        class="right"
                        @click="fullscreen" />
                <a-icon v-else
                        type="shrink"
                        class="right"
                        @click="exitScreen" />
            </div>
        </div>
        <div class="main-container">
            <div class="information-box">
                <div class="author">
                    <div class="actions">
                        <a-button type="primary"
                                  shape="square"
                                  icon="download"
                                  :size="size" />
                        <a-button type="primary"
                                  shape="square"
                                  icon="star"
                                  :size="size" />
                        <a-button type="primary"
                                  shape="square"
                                  icon="share-alt"
                                  :size="size" />
                    </div>
                    <div class="category">
                        Categories:
                        <a-tag>pink</a-tag>
                        <a-tag>red</a-tag>
                        <a-tag>orange</a-tag>
                        <a-tag>green</a-tag>
                    </div>
                    <authorCard />
                    <a-divider />
                </div>
            </div>
            <div class="comment-box">
                <div class="status">
                    <div>
                        <span class="num">888</span>
                        <span class="items">views</span>
                    </div>
                    <div>
                        <span class="num">888</span>
                        <span class="items">faves</span>
                    </div>
                    <div>
                        <span class="num">888</span>
                        <span class="items">comments</span>
                    </div>
                    <div class="date">
                        <span>Taken on</span>
                        <span>June 2, 2020</span>
                    </div>
                </div>
                <div class="comment-list">
                    <span style="font-weight:700;font-size:16px">12 COMMENTS</span>
                    <commentCard />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import authorCard from '~/components/AuthorCard.vue';
import commentCard from '~/components/CommentCard';
const baseUrl =
    'https://drscdn.500px.org/photo/1017302892/q%3D80_m%3D2000/v2?sig=839793636a7cc69021af290c4f90a0f5a38f0fed10bf7a316ff481d9687ff8e3';
export default {
    components: {
        authorCard,
        commentCard
    },
    data() {
        return {
            baseUrl,
            style: {},
            full: false
        };
    },
    methods: {
        fullscreen() {
            this.style = {
                position: 'absolute',
                top: 0,
                'z-index': 999,
                width: '100vw',
                height: '100vh'
            };
            this.full = true;
            document.documentElement.requestFullscreen();
        },
        exitScreen() {
            this.style = {};
            this.full = false;
            document.exitFullscreen();
        }
    }
};
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
    width: 63%;
    background-color: #f5f5f5;
    padding: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }
    .author {
        padding: 10px;
        background-color: #fff;
    }
    .category {
        padding: 10px;
        font-size: 18px;
        /deep/ .ant-tag {
            font-size: 16px;
            padding: 4px;
            cursor: pointer;
        }
    }
}
.main-container {
    margin: 0 auto;
    width: 67%;
    display: flex;
    @media screen and (max-width: 1366px) {
        width: 80%;
    }
    @media screen and (max-width: 1120px) {
        width: 90%;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
}
.comment-box {
    width: 37%;
    padding: 10px;
    background-color: #f5f5f5;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
    .status {
        padding: 10px;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .date {
            font-size: 16px;
            font-weight: 700;
            @media screen and (max-width: 1120px) and (min-width: 1024px) {
                padding-top: 20px;
            }
            @media screen and (max-width: 330px) {
                padding-top: 20px;
            }
        }
        .num {
            color: #000;
            width: auto;
            font-weight: 400;
            font-size: 20px;
            line-height: 18px;
            padding-right: 5px;
        }
        .items {
            width: auto;
            display: block;
            font-size: 14px;
            font-weight: 400;
            color: #898989;
            padding-right: 5px;
        }
    }
    .comment-list {
        background-color: #fff;
        padding: 10px;
    }
}
</style>