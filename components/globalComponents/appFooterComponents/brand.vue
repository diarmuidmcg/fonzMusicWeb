<template>
  <div class="col-lg-4 footerIconsBrand">
    <nuxt-link class="logoFooter" to="/"
      ><img src="../../../static/images/global-images/fonzLogoWordmarkBlack.png"
    /></nuxt-link>
    <ul class="social-icons">
      <!-- <li>
        <a href="https://github.com/diarmuidmcg" target="_blank"
          ><img src="../../../static/images/global-images/Github_2.png"
        /></a>
      </li> -->
      <li>
        <a href="https://www.instagram.com/usefonz/" target="_blank"
          ><img src="../../../static/images/global-images/Instagram_2.png"
        /></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/fonz-music-llc/"
          target="_blank"
          ><img src="../../../static/images/global-images/LinkedIn_2.png"
        /></a>
      </li>
      <!-- <li>
        <a href="https://vsco.co/diarmuidmcg/gallery" target="_blank"
          ><img src="../../../static/images/global-images/vsco_icon.png"
        /></a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "brandFooter"
};
</script>

<style>
.brand {
  grid-area: brand;
}
.footerIconsBrand {
  margin: auto 0;
}
.logoFooter img {
  height: 100px;
  margin-bottom: 20px;
}
</style>
