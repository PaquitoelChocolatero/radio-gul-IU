<template>
    <footer>
        <div class='logos'>
            <div id='left'>
                <a href="https://gul.es" target="_blank">
                    <img src="../assets/logo-gray.jpg" alt="Grupo de Usuarios de Linux" width="50" height="50">
                    <a title="Grupo de Usuarios de Linux">GUL</a>
                </a>
            </div>
            <div id='center'>
                <a id='rrss' href="mailto:info@gul.uc3m.es" target="_blank"><img alt='Email' class='icon' src='../assets/mail.png'></a>
                <a id='rrss' href="https://twitter.com/guluc3m" target="_blank"><img alt='Twitter' class='icon' src='../assets/twitter.png'></a>
                <a id='rrss' href="https://www.youtube.com/user/guluc3m" target="_blank"><img alt='YouTube' class='icon' src='../assets/youtube.svg'></a>
                <a id='rrss' href="https://github.com/guluc3m" target="_blank">
                    <img alt="GitHub" class='icon' src='../assets/github.png'>
                    <a title="Fork us">Fork us on GitHub</a>
                </a>
            </div>
            <div id='right'>
                <img src="../assets/admin.png" alt="admin" width="40" height="40" v-on:click="jump()">
            </div>
        </div>
        <div id='text'>
            <p>El Grupo de Usuarios de Linux de la Universidad Carlos III de Madrid es una asociación declarada de beneficio social por el Ministerio de Hacienda.</p>
            <p>Domicilio social: despacho 2.3C05 del edificio Sabatini, Avenida de la Universidad, 30 28911 Leganés Madrid, España.</p>
            <p>C.I.F.: G83296988</p>
            <p>Número de registro de la comunidad de Madrid: 23500</p>
            <p>Número de registro del ayuntamiento de Leganés: 795</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        jump(){
            this.$router.push({
                name: 'login'
            })
        }
    }
}
</script>

<style scoped>
    p { 
        text-align: center; 
        color: white;
        font-size: 0.75em;
        margin-bottom: 0;
        margin-top: 10px;
    }
    a{
        color: white;
    }
    a:hover{
        text-decoration: none;
    }
    footer {
        clear: both;
        bottom: 0;
        width: 100%;
        margin-bottom: 0%;
        background-color: #424242;
    }
    .icon{
        width: 30px;
    }
    .logos{
        color: white;
        display:inline;
        text-align:center;
        height: 45px;
    }
    #left{
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        cursor: pointer;
        outline: none;
    }
    #center{
        padding-top: 20px;
        padding-left: 28%;
        padding-right: 28%;
        cursor: pointer;
        width: 100%;
    }
    #rrss{
        margin-left: 25px;
        outline: none;
    }
    #right{
        float: right;
        margin-top: -40px;
        margin-right: 10px;
        cursor: pointer;
        outline: none;
    }
    #text{
        padding-top: 40px;
    }
</style>