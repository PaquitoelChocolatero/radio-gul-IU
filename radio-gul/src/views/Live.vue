<template>
  <div id="live">
    <Header />
    <div>
      <AudioPlayer v-bind:episode='episode'/>
    </div>
    <div id='info'>
      <DescComment id='desc-comment' v-bind:episode='episode'/>
    </div>
    <twitter id='twitter'>
      <div slot="loading">loading ...</div>
      <a class="twitter-timeline" data-chrome="nofooter noheader" data-tweet-limit='20' href="https://twitter.com/radiogul?ref_src=twsrc%5Etfw">Tweets by Radio GUL</a>
    </twitter>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
import Header from '../components/HeaderSmall.vue'
import DescComment from '../components/DescComment.vue'
import Vue from 'vue'
import twitter from 'vue-twitter'

Vue.use(twitter)

export default {
  name: 'live',
  components: {
    Footer,
    AudioPlayer,
    Header,
    DescComment,
    twitter
  },
  data(){
    return{
      episode: JSON.parse(localStorage.getItem('episode'))
    }
  }
}
</script>

<style>
  div{
    cursor: default;
    height: 100%;
  }
  #live {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f2f2f3;
  }
  #player {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f2f2f3;
  }
  #info{
    display: flex;
    text-align: center;
    width: 100%;
  }
  #desc-comment{
    float: left;
    width: 70%;
    margin-left: 1%;
  }
  #twitter{
    height: 1000px;
    overflow: auto;
  }
  /* If on mobile */
  @media (max-width: 768px) {
    #twitter{
      margin-top: 1%;
      margin-right: 1%;
      float: right;
      width: 33%;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
  /* If on desktop */
  @media (min-width: 768px) {
    #twitter{
      margin-top: 1%;
      margin-right: 1%;
      float: right;
      width: 20%;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
</style>
