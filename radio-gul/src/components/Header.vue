<template>
    <div class="header" :style="{ backgroundImage: `url(${bg})` }">
        
    </div>
</template>

<script>
import bg from '../assets/back.jpg'
export default {
    name: 'Header',
    data() {
        return {
            bg
        }
  }
}
</script>

<style scoped>
    .header{
        height: 400px;

    }
</style>