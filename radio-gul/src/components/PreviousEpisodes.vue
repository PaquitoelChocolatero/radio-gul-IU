<template>
  <div id="main">
    <h1> Últimos episodios de {{ program.name }}</h1>
    <div id='column'>
      <div v-bind:key='episode.id' v-for='episode in program.seasons[0].episodes.slice(0,5)' class="list">
          <img v-bind:src="require(`@/assets/${program.img}`)" alt="icon" id='icon'/>
          <p>{{ episode.name }}</P>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'previous',
  data(){
    return{
      program: JSON.parse(localStorage.getItem('programa'))
    }
  }
}
</script>

<style scoped>
  html{
      cursor: default;
  }
  #main{
      clear: both;
      width: 26%;
      margin-left: 2%;
      margin-right: 1%;
      margin-bottom: 3%;
      background-color: white;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  h1 {
    font-size: 1.2em;
    border-bottom: 1px solid black;
    text-align: left;
    margin-left: 3%;
    margin-right: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  h2, h3 {
    font-size: 1em;
    text-align: left;
    margin-left: 5%;
    margin-bottom: 5%;
  }
  .list {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-left:10%;
  }
  .list img {
    float:left;
    width: 15%;
    margin-bottom: 10%;
  }
  .list p,.list h3 {
    text-align: left;
    padding-left: 50px;
  }
  .list:hover{
    cursor: pointer;
  }
</style>
