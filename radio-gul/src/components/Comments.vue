<template>
  <div id="comments">
    <p id='title'>Comments</p>
    <div id='input'>
      <input type="text" placeholder="Type a comment..." v-on:keyup.enter="add()" ref='commentInput'>
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
    }
  }
}
</script>

<style scoped>
  div{
    cursor: default;
    text-align: left;
  }
  input{
    margin-top: 1%;
    margin-left: 1%;
    padding: 1% 1% 1% 1%;
  }
  #title{
    font-weight: bold;
    color: rgb(0, 0, 0, 0.7);
    text-align: left;
    margin-left: 0.1%;
    padding-left: 1%;
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
</style>
