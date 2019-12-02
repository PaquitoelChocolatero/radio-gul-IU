<template>
  <div id="col">
    <AudioDesc />
    <Comments />
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
  }
}
</script>

<style scoped>

</style>
