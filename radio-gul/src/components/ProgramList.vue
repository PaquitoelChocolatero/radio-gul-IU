<template>
    <div id='list'>
        <p id='title'>Programas</p>
    </div>
</template>

<script>
export default {
    name: 'ProgramList'
}
</script>

<style scoped>
    #list{
        float: left;
        /* background-color: green; */
        width: 76%;
        height: 100%;
        margin-top: 50px;
        margin-left: 1%;
    }
    #title{
        text-align: left;
        margin-left: 1%;
        font-size: 1.2em;
        border-bottom: 1px solid black;
        width: 100%;
        color: black;
    }
</style>