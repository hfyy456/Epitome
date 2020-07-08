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
                <a-tabs default-active-key="1">
                    <a-tab-pane
                        key="1"
                        tab="Photos"
                    >
                        <client-only>
                            <PhotoContent />
                        </client-only>
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
}
</style>