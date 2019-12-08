<template>
  <div class="header" :style="{backgroundImage: `url(${bg})`}">
    <h2 v-on:click="home()">Volver a RadioGUL</h2>
    <img id = "live" src="../assets/live.gif" alt="live" width="auto" height="45" v-on:click="jump()">
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
