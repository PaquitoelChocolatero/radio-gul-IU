<template>
  <div id="main">
    <h1> Programas sugeridos</h1>
    <ul>
      <li class="list">
          <img src="image.png" alt="icon"/>
          <p>text goes here</P>
      </li>
      <li class="list">
          <img src="image.png" alt="icon"/>
          <p>text goes here</P>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'previous'
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
      margin-left:0px;
      padding-left:0px;
      /* display: inline-block; */
    }

    .list img {
      float:left;
    }

    .list p,.list h3 {
      text-align: right;
      display:inline-block;
      padding: 0;
    }

</style>
