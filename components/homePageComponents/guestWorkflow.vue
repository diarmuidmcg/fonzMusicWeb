<template lang="html">
  <div class="guestWorkflow">
    <div class="title">
      <h2>for guests, dancers, &amp; riders</h2>
    </div>
    <div class="hostSteps">
      <div class="instruction">
        <h3>1. download our app</h3>
        <nuxt-link class="appImage" to="/download"
          ><img src="../../static/images/global-images/appHome.png"
        /></nuxt-link>
      </div>
      <div class="instruction">
        <h3>2. tap the coaster</h3>
        <img src="../../static/images/global-images/tapNFC.png" alt="" />
      </div>
      <div class="instruction">
        <h3>3. load up your tune</h3>
        <img src="../../static/images/global-images/queueIcon.png" alt="" />
      </div>
      <div class="instruction">
        <h3>4. tap the coaster once more</h3>
        <img src="../../static/images/global-images/tapNFC.png" alt="" />
      </div>
      <div class="instruction">
        <h3>5. vibe, party, or chill out</h3>
        <img src="../../static/images/global-images/rockOn.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guestWorkflow"
};
</script>

<style lang="css" scoped>
.guestWorkflow {
  padding: 25px;
  background-color: #b288b9;
}
.guestWorkflow img {
  margin: auto auto;
  display: block;
  height: 200px;
}
</style>
