<template>
    <div id='row'>
        <div id='space'>
            <img v-bind:src="require('@/assets/devrandom.jpg')" id="logo">
        </div>
        <div id="container">
        </div>
        <div id='space'>
            <img v-bind:src="image" @click="trigger()" id="play" />
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
                barGap: 1,
                hideScrollbar: true,
                fillParent: false,
                minPxPerSec: 6.7
           });

            // this.wavesurfer.on('finish', function () {
            //     this.image=this.play;
            // });
            this.wavesurfer.load(require(`@/audio/${this.episode.file}`));
        },
        trigger() {
            if(!this.wavesurfer.isPlaying()) {
              this.image = this.pause;
              this.wavesurfer.playPause();
            } else {
              this.image = this.play;
              this.wavesurfer.playPause();
            }
        }
    },
    // computed: {
    //     isPlaying() {
    //         if (!this.wavesurfer) return false;
    //         return this.wavesurfer.isPlaying();
    //     }
    // },
    props: ['episode']
}
</script>

<style scoped>
    #play{
        width: 40%;
        align-item: center;
        vertical-align: center;
    }
    #row{
        padding-top: 1%;
        padding-bottom: 0.5%;
        width: 90%;
        float: left;
        margin: 3% 5% 4% 5%;
        background-color: white;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: grid;
        display: inline-grid;
        grid-template-columns: 10% 80% 10%;
    }
    #container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #logo{
        width: 70%;
        float: left;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #space{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
