<template>
  <div class = "temporadas">
      <p id = "title">Temporadas</p>
      <div class = "accordion">
        <badger-accordion>
          <badger-accordion-item>
            <template slot="header">Temporada 1</template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 1: Luke</p>
              </div>
            </template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 2: Leia</p>
              </div>
            </template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 3: Anakin</p>
              </div>
            </template>
          </badger-accordion-item>

          <badger-accordion-item>
            <template slot="header">Temporada 2</template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 1: Luke</p>
              </div>
            </template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 2: Leia</p>
              </div>
            </template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 3: Anakin</p>
              </div>
            </template>
          </badger-accordion-item>

          <badger-accordion-item>
            <template slot="header">Temporada 3</template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 1: Luke</p>
              </div>
            </template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 2: Leia</p>
              </div>
            </template>
            <template slot="content">
              <div v-on:click='jump()'>
                  <p>Episodio 3: Anakin</p>
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
  }
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
