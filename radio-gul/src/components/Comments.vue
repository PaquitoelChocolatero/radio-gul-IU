<template>
  <div id="comments">
    <p id='title'>Comments</p>
    <div id='input' class="input">
      <textarea type="text" placeholder="Type a comment..." ref='commentInput'></textarea>
      <br>
      <button class="cancel" v-on:click="cancel()">Cancelar</button>
      <button class="publish" v-on:click="add()">Publicar</button>

    </div>

    <div v-bind:key='comment.key' v-for='comment in episode.comments' id="comment">
      <p id='text'>{{ comment }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comments',
  props: ['episode'],
  methods: {
    add(){
      this.episode.comments.unshift(this.$refs.commentInput.value);
      this.$refs.commentInput.value='';
    },
    cancel(){
      this.$refs.commentInput.value='';
    }
  }
}
</script>

<style scoped>
  div{
    cursor: default;
    text-align: left;
  }
  /*input{
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
    padding: 1% 1% 1% 1%;
    width: 77%;
  }*/
  .publish{
    font-weight: bold;
    width:10%;
    height: 50px;
    background-color: #39A7DA;
    color: white;
    display: right;
    margin-left: 1%;
    border-radius: 3px;
    overflow: hidden;
    outline: none;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border: none;
  }
  .publish:hover {
    background-color: #9884b8;
  }

  .cancel{
    font-weight: bold;
    width:10%;
    height: 50px;
    background-color: white;
    color: #666666;
    display: right;
    margin-left: 77%;
    border: #FFFFFF;
  }
  .cancel:hover {
    border-radius: 3px;
    background-color: #f2f2f3;
  }
  textarea{
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
    padding: 1% 1% 1% 1%;
    width: 97%;
  }
  #title{
    color: rgb(0, 0, 0, 0.7);
    text-align: left;
    /* margin-left: 0.1%; */
    /* padding-left: 1%; */
    font-size: 1.2em;
    border-bottom: 1px solid black;
    width: 100%;
    color: black;
  }
  #comments{
    width: 100%;
    margin-top: 3%;
    padding: 1% 1% 1% 1%;
    margin-bottom: 3%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  #comment{
    margin: 2% 2% 1% 1%; /* UP - RIGHT - DOWN - LEFT */
    padding: 0.2% 1% 0.2% 1%;
    border-radius: 5px;
    width: 98%;
    background-color: #8ac3de;
  }
  #comment:hover {
    background-color: #9884b8;
  }
</style>
