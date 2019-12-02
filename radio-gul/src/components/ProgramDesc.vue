<template>
  <div class = "maincard">
    <h1>Descripción</h1>
    <div class = "left">
      <img :src="require(`@/assets/${program.img}`)" id='program-img'>
    </div>
    <div class = "right">
      <p>Blablablablabla</p>
    </div>
    <h2>Tags</h2>

    <h3>Participantes</h3>
  </div>
</template>

<script>
export default {
  name: 'desc',
  props: ['program']
}
</script>

<style scoped>
  .maincard {
    float: left;
    background-color: white;
    margin-left: 1%;
    margin-top: 1%;
    border-radius: 5px;
    width: 49%;
    margin-bottom: 2%;
  }
  .h1 .h2 .h3 {
    text-align: left;
    margin-left: 1%;
    font-size: 1.2em;
    border-bottom: 1px solid black;
    color: black;
  }
  #program-img {
    width: 10%;
    padding-top: 5%;
  }
  .p {
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 110%;
    color: black;
  }
</style>
