<template>
<div class="container">
  <div class="flex-container">
      <div class="flex-header">
        <img src="@/assets/logo-blue.jpg" v-on:click="home()" height="80px">
        <h3>Admin Log-In</h3>
      </div>
     <form method='post'>
        <input class="form-item" type="text" placeholder="Usuario" v-model="user" required>
        <input class="form-item" type="password" placeholder="Contraseña" v-model="pass" required>
        <button class="form-item" type='login-button' v-on:click="checkCredentials()">Login</button>
      </form>
  </div>
</div>
</template>

<script>
  import json from '@/jsons/admin.json'

  export default {
    name: 'login',
    data()  {
      return{
        credentials : json,
      }
    },
    methods: {
      checkCredentials(){
        if (this.user == this.credentials.user && this.pass == this.credentials.pass) this.$emit('access');
      },
      home(){
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  .container{
    height: 30%;
    width: 30%;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img{
    cursor: pointer;
  }

  .flex-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .flex-header{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .flex-header img {
    flex-grow:0;
    flex-shrink:0;
  }

  .flex-header h3 {
    padding-top: 6%;
    margin-left: 3%;
  }

  .login-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form-item{
    width: 50%;
    margin: 1%;
  }

  button{
    height: 28%;
    background-color: #39a7da;
    color: white;
    font-size: 1.2em;
    border-radius: 3px;
    overflow: hidden;
    outline: none;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border: none;
  }

  button:hover{
    background-color: #9884b8;
  }
</style>
