<template>
    <div id='list'>
        <p id='title'>Programas</p>
        <div v-bind:key='program.id' v-for='program in programs'>
            <Program v-bind:program='program' />
        </div>
    </div>
</template>

<script>
import Program from "./Program.vue";

export default {
    name: 'ProgramList',
    components: {
        Program
    },
    data(){
        return{
            programs: [
                {
                    id: 1,
                    name: '/dev/random',
                    img: '../assets/devrandom.jpg'
                },
                {
                    id: 2,
                    name: 'MeetUC3M',
                    img: '../assets/meetuc3m.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped>
    #list{
        float: left;
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