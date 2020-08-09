<template>
  <div>
    <!-- <AppHeader></AppHeader> -->
    <homePage></homePage>
    <!-- <appFooter></appFooter> -->
  </div>
</template>
<script>
// import AppHeader from "../components/globalComponents/appHeader";
// import homePage from "../components/homePageComponents/homePage";
// import hobbies from "../components/homePageComponents/hobbies";
// import homeHeaderPhoto from "../components/homePageComponents/homeHeaderPhoto";
// import appFooter from "../components/globalComponents/appFooter";
export default {
  name: "index",
  components: {
    // AppHeader,
    // appFooter,
    // homePage
    // welcomeToDD,
    // hobbies,
    // homeHeaderPhoto
  },
  layout: "default",
  head() {
    return {
      title: "Fonz Music",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "homepage for your collaborative queueing solution"
        }
      ]
    };
  }
};
</script>

<style></style>
