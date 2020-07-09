<template>
    <div class="profile-container">
        <div class="profile">
            <div class='avatar-wrapper'>
                <a-avatar
                    :size="100"
                    icon="user"
                />
            </div>
            <div class='nick-wrapper'>
                adasd
            </div>
            <div class='item-wrapper'>
                <ul class="items">
                    <li>100k Affection</li>
                    <li>100k Photos</li>
                    <li>100k <nuxt-link to='/'>Follwers</nuxt-link>
                    </li>
                    <li>100k <nuxt-link to='/'>Followings</nuxt-link>
                    </li>

                </ul>
            </div>
            <div>
                <a-tabs
                    style="margin:0"
                    default-active-key="1"
                >
                    <a-tab-pane
                        key="1"
                        tab="Photos"
                    >
                        <PhotoContent :srcList='srcList' />
                    </a-tab-pane>
                    <a-tab-pane
                        key="2"
                        tab="Albums"
                    >
                        Content of Tab Pane 2
                    </a-tab-pane>
                    <a-tab-pane
                        key="3"
                        tab="Community"
                    >
                        Content of Tab Pane 3
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import PhotoContent from '@/components/PhotoContent'
export default {
    asyncData(context) {
        name: 'gallery-popular'
        var srcList = [
            {
                src:
                    '//live.staticflickr.com/65535/49993813052_c561883501_h.jpg',
                width: 1325,
                per: 0,
            },
            {
                src:
                    '//live.staticflickr.com/65535/49998466927_538c8d036d_h.jpg',
                width: 1325,
                per: 0,
            },
            {
                src:
                    '//live.staticflickr.com/65535/49998512131_b8785906b3_c.jpg',
                width: 534,
                per: 0,
            },
            {
                src:
                    '//live.staticflickr.com/65535/49991706422_518d3761c8_h.jpg',
                width: 1325,
                per: 0,
            },
            
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
    components: {
        PhotoContent,
    },
}
</script>
<style lang="less" scoped>
.profile {
    margin-top: 20px;
    text-align: center;
    .nick-wrapper {
        font-size: 36px;
        font-weight: 700;
    }
    .items {
        display: flex;
        justify-content: center;
        padding: 0;
        li {
            color: #b9c1c7;
            margin-left: 5px;
            margin-right: 5px;
            list-style: none;
            display: inline-block;
        }
    }
    /deep/ .ant-tabs-tab {
        font-size: 18px;
    }
    /deep/ .ant-tabs-bar {
        margin: 0;
    }
}
</style>