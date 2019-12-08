<template>
  <div class="header" :style="{backgroundImage: `url(${bg})`}">
    <h2 v-on:click="home()">Volver a RadioGUL</h2>
    <img id = "live" src="../assets/live.gif" alt="live" width="auto" height="45" v-on:click="jump()">
    <div class="bar">
      <form action="">
        <input type="search" v-on:keyup.enter="submit()" ref='searchInput'>
        <i class="fa fa-search"></i>
      </form>
    </div>
    <div class="centered">
      <img :src="require(`@/assets/${program.img}`)" id='logo'>
      <h1><strong>{{ program.name }}</strong></h1>
    </div>
  </div>
</template>

<script>
import bg from '../assets/bg.jpg'

export default {
    name: 'HeaderHome',
    props: ['program'],
    methods: {
      jump(){
          this.$router.push({
              name: 'live'
          })
      },
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
    },
    data() {
      return {
          bg
    }
  }
}
</script>

<style scoped>
  h1{
    color: white;
  }
  .header{
    cursor: default;
    padding-bottom:5%;
    padding-top:5%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
  }
  h2 {
    float: left;
    margin-left: 1%;
    margin-top: -4.3%;
    color: black;
    padding: 0.5%;
    border-radius: 5px;
    background-color: white;
    font-size: 1.2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  #live {
    float: right;
    border-radius: 5px;
    margin-right: 1%;
    margin-top: -4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .bar {
    float: right;
    margin-top: -2.8%;
    margin-right: 6.5%;
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

  .centered{
    margin-left: 30%;
    width: 37%;
  }
  .centered img {
    margin-bottom: 3%;
  }
  #logo{
    width: 25%;
  }
</style>
