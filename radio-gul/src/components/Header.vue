<template>
    <div class="header" :style="{ backgroundImage: `url(${bg})` }">
        <div class="centered">
          <img src="../assets/logo.jpg" width="120px">
          <div class="typewriter">
            <h3>Nos gusta jugar con la tecnología</h3>
          </div>
        </div>
    </div>
</template>

<script>
import bg from '../assets/bg.jpg'
export default {
    name: 'Header',
    data() {
        return {
            bg
        }
  }
}
</script>

<style scoped>
    .header{
        background-position: left bottom;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        margin : 0;
        height: 380px;
    }

    .centered{
      margin-left: 30%;
      width: 37%;
    }
    .centered img {
      margin-top:12%;
      margin-bottom: 3%;
    }
    .typewriter h3 {
      color: black;
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
</style>