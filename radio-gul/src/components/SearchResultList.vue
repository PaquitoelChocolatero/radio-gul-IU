<template>
    <div id='list'>
        <p id='title'>Resuls for '{{ this.$route.params.q }}'</p>
        <div id='results'>
            <SearchResult v-bind:key='program.id' v-for='program in programs' v-bind:program="program" id='result'/>
        </div>
    </div>
</template>

<script>
import SearchResult from "./SearchResult.vue";

export default {
    name: 'SearchResultList',
    components: {
        SearchResult
    },
    data(){
        return{
            programs: [
                {
                    id: 1,
                    name: '/dev/random',
                    img: require('../assets/devrandom.jpg')
                },
                {
                    id: 2,
                    name: 'MeetUC3M',
                    img: require('../assets/meetuc3m.jpg')
                },
                {
                    id: 3,
                    name: 'test1',
                    img: require('../assets/meetuc3m.jpg')
                },
                {
                    id: 4,
                    name: 'test2',
                    img: require('../assets/meetuc3m.jpg')
                },
                {
                    id: 5,
                    name: 'test3',
                    img: require('../assets/meetuc3m.jpg')
                },
                {
                    id: 6,
                    name: 'test4',
                    img: require('../assets/meetuc3m.jpg')
                },
                {
                    id: 7,
                    name: 'test5',
                    img: require('../assets/meetuc3m.jpg')
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
    #results{
        width: 100%;
        height: 100%;
    }
    #result{
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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