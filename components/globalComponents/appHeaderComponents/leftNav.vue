<template lang="html">
  <div class="left-nav">
    <ul>
      <li class="">
        <nuxt-link to="/shop">pre-order</nuxt-link>
      </li>
      <li class="">
        <nuxt-link to="/download">download</nuxt-link>
      </li>
      <li class="">
        <nuxt-link to="/about-us">our story</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav"
};
</script>

<style lang="css" scoped>
.left-nav {
  grid-area: leftNav;
}
</style>
