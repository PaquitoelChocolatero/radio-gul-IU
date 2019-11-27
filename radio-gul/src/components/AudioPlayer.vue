<template>
  <div id="container"></div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";

export default {
    name: 'player',
    data: () => ({
        wavesurfer: null,
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
                barGap: 3            });
            this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
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
    #container{
        width: 70%;
        margin-left: 15%;
        margin-top: 5%;
        margin-bottom: 5%;
        background-color: white;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>