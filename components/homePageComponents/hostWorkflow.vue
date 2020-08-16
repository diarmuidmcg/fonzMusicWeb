<template lang="html">
  <div class="hostWorkflow">
    <div class="title">
      <h2>for hosts, djs, &amp; drivers</h2>
    </div>
    <div class="hostSteps">
      <div class="instruction">
        <h3>1. download our app</h3>
        <nuxt-link class="appImage" to="/download"
          ><img src="../../static/images/global-images/appHome.png"
        /></nuxt-link>
      </div>
      <div class="instruction">
        <h3>2. login or sign up</h3>
        <img src="../../static/images/global-images/loginIcon.png" alt="" />
      </div>
      <div class="instruction">
        <h3>3. connect to Spotify, Amazon Music, or Apple Music</h3>
        <div class="row threeImages">
          <img
            src="../../static/images/global-images/spotifyBlack.png"
            alt=""
          />
          <img
            src="../../static/images/global-images/amazonMusicBlack.png"
            alt=""
          />
          <img
            src="../../static/images/global-images/appleMusicBlack.png"
            alt=""
          />
        </div>
      </div>
      <div class="instruction">
        <h3>4. tap the coaster</h3>
        <img src="../../static/images/global-images/tapNFC.png" alt="" />
      </div>
      <div class="instruction">
        <h3>5. queue the party</h3>
        <img src="../../static/images/global-images/rockOn.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hostWorkflow"
};
</script>

<style lang="css" scoped>
.hostWorkflow {
  padding: 25px;
  background-color: #ff9425;
}
.hostWorkflow img {
  margin: auto auto;
  display: block;
  height: 200px;
}
.hostWorkflow .threeImages img {
  width: 100px;
  height: auto;
}
</style>
