<template>
    <div id="desc">
        <h2>{{ episode.name }}</h2>
        <p>{{ episode.description }}</p>
        <div v-bind:key='hashtag.id' v-for='hashtag in episode.hashtags' id="hashtags">
            <p id='hashtag'>{{ hashtag.hashtag }}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AudioDesc',
  props: ['episode']
}
</script>

<style scoped>
    div{
        cursor: default;
    }
    h2{
        font-weight: bold;
        font-size: 2em; 
        color: rgb(0, 0, 0, 0.7);
    }
    #title{
        text-align: left;
        margin-left: 1%;
        font-size: 1.2em;
        border-bottom: 1px solid black;
        width: 100%;
        color: black;
    }
    #desc{
        padding: 1% 1% 1% 1%;
        margin-bottom: 3%;
        clear: both;
        text-align: left;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow: auto;
    }
    #hashtags{
        clear: both;
        display: inline;
        text-align: center;
    }
    #hashtag{
        padding: 0% 1% 0% 1%;
        float: left;
        background-color: #9884b8;
        border-radius: 10px;
        color: white;
        margin-right: 1%;
        position: relative;
    }
</style>
