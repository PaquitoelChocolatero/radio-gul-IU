<template>
  <div class="header">
    <div class="bar">
      <form action="">
        <input type="search" v-on:keyup.enter="submit()"  ref='searchInput'>
        <i class="fa fa-search"></i>
      </form>
    </div>
    <div class="left">
      <img src="@/assets/logo-blue.jpg" v-on:click="home()" id='logo'>
      <h3><strong>RADIO GUL</strong></h3>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderHome',
    methods: {
      submit(){
        this.$router.push({
          name: 'search',
          params: {
            q: this.$refs.searchInput.value
          }
        })
      },
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
    background-color: #39A7DA;
    width: 100%;
    height: 70px;
  }
  .bar {
    float: right;
    margin-top: 30px;
    margin-right: 5px;
  }
  .left{
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
  form{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;
  }
  input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
  }
  .fa{
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
  }
  form:hover{
    width: 200px;
    cursor: pointer;
  }
  form:hover input{
    display: block;
  }
  form:hover .fa{
    background: #07051a;
    color: white;
  }
  #logo{
    cursor: pointer;
    width: 60px;
  }
</style>