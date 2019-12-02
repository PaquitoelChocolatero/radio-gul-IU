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
        if (this.user == this.credentials.user){
          if (this.pass == this.credentials.pass){
            this.jump()
          }
        }
      },
      jump(){
        this.$router.push({
          name: 'admin'
        })
      },
      home(){
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  /* .container{
    margin: 30% 20% 30% 20%;
  } */
  
  img{
    cursor: pointer;
  }

  .flex-container{
    margin-top: 10%;
    background-color: white;
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
    padding-top: 3%;
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
</style>