<template>
  <div id="admin">
    <Header />
    <div id='central'>
      <Desc v-bind:program='program' />
      <Episodes v-bind:program='program' />
    </div>
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'admin'
}
</script>

<style scoped>
  html{
    cursor: default;
  }
</style>
