<template>
  <div>

    <div v-if="access == 0" id="login" class="full-size">
      <Login class ="login-box" v-on:access='grantAccess()'/>
      <div class="fill"></div>
    </div>


    <div v-if="access == 1" id="admin">
      <HeaderAdmin />
      <Footer />
    </div>

  </div>
</template>

<script>
import Login from "../components/Login.vue";
import HeaderAdmin from "../components/HeaderAdmin.vue";

export default {
  name: 'admin',
  data(){
    return{
      access: 0
    }
  },
  components: {
    Login,
    HeaderAdmin
  },
  methods: {
    grantAccess(){
      this.access=1
    }
  }
}
</script>

<style scoped>
  div{
    cursor: default;
  }
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
