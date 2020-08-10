<template>
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <contactFooter></contactFooter>
      <brandFooter></brandFooter>
      <emailSignupFooter></emailSignupFooter>
    </div>
  </footer>
</template>

<script>
import contactFooter from "./appFooterComponents/contact";
import brandFooter from "./appFooterComponents/brand";
import emailSignupFooter from "./appFooterComponents/emailSignup";

export default {
  name: "appFooter",
  components: {
    contactFooter,
    brandFooter,
    emailSignupFooter
  }
};
</script>

<style>
/* Contact info
-----------------------------------------*/

footer {
  /* grid-area: footer; */
  display: inline-grid;
  /* position: absolute; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "my-info brand join-newsletter";
  text-align: center;
  padding: 10px;
  margin-top: 25px;
  /* height: 350px; */
  font-family: "Poppins", sans-serif;
  /*font-family: 'Merriweather', serif;*/
  font-size: 15px;
  line-height: 1.25;
  width: 100%;
}
footer h3 {
  font-weight: 400;
  font-size: 22px;
  color: black;
  font-family: "Spartan", sans-serif;
}
footer h4 {
  font-weight: 400;
  font-size: 40px;
  margin-top: 125px;
  margin-bottom: 40px;
}
footer p {
  margin: 3px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: black;
}
footer a {
  color: #67001a;
  font-size: 16px;

  margin-bottom: 120px;
}
footer ul {
  list-style-position: outside;
  list-style-type: none;
  padding: 0px;
}
footer li {
  display: inline-block;
  padding: 5px;
}
.my-email {
  padding-bottom: 30px;
}
.email-signup,
.email-and-info {
  margin-top: 25px;
}
</style>
