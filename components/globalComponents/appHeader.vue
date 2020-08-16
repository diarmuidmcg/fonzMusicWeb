<!-- <template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <header>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <div class="center-nav my-0 mr-md-auto font-weight-normal">
        <nuxt-link to="/"
          ><img
            src="../../static/images/global-images/fonzLogoWordmarkBlack.png"
        /></nuxt-link>
      </div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-black border-bottom shadow-sm banner"
      >
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto col-md-4">
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
</template> -->

<template>
  <header class="pt-4 my-md-5 pt-md-2">
    <div class="row">
      <leftNav class="col-md-4"></leftNav>
      <centerNav class="col-md-4"></centerNav>
      <rightNav class="col-md-4"></rightNav>
    </div>
  </header>
</template>

<script>
import leftNav from "./appHeaderComponents/leftNav";
import centerNav from "./appHeaderComponents/centerNav";
import rightNav from "./appHeaderComponents/rightNav";

export default {
  name: "appHeader",
  components: {
    leftNav,
    centerNav,
    rightNav
  }
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
  color: #ff9425;
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
  color: #ff9425;
}

h1,
h2 {
  font-family: "Spartan", sans-serif;
  font-weight: 400;
  text-align: center;
}

h1 {
  font-size: 40px;
  margin: 0;
}

h2 {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 1;
}

h3 {
  padding: 25px;
  text-align: center;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
}

.content-wrap {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
}

/* BANNER
------------------------------------------*/
header {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "leftNav centerNav rightNav ";
  text-align: center;
  padding: 10px;
  margin-top: 25px;
  display: block;
  font-family: "Spartan", sans-serif;
  /*font-family: 'Merriweather', serif;*/
  font-size: 20px;
  line-height: 1.25;
  width: 100%;
}
header ul {
  list-style-position: outside;
  list-style-type: none;
  padding: 0px;
}
header li {
  display: inline-block;
  padding: 5px;
}
header a {
  font-family: "Spartan", sans-serif;
}
</style>
