<template>
  <div class="header" :style="{backgroundImage: `url(${bg})`}">
    <div class="bar">
      <form action="">
        <input type="search" v-on:keyup.enter="submit()" ref='searchInput'>
        <i class="fa fa-search"></i>
      </form>
    </div>
    <div class="centered">
      <img src="@/assets/logo-blue.jpg" v-on:click="home()" id='logo'>
      <h1><strong>RADIO GUL</strong></h1>
      <div class="typewriter">
        <h3>Nos gusta jugar con la tecnología</h3>
      </div>
    </div>
  </div>
</template>

<script>
import bg from '../assets/bg.jpg'

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
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
  }
  .bar {
    float: right;
    margin-top: 30px;
    margin-right: 5px;
  }

  .centered{
    padding-bottom:5%;
    padding-top:5%;
    margin-left: 30%;
    width: 37%;
  }
  .centered img {
    margin-bottom: 3%;
  }
  .typewriter h3 {
    color: white;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
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
    width: 25%;
  }
</style>