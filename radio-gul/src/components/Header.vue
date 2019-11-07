<template>
    <header>
        <img src="../assets/radio.jpg" style="position: relative; width: 100%; height: 150px; border-radius: 7px;"/>
        <div class='buttons'>

            <div id="wrap">
                <form action="" autocomplete="on">
                    <input id="search" name="search" type="text" placeholder="Programas"><input id="search_submit" value="Rechercher" type="submit">
                </form>
            </div>

            <button id='direct'>Directo</button>
        </div>
        <div class="logo">
            <img src="../assets/radiogul.jpg" style="width: 100px; height: 100px; border: solid 2px blue;"/>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header {
        margin-top: 1%;
        margin-left: 1%;
        width: 98%;
    }

    .logo {
        position: absolute;
        z-index: 100;
        left: 5%;
        top: 100px;
    }

    .buttons{
        position: absolute;
        top: 140px;
        right: 1%;
    }

    #wrap {
        display: inline-block;
        position: relative;
        height: 60px;
        padding: 0;
        position: relative;
    }

    input[type="text"] {
        height: 30px;
        font-size: 30px;
        display: inline-block;
        font-family: "Lato";
        font-weight: 100;
        border: none;
        outline: none;
        color: black;
        /* padding: 3px; */
        padding-right: 60px;
        width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        z-index: 3;
        transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
        cursor: pointer;
    }

    input[type="text"]:focus:hover {
        border-bottom: 1px solid rgb(51, 196, 233);
    }

    input[type="text"]:focus {
        width: 300px;
        z-index: 1;
        border-bottom: 2px solid black;
        cursor: text;
    }

    input[type="submit"] {
        height: 67px;
        width: 63px;
        display: inline-block;
        color:red;
        background: url("../assets/search.png") center center no-repeat;
        text-indent: -10000px;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        opacity: 0.4;
        cursor: pointer;
        transition: opacity .4s ease;
    }

    input[type="submit"]:hover {
        opacity: 0.8;
    }

</style>