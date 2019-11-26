<template>
    <div id='list'>
        <p id='title'>Resuls for '{{ this.$route.params.q }}'</p>
        <div id='results'>
            <SearchResult v-bind:key='program.id' v-for='program in matches' v-bind:program="program" id='result'/>
        </div>
    </div>
</template>

<script>
import json from "@/data.json";
import SearchResult from "./SearchResult.vue";

export default {
    name: 'SearchResultList',
    components: {
        SearchResult
    },
    data(){
        return{
            programs: json
        }
    },
    computed: {
        matches: function() {
            return this.programs.filter(function(p) {
                return p.name.includes(this.$route.params.q)
            })
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