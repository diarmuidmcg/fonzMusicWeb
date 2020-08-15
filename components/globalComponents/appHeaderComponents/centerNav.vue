<template lang="html">
  <div class="center-nav">
    <nuxt-link class="logo" to="/"
      ><img src="../../../static/images/global-images/fonzLogoWordmarkBlack.png"
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  name: "centerNav"
};
</script>

<style lang="css" scoped>
.logo img {
  height: 100px;
}
.center-nav {
  grid-area: centerNav;
}
</style>
