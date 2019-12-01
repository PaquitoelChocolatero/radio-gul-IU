<template>
  <div id="player">
    <Header />
    <AudioPlayer />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
import Header from '../components/HeaderSmall.vue'

export default {
  name: 'player',
  components: {
    Footer,
    AudioPlayer,
    Header
  }
}
</script>

<style>
  html{
    cursor: default;
    height: 100%;
  }
  #player {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f2f2f3;
  }
</style>