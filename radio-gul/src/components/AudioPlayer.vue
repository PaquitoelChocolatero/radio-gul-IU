<template>
    <div id='row'>
        <div id='space'>
            <img v-bind:src="require('@/assets/devrandom.jpg')" id="logo">
        </div>
        <div id="container">
        </div>
        <div id='space'>
            <img v-bind:src="image" @click="play()" id="play" />
        </div>
    </div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";

export default {
    name: 'player',
    data: () => ({
        wavesurfer: null,
        image: require("@/assets/play.png"),
        play: require("@/assets/play.png"),
        pause: require("@/assets/pause.png")
    }),
    async mounted() {
            if (!this.wavesurfer) this.createWaveSurfer();
    },
    methods: {
        createWaveSurfer() {
            this.wavesurfer = WaveSurfer.create({
                container: "#container",
                waveColor: '#39A7DA',
                progressColor: '#5c6bc0',
                barWidth: 3,
                barRadius: 3,
                cursorWidth: 1,
                height: 200,
                barGap: 1,
                hideScrollbar: true
            });
            this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
        },
        play() {
            alert();

            this.wavesurfer.playPause();

            if(this.image==="@/assets/play.png") this.image=this.pause;
            else this.image = this.play;
        }
    },
    computed: {
        isPlaying() {
            if (!this.wavesurfer) return false;

            return this.wavesurfer.isPlaying();
        }
    }
}
</script>

<style scoped>
    #play{
        width: 30%;
        align-item: center;
        margin-top: 25%;
    }
    #row{
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
        background-color: white;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: grid;
        display: inline-grid;
        grid-template-columns: 15% 70% 15%;
    }
    #logo{
        width: 60%;
        margin-top: 10%;
        margin-left: 3%;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #space{
        width: 100%;
        height: 100%;
    }
</style>