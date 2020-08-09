<template>
  <div class="join-newsletter">
    <h3>join the Fonz Friends</h3>
    <div class="email-signup">
      <input
        id="signup_firstname"
        class="input"
        type="text"
        name="First Name"
        placeholder="first name"
      />
      <p></p>
      <input
        id="signup_email"
        class="input"
        type="text"
        name="email"
        placeholder="email"
      />
      <p></p>
      <button id="subscribe_button" type="submit" name="subscribe">
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "emailSignupFooter"
};
</script>

<style>
.join-newsletter {
  grid-area: join-newsletter;
}
.input {
  font-size: 14px;
  text-align: center;
  font-family: "Spartan", sans-serif;
  padding: 5px;
  color: #67001a;
  border: 3px solid #67001a;
  background-color: white;
  resize: none;
  border-radius: 5px;
}
#subscribe_button {
  font-size: 16px;
  color: white;
  background-color: #67001a;
  border-radius: 5px;
  border: none;
  padding: 12px 40px;
}
#subscribe_button:hover {
  color: #67001a;
  background-color: white;
}
</style>
