<template>
    <div>
        <h1>{{ this.$route.params.season }}x{{ this.$route.params.episode }}: {{ this.$route.params.name }}</h1>
    </div>
</template>

<script>
export default {
    name: 'player'
}
</script>

<style scoped>

</style>