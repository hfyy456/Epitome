<template>
    <div style="background-color:#f5f5f5">
        <div
            class="photo-container"
            :style="style"
        >
            <div
                class="wrapper"
                :style="fullWrapper"
            >
                <nuxt-link to="/gallery/popular">
                    <a-icon
                        type="arrow-left"
                        class="left"
                    />
                </nuxt-link>
                <img
                    :src="baseUrl"
                    class="photo"
                    @click="next"
                />
                <a-icon
                    v-if="!full"
                    type="arrows-alt"
                    class="right"
                    @click="fullscreen"
                />
                <a-icon
                    v-else
                    type="shrink"
                    class="right"
                    @click="exitScreen"
                />
                <div class="index">{{currPage}} / {{totalPage}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import authorCard from '~/components/AuthorCard.vue'
import commentCard from '~/components/CommentCard'
export default {
    components: {
        authorCard,
        commentCard,
    },
    data() {
        return {
            baseUrl: null,
            style: {},
            full: false,
            fullWrapper:{},
            arrList: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594736598187&di=93fa8e7adf174d7584f82ff591de672d&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F019%2F373%2F540%2Fc03ed83ed44b45a7888d65817e162e16.jpg',
                'https://photo.tuchong.com/2613444/f/29542573.jpg',
            ],
            currPage: 1,
            totalPage: 1,
        }
    },
    mounted() {
        this.currPage = 1
        this.totalPage = this.arrList.length
        this.baseUrl = this.arrList[0]
    },
    methods: {
        next() {
            if (this.currPage === this.totalPage) {
                this.currPage = 1
            } else {
                this.currPage += 1
            }
            this.baseUrl = this.arrList[this.currPage - 1]
        },
        fullscreen() {
            this.style = {
                position: 'absolute',
                top: 0,
                'z-index': 999,
                width: '100vw',
                height: '100vh',
            }
            this.fullWrapper={
                height:'95vh',
            },
            this.full = true
            document.documentElement.requestFullscreen()
        },
        exitScreen() {
            this.style = {}
            this.fullWrapper={}
            this.full = false
            document.exitFullscreen()
        },
    },
}
</script>
<style lang="less" scoped>
.photo-container {
    height: calc(100vh - 105px);
    min-height: 420px;
    background-color: rgb(34, 34, 34);
    display: flex;
    justify-content: center;
    .wrapper {
        align-items: center;
        padding: 24px calc(80px);
        width: 95vw;
        height: calc(99vh - 105px);
        position: relative;
        @media screen and (max-width: 768px) {
            padding: 0;
        }
        .left {
            font-size: 26px;
            color: #fff;
            position: absolute;
            left: 0;
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
            right: 0;
            position: absolute;
            @media screen and (max-width: 768px) {
                margin: 10px;
            }
            &:hover {
                color: #cdc9c9;
                cursor: pointer;
            }
        }
        .index {
            user-select: none;
            color: rgba(255, 255, 255, 0.6);
            font-size: 20px;
            position: absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
        }
        .photo {
            height: 100%;
            width: 100%;
            object-fit: contain;
            cursor: pointer;
        }
    }
}
</style>