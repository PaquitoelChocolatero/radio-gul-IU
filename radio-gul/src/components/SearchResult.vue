<template>
    <!-- <div> -->
        <!-- <img class="program-img" v-bind:src='program.img'>
        <p class="title">{{ program.name }}</p>
        <p class="description">{{ program.description }} </p>
        <div class="card-footer">
            <img class="share-button" src="assets/sharebutton.png">
        </div>
    </div> -->
     <div class="card clearfix">
                    <div class="card-header clearfix">
                        
                        <img src="img/Civ.jpeg" width="150" />
                        <!-- <a class="button" href="#popup1"><h3>Civilization VI</h3></a> -->
                    </div>
                    <div class="card-footer">
                            <p>4:20 31/7</p>
                            <div class="social-button">
                                    <a title="Click para compartir a través de distintas redes sociales">
                                        <img alt="botón para compartir" height="30px" src="assets/share.png"/>
                                        </a>
                                </div>
                            <div class="social-button">
                                    <a title="Click para dejar un comentario de esta tarjeta">
                                        <img alt="botón para comentar" height="30px" src="assets/comment.png"/>
                                        </a>
                                    </div>
                            <div class="social-button">
                                <a title="Clica para indicar que te gusta yokse bro">
                                    <img alt="botón de me gusta" height="30px" src="assets/like.png"/>
                                    </a>
                                </div>
                        </div>
                </div>
</template>

<script>
export default {
    name: 'SearchResult',
    props: ['program']
}
</script>

<style scoped>
    div{
        background-color: white;
        height: 16%;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .program-img{
        height: 90%;
        padding-top: 1%;
        display: left;
        padding-left: 1%;
    }
    .card {
    text-align: left;
    text-indent: 5px;
    color: #FFF;
    border : 2px solid rgb(49, 54, 64);
    border-radius: 12px;
    margin: 1%;
    padding: 0.7%;
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
        /*background: url(img/cerrar.png)*/
    }

    .card-footer{
        display: block;
    }

    /*like button in cards*/
    .social-button{
        float: right;
        height:"30px";
        width:"30px";
    }

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;background: rgb(0, 0, 0, 0.7);
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