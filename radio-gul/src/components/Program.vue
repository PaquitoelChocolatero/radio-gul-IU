<template>
    <div>
        <img v-bind:src='program.img'>
        <p>{{ program.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'Program',
    props: ['program']
}
</script>

<style scoped>
    div{
        background-color: #eeeeee;
        height: 16%;
        width: 15%;
        margin-left: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    div img{
        width: 90%;
        padding-top: 5%;
    }
</style>