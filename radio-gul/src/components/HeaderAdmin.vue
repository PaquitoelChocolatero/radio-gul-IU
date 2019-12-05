<template>
  <div class="header">
    <div class="left" v-on:click="home()">
      <img src="@/assets/logo-blue.jpg" id='logo'>
      <h3><strong>RADIO GUL | Admin</strong></h3>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderAdmin',
    methods: {
      home(){
        this.$router.push('/')
      }     
    }
}
</script>

<style scoped>
  h3{
    color: white;
    padding-top: 20px;
    float: left;
    padding-left: 25px;
  }
  .header{
    cursor: default;
    background-color: #666666;
    width: 100%;
    height: 70px;
  }
  .left{
    cursor: pointer;
    display:inline;
    text-align:center;
    left: 0;
    width: 10%;
  }
  .left img {
    float: left;
    padding-top: 5px;
    padding-left: 5px;
  }
#logo{
    width: 60px;
  }
</style>