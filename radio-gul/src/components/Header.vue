<template>
    <header>
        <img src="../assets/radio.jpg" style="position: relative; width: 100%; height: 150px; border-radius: 7px;"/>
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
        left: 50px;
        top: 80px;
    }
</style>