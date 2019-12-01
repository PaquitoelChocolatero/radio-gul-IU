<template>
  <div id="program">
    <Header v-bind:program='program' />
    <div id='central'>      
      <Description v-bind:program='program' />
      <Episodes v-bind:program='program' />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Description from '../components/ProgramDesc.vue'
import Episodes from '../components/Episodes.vue'

export default {
  name: 'program',
  components: {
    Header,
    Footer,
    Description,
    Episodes
  },
  props: ['program']
}
</script>

<style>
  html{
    height: 100%;
  }
  #program {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f2f2f3;
    height: 100%;
  }
  #central{
    display:inline;
    text-align:center;
  }
</style>
