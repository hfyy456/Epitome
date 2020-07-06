<template>
    <div>
        <div class="titles-1">
            <h1 class="title">Epitome</h1>
        </div>
        <div class="titles-2">
            <h2 style="color:#fff">Discover the beauty of the world</h2>
        </div>
        <div class="titles-3">
            <a-button
                type="primary"
                style="font-size:20px;height:40px;"
                size="large"
                @click="goLogin"
            >GET START</a-button>
        </div>
        <a-carousel
            autoplay
            effect="fade"
        >
            <div>
                <img src="https://combo.staticflickr.com/ap/build/images/sohp/2019-top-25/Guillaume_Kaufmann_Wintery_Wave_Tete_de_Ran_Switzerland.jpg" />
            </div>
            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591703488753&di=bcd0011e4fa7fc688851320d0cc62cbf&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201406%2F22%2F082448e35qi3z4n94ej83j.jpg" />
            </div>
            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591703488750&di=cb8a129e7e36a482de93c92d20594a16&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F57b57fea99616.jpg" />
            </div>
            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591703622877&di=991c8f5bb764ea2fffde11a39905e550&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3645979766%2C2965107351%26fm%3D214%26gp%3D0.jpg" />
            </div>
        </a-carousel>
    </div>
</template>

<script>
export default {
    methods: {
        goLogin() {
            this.$router.push({ path: '/login' })
        },
    },
}
</script>

<style lang="less" scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.titles-1 {
    z-index: 999;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
}
.titles-2 {
    z-index: 999;
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    @media screen and(max-width: 712px) {
        display: none;
    }
}
.titles-3 {
    z-index: 999;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    @media screen and(max-width: 712px) {
        top: 43%;
    }
}

.title {
    color: #fff;
    margin: 0;
}
.ant-carousel /deep/ .slick-slide {
    text-align: center;
    height: calc(100vh - 104px);
    background: #364d79;
    overflow: hidden;
}
</style>
