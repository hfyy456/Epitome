<template>
    <div>
    <div class="gallery-headers">
      <h1 class="gallery-title">{{ $route.path | setTitle }}</h1>
      <h2 class="gallery-subtitle">{{ $route.path | setSubtitle }}</h2>
      <a-menu v-model="current" class="gallery-tabs" mode="horizontal">
        <a-menu-item key="popular">
          <nuxt-link to="/gallery/popular">Popular</nuxt-link>
        </a-menu-item>
        <a-menu-item key="albums">
          <nuxt-link to="/gallery/albums">Albums</nuxt-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="gallery-content">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
