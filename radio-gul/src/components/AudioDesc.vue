<template>
    <div id="desc">
        <h2>Titulo</h2>
        <p>
            What is this, 90's Conan? You know my name, that's disarming. What are you looking at, mother fucker! I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me.
            
            I can finally go on that trip I've been talking about. I don't get it, and I don't need to. Prepare to be emancipated from your own inferior genes! I know the two of you are very different from each other in a lot of ways, but you have to understand that as far as Grandpa's concerned, you're both pieces of shit! Yeah. I can prove it mathematically. Actually, l-l-let me grab my whiteboard. This has been a long time coming, anyways.
        </p>
        <div id="hashtags">
            <p id='hashtag'>test1</p>
            <p id='hashtag'>test2</p>
            <p id='hashtag'>test3</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AudioDesc'
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
