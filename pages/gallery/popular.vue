<template>
  <div class="slot-container">
    <client-only
      placeholder="Loading..."
    >
      <LazyWaterfall :list="list" :loadData="loadData" />
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
      ],
      other: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
      ],
    }
  },
  methods: {
    loadData() {
      return new Promise((reslove) => {
        setTimeout(function () {
          console.log(1)
          reslove([
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583224751,4221220531&fm=26&gp=0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598592567823&di=db6ec46d9060c578ed3e4a75f6d62e25&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fstart%2F3%2F1368001350225.jpg',
          ])
        }, 3000)
      })
    },
  },
}
</script>
<style lang="less" scoped>
.slot-container {
  margin-top: 10px;
  margin-bottom: 40px;
  margin-right: 10px;
  overflow: hidden;
}
</style>
