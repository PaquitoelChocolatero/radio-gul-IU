<template>
  <div class = "maincard">
    <h1>Descripción</h1>
    <div class = "left">
      <img :src="require(`@/assets/${program.img}`)" id='program-img'>
    </div>
    <div class = "right">
      <p>{{ program.description }}</p>
    </div>
    <h2>Tags</h2>
    <div v-bind:key='hashtag.key' v-for='hashtag in program.hashtags' id="hashtags">
        <p id='hashtag'>{{ hashtag }}</p>
    </div>
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
    width: 47%;
    margin-left: 2%;
    margin-bottom: 5%;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  h1, h2, h3 {
    margin-top: 1%;
    text-align: left;
    margin-left: 1%;
    font-size: 1.2em;
    border-bottom: 1px solid grey;
    color: black;
    width: 98%;
  }
  .left {
    width: 25%;
  }
  #program-img {
    width: 80%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .right {
    width: 70%;
    margin-left: 26%;
  }
  p {
    float: left;
    margin-top: -23%;
    font-size: 100%;
    color: black;
  }
</style>
