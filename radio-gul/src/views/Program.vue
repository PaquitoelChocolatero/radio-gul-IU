<template>
  <div id="program">
    <Header />
    <div id='central'>
      <Desc />
      <Episodes />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Desc from '../components/ProgramDesc.vue'
import Episodes from '../components/Episodes.vue'

export default {
  name: 'program',
  components: {
    Header,
    Footer,
    Desc,
    Episodes
  }
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
  }
  #central{
    display:inline;
    text-align:center;
  }
</style>
