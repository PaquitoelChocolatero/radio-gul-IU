<template>
  <div id="col">
    <AudioDesc v-bind:episode='episode'/>
    <Comments v-bind:episode='episode'/>
  </div>
</template>

<script>
import AudioDesc from "./AudioDesc.vue"
import Comments from "./Comments.vue"

export default {
  name: 'DescComment',
  components: {
    AudioDesc,
    Comments
  },
  props: ['episode']
}
</script>

<style scoped>

</style>
