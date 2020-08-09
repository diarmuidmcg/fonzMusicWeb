<template>
  <div>
    <homePage></homePage>
  </div>
</template>
<script>
export default {
  name: "index",
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
