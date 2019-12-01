<template>
  <div id="player">
    <Header />
    <div>
      <AudioPlayer />
    </div>
    <div id='bottom'>
      <Description id='desc'/>
      <Previous />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
import Header from '../components/HeaderSmall.vue'
import Description from '../components/AudioDesc.vue'
import Previous from '../components/PreviousEpisodes.vue'

export default {
  name: 'player',
  components: {
    Footer,
    AudioPlayer,
    Header,
    Description,
    Previous
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
  #bottom{
    display: flex;
    text-align: center;
    width: 100%;
  }
  #desc{
    float: left;
  }
</style>