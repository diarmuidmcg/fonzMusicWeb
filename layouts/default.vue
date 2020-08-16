// nav bar goes here
<template>
  <div>
    <article class="page">
      <AppHeader class="appHeader" />
      <nuxt class="content" />
      <AppFooter class="appFooter" />
    </article>
  </div>
</template>

<script>
import AppHeader from "../components/globalComponents/appHeader";
import AppFooter from "../components/globalComponents/appFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
.page {
  /* display: grid; */
  width: 100%;
  /* grid-gap: 0px;
  grid-template-rows: 0.5fr 4fr 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer"; */
  /* height: 100%; */
}
.appHeader {
  grid-area: header;
  height: 200px;
}
.content {
  grid-area: content;
}
.appFooter {
  grid-area: footer;
  height: 325px;
}
</style>
<!--


<template>

</template>

<script>
export default {
  name: 'styleHobbie'
}
</script>

<style>

</style>

-->
