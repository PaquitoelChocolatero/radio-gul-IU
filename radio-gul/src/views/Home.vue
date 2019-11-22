<template>
  <div id="home">
    <Header />
    <div id='central'>
      <ProgramList />
      <twitter id='twitter'>
        <div slot="loading">loading ...</div>
        <a class="twitter-timeline" data-chrome="nofooter noheader" data-tweet-limit='2' href="https://twitter.com/radiogul?ref_src=twsrc%5Etfw">Tweets by Radio GUL</a>
      </twitter>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProgramList from '../components/ProgramList.vue'
import Vue from 'vue'
import twitter from 'vue-twitter'

Vue.use(twitter)

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    ProgramList
  }
}
</script>

<style>
  html{
    height: 100%;
  }
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #central{
    display:inline;
    text-align:center;
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
