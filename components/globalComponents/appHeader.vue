<template>
  <div>
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
<header>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- <nav class="banner"> -->
  <div class="center-nav my-0 mr-md-auto font-weight-normal">
    <nuxt-link to="/"><img src="../../static/images/global-images/fonzLogoWordmarkBlack.png" /></nuxt-link>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm banner" >
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="left-nav nav-item">
          <nuxt-link to="/shop">pre-order</nuxt-link>
        </li>
        <li class="left-nav nav-item">
          <nuxt-link to="/download">download</nuxt-link>
        </li>
        <li class="left-nav nav-item">
          <nuxt-link to="/about-us">about us</nuxt-link>
        </li>

        <li class="right-nav nav-item">
          <nuxt-link to="/cart">cart</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</header>
</div>
</template>

<script>
export default {
  name: "appHeader"
};
</script>

<style>
/* Global Styles
-----------------------------------------*/
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

html {
  box-sizing: border-box;
  overflow-x: hidden;
  color: #67001a;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Poppins", sans-serif;
  /*font-family: 'Merriweather', serif;*/
  font-size: 15px;
  line-height: 1.25;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

main {
  /* background-color: rgb(212,222,232); */
  background-color: white;
}

p {
  margin: 0;
}

a {
  /* color: rgb(190, 167, 126); */
  color: black;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}

a:hover {
  text-decoration: line-through;
}

h1,
h2 {
  font-family: "Spartan", sans-serif;
  font-weight: 400;
}

h1 {
  font-size: 45px;
  margin: 0;
}

h2 {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 1;
}

h3 {
  margin: 25px;
}

.content-wrap {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
}

/* BANNER
------------------------------------------*/
.banner {
  grid-area: banner;
  position: absolute;
  width: 99%;
  /* background: rgba(215, 225, 235, 100%); */
  color: #602e3f;
  text-align: center;
  margin-top: 15px;
  padding: 0;
}

.banner a {
  padding: 10px;
  padding-top: 20px;

  text-decoration: none;
  color: black;
  font-family: "Spartan", sans-serif;
}

.banner a:hover {
  text-decoration: line-through;
}

.banner ul {
  list-style-position: outside;
  list-style-type: none;
  padding: 0px;
}

.banner li {
  display: inline-block;
  font-size: 20px;

  /* padding-left: 10%;
padding-right: 10%; */
}

.banner .left-nav {
  float: left;
  color: black;
}

.banner .left-nav a {
  /* color: black; */
}

.banner .right-nav {
  float: right;
}

.banner .center-nav {
  /* padding: 0; */
  padding-right: 20%;
  /* margin: 0; */
}

.banner .center-nav img {
  width: 125px;
  display: block;
  /* float: left; */
  /* position: absolute; */
  margin: 0 auto;
}
</style>
