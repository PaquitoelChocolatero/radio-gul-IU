<template>
    <div>
        <img v-bind:src='program.img'>
        <p>{{ program.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'SearchResult',
    props: ['program']
}
</script>

<style scoped>
    div{
        background-color: white;
        height: 16%;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    div img{
        hieght: 90%;
        padding-top: 1%;
        display: left;
        padding-left: 1%;
    }
</style>