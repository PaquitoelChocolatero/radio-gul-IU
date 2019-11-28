<template>
  <div class = "temporadas">
      <p id = "title">Temporadas</p>
      <div v-bind:key='season.id' v-for='season in program.seasons' class="accordion">
        <badger-accordion>
          <badger-accordion-item>
            <template slot="header">{{ season.name }}</template>
            <template v-for='episode in season.episodes' slot="content">
              <div v-bind:key='episode.id' v-on:click='jump()'>
                  <p>{{ episode.name }}</p>
              </div>
            </template>
          </badger-accordion-item>

        </badger-accordion>
      </div>
  </div>
</template>

<script>
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

export default {
  components: {
        BadgerAccordion,
        BadgerAccordionItem
  },
  name: 'episodes',
  methods: {
    jump(){
      this.$router.push({
        name: 'player',
        params: {
          q: this.$route.params.q,
          season: "2019",
          episode: "1",
          name: "test01"
        }
      })
    }
  },
  props: ['program']
}
</script>

<style scoped>

.temporadas {
  padding-top: 1%;
}

#title {
  text-align: left;
  margin-left: 51%;
  font-size: 1.2em;
  border-bottom: 1px solid black;
  width: 47%;
  color: black;
}

.accordion {
  background-color: white;
  width: 47%;
  margin-left: 51%;
  margin-bottom: 5%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.badger-accordion__panel {
  color: white;
  max-height: 75vh;
  overflow: hidden;
}

.badger-accordion__panel.-ba-is-hidden {
  max-height:0 !important;
  visibility:hidden
}

.badger-accordion--initalised .badger-accordion__panel {
  transition:max-height ease-in-out .2s
}

</style>
