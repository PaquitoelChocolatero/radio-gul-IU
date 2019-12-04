<template>
  <div id="player">
    <Header />
    <div>
      <AudioPlayer v-bind:episode='episode'/>
    </div>
    <div id='info'>
      <DescComment id='desc-comment' v-bind:episode='episode'/>
      <Previous />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
import Header from '../components/HeaderSmall.vue'
import DescComment from '../components/DescComment.vue'
import Previous from '../components/PreviousEpisodes.vue'

export default {
  name: 'player',
  components: {
    Footer,
    AudioPlayer,
    Header,
    DescComment,
    Previous
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
</style>