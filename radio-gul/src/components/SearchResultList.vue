<template>
    <div id='list'>
        <p id='title'>Resultados de '{{ this.$route.params.q }}'</p>
        <div id='results'>
            <SearchResult v-bind:key='program.id' v-for='program in matches' v-bind:program="program" id='result'/>
        </div>
    </div>
</template>

<script>
import json from "@/jsons/data.json";
import SearchResult from "./SearchResult.vue";

export default {
    name: 'SearchResultList',
    components: {
        SearchResult
    },
    props: ['search'],
    data(){
        return{
            programs: json
        }
    },
    computed: {
        matches() {
            let matches = this.programs.filter((program) => {
                return program.name.toLowerCase().includes(this.$route.params.q.toLowerCase());
            })
            return matches;
        }
    }
}
</script>

<style scoped>
    #list{
        float: left;
        width: 76%;
        /* height: 100%; */
        margin-top: 50px;
        margin-left: 1%;
    }
    #results{
        width: 100%;
        /* height: 100%; */
    }
    #result{
        margin-bottom: 2%;
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
