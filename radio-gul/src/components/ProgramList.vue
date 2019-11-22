<template>
    <div id='list'>
        <p id='title'>Programas</p>
        <div id='grid'>
            <Program v-bind:key='program.id' v-for='program in programs' v-bind:program='program' />
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
                },
                {
                    id: 3,
                    name: 'test1',
                    img: '../assets/meetuc3m.jpg'
                },
                {
                    id: 4,
                    name: 'test2',
                    img: '../assets/meetuc3m.jpg'
                },
                {
                    id: 5,
                    name: 'test3',
                    img: '../assets/meetuc3m.jpg'
                },
                {
                    id: 6,
                    name: 'test4',
                    img: '../assets/meetuc3m.jpg'
                },
                {
                    id: 7,
                    name: 'test5',
                    img: '../assets/meetuc3m.jpg'
                },
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
    #grid{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: auto auto auto;
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