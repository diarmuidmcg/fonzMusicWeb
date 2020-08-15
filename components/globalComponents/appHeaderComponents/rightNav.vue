<template lang="html">
  <div class="right-nav">
    <ul class="">
      <li class="">
        <nuxt-link class="" to="/">cart</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "rightNav"
};
</script>

<style lang="css" scoped>
.right-nav {
  grid-area: rightNav;
}
</style>
