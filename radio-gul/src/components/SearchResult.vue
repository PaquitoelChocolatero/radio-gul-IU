<template>
    <div v-on:click="jump()">
        <div class="card clearfix">
            <div class="card-header clearfix">
                <img class="program-img" v-bind:src="require(`@/assets/${program.img}`)">
                
                <p class="title">{{ program.name }}</p>
                <br><br><br>
                
                <div class= "des">
                <p class="description">{{ program.description }} </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SearchResult',
    props: ['program'],
    methods: {
        jump(){
            this.$router.push({
                name: 'program',
                params: {
                    q: this.removeSpecialChars(this.program.name),
                    program: this.program
                }
            })
        },
        removeSpecialChars(str) {
            return str.replace(/(?!\w|\s)./g, '')
                .replace(/\s+/g, ' ')
                .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
        }
    }
}
</script>

<style scoped>
    div{
        background-color: white;
        cursor: pointer;
    }
    .title{
        font-weight: bold;
        font-size: 2em; 
        display: left;
        float: left;
        color:rgb(0, 0, 0, 0.7);
    }
    .des{
       
        text-align: justify;
    }
    .description{
        display: inline;
        position: relative;
        text-align: justify;
        text-align: left;
        color:rgb(0, 0, 0, 0.7);
    }
    .program-img{
        height: 150px;
        padding-top: 1%;
        display: left;
        float: left;
        padding-left: 1%;
        padding-right: 2%;
    }
    .card {
        text-indent: 5px;
        color: #FFF;
    }
    .clearfix {
        overflow: auto;
    }
    .card-header img {
        display: left;
    }
    .card-header h3 {
        vertical-align: top;
        margin-top: 0;
        display: inline-block;
        margin-left: 2%;
    }
    .close-button {
        float: right;
        height: 30px;
    }
    .card-footer{
        display: block;
    }
    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
    }
    .overlay:target {
        visibility: visible;
        opacity: 1;
    }
    .card-footer p{
        float: left;
    }
</style>