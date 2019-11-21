<template>
  <div id="app">
    <Header />
    <twitter id='twitter'>
      <div slot="loading">loading ...</div>
      <a class="twitter-timeline" data-chrome="nofooter noheader noscrollbar" data-tweet-limit="4" href="https://twitter.com/radiogul?ref_src=twsrc%5Etfw">Tweets by Radio GUL</a>
    </twitter>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Vue from 'vue'
import twitter from 'vue-twitter'

Vue.use(twitter)

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  html{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  /* If on mobile */
  @media (max-width: 768px) {
    #twitter{
      margin-top: 1%;
      margin-right: 1%;
      float: right;
      width: 33%;
    }
  }
  /* If on desktop */
  @media (min-width: 768px) {
    #twitter{
      margin-top: 1%;
      margin-right: 1%;
      float: right;
      width: 20%;
    }
  }
</style>
