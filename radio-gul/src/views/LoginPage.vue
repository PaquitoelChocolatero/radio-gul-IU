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
  div{
    cursor: default;
    background-color: #f2f2f3;
    height: 100%;
    width: 100%;
  }
</style>
