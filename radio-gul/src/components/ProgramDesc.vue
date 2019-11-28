<template>
  <div class = "maincard">
    <h1>Descripción</h1>
    <div class = "left">
      <img src="../assets/logo-blue.jpg" width="120px" id='program-img'>
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
      background-color: white;
      margin-left: 1%;
      margin-bottom: 5%;
      border-radius: 5px;
  }

  .h1 .h2 .h3 {
      text-align: left;
      margin-left: 1%;
      font-size: 1.2em;
      border-bottom: 1px solid black;
      width: 100%;
      color: black;
  }

  #program-img {
      width: 90%;
      padding-top: 5%;
  }
  .p {
      padding-top: 2%;
      padding-bottom: 2%;
      font-size: 110%;
      color: black;
  }
</style>
