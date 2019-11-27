<template>
  <div v-on:click='jump()'>
      <h1>Test</h1>
  </div>
</template>

<script>
export default {
  name: 'episodes',
  methods: {
    jump(){
      this.$router.push({
        name: 'player',
        params: {
          q: this.$route.params.q,
          season: "2019",
          episode: "1",
          name: "test01"
        }
      })
    }
  }
}
</script>

<style scoped>

</style>