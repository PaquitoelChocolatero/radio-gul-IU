<template>
    <footer>
        <div id='logos'>
            <div id='left'>
                <img src="../assets/logo_light-gray.jpg" alt="Grupo de Usuarios de Linux" width="50" height="50">
                <a class="name" title="Grupo de Usuarios de Linux">GUL</a>
            </div>
            <div id='center'>
                <!-- <a href="mailto:info@gul.uc3m.es" target="_blank"><img alt='Email' class='icon' src='../assets/mail.png'></a> -->
                <a href="https://twitter.com/guluc3m" target="_blank"><img alt='Twitter' class='icon' src='../assets/twitter.svg'></a>
                <!-- <a href="https://www.youtube.com/user/guluc3m" target="_blank"><img alt='YouTube' class='icon' src='../assets/youtube.png'></a> -->
                <a href="https://github.com/guluc3m" target="_blank"><img alt="GitHub" class='icon' src='../assets/github.svg'></a>
            </div>
            <div id='right'>
                <img src="../assets/admin.png" alt="admin" width="40" height="40">
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
    name: 'Footer'
}
</script>

<style scoped>
    p { 
        text-align: center; 
        color: white;
        font-size: 0.75em;
    }
    footer {
        clear: both;
        bottom: 0;
        width: 100%;
        background-color: #424242;
    }
    #logos{
        top: 0;
        color: white;
    }
    #left{
        margin-left: 1%;
        margin-top: 1%;
        cursor: pointer;
        width: 10%;
    }
    #center{
        margin-top: 1%;
        cursor: pointer;
        width: 10%;
    }
    #right{
        margin-top: 1%;
        cursor: pointer;
        width: 10%;
    }
    #text{
        margin-top: 4%;
    }
</style>