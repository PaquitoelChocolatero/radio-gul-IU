<template>
    <div v-on:click="jump()">
        <img v-bind:src="require(`@/assets/${program.img}`)">
        <p><strong>{{ program.name }}</strong></p>
    </div>
</template>

<script>
export default {
    name: 'Program',
    props: ['program'],
    methods: {
        jump(){
            this.$router.push({
                name: 'program',
                params: {
                    q: this.removeSpecialChars(this.program.name)
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
        margin-left: 5%;
        margin-bottom: 5%;
        cursor: pointer;
    }
    div img{
        width: 90%;
        padding-top: 5%;
    }
    div p{
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: 110%;
        color: black;
    }
</style>