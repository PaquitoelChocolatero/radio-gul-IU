<template>
  <div id="loginPage" class="full-size">
      <Login class ="login-box"/>
      <div class="fill"></div>
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
  .full-size{
    overflow:hidden;
    background-color: #f2f2f3;
  }

  .login-box{
    margin-top: 10%;
    margin-bottom: 20%;
    padding-top: 3%;
    padding-bottom: 5%;
    height: 40%;
    width: 40%;
    background-color: white;
  }

  .fill{
    height: 1px;
    background-color: #f2f2f3;
  }
</style>
