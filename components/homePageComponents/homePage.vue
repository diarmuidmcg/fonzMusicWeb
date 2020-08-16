<template>
  <div class="container">
    <div class="">
      <div>
        <h1>song requests for you and your friends</h1>
      </div>
    </div>
    <div class="row workflowSteps">
      <div class="col-md-6">
        <hostWorkflow></hostWorkflow>
      </div>
      <div class="col-md-6">
        <guestWorkflow></guestWorkflow>
      </div>
    </div>
  </div>
</template>

<script>
import hostWorkflow from "./hostWorkflow";
import guestWorkflow from "./guestWorkflow";

export default {
  name: "homePage",
  components: {
    hostWorkflow,
    guestWorkflow
  }
};
</script>

<style>
.workflowSteps {
  padding-top: 50px;
  max-width: 1000px;
  margin: auto auto;
}
.workflowSteps .instruction {
  height: 300px;
}
.workflowSteps .title {
  height: 50px;
}
</style>
