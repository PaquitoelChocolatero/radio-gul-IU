<template>
  <div id="loginPage">
      <Login />
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: 'loginPage',
  components: {
      Login
  }
}
</script>

<style scoped>
  html{
    cursor: default;
  }
</style>
