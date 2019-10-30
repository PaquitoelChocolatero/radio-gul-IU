<template>
  <div id="app">
    <Header></Header>
    <twitter id='twitter'>
      <div slot="loading">loading .....</div>
      <a class="twitter-timeline" href="https://twitter.com/radiogul?ref_src=twsrc%5Etfw">Tweets by Radio GUL</a>
    </twitter>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Vue from 'vue'
import twitter from 'vue-twitter'

Vue.use(twitter)

export default {
  name: 'app',
  components: {
    //HelloWorld
    Header
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  /* If on mobile */
  @media (max-width: 768px) {
    #twitter{
      float: right;
      width: 55%; /*aiuda*/
      height: 100%;
    }
  }
  /* If on desktop */
  @media (min-width: 768px) {
    #twitter{
      float: right;
      width: 20%;
      height: 100%;
    }
  }
</style>
