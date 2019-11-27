<template>
  <div temporadas>
      <h1>Temporadas</h1>

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

</style>
