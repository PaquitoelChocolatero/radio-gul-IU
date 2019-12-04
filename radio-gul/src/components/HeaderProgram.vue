<template>
  <div class="header" :style="{backgroundImage: `url(${bg})`}">
    <div class="centered">
      <img :src="require(`@/assets/${program.img}`)" id='logo'>
      <h1><strong>{{ program.name }}</strong></h1>
    </div>
    <h2>Volver a RadioGUL</h2>
  </div>
</template>

<script>
import bg from '../assets/bg.jpg'

export default {
    name: 'HeaderHome',
    props: ['program'],
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
  h2 {
    float: left;
    margin-left: 1%;
    margin-top: 3%;
    color: white;
    font-size: 1.2em;
  }
</style>
